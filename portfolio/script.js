// PIXELS
const container = document.querySelector(".pixels");

for (let i = 0; i < 40; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");

  pixel.style.left = Math.random() * 100 + "vw";
  pixel.style.animationDuration = (5 + Math.random() * 10) + "s";
  pixel.style.background = Math.random() > 0.5 ? "#00f7ff" : "#ff00ff";

  container.appendChild(pixel);
}

// TYPING
const text = "Aspiring IT Professional | Developer | Tech Enthusiast";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}
type();

// =========================
// PROJECTS DATA
// =========================
const projects = {
  react: {
    title: "ReAct Complaint System",
    img: "files/ReAct-screen.png",
    desc: "A complaint tracking system for managing complaints and organizing resolutions.",
    tech: "C# • MySQL"
  },
  brightbuds: {
    title: "BrightBuds App",
    img: "files/BrightBuds-screen.png",
    desc: "A mobile gamified routine tracking application tailored for ADHD children.",
    tech: "Dart • Flutter • Firebase"
  },
  rainbowloop: {
    title: "RainbowLoop POS",
    img: "files/RainbowLoop-screen.png",
    desc: "An inventory and POS system for the shop Rainbow Loop Arts and Crafts.",
    tech: "C# • MySQL"
  },
  aklatura: {
    title: "Aklatura Library Management System",
    img: "files/Aklatura-screen.png",
    desc: "A web-based library management system for tracking books, borrowers, and transactions efficiently.",
    tech: "ASP.NET • MS SQL Server"
}
};

// OPEN PROJECT MODAL
function openProject(key) {
  const p = projects[key];

  document.getElementById("project-title").innerText = p.title;
  document.getElementById("project-img").src = p.img;
  document.getElementById("project-desc").innerText = p.desc;
  document.getElementById("project-tech").innerText = "Tech Stack: " + p.tech;

  document.getElementById("projectModal").style.display = "flex"; // IMPORTANT
}

// CLOSE PROJECT MODAL
function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

// =========================
// CERTIFICATES
// =========================
const certificates = {
  cert1: "files/ITS-Databases.png",
  cert2: "files/ITS-NetworkSecurity.png",
  cert3: "files/GitHubJS-Cert.jpeg"
};

// OPEN CERT MODAL
function openCert(key) {
  document.getElementById("cert-img").src = certificates[key];

  document.getElementById("certModal").style.display = "flex"; // IMPORTANT
}

// CLOSE CERT MODAL
function closeCertModal() {
  document.getElementById("certModal").style.display = "none";
}

// CLOSE WHEN CLICKING OUTSIDE
window.onclick = function (e) {
  const projectModal = document.getElementById("projectModal");
  const certModal = document.getElementById("certModal");

  if (e.target === projectModal) {
    projectModal.style.display = "none";
  }

  if (e.target === certModal) {
    certModal.style.display = "none";
  }
};