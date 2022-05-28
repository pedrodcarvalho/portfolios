// Hello World animation
let helloWorld = document.getElementById("hello-world").getElementsByTagName("h1");

let yellow = getComputedStyle(document.documentElement).getPropertyValue('--yellow');
let purple = getComputedStyle(document.documentElement).getPropertyValue('--purple');

let changeColor = 0;

setInterval(() => {
    if (changeColor % 2 == 0) {
        helloWorld[0].style.color = yellow;
        helloWorld[0].style.paddingRight = "50px";
        helloWorld[0].style.paddingLeft = "0px";
        helloWorld[1].style.color = purple;
        helloWorld[1].style.paddingLeft = "50px";
        helloWorld[1].style.paddingRight = "0px";
        helloWorld[0].style.transition = "all 0.75s";
        helloWorld[1].style.transition = "all 0.75s";
    } else {
        helloWorld[0].style.color = purple;
        helloWorld[0].style.paddingRight = "0px";
        helloWorld[0].style.paddingLeft = "50px";
        helloWorld[1].style.color = yellow;
        helloWorld[1].style.paddingLeft = "0px";
        helloWorld[1].style.paddingRight = "50px";
    }

    changeColor++;
}, 1000);

// Dark mode toggle
let colorMode = document.getElementById("color-mode");

let white = getComputedStyle(document.documentElement).getPropertyValue('--white');
let black = getComputedStyle(document.documentElement).getPropertyValue('--black');

let darkModeBanner = document.getElementById("dark-mode-banner");

let darkMode = new Audio('./public/audios/dark-mode.mp3');

let fadeControl = 0;

colorMode.addEventListener("click", () => {
    if (colorMode.innerHTML == `Light Mode <i class="fa-solid fa-sun"></i>`) {
        document.documentElement.style.setProperty('--white', white);
        document.documentElement.style.setProperty('--black', black);

        colorMode.innerHTML = `Dark Mode <i class="fa-solid fa-moon"></i>`;

        darkModeBanner.style.zIndex = "-1";

        darkMode.pause();
        darkMode.currentTime = 0;

        fadeControl = 0;
        darkModeBanner.style.opacity = "0";
        darkModeBanner.style.display = "none";
    } else {
        document.documentElement.style.setProperty('--white', black);
        document.documentElement.style.setProperty('--black', white);

        darkModeBanner.style.zIndex = "1";

        colorMode.innerHTML = `Light Mode <i class="fa-solid fa-sun"></i>`;

        darkMode.play();

        fadeIn();
    }
});

function fadeIn() {
    fadeControl = 0;
    darkModeBanner.style.opacity = "0";
    darkModeBanner.style.display = "block";

    setInterval(() => {
        if (fadeControl >= 10)
            clearInterval(this);

        darkModeBanner.style.opacity = fadeControl / 10;

        fadeControl++;
    }, 100);
}

// Close dark mode banner
let buttonClose = document.getElementById("button-close");

buttonClose.addEventListener(("click"), () => {
    fadeControl = 0;
    darkModeBanner.style.opacity = "0";
    darkModeBanner.style.display = "none";

    darkModeBanner.style.zIndex = "-1";
});

// Greeting animation
let greeting = document.getElementById("name");

let greetingControl = 0;

const greetingPhrase = "I'm Pedro, a prospective software engineer.";

setInterval(() => {
    if (greetingControl < greetingPhrase.length) {
        greeting.innerHTML += greetingPhrase[greetingControl];

        if (greetingPhrase[greetingControl] == ",")
            greeting.innerHTML += "<br>";

    }
    else
        setTimeout(() => {
            greetingControl = 0;
            greeting.innerHTML = "";
        }, 1000);

    greetingControl++
}, 100);

// Navbar handle
let showNavBar = document.getElementById("show-nav-bar");

window.onscroll = () => {
    if (window.scrollY > 100)
        showNavBar.style.display = "flex";
    else if (window.scrollY < 100) {
        showNavBar.style.display = "none";
        navBar.style.display = "none";
    }
}

// Show navbar
let navBar = document.getElementById("nav-bar");

showNavBar.addEventListener("click", () => {
    if (navBar.style.display == "none") {
        showNavBar.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
        navBar.style.display = "flex";
        navBar.style.position = "fixed";
        navBar.style.marginTop = "50px";
        navBar.style.left = "50%";
        navBar.style.transform = "translate(-50%)";
    }
    else {
        showNavBar.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
        navBar.style.display = "none";
    }
});

// Contact form
window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };

formbutton("create", {
    action: "https://formspree.io/f/mayvvoyz",
    fields: [
        {
            type: "name",
            label: "Name:",
            name: "Name",
            required: true,
        },
        {
            type: "textarea",
            label: "Message:",
            name: "Message",
            required: true,
        },
        { type: "submit" }
    ]
});

// Invisible text
let free = document.getElementById("its-free");

if (free.style.opacity === 100) {
    free.style.transition = "";
}


//Appear quote
let quote = document.getElementById("quote");

let quoteOpacity = 0

setTimeout(() => {
    setInterval(() => {
        if (quote.style.opacity < 1) {
            quote.style.opacity = quoteOpacity / 10;
        }
        else
            return;


        quoteOpacity++;
    }, 100);

}, 1000);

//Programming quotes API
let programmingButton = document.getElementById("programming-button");
let programmingQuote = document.getElementById("programming-quote");

programmingButton.addEventListener("click", () => {
    fetch("https://programming-quotes-api.herokuapp.com/Quotes/Random").
        then(response => response.json()).
        then(data => {
            programmingQuote.innerHTML = data.en;
        });
});
