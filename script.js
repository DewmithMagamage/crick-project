function updateMatchDetails() {
    const title = document.getElementById('match-title').value;
    const venue = document.getElementById('venue').value;
    const type = document.getElementById('match-type').value;
    const overs = document.getElementById('total-overs').value;
    localStorage.setItem('matchDetails', JSON.stringify({ title, venue, type, overs }));
}

function updateScore() {
    const runs = document.getElementById('runs').value;
    const wickets = document.getElementById('wickets').value;
    const overs = document.getElementById('overs').value;
    localStorage.setItem('scoreData', JSON.stringify({ runs, wickets, overs }));
}

function triggerAnimation(type) {
    localStorage.setItem('animation', type);
}

// Load Data on Output Page
if (window.location.pathname.includes('output.html')) {
    setInterval(() => {
        const matchDetails = JSON.parse(localStorage.getItem('matchDetails')) || {};
        const scoreData = JSON.parse(localStorage.getItem('scoreData')) || {};
        const animation = localStorage.getItem('animation');
        
        document.getElementById('score-bug').innerHTML = `${matchDetails.title || ''} - ${matchDetails.venue || ''} (${matchDetails.type || ''}, ${matchDetails.overs || ''} Overs)<br> Score: ${scoreData.runs || 0}/${scoreData.wickets || 0} in ${scoreData.overs || '0'} overs`;
        
        if (animation) {
            document.getElementById('animation-display').innerHTML = animation.toUpperCase() + '!';
            setTimeout(() => { document.getElementById('animation-display').innerHTML = ''; }, 2000);
            localStorage.removeItem('animation');
        }
    }, 1000);
}