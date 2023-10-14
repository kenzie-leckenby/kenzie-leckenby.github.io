const pageNav = document.getElementsByClassName('page-nav').item(0);
const rightNav = document.getElementById('right-nav');
const titleChars = document.getElementsByClassName('title-chars');

// >> Left Intros
const leftIntroAni = [ // Keyframe JSON Array
  {}, // From Keyframe Empty
  {
    transform: "translateX(0)",
    opacity: "1"
  }
];
const leftIntroAniRev = [ // Keyframe JSON Array
  {}, // From Keyframe Empty
  {
    transform: "translateX(-100%)",
    opacity: "0"
  }
];

// >> Right Intros
const rightIntroAni = [ // Keyframe JSON Array
  {}, // From Keyframe Empty
  {
    transform: "translateX(0)",
    opacity: "1"
  }
];
const rightIntroAniRev = [ // Keyframe JSON Array
  {}, // From Keyframe Empty
  {
    transform: "translateX(100%)",
    opacity: "0"
  }
];

// >> Title Intro
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

// Global Intro Animation Time
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

function titleIntro() {
  for(let i = 0; i < titleChars.length; i++) {
    setTimeout(() => {
      titleChars.item(i).animate(pop, titleAniTime);
    }, i*100);
  }
}

function titleOutro() {
  let a = 0;
  for(let i = titleChars.length-1; i >= 0; i--) {
    setTimeout( () => {
      titleChars.item(i).animate(unpop, titleAniTime)
    }, a*100);
    a++;
  }
}

let visible = true;
window.addEventListener('scroll', () => {
  lastCheck = pageNav.getBoundingClientRect().y;
  if (pageNav.getBoundingClientRect().y < -100 && visible === true) {
    titleOutro();
    pageNav.animate(leftIntroAniRev, introAniTime);
    rightNav.animate(rightIntroAniRev, introAniTime);
    visible = false;
  }
  else if (pageNav.getBoundingClientRect().y > 0 && visible === false) {
    titleIntro();
    setTimeout( () => {
      pageNav.animate(leftIntroAni, introAniTime);
      rightNav.animate(rightIntroAni, introAniTime);
    }, 1000)
    visible = true;
  }

})