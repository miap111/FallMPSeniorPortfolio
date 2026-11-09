
/* =========================================
   IMAGE FILES
   EDIT THIS SECTION TO USE YOUR OWN ART
========================================= */

const imageFiles = {
  vase: "images/vase.png",

  flowers: {
    about: "images/daisy.png",
    projects: "images/rose.png",
    experience: "images/tulip.png",
    achievements: "images/sunflower.png",
    creative: "images/poppy.png"
  }
};


/* =========================================
   PORTFOLIO FLOWER INFORMATION
========================================= */

const flowerData = [

  {
    id: "about",
    name: "Daisy",
    image: imageFiles.flowers.about,

    background: "#f6e9e4",

    eyebrow: "The person behind the work",
    title: "A little about me",

    description:
      "A starting point for the story behind this portfolio: the interests, experiences, and little details that make up who I am.",

    cards: [
      [
        "A quick introduction",
        "A little context about who I am, where I come from, and what I enjoy creating."
      ],
      [
        "Curiosity cabinet",
        "The subjects, ideas, and unexpected things that tend to catch my attention."
      ],
      [
        "Outside the screen",
        "A place for the activities, communities, and experiences that shape my perspective."
      ],
      [
        "What I'm growing toward",
        "The things I hope to explore, learn, and make next."
      ]
    ]
  },


  {
    id: "projects",
    name: "Rose",
    image: imageFiles.flowers.projects,

    background: "#f4e5e1",

    eyebrow: "Ideas made tangible",
    title: "Things I've created",

    description:
      "A collection of experiments, designs, websites, and other projects, from the first idea to the finished result.",

    cards: [
      [
        "Web and digital design",
        "Website concepts, layouts, and digital experiences built around both function and visual identity."
      ],
      [
        "Creative experiments",
        "Small tests, visual explorations, and ideas that became something more."
      ],
      [
        "The process",
        "Research, drafts, revisions, and the decisions that helped each project take shape."
      ],
      [
        "Selected work",
        "A space for project images, links, and short explanations of the finished pieces."
      ]
    ]
  },


  {
    id: "experience",
    name: "Tulip",
    image: imageFiles.flowers.experience,

    background: "#f5eedf",

    eyebrow: "Places I've learned and contributed",
    title: "My experience",

    description:
      "A look at the roles, collaborations, and opportunities that have helped me develop new skills and perspectives.",

    cards: [
      [
        "Work and internships",
        "A timeline of professional experiences, responsibilities, and what I took away from them."
      ],
      [
        "School and leadership",
        "Clubs, teams, publications, and the communities I've helped build."
      ],
      [
        "Collaboration",
        "The people I've worked with and the projects that were better because we made them together."
      ],
      [
        "Skills in practice",
        "Examples of how I've used communication, design, technology, and creative problem-solving."
      ]
    ]
  },


  {
    id: "achievements",
    name: "Sunflower",
    image: imageFiles.flowers.achievements,

    background: "#f5efd9",

    eyebrow: "Milestones along the way",
    title: "Things I've accomplished",

    description:
      "A growing collection of recognitions, milestones, and moments that mark progress along the way.",

    cards: [
      [
        "Awards and recognition",
        "Selected competitions, honors, and achievements worth highlighting."
      ],
      [
        "Certifications",
        "Credentials and technical skills I've worked toward and earned."
      ],
      [
        "Academic milestones",
        "Coursework, programs, and learning experiences that have challenged me."
      ],
      [
        "Community contributions",
        "Volunteer work and ways I've contributed time, ideas, and effort."
      ]
    ]
  },


  {
    id: "creative",
    name: "Poppy",
    image: imageFiles.flowers.creative,

    background: "#f4e8ef",

    eyebrow: "A place for the in-between",
    title: "My creative side",

    description:
      "Not everything fits into a neat category. This space is for visual ideas, writing, inspiration, and the things I make just to see where they go.",

    cards: [
      [
        "Visual inspiration",
        "Color, typography, illustration, and the images that spark new directions."
      ],
      [
        "Words and stories",
        "Writing, storytelling, and experiments with different ways to communicate."
      ],
      [
        "Moodboards and concepts",
        "Early ideas and visual directions that might turn into something bigger."
      ],
      [
        "Just because",
        "Personal experiments and creative detours that deserve a place of their own."
      ]
    ]
  }

];


/* =========================================
   PAGE ELEMENTS
========================================= */

const bouquetView = document.querySelector("#bouquetView");
const selectorView = document.querySelector("#selectorView");
const portfolioView = document.querySelector("#portfolioView");

const bouquetFlowers = document.querySelector("#bouquetFlowers");
const flowerOrbit = document.querySelector("#flowerOrbit");

const portfolioGrid = document.querySelector("#portfolioGrid");

const sectionFlowerArt = document.querySelector("#sectionFlowerArt");

const sectionEyebrow = document.querySelector("#sectionEyebrow");
const sectionTitle = document.querySelector("#sectionTitle");
const sectionDescription = document.querySelector("#sectionDescription");

let currentView = "bouquet";
let resizeTimer;


/* =========================================
   CREATE IMAGE ELEMENTS
========================================= */

function createFlowerImage(flower, className) {

  const image = document.createElement("img");

  image.src = flower.image;
  image.alt = "";
  image.className = className;

  image.draggable = false;

  image.onerror = () => {
    console.error(
      `Could not find flower image: ${flower.image}`
    );
  };

  return image;
}


