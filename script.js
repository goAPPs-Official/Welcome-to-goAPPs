document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const container = document.getElementById('app-container');
    const statusText = document.getElementById('status');

    // Simulate different loading stages
    setTimeout(() => { statusText.innerText = "Loading modules..."; }, 1000);
    setTimeout(() => { statusText.innerText = "Connecting to goApps..."; }, 2000);

    // Fade out splash and show content after 3 seconds
    setTimeout(() => {
        splash.style.opacity = '0';
        
        setTimeout(() => {
            splash.style.display = 'none';
            container.classList.remove('hidden');
            container.style.opacity = '1';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 500);
    }, 3500);
});

// Deployment redirect function
function deploy(appId) {
    console.log(`Deploying: ${appId}`);
    // Replace with your actual deployment URL structure
    window.location.href = `https://deploy.goapps.com?app=${appId}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const container = document.getElementById('app-container');
    const statusText = document.getElementById('status');
    const progressBar = document.getElementById('progress-bar');

    // Sequence of loading events
    const steps = [
        { progress: '30%', text: "Loading modules...", delay: 1000 },
        { progress: '65%', text: "Connecting to goApps...", delay: 2000 },
        { progress: '100%', text: "Ready!", delay: 3000 }
    ];

    steps.forEach(step => {
        setTimeout(() => {
            statusText.innerText = step.text;
            progressBar.style.width = step.progress;
        }, step.delay);
    });

    // Final Transition
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            container.classList.remove('hidden');
            document.body.style.overflow = 'auto';
        }, 500);
    }, 3800);
});
