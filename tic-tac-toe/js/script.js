var i = 2;

var one1 = 0;
var two2 = 0;
var three3 = 0;
var four4 = 0;
var five5 = 0;
var six6 = 0;
var seven7 = 0;
var eight8 = 0;
var nine9 = 0;

xPlayer = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false,
    'eight': false,
    'nine': false
};

oPlayer = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false,
    'eight': false,
    'nine': false
};

tie = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false,
    'eight': false,
    'nine': false
};

function one() {
    var btn = document.getElementById("1");
    one1++;

    if (one1 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.one = true;
            tie.one = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.one = true;
            tie.one = true;
            oCheckWin();
            checkTie();
        }
    }
}

function two() {
    var btn = document.getElementById("2");
    two2++;

    if (two2 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.two = true;
            tie.two = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.two = true;
            tie.two = true;
            oCheckWin();
            checkTie();
        }
    }
}

function three() {
    var btn = document.getElementById("3");
    three3++;

    if (three3 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.three = true;
            tie.three = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.three = true;
            tie.three = true;
            oCheckWin();
            checkTie();
        }
    }
}

function four() {
    var btn = document.getElementById("4");
    four4++;

    if (four4 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.four = true;
            tie.four = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.four = true;
            tie.four = true;
            oCheckWin();
            checkTie();
        }
    }
}

function five() {
    var btn = document.getElementById("5");
    five5++;

    if (five5 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.five = true;
            tie.five = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.five = true;
            tie.five = true;
            oCheckWin();
            checkTie();
        }
    }
}

function six() {
    var btn = document.getElementById("6");
    six6++;

    if (six6 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.six = true;
            tie.six = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.six = true;
            tie.six = true;
            oCheckWin();
            checkTie();
        }
    }
}

function seven() {
    var btn = document.getElementById("7");
    seven7++;

    if (seven7 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.seven = true;
            tie.seven = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.seven = true;
            tie.seven = true;
            oCheckWin();
            checkTie();
        }
    }
}

function eight() {
    var btn = document.getElementById("8");
    eight8++;

    if (eight8 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.eight = true;
            tie.eight = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.eight = true;
            tie.eight = true;
            oCheckWin();
            checkTie();
        }
    }
}

function nine() {
    var btn = document.getElementById("9");
    nine9++;

    if (nine9 == 1) {
        if (i % 2 == 1) {
            btn.innerHTML = ('<p>X</p>');
            i++;
            xPlayer.nine = true;
            tie.nine = true;
            xCheckWin();
            checkTie();
        }
        else {
            btn.innerHTML = ('<p>O</p>');
            i++;
            oPlayer.nine = true;
            tie.nine = true;
            oCheckWin();
            checkTie();
        }
    }
}

function oCheckWin() {
    if (oPlayer.one == true && oPlayer.two == true && oPlayer.three == true) {
        alert("O wins!");
        window.location.reload();
    }
    if (oPlayer.four == true && oPlayer.five == true && oPlayer.six == true) {
        alert("O wins!");
        window.location.reload();
    }
    if (oPlayer.seven == true && oPlayer.eight == true && oPlayer.nine == true) {
        alert("O wins!");
        window.location.reload();
    }
    if (oPlayer.one == true && oPlayer.four == true && oPlayer.seven == true) {
        alert("O wins!");
        window.location.reload();
    }
    if (oPlayer.two == true && oPlayer.five == true && oPlayer.eight == true) {
        alert("O wins!");
        window.location.reload();
    }
    if (oPlayer.three == true && oPlayer.six == true && oPlayer.nine == true) {
        alert("O wins!");
        window.location.reload();
    }
    if (oPlayer.one == true && oPlayer.five == true && oPlayer.nine == true) {
        alert("O wins!");
        window.location.reload();
    }
    if (oPlayer.three == true && oPlayer.five == true && oPlayer.seven == true) {
        alert("O wins!");
        window.location.reload();
    }
}

function xCheckWin() {
    if (xPlayer.one == true && xPlayer.two == true && xPlayer.three == true) {
        alert("X wins!");
        window.location.reload();
    }
    if (xPlayer.four == true && xPlayer.five == true && xPlayer.six == true) {
        alert("X wins!");
        window.location.reload();
    }
    if (xPlayer.seven == true && xPlayer.eight == true && xPlayer.nine == true) {
        alert("X wins!");
        window.location.reload();
    }
    if (xPlayer.one == true && xPlayer.four == true && xPlayer.seven == true) {
        alert("X wins!");
        window.location.reload();
    }
    if (xPlayer.two == true && xPlayer.five == true && xPlayer.eight == true) {
        alert("X wins!");
        window.location.reload();
    }
    if (xPlayer.three == true && xPlayer.six == true && xPlayer.nine == true) {
        alert("X wins!");
        window.location.reload();
    }
    if (xPlayer.one == true && xPlayer.five == true && xPlayer.nine == true) {
        alert("X wins!");
        window.location.reload();
    }
    if (xPlayer.three == true && xPlayer.five == true && xPlayer.seven == true) {
        alert("X wins!");
        window.location.reload();
    }
}

function checkTie() {
    if (tie.one == true && tie.two == true && tie.three == true && tie.four == true && tie.five == true && tie.six == true && tie.seven == true && tie.eight == true && tie.nine) {
        alert("Tie!");
        window.location.reload();
    }
}