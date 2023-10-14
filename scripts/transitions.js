const pageNav = document.getElementsByClassName('page-nav').item(0);
const rightNav = document.getElementById('right-nav');
const titleChars = document.getElementsByClassName('title-chars');

const aboutMeChars = document.getElementsByClassName('about-me-chars');
const bioImg = document.getElementsByClassName('bio-img').item(0);
const bioParagraph = document.getElementsByClassName('bio-paragraph').item(0);

const projectChars = document.getElementsByClassName('projects-chars');
const project1 = document.getElementsByClassName('project-page-1').item(0);

// >> Left Intros
const leftIntroAni = [
  {}, // From Keyframe Empty
  {
    transform: "translateX(0)",
    opacity: "1"
  }
];
const leftIntroAniRev = [
  {}, // From Keyframe Empty
  {
    transform: "translateX(-90%)",
    opacity: "0"
  }
];



// >> Right Intros
const rightIntroAni = [
  {},
  {
    transform: "translateX(0)",
    opacity: "1"
  }
];
const rightIntroAniRev = [
  {},
  {
    transform: "translateX(90%)",
    opacity: "0"
  }
];



// >> Letter Animations for Headers
const pop = [
  {},
  {
    transform: "translateY(0)",
    opacity: 1
  }
]

const unpop = [
  {},
  {
    transform: "translateY(15%)",
    opacity: 0
  }
]



// >> Global Intro Animation Time
const introAniTime = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards',
  easing: 'ease'
};

const titleAniTime = {
  duration: 1000,
  iterations: 1,
  fill: 'forwards',
  easing: 'ease'
};



// >> Header Animations
function popUpCharacters(classList) {
  for(let i = 0; i < classList.length; i++) {
    setTimeout(() => {
      classList.item(i).animate(pop, titleAniTime);
    }, i*100);
  }
}

function popDownCharacters(classList) {
  for(let i = classList.length-1; i >= 0; i--) {
    classList.item(i).animate(unpop, titleAniTime)
  }
}



// >> Animation Start Functions
let landingVisibility = true;
let aboutMeVisibility = true;
let projectVisibility = true;

// >> Runs Once on Start
// Intro Animations On Scroll for Landing
if (pageNav.getBoundingClientRect().y < -100 && landingVisibility === true) { // Elements not in Window
  popDownCharacters(titleChars);
  pageNav.animate(leftIntroAniRev, introAniTime);
  rightNav.animate(rightIntroAniRev, introAniTime);
  landingVisibility = false;
}
else if (pageNav.getBoundingClientRect().y > 0 && landingVisibility === false) { // Elements in Window
  popUpCharacters(titleChars);
  setTimeout( () => {
    pageNav.animate(leftIntroAni, introAniTime);
    rightNav.animate(rightIntroAni, introAniTime);
  }, 1000)
  landingVisibility = true;
}

// Intro Animation on Scroll for About Me
if ((bioImg.getBoundingClientRect().y > window.innerHeight || bioImg.getBoundingClientRect().y < -100) && aboutMeVisibility === true) { // Elements not in Window
  popDownCharacters(aboutMeChars);
  bioImg.animate(leftIntroAniRev, introAniTime);
  bioParagraph.animate(unpop, introAniTime);

  aboutMeVisibility = false;
}
else if ((bioImg.getBoundingClientRect().y < window.innerHeight && bioImg.getBoundingClientRect().y > 0) && aboutMeVisibility === false) { // Elements in Window
  popUpCharacters(aboutMeChars);
  setTimeout( () => {
    bioImg.animate(leftIntroAni, introAniTime);
    bioParagraph.animate(pop, introAniTime);
  }, 1000)

  aboutMeVisibility = true;
}

// Intro Animation on Scroll for Projects
console.log(project1.getBoundingClientRect().y);
if ((project1.getBoundingClientRect().y > window.innerHeight) && projectVisibility === true) { // Elements not in Window
  popDownCharacters(projectChars);
  project1.animate(unpop, introAniTime);

  projectVisibility = false;
}
else if ((project1.getBoundingClientRect().y < window.innerHeight) && projectVisibility === false) {
  popUpCharacters(projectChars);
  project1.animate(pop, introAniTime);

  projectVisibility = true;
}



// >> Checks Everytime the user Scrolls
window.addEventListener('scroll', () => {

  // Intro Animations On Scroll for Landing
  if (pageNav.getBoundingClientRect().y < -100 && landingVisibility === true) { // Elements not in Window
    popDownCharacters(titleChars);
    pageNav.animate(leftIntroAniRev, introAniTime);
    rightNav.animate(rightIntroAniRev, introAniTime);
    landingVisibility = false;
  }
  else if (pageNav.getBoundingClientRect().y > 0 && landingVisibility === false) { // Elements in Window
    popUpCharacters(titleChars);
    setTimeout( () => {
      pageNav.animate(leftIntroAni, introAniTime);
      rightNav.animate(rightIntroAni, introAniTime);
    }, 1000)
    landingVisibility = true;
  }

  // Intro Animation on Scroll for About Me
  if ((bioImg.getBoundingClientRect().y > window.innerHeight || bioImg.getBoundingClientRect().y < -100) && aboutMeVisibility === true) { // Elements not in Window
    popDownCharacters(aboutMeChars);
    bioImg.animate(leftIntroAniRev, introAniTime);
    bioParagraph.animate(unpop, introAniTime);

    aboutMeVisibility = false;
  }
  else if ((bioImg.getBoundingClientRect().y < window.innerHeight && bioImg.getBoundingClientRect().y > 0) && aboutMeVisibility === false) { // Elements in Window
    popUpCharacters(aboutMeChars);
    setTimeout( () => {
      bioImg.animate(leftIntroAni, introAniTime);
      bioParagraph.animate(pop, introAniTime);
    }, 1000)

    aboutMeVisibility = true;
  }

  // Intro Animation on Scroll for Projects
  console.log(project1.getBoundingClientRect().y);
  if ((project1.getBoundingClientRect().y > window.innerHeight) && projectVisibility === true) { // Elements not in Window
    popDownCharacters(projectChars);
    project1.animate(unpop, introAniTime);

    projectVisibility = false;
  }
  else if ((project1.getBoundingClientRect().y < window.innerHeight) && projectVisibility === false) {
    popUpCharacters(projectChars);
    project1.animate(pop, introAniTime);

    projectVisibility = true;
  }
})