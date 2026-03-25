document.addEventListener('DOMContentLoaded', function() {
    var themeToggleBtn = document.getElementById('theme-toggle');
    var body = document.body;
    var icon = themeToggleBtn.querySelector('i');

    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggleBtn.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'light') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    var canvas = document.getElementById('star-canvas');
    var ctx = canvas.getContext('2d');
    var stars = [];
    var starCount = 150;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        for (var i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.3,
                alpha: Math.random() * 0.6 + 0.2,
                alphaDir: (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 0.005 + 0.002),
                drift: (Math.random() - 0.5) * 0.08
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < stars.length; i++) {
            var s = stars[i];
            s.alpha += s.alphaDir;
            if (s.alpha >= 0.9 || s.alpha <= 0.1) s.alphaDir = -s.alphaDir;
            s.y += s.drift;
            if (s.y < -2) s.y = canvas.height + 2;
            if (s.y > canvas.height + 2) s.y = -2;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, ' + s.alpha + ')';
            ctx.fill();
        }
        requestAnimationFrame(drawStars);
    }

    resizeCanvas();
    createStars();
    drawStars();
    window.addEventListener('resize', function() {
        resizeCanvas();
        createStars();
    });

    var DISCORD_USER_ID = '1360653904051966124';

    var statusText = document.getElementById('listening-text');
    var spotifyIcon = document.querySelector('.spotify-icon');
    var statusDot = document.querySelector('.status-indicator');
    var gameStatusDiv = document.querySelector('.game-status');
    var gameText = document.getElementById('game-text');

    var spotifyPlayer = document.getElementById('spotify-player');
    var spAlbumArt = document.getElementById('sp-album-art');
    var spTrackName = document.getElementById('sp-track-name');
    var spArtistName = document.getElementById('sp-artist-name');
    var spTimeCurrent = document.getElementById('sp-time-current');
    var spTimeTotal = document.getElementById('sp-time-total');
    var spBarFill = document.getElementById('sp-bar-fill');
    var spPreviewBtn = document.getElementById('sp-preview-btn');
    var spLyricsContainer = document.getElementById('sp-lyrics-container');
    var spLyricsLines = document.getElementById('sp-lyrics-lines');

    var currentTrackId = null;
    var syncedLyrics = [];
    var lyricsCache = {};
    var lastActiveLine = -1;
    var trackStartTimestamp = null;
    var trackEndTimestamp = null;
    var progressInterval = null;
    var ws = null;
    var heartbeatInterval = null;

    window.addEventListener('load', function() {
        var loadingScreen = document.getElementById('loading-screen');
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
        }, 500);
    });

    function formatTime(ms) {
        var totalSeconds = Math.floor(ms / 1000);
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    function parseLRC(lrcString) {
        var lines = [];
        var rawLines = lrcString.split('\n');
        for (var i = 0; i < rawLines.length; i++) {
            var match = rawLines[i].match(/\[(\d+):(\d+\.\d+)\]\s*(.*)/);
            if (match) {
                var mins = parseInt(match[1], 10);
                var secs = parseFloat(match[2]);
                var timeMs = (mins * 60 + secs) * 1000;
                var text = match[3].trim();
                if (text.length > 0) {
                    lines.push({ time: timeMs, text: text });
                }
            }
        }
        return lines;
    }

    async function fetchLyrics(trackName, artistName, durationMs) {
        var cacheKey = trackName + '|' + artistName;
        if (lyricsCache[cacheKey]) return lyricsCache[cacheKey];

        var durationSeconds = Math.round(durationMs / 1000);
        var url = 'https://lrclib.net/api/get?track_name=' +
            encodeURIComponent(trackName) +
            '&artist_name=' + encodeURIComponent(artistName) +
            '&duration=' + durationSeconds;

        try {
            var response = await fetch(url);

            if (!response.ok) {
                var searchUrl = 'https://lrclib.net/api/search?track_name=' +
                    encodeURIComponent(trackName) +
                    '&artist_name=' + encodeURIComponent(artistName);

                var searchResponse = await fetch(searchUrl);
                if (!searchResponse.ok) return null;

                var searchResults = await searchResponse.json();
                if (!searchResults || searchResults.length === 0) return null;

                var bestMatch = null;
                for (var i = 0; i < searchResults.length; i++) {
                    if (searchResults[i].syncedLyrics) {
                        bestMatch = searchResults[i];
                        break;
                    }
                }
                if (!bestMatch) return null;

                var parsed = parseLRC(bestMatch.syncedLyrics);
                lyricsCache[cacheKey] = parsed;
                return parsed;
            }

            var data = await response.json();
            if (data.syncedLyrics) {
                var parsed2 = parseLRC(data.syncedLyrics);
                lyricsCache[cacheKey] = parsed2;
                return parsed2;
            }
            return null;
        } catch (err) {
            return null;
        }
    }

    function renderLyrics(lines) {
        spLyricsLines.innerHTML = '';
        lastActiveLine = -1;
        for (var i = 0; i < lines.length; i++) {
            var lineEl = document.createElement('div');
            lineEl.className = 'sp-lyrics-line';
            lineEl.textContent = lines[i].text;
            spLyricsLines.appendChild(lineEl);
        }
        spLyricsContainer.style.display = 'block';
    }

    function getActiveLineIndex(progressMs) {
        var active = -1;
        for (var i = 0; i < syncedLyrics.length; i++) {
            if (progressMs >= syncedLyrics[i].time) {
                active = i;
            } else {
                break;
            }
        }
        return active;
    }

    function updateActiveLine(index) {
        if (index === lastActiveLine) return;
        var allLines = spLyricsLines.querySelectorAll('.sp-lyrics-line');

        if (lastActiveLine >= 0 && lastActiveLine < allLines.length) {
            allLines[lastActiveLine].classList.remove('active');
        }

        if (index >= 0 && index < allLines.length) {
            allLines[index].classList.add('active');
            var lineEl = allLines[index];
            var containerHeight = spLyricsContainer.clientHeight;
            var lineTop = lineEl.offsetTop - spLyricsLines.offsetTop;
            var lineHeight = lineEl.offsetHeight;
            var targetScroll = lineTop - (containerHeight / 2) + (lineHeight / 2);
            spLyricsContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }

        lastActiveLine = index;
    }

    function getCurrentProgress() {
        if (!trackStartTimestamp || !trackEndTimestamp) return 0;
        var progress = Date.now() - trackStartTimestamp;
        var duration = trackEndTimestamp - trackStartTimestamp;
        if (progress < 0) progress = 0;
        if (progress > duration) progress = duration;
        return progress;
    }

    function getTrackDuration() {
        if (!trackStartTimestamp || !trackEndTimestamp) return 0;
        return trackEndTimestamp - trackStartTimestamp;
    }

    function startProgressLoop() {
        if (progressInterval) clearInterval(progressInterval);
        progressInterval = setInterval(function() {
            if (!trackStartTimestamp) return;
            var progress = getCurrentProgress();
            var duration = getTrackDuration();
            if (duration <= 0) return;

            spTimeCurrent.textContent = formatTime(progress);
            spBarFill.style.width = ((progress / duration) * 100) + '%';

            if (syncedLyrics.length > 0) {
                updateActiveLine(getActiveLineIndex(progress));
            }
        }, 200);
    }

    function stopProgressLoop() {
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    }

    function showPlayer(spotify) {
        spAlbumArt.src = spotify.album_art_url || '';
        spTrackName.textContent = spotify.song;
        spArtistName.textContent = spotify.artist.replace(/;/g, ',');
        var durationMs = spotify.timestamps.end - spotify.timestamps.start;
        spTimeTotal.textContent = formatTime(durationMs);
        spPreviewBtn.href = 'https://open.spotify.com/track/' + spotify.track_id;
        spotifyPlayer.style.display = 'block';
    }

    function hidePlayer() {
        spotifyPlayer.style.display = 'none';
        spLyricsContainer.style.display = 'none';
        stopProgressLoop();
        currentTrackId = null;
        syncedLyrics = [];
        trackStartTimestamp = null;
        trackEndTimestamp = null;
        lastActiveLine = -1;
    }

    async function handleSpotifyUpdate(spotify) {
        if (!spotify) {
            hidePlayer();
            return;
        }

        showPlayer(spotify);
        var trackId = spotify.track_id;

        if (trackId !== currentTrackId) {
            currentTrackId = trackId;
            syncedLyrics = [];
            spLyricsLines.innerHTML = '';
            spLyricsContainer.style.display = 'none';
            lastActiveLine = -1;

            trackStartTimestamp = spotify.timestamps.start;
            trackEndTimestamp = spotify.timestamps.end;

            spLyricsLines.innerHTML = '<div class="sp-lyrics-loading">fetching lyrics...</div>';
            spLyricsContainer.style.display = 'block';

            var durationMs = trackEndTimestamp - trackStartTimestamp;
            var artistClean = spotify.artist.split(';')[0].trim();
            var lyrics = await fetchLyrics(spotify.song, artistClean, durationMs);

            if (trackId !== currentTrackId) return;

            if (lyrics && lyrics.length > 0) {
                syncedLyrics = lyrics;
                renderLyrics(lyrics);
                startProgressLoop();
            } else {
                spLyricsLines.innerHTML = '<div class="sp-lyrics-unavailable">lyrics not available for this track</div>';
                startProgressLoop();
            }
        } else {
            var newStart = spotify.timestamps.start;
            var diff = Math.abs(newStart - trackStartTimestamp);
            if (diff > 3000) {
                trackStartTimestamp = spotify.timestamps.start;
                trackEndTimestamp = spotify.timestamps.end;
            }
        }
    }

    function updateStatusDot(status) {
        statusDot.className = 'status-indicator';
        switch (status) {
            case 'online':
                statusDot.classList.add('status-online');
                statusDot.innerHTML = '';
                break;
            case 'idle':
                statusDot.classList.add('status-idle');
                statusDot.innerHTML = '<i class="fas fa-moon" style="font-size:10px; color: #000;"></i>';
                break;
            case 'dnd':
                statusDot.classList.add('status-dnd');
                statusDot.innerHTML = '';
                break;
            default:
                statusDot.classList.add('status-offline');
                statusDot.innerHTML = '';
        }
    }

    function handlePresenceData(presenceData) {
        var discordUser = presenceData.discord_user;
        var discordStatus = presenceData.discord_status;
        var spotify = presenceData.spotify;
        var activities = presenceData.activities;

        if (discordUser) {
            var avatarImg = document.querySelector('.avatar');
            avatarImg.src = 'https://cdn.discordapp.com/avatars/' + discordUser.id + '/' + discordUser.avatar + '.png?size=512';
        }

        updateStatusDot(discordStatus);

        var listeningDiv = document.querySelector('.listening-status');
        var gameActivity = null;
        for (var i = 0; i < activities.length; i++) {
            if (activities[i].type === 0) {
                gameActivity = activities[i];
                break;
            }
        }

        if (spotify) {
            listeningDiv.style.display = 'flex';
            gameStatusDiv.style.display = 'none';
            spotifyIcon.style.display = 'inline-block';
            statusText.innerHTML = 'Listening to <strong>' + spotify.song + '</strong> by <strong>' + spotify.artist.split(';')[0] + '</strong>';
            handleSpotifyUpdate(spotify);
        } else if (gameActivity) {
            listeningDiv.style.display = 'none';
            gameStatusDiv.style.display = 'flex';
            gameText.innerHTML = 'Playing <strong>' + gameActivity.name + '</strong>';
            handleSpotifyUpdate(null);
        } else {
            listeningDiv.style.display = 'flex';
            gameStatusDiv.style.display = 'none';
            spotifyIcon.style.display = 'none';
            statusText.innerHTML = 'Not listening to anything right now';
            handleSpotifyUpdate(null);
        }
    }

    function connectWebSocket() {
        ws = new WebSocket('wss://api.lanyard.rest/socket');

        ws.onmessage = function(event) {
            var msg = JSON.parse(event.data);

            if (msg.op === 1) {
                ws.send(JSON.stringify({
                    op: 2,
                    d: { subscribe_to_id: DISCORD_USER_ID }
                }));

                if (heartbeatInterval) clearInterval(heartbeatInterval);
                heartbeatInterval = setInterval(function() {
                    if (ws && ws.readyState === WebSocket.OPEN) {
                        ws.send(JSON.stringify({ op: 3 }));
                    }
                }, msg.d.heartbeat_interval);
            }

            if (msg.op === 0) {
                if (msg.t === 'INIT_STATE' || msg.t === 'PRESENCE_UPDATE') {
                    handlePresenceData(msg.d);
                }
            }
        };

        ws.onclose = function() {
            if (heartbeatInterval) {
                clearInterval(heartbeatInterval);
                heartbeatInterval = null;
            }
            setTimeout(connectWebSocket, 5000);
        };

        ws.onerror = function() {
            if (ws) ws.close();
        };
    }

    connectWebSocket();
});
