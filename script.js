let currentTab = "tab-all";

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

const noJobs = document.getElementById("no-jobs");

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const available = document.getElementById("available-jobs");

// toggle buttons
function switchTab(tab) {
    currentTab = tab;
    const tabs = ["tab-all", "tab-interview", "tab-rejected"];

    for(let t of tabs) {
        if(t === tab) {
            document.getElementById(t).classList.add("btn-primary");
        }
        else {
            document.getElementById(t).classList.remove("btn-primary");
        }
    }

    const containers = [allContainer, interviewContainer, rejectedContainer];

    for(const container of containers) {
        container.classList.add("hidden");
    }
    if(currentTab === "tab-all") {
        allContainer.classList.remove("hidden");
    }else if(currentTab === "tab-interview") {
        interviewContainer.classList.remove("hidden");
    }else {
        rejectedContainer.classList.remove("hidden");
    }
}
switchTab(currentTab);

// main functionality
document.getElementById("job-list")
    .addEventListener('click', function(e) {
        const clickedElement = e.target;
        const card = clickedElement.closest(".card");

        if (clickedElement.classList.contains("btn-interview")) {
            interviewContainer.appendChild(card);
        }
        else if (clickedElement.classList.contains("btn-rejected")) {
            rejectedContainer.appendChild(card);
        }
        else if (clickedElement.classList.contains("btn-delete")) {
            allContainer.removeChild(card);
        }
        updateCounts();
    });

function updateCounts() {
    totalCount.innerText = allContainer.children.length;
    interviewCount.innerText = interviewContainer.children.length;
    rejectedCount.innerText = rejectedContainer.children.length;
    available.innerText = allContainer.children.length;
}
updateCounts();