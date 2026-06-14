const button = document.getElementById('exploreBtn');

button.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});

const text ="Innovating Microbiology Testing";
const typingElement = document.querySelector('.typing-text');

let index = 0;

function typeText() {

    if(index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

typeText();
function openModal () {
    document.getElementById("reportModal").style.display = "block";
}
function closeModal () {
    document.getElementById("reportModal").style.display = "none";
}
function openOrderModal() {
    document.getElementById("orderModal").style.display = "block";
}
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}

// Data sampel dengan timeline
const sampleData = {
    "BS-001": {
        name: "Water Quality Test",
        date: "2026-06-10",
        progress: 100,
        currentStep: 4,
        steps: [
            { name: "Sample Received", date: "2026-06-10", completed: true },
            { name: "Initial Review", date: "2026-06-11", completed: true },
            { name: "Analysis in Progress", date: "2026-06-12", completed: true },
            { name: "Quality Check", date: "2026-06-13", completed: true },
            { name: "Report Ready", date: "2026-06-14", completed: false }
        ]
    },
    "BS-002": {
        name: "Food Test",
        date: "2026-06-12",
        progress: 60,
        currentStep: 2,
        steps: [
            { name: "Sample Received", date: "2026-06-12", completed: true },
            { name: "Initial Review", date: "2026-06-13", completed: true },
            { name: "Analysis in Progress", date: "2026-06-14", completed: false },
            { name: "Quality Check", date: "-", completed: false },
            { name: "Report Ready", date: "-", completed: false }
        ]
    },
    "BS-003": {
        name: "Air Quality",
        date: "2026-06-13",
        progress: 20,
        currentStep: 1,
        steps: [
            { name: "Sample Received", date: "2026-06-13", completed: true },
            { name: "Initial Review", date: "2026-06-14", completed: false },
            { name: "Analysis in Progress", date: "-", completed: false },
            { name: "Quality Check", date: "-", completed: false },
            { name: "Report Ready", date: "-", completed: false }
        ]
    }
};

function trackSample() {
    const trackingID = document.getElementById("trackingInput").value.toUpperCase().trim();
    const result = document.getElementById("trackingResult");

    if (!trackingID) {
        result.innerHTML = `<p style="color:#ff6b6b;">Please enter a tracking ID</p>`;
        return;
    }

    if (sampleData[trackingID]) {
        const sample = sampleData[trackingID];
        let timelineHTML = `
            <div class="tracking-result-container">
                <div class="tracking-header">
                    <h3>${sample.name}</h3>
                    <p class="tracking-id">ID: ${trackingID}</p>
                </div>
                
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${sample.progress}%"></div>
                    </div>
                    <p class="progress-text">${sample.progress}% Complete</p>
                </div>

                <div class="timeline">
        `;

        sample.steps.forEach((step, index) => {
            const isCompleted = step.completed;
            const isCurrent = index === sample.currentStep - 1 && !isCompleted;
            const statusClass = isCompleted ? 'completed' : isCurrent ? 'current' : 'pending';
            const icon = isCompleted ? '✓' : isCurrent ? '⏳' : '○';
            
            timelineHTML += `
                <div class="timeline-item ${statusClass}">
                    <div class="timeline-marker">${icon}</div>
                    <div class="timeline-content">
                        <h4>${step.name}</h4>
                        <p>${step.date}</p>
                    </div>
                </div>
            `;
        });

        timelineHTML += `
                </div>
            </div>
        `;

        result.innerHTML = timelineHTML;
    } else {
        result.innerHTML = `<p style="color:#ff6b6b;">❌ Tracking ID "${trackingID}" not found. Try: BS-001, BS-002, or BS-003</p>`;
    }
}