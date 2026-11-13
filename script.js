/* 
   IMAGE FILES
   EDIT THIS SECTION TO USE YOUR OWN ART
 */

const imageFiles = {
  vase: "images/vase.png",

  flowers: {
    about: "images/lily.png",
    projects: "images/peony.png",
    experience: "images/tulip.png",
    achievements: "images/daisy.png",
    creative: "images/hyacinth.png"
  }
};




/* =========================================
   PORTFOLIO FLOWER INFORMATION
========================================= */

const flowerData = [

  {
    id: "about",
    name: "Lily",
    image: imageFiles.flowers.about,

    background: "#2a4e4c",

    title: "A little about Mia:",

    description:
      "I love building stuff, making art, I'm grumpy, and I like to read. Obviously, I love to code!",

    cards: [
      [
        "A quick pic!",
        "A little context about who I am...<br><img src='images/miaflick.jpg' alt='Photo of Mia' class='card-photo'><br>My favorite pastime is winning! 🥇"
      ],
      [
        "Favorite Questions:",
        "1. Why are unicorns depicted as fully white or sporting a rainbow coat?<br><br>2. What schools actually offer ancient underwater basket-weaving in Tibet?<br><br>3. Why do the sun and the moon compete for a spot in the sky, and why do they sometimes share a spot?<br><br>4. Is the saying '\"It's a doggy dog world.\"' or '\"It's a dog eats dog world\"'?"
      ],
      [
        "Behind the grapevine",
        "I'm a web developer and aspiring creative technologist with a passion for building interactive, visually engaging digital experiences. I love coding now, but there was a time where I hateddd it. I quickly realized that it was something I was talented at and with hard work, it ended up opening doors I didn't foresee in my future."
      ],
      [
        "Future Goals & Academic Focus",
        "My dream job title is Creative Director! To make this possible, I plan to study <strong>Marketing & Advertising</strong>, <strong>Business Management</strong>, and <strong>Communications</strong>—combining code, branding, and visual storytelling.<br><br><strong>Academics:</strong> 92.6 Cumulative GPA • Honor Roll every marking period (9th–11th) • AP Spanish & NYS Seal of Biliteracy • College Now: Business Organization & Management."
      ]
    ]
  },


  {
    id: "projects",
    name: "Peony",
    image: imageFiles.flowers.projects,

    background: "#4a2833",

    title: "Winning Projects & Designs",

    description:
      "Citywide competition winners, hackathon projects, and interactive design prototypes.",

    cards: [
      [
        "1st Place – NYC Citywide Graphic Arts Competition (11th Grade)",
        "<iframe src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJdQUdL0gArUvdrR2ug5SDz%2FCityTechComp26%3Fnode-id%3D6-19%26starting-point-node-id%3D6%253A19' style='width:100%; height:320px; border:none; border-radius:8px;' allowfullscreen></iframe><br><!-- Add your description here -->"
      ],
      [
        "VouchMatch – Mott Million Dollar Business Idea Challenge ($250 First Round Winner)",
        "<iframe src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fcdr7DXTtiANLTly5hr0rlD%2FUntitled%3Fnode-id%3D1-2%26starting-point-node-id%3D1%253A2' style='width:100%; height:320px; border:none; border-radius:8px;' allowfullscreen></iframe><br><!-- Add your description here -->"
      ],
      [
        "1st Place (Team) – STEM In The South EXPO Hackathon (Seeds Against Hunger)",
        "<iframe src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFnULqpW1MZ2fZ0tMLeWKDz%2FHackathon-2026%3Fnode-id%3D3-2%26starting-point-node-id%3D3%253A2' style='width:100%; height:320px; border:none; border-radius:8px;' allowfullscreen></iframe><br><!-- Add your description here -->"
      ],
      [
        "3rd Place – NYC Citywide Graphic Arts Competition (10th Grade)",
        "<iframe src='https://miap111.github.io/CityTech_Comp/' style='width:100%; height:320px; border:none; border-radius:8px;' title='10th Grade CityTech Comp'></iframe><br><!-- Add your description here -->"
      ]
    ]
  },


  {
    id: "experience",
    name: "Tulip",
    image: imageFiles.flowers.experience,

    background: "#332940",

    title: "Experience & Leadership",

    description:
      "Paid media internships, editorial leadership, and community service.",

    cards: [
      [
        "Paid Media & Journalism Internships",
        "<strong>The Paley Center for Media x Hearst Summer Intern</strong> — Selected out of ~600 applicants (1 of 12 first-year interns). Researched, wrote, directed, produced, and acted in a podcast episode.<br><br><strong>CityLimits Journalism Intern (CUNY Graduate School of Journalism)</strong> — Co-authored and published a news article while building reporting and interviewing skills."
      ],
      [
        "Literary Magazine — Editor-in-Chief",
        "Served as Assistant Editor (11th) and <strong>Editor-in-Chief</strong> (12th). Designed, coded, and maintain the magazine's official website, organized the annual Poetry Slam (performing original work), and co-led <em>Down the Rabbit Hole</em> publishing workshops."
      ],
      [
        "School Leadership & Mentorship",
        "<strong>BrainPower Student Leadership Initiative</strong> (1 of 19 selected) — Co-organized a community drive providing food, school supplies, and essentials to local families.<br><br>Also serve on the <strong>Student Input Committee</strong>, as a <strong>Peer Group Connection Mentor</strong>, and Freshman Orientation leader."
      ],
      [
        "Athletics, Arts & 200+ Service Hours",
        "<strong>National Honor Society</strong> member with <strong>200+ community service hours</strong>.<br><br><strong>Cheer Captain & Cheerleader</strong> • <strong>Tennis Team Manager</strong> • <strong>Graphic Arts Club</strong> • <strong>Culinary Arts Volunteer</strong> assisting students with disabilities in building independent living and workplace skills."
      ]
    ]
  },


  {
    id: "achievements",
    name: "Daisy",
    image: imageFiles.flowers.achievements,

    background: "#383622",

    title: "Awards & Certifications",

    description:
      "National computing recognition, hackathon honors, and verified technical credentials.",

    cards: [
      [
        "Computing & Hackathon Honors",
        "💻 <strong>NCWIT Aspirations in Computing (2026)</strong> – Affiliate Honorable Mention (Greater NYC & Hudson Valley)<br><br>🏆 <strong>Urban Arts Hackathon (Team: codeher)</strong> – Winner of Best Overall, Crowd Favorite, and Best Pitch!"
      ],
      [
        "Verified Technical Certifications",
        "<div style='display:flex; gap:14px; flex-wrap:wrap; align-items:center; justify-content:center; margin-bottom:10px;'><a href='https://www.credly.com/badges/c8e5d185-5d79-499a-8dc5-c7bd8302a450/public_url' target='_blank' title='Verify HTML and CSS Certification'><img src='images/html-badge.png' alt='Certiport IT Specialist HTML and CSS Badge' style='width:105px; height:auto; border-radius:8px;'></a><a href='https://www.credly.com/badges/6ea81f31-4031-42e0-949d-4f078d358a01/public_url' target='_blank' title='Verify Python Certification'><img src='images/python-badge.png' alt='Certiport IT Specialist Python Badge' style='width:105px; height:auto; border-radius:8px;'></a></div>Click a badge above to verify my <strong>Certiport HTML & CSS</strong> and <strong>Certiport Python</strong> certifications on Credly ↗"
      ],
      [
        "Academic Distinctions",
        "<strong>92.6 Cumulative GPA</strong> with Honor Roll every marking period (9th–11th Grade).<br><br><strong>New York State Seal of Biliteracy (Spanish)</strong> & AP Spanish • Completed college-level <em>Business Organization & Management</em>."
      ],
      [
        "Community Contributions",
        "Dedicated to giving back through school leadership, food drives, and mentoring peers in technology and the arts."
      ]
    ]
  },


  {
    id: "creative",
    name: "Hyacinth",
    image: imageFiles.flowers.creative,

    background: "#4a2f24",

    title: "Creative Experiments & Prototypes",

    description:
      "Hackathon projects, app concepts, viral social media growth, and creative explorations.",

    cards: [
      [
        "CodeHer Hackathon Project (Urban Arts)",
        "<iframe src='https://sable-broad-27483700.figma.site/' style='width:100%; height:320px; border:none; border-radius:8px;' title='CodeHer Hackathon Project'></iframe><br><!-- Add your description here -->"
      ],
      [
        "Infosys WTC Trip – Team 'Talking Clean' (Gameplay)",
        "<iframe src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fvhua9J6kw2Pa7k6Z1cNDvO%2FGameplay%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D175-6%26page-id%3D175%253A5%26scaling%3Dscale-down%26starting-point-node-id%3D175%253A6' style='width:100%; height:320px; border:none; border-radius:8px;' allowfullscreen></iframe><br><!-- Add your description here -->"
      ],
      [
        "Congressional App Challenge – PantryPal",
        "<iframe src='https://hefty-flame-75223969.figma.site' style='width:100%; height:320px; border:none; border-radius:8px;' title='PantryPal App'></iframe><br><!-- Add your description here -->"
      ],
      [
        "Viral Content & Social Media",
        "<strong>TikTok Creator:</strong> Built an NYC-life humor page reaching <strong>382K views</strong> and <strong>51.9K likes</strong> in a single month.<br><br><strong>Pinterest Creator:</strong> Scaled an account to <strong>324,000+ monthly views</strong> through visual curation and digital marketing.<br><br><strong>Library Instagram:</strong> Founded the school's official library account, growing it to <strong>50K+ views</strong> across nine videos in three months."
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

  if (sectionEyebrow) {
    sectionEyebrow.textContent = flower.eyebrow || "";
  }

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

    paragraph.innerHTML = card[1];

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