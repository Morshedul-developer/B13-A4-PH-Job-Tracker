let currentTab = "tab-all";

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

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
        const company = clickedElement.closest(".company");
        const position = clickedElement.closest(".position");
        const location = clickedElement.closest(".location");
        const type = clickedElement.closest(".type");
        const salary = clickedElement.closest(".salary");
        const description = clickedElement.closest(".description");
        const card = document.createElement("div");
        card.className = "card space-y-5 bg-white p-6 border border-gray-200 rounded-lg";
        card.innerHTML = `
        <div class="flex justify-between items-center">
              <div>
                <h2
                  class="company text-[18px] font-semibold leading-[26px] mb-1"
                >
                  ${company}
                </h2>
                <h3 class="position leading-[22px] text-gray-500">
                  ${position}
                </h3>
              </div>

              <button
                class="btn-delete w-10 h-10 flex items-center justify-center border rounded-full btn btn-outline btn-error"
              >
                <i
                  class="fa-regular fa-trash-can text-[14px] pointer-events-none"
                ></i>
              </button>
            </div>
            <div class="flex gap-7 text-gray-500 text-[14px]">
              <p class="location">${location}</p>
              <ul class="flex gap-7">
                <li class="type list-disc">${type}</li>
                <li class="salary list-disc">${salary}</li>
              </ul>
            </div>
            <div>
              <p
                class="not-applied bg-[#EEF4FF] inline-block text-[14px] font-medium leading-5 px-3 py-2 mb-2"
              >
                NOT APPLIED
              </p>
              <p class="description leading-5 text-[14px] text-[#323B49]">
                Build cross-platform mobile applications using React Native.
                Work on products used by millions of users worldwide.
              </p>
            </div>
            <div class="flex gap-2 flex-col sm:flex-row">
              <button class="btn-interview btn btn-outline btn-success">
                INTERVIEW
              </button>
              <button class="btn-rejected btn btn-outline btn-error">
                REJECTED
              </button>
            </div>
        `;

        if(clickedElement.classList.contains("btn-interview")) {
            interviewContainer.appendChild(card);
        }
    });