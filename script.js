// app.js

// Scroll Progress Bar
window.onscroll = function () {
  scrollProgress();
};

function scrollProgress() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

// Animate Skills Progress Bars
document.addEventListener("DOMContentLoaded", () => {
  const skillProgress = document.querySelectorAll('.skill-progress');
  skillProgress.forEach(progress => {
    let width = progress.getAttribute('data-skill');
    progress.style.width = width;
  });
});

// Career Timeline Data
const timelineData = [
  {
    title: "Data Analyst | KeelWorks Foundation",
    period: "Jan 2025 - Present",
    shortSummary: "Automated reporting and donor segmentation analysis using SQL, Python, and RFM analysis.",
    responsibilities: [
      "Reduced reporting time by 40% through automation.",
      "Performed A/B testing and email marketing optimization.",
      "Built clustering models for donor engagement improvement."
    ]
  },
  {
    title: "Business Integration Analyst | Joules to Watts (HP Client)",
    period: "Oct 2021 - Aug 2023",
    shortSummary: "Developed KPIs, optimized SQL queries, and launched executive dashboards on Tableau Server.",
    responsibilities: [
      "Improved SQL query performance by 40%.",
      "Created real-time dashboards using Tableau Server.",
      "Boosted customer satisfaction through optimized service insights."
    ]
  },
  {
    title: "Data Analyst | Lipika Technologies",
    period: "Sep 2020 - Sep 2021",
    shortSummary: "Analyzed marketing campaigns and sales trends using SQL, Snowflake, and Tableau.",
    responsibilities: [
      "Increased customer retention by 4% using churn analysis.",
      "Forecasted seasonal demand through statistical modeling.",
      "Enhanced executive reporting with interactive dashboards."
    ]
  },
  {
    title: "Application Development Associate | Accenture",
    period: "Jan 2018 - Aug 2020",
    shortSummary: "Delivered projects collaborating with SAP teams, improved stakeholder communication and UAT efficiency.",
    responsibilities: [
      "Reduced misalignment by 30% with better documentation.",
      "Led end-to-end delivery of 6+ technology projects.",
      "Streamlined UAT processes improving system efficiency by 80%."
    ]
  }
];

// Build Timeline
function buildTimeline() {
  const container = document.getElementById('timelineContainer');
  timelineData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = "timeline-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg w-[300px] shrink-0 relative flex flex-col justify-between";

    card.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${item.title}</h3>
      <p class="text-sm text-gray-500 mb-1">${item.period}</p>
      <p class="mb-2 text-gray-600 dark:text-gray-300">${item.shortSummary}</p>
      <button onclick="expandCard(${index})" class="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm transition">
        Know More →
      </button>
      <div id="details-${index}" class="hidden mt-4 text-gray-700 dark:text-gray-300 text-sm space-y-2">
        ${item.responsibilities.map(r => `<li>🔹 ${r}</li>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });
}

function expandCard(index) {
  const details = document.getElementById(`details-${index}`);
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
  } else {
    details.classList.add('hidden');
  }
}

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.createElement('button');
  toggleButton.innerHTML = "🌙";
  toggleButton.className = "fixed top-4 right-4 bg-gray-300 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition";
  toggleButton.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      toggleButton.innerHTML = "☀️";
    } else {
      toggleButton.innerHTML = "🌙";
    }
  });
  document.body.appendChild(toggleButton);
});

// Load timeline on page load
document.addEventListener('DOMContentLoaded', buildTimeline);
