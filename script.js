const appData = [
    { name: "Nexus Chatbot", id: "nexus-1" },
    { name: "Crypto Tracker", id: "crypto-v2" },
    { name: "Safety Sentinel", id: "safe-bot" },
    { name: "Auto-Coder Pro", id: "ac-pro" }
];

// 1. Theme Persistence
function applyTheme() {
    const saved = localStorage.getItem('goApps-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    const checkbox = document.querySelector('#checkbox');
    if (checkbox) checkbox.checked = saved === 'light';
}

// 2. System Log
function addLog(text) {
    const logContent = document.getElementById('log-content');
    const entry = document.createElement('div');
    entry.innerHTML = `<span>[${new Date().toLocaleTimeString()}]</span> ${text}`;
    logContent.appendChild(entry);
    if (logContent.children.length > 3) {
        logContent.style.transform = `translateY(-${(logContent.children.length - 3) * 18}px)`;
    }
}

// 3. Deployment Logic
function deploy(btn, appId) {
    btn.classList.add('loading');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<div class="btn-loader"></div>`;
    addLog(`INIT: Deploying ${appId}...`);
    
    setTimeout(() => {
        btn.innerHTML = "Open";
        btn.style.background = "#10b981";
        addLog(`SUCCESS: ${appId} is live.`);
    }, 2000);
}

// 4. Boot Sequence
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    const pb = document.getElementById('progress-bar');
    const st = document.getElementById('status');

    setTimeout(() => { pb.style.width = "40%"; st.innerText = "Fetching apps..."; }, 800);
    setTimeout(() => { pb.style.width = "100%"; st.innerText = "System Ready"; }, 1800);

    setTimeout(() => {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
            const container = document.getElementById('app-container');
            container.classList.remove('hidden');
            container.style.opacity = '1';
            document.body.style.overflow = 'auto';
            
            // Start Feed
            appData.forEach((app, i) => {
                setTimeout(() => {
                    const item = document.createElement('div');
                    item.className = 'app-item';
                    item.innerHTML = `<strong>${app.name}</strong><button class="deploy-btn" onclick="deploy(this, '${app.id}')">Deploy</button>`;
                    document.getElementById('feed-container').prepend(item);
                    addLog(`STREAM: Found ${app.name}`);
                }, i * 1000);
            });
        }, 500);
    }, 2500);
});

// 5. Search Filter
function filterApps() {
    const query = document.getElementById('appSearch').value.toLowerCase();
    document.querySelectorAll('.app-item').forEach(item => {
        const text = item.querySelector('strong').innerText.toLowerCase();
        item.style.display = text.includes(query) ? 'flex' : 'none';
    });
}

// 6. Theme Toggle Event
document.querySelector('#checkbox').addEventListener('change', (e) => {
    const theme = e.target.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('goApps-theme', theme);
});
