document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const emailOrPhone = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const emailContent = `Name: ${name}\nEmail/Phone: ${emailOrPhone}\nMessage: ${message}`;
  const mailtoLink = `mailto:meytalkeren@gmail.com?subject=New Message from ${name}&body=${encodeURIComponent(emailContent)}`;

  window.location.href = mailtoLink;
});

document.querySelectorAll('.expand-btn').forEach(button => {
  button.addEventListener('click', function() {
    const content = this.nextElementSibling; 
    content.classList.toggle('active'); 
    
    if (content.classList.contains('active')) {
      this.textContent = "Show Less"; 
    } else {
      this.textContent = "More Info";
    }
  });
});

let currentIndexUnity = 0;  
let currentIndexWebsite = 0; 

const unityProjectsData = [
  {
      github: "https://github.com/Meytalke/My-first-game",
      game: "https://sharemygame.com/@meytalk/my-first-game"
  },
  {
      github: "https://github.com/Meytalke/Spaceship-game",
      game: "https://sharemygame.com/@meytalk/boost-unity-course"
  },
  {
      github: "https://github.com/Meytalke/Exploding-Spaceships",
      game: ""
  }
];

const websiteProjectsData = [
  {
      github: "https://github.com/Meytalke/harrypotterweb",
      web: "https://harrypotterweb.w3spaces.com/"
  },
  {
      github: "",
      web: ""
  }
];

// Update the carousel for Unity or Website projects
function updateCarousel(projectType) {
  const track = document.querySelector(`#${projectType}-carousel .carousel-track`);
  const slideWidth = document.querySelector(`#${projectType}-carousel .carousel-track video`).offsetWidth;
  const currentIndex = projectType === 'unity' ? currentIndexUnity : currentIndexWebsite;
  
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Update links
  const project = projectType === 'unity' ? unityProjectsData[currentIndex] : websiteProjectsData[currentIndex];
  
  if (projectType === 'unity') {
      const githubLink = document.getElementById('unity-github-link');
      const gameLink = document.getElementById('unity-game-link');
      githubLink.href = project.github;

      if (!project.game) {
        gameLink.style.display = "none"; 
    } else {
        gameLink.href = project.game;
        gameLink.style.display = "inline-block"; 
    }
  } else if (projectType === 'website') {
      const websiteGithubLink = document.getElementById('website-github-link');
      const websiteLink = document.getElementById('website-link');
      websiteGithubLink.href = project.github;
      websiteLink.href = project.web;
  }
}

// Previous Slide (Unity or Website)
function prevSlide(projectType) {
    const totalSlides = projectType === 'unity' ? unityProjectsData.length : websiteProjectsData.length;
    if (projectType === 'unity') {
        currentIndexUnity = (currentIndexUnity - 1 + totalSlides) % totalSlides;
    } else {
        currentIndexWebsite = (currentIndexWebsite - 1 + totalSlides) % totalSlides;
    }
    updateCarousel(projectType);
}

// Next Slide (Unity or Website)
function nextSlide(projectType) {
    const totalSlides = projectType === 'unity' ? unityProjectsData.length : websiteProjectsData.length;
    if (projectType === 'unity') {
        currentIndexUnity = (currentIndexUnity + 1) % totalSlides;
    } else {
        currentIndexWebsite = (currentIndexWebsite + 1) % totalSlides;
    }
    updateCarousel(projectType);
}

// Initialize the carousel on page load
document.addEventListener("DOMContentLoaded", function() {
  updateCarousel('unity');
  updateCarousel('website');
});