/* =========================================
   SWITCH BETWEEN VIEWS
========================================= */

function setView(nextView) {

  currentView = nextView;

  document.body.dataset.view = nextView;

  const views = [
    [bouquetView, "bouquet"],
    [selectorView, "selector"],
    [portfolioView, "portfolio"]
  ];

  views.forEach(([element, name]) => {

    const active = name === nextView;

    element.classList.toggle("is-active", active);

    element.setAttribute(
      "aria-hidden",
      String(!active)
    );

  });

}


/* =========================================
   BUILD THE INITIAL BOUQUET
========================================= */

function buildBouquet() {

  bouquetFlowers.innerHTML = "";

  flowerData.forEach((flower, index) => {

    const image = createFlowerImage(
      flower,
      "bouquet-flower"
    );

    image.dataset.flowerIndex = index;

    bouquetFlowers.appendChild(image);

  });

}


/* =========================================
   BUILD THE CIRCULAR FLOWER SELECTOR
========================================= */

function buildSelector() {

  // Remove old flowers without removing the empty vase.

  flowerOrbit.querySelectorAll(".flower-choice")
    .forEach(button => button.remove());


  flowerData.forEach((flower, index) => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "flower-choice";

    button.setAttribute(
      "aria-label",
      `Explore ${flower.name}: ${flower.title}`
    );


    const image = createFlowerImage(
      flower,
      "flower-selector-image"
    );

    const label = document.createElement("span");

    label.className = "flower-name";
    label.textContent = flower.name;


    button.appendChild(image);
    button.appendChild(label);

    button.addEventListener("click", () => {
      selectFlower(index);
    });

    flowerOrbit.appendChild(button);

  });

}


/* =========================================
   SPREAD FLOWERS INTO A CIRCLE
========================================= */

function spreadFlowers() {

  const buttons = [
    ...flowerOrbit.querySelectorAll(".flower-choice")
  ];

  const orbit = flowerOrbit.getBoundingClientRect();

  const isSmall = window.matchMedia(
    "(max-width: 650px)"
  ).matches;


  const radiusX = Math.min(
    orbit.width * (isSmall ? 0.36 : 0.38),
    isSmall ? 145 : 260
  );

  const radiusY = Math.min(
    orbit.height * (isSmall ? 0.32 : 0.36),
    isSmall ? 150 : 220
  );


  buttons.forEach((button, index) => {

    const angle =
      (-Math.PI / 2) +
      (index / buttons.length) * Math.PI * 2;


    const x =
      orbit.width / 2 +
      Math.cos(angle) * radiusX;

    const y =
      orbit.height / 2 +
      Math.sin(angle) * radiusY;


    button.style.left = `${x}px`;
    button.style.top = `${y}px`;


    requestAnimationFrame(() => {

      button.classList.add("is-spread");

    });

  });

}


/* =========================================
   OPEN FLOWER SELECTOR
========================================= */

function openSelector() {

  setView("selector");

  // Wait for the selector to become visible before
  // calculating where the flowers should spread.

  requestAnimationFrame(() => {

    requestAnimationFrame(() => {

      spreadFlowers();

    });

  });

}


/* =========================================
   RETURN TO ORIGINAL BOUQUET
========================================= */

function returnToBouquet() {

  setView("bouquet");

  document.body.style.background = "var(--paper)";

}


/* =========================================
   OPEN AN INDIVIDUAL FLOWER PAGE
========================================= */

function selectFlower(index) {

  const flower = flowerData[index];


  // Change the background to match the flower.

  document.body.style.background = flower.background;


  // Show the selected flower illustration.

  sectionFlowerArt.src = flower.image;

  sectionFlowerArt.alt = flower.name;


  // Update the portfolio heading and description.

  sectionEyebrow.textContent = flower.eyebrow;

  sectionTitle.textContent = flower.title;

  sectionDescription.textContent = flower.description;


  // Clear the previous portfolio cards.

  portfolioGrid.innerHTML = "";


  // Build the selected flower's portfolio cards.

  flower.cards.forEach((card, cardIndex) => {

    const article = document.createElement("article");

    article.className = "portfolio-card";


    const kicker = document.createElement("span");

    kicker.className = "card-kicker";

    kicker.textContent =
      `0${cardIndex + 1} / ${flower.name}`;


    const heading = document.createElement("h3");

    heading.textContent = card[0];


    const paragraph = document.createElement("p");

    paragraph.textContent = card[1];


    article.appendChild(kicker);
    article.appendChild(heading);
    article.appendChild(paragraph);


    portfolioGrid.appendChild(article);

  });


  // Show the portfolio page.

  setView("portfolio");

}


/* =========================================
   CLICK EVENTS
========================================= */

// Click the original vase.

document.querySelector("#openBouquet")
  .addEventListener("click", openSelector);


// Click the empty vase in the center.

document.querySelector("#backToBouquet")
  .addEventListener("click", returnToBouquet);


// Click the selected flower and vase.

document.querySelector("#sectionVase")
  .addEventListener("click", openSelector);


/* =========================================
   RESIZE HANDLING
========================================= */

window.addEventListener("resize", () => {

  if (currentView !== "selector") return;

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {

    spreadFlowers();

  }, 100);

});


/* =========================================
   INITIALIZE WEBSITE
========================================= */

buildBouquet();

buildSelector();

