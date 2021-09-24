cards = [
    (html = {
        name: "html5",
        image: "./assets/images/html.png",
        attributes: {
            popularity: 8,
            difficulty: 6,
            utility: 9
        }
    }),
    (css = {
        name: "css3",
        image:
            "./assets/images/css.jpg",
        attributes: {
            popularity: 8,
            difficulty: 5,
            utility: 9
        }
    }),
    (javascript = {
        name: "js",
        image:
            "./assets/images/js.png",
        attributes: {
            popularity: 9,
            difficulty: 7,
            utility: 10
        }
    }),
    (c = {
        name: "c",
        image:
            "./assets/images/c.png",
        attributes: {
            popularity: 7,
            difficulty: 7,
            utility: 7
        }
    }),
    (py = {
        name: "python",
        image:
            "./assets/images/python.jpg",
        attributes: {
            popularity: 9,
            difficulty: 5,
            utility: 10
        }
    }),
    (asm = {
        name: "assembly",
        image:
            "./assets/images/asm.png",
        attributes: {
            popularity: 6,
            difficulty: 9,
            utility: 6
        }
    })
];

var unknow = "./assets/images/unknow.png";
var player = 0;
var computer = 0;

function sortearCarta() {
    var r = Math.floor(Math.random() * 6);
    player = cards[r];

    var s = r;

    while (s == r) {
        s = Math.floor(Math.random() * 3);
    }

    computer = cards[s];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("choice").innerHTML = "Choose your attributes";
    cardsInScreen();
}

function cardsInScreen() {
    var playerCard = document.getElementById("carta-jogador");
    playerCard.style.backgroundImage = `url(${player.image})`;

    var computerCard = document.getElementById("carta-maquina");
    computerCard.style.backgroundImage = `url(${unknow})`;

    var frame =
        "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";

    var html = "<div id='opcoes' class='carta-status'>";

    var htmlOptions = "";

    for (var i in player.attributes) {
        if (i == "utility") {
            htmlOptions +=
                "<input type='radio' name='attribute' value='" +
                i +
                "'>" +
                i +
                "&nbsp&nbsp&nbsp: " +
                player.attributes[i] +
                "<br>";
        }
        else {
            htmlOptions +=
                "<input type='radio' name='attribute' value='" +
                i +
                "'>" +
                i +
                ": " +
                player.attributes[i] +
                "<br>";
        }
    }

    var computerOptions = "";

    for (var i in player.attributes) {
        if (i == "utility") {
            computerOptions += "<p>" + i + "&nbsp&nbsp&nbsp: ?" + "</p>";
        }
        else {
            computerOptions += "<p>" + i + ": ?" + "</p>";
        }
    }

    var playerName = `<p class="carta-subtitle">${player.name}</p>`;
    var computerName = `<p class="carta-subtitle">?</p>`;

    playerCard.innerHTML = frame + playerName + html + htmlOptions + "</div>";
    computerCard.innerHTML =
        frame + computerName + html + computerOptions + "</div>";
}

function jogar() {
    var selectedButton = getSelectedAttribute();
    var computerCard = document.getElementById("carta-maquina");
    var computerName = `<p class="carta-subtitle">${computer.name}</p>`;
    var computerOptions = "";

    computerCard.style.backgroundImage = `url(${computer.image})`;

    for (var i in player.attributes) {
        if (i == "utility") {
            computerOptions += "<p>" + i + "&nbsp&nbsp&nbsp: " + computer.attributes[i] + "</p>";
        }
        else {
            computerOptions += "<p>" + i + ": " + computer.attributes[i] + "</p>";
        }
    }

    document.getElementById("btnJogar").disabled = true;

    var frame =
        "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";

    var html = "<div id='opcoes' class='carta-status'>";

    computerCard.innerHTML =
        frame + computerName + html + computerOptions + "</div>";

    if (selectedButton == "difficulty") {
        if (player.attributes[selectedButton] < computer.attributes[selectedButton]) {
            document.getElementById("resultado-final").innerHTML = "You win!";
        } else if (
            player.attributes[selectedButton] > computer.attributes[selectedButton]
        ) {
            document.getElementById("resultado-final").innerHTML = "You lose!";
        } else {
            document.getElementById("resultado-final").innerHTML = "You got a tie!";
        }
    }
    else {
        if (player.attributes[selectedButton] > computer.attributes[selectedButton]) {
            document.getElementById("resultado-final").innerHTML = "You win!";
        } else if (
            player.attributes[selectedButton] < computer.attributes[selectedButton]
        ) {
            document.getElementById("resultado-final").innerHTML = "You lose!";
        } else {
            document.getElementById("resultado-final").innerHTML = "You got a tie!";
        }
    }
}

function getSelectedAttribute() {
    var selectedButton = document.getElementsByName("attribute");
    for (var i in selectedButton) {
        if (selectedButton[i].checked) return selectedButton[i].value;
    }
}

function reload() {
    location.reload();
}