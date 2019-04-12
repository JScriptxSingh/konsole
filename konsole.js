
// konsole - Fri April 12, 2019 01:42 AM
// copyright 2019 Jass Bhamra
// jassbhamra@outlook.com
// jassbhamra.com
// https://github.com/jassbhamra/konsole.git

const chalk = require('chalk');
const cLog = console.log;
let tab = 0;
var justExited = false, _fxLabel = true, _fxTree = true, _fxNums = true, _label = true;

// Enter Function
function enFx(msg = false) {
    tab++;

    if (!(mtext = msg)) {
        mtext = "";
    }

    if (justExited) {
        space();
        justExited = false;
    }
    cLog(chalk`{gray ${getTabSpace()}} {cyan ${((_fxLabel) ? 'Fx' : '')}}{yellow ${((_fxNums) ? tab : '')}}{cyan ${((_fxLabel) ? ':Enter' : '')}} {yellow.bold ${mtext}}`);
}

// Exit Function
function exFx(msg = false) {
    if (!(mtext = msg)) {
        mtext = "";
    }
    cLog(chalk`{gray ${getTabSpace()}} {cyan ${((_fxLabel) ? 'Fx' : '')}}{yellow ${((_fxNums) ? tab : '')}}{cyan ${((_fxLabel) ? ':Exit' : '')}} {yellow.bold ${mtext}}`);
    justExited = true;

    tab--;
}

// For entering blank line in console window
function space() {
    cLog(chalk`{gray ${getTabSpace()}}`);
}

// Start app
function startApp(msg = false, data = false) {
    let mtext;

    if (!(mtext = msg)) {
        mtext = "";
    }
    justExited = false;

    cLog(chalk`{gray ${getTabSpace()}} {green Starting Application ${mtext}}`);
}

// Close App
function closeApp(msg = false, data = false) {
    let mtext = "";

    if (msg) {
        mtext = msg;
    }

    cLog(chalk`{gray ${getTabSpace()}} {green Closing Application ${mtext}}`);

    if (data) {
        cLog(chalk`{gray ${getTabSpace()}} {magenta Data recieved on close}`);
        for (j = 1; j < data.length; j++) {
            cLog(chalk`{gray ${getTabSpace()}} {magenta ${data[j][0]}} : ${data[j][1]}`);
        }
    }
}

// Error
function error(msg = false) {
    let mtext;

    if (!(mtext = msg)) {
        mtext = "Error has been called without message.";
    }

    justExited = false;
    cLog(chalk`{gray ${getTabSpace()}} {cyan ERROR:} {red ${mtext}}`);
}

// Success
function success(msg = false) {
    let mtext;

    if (!(mtext = msg)) {
        mtext = "Info has been called without message.";
    }

    justExited = false;
    cLog(chalk`{gray ${getTabSpace()}} {cyan Success:} {green ${mtext}}`);
}

// Info
function info(msg = false) {
    let mtext;

    if (!(mtext = msg)) {
        mtext = "Info has been called without message.";
    }

    justExited = false;
    cLog(chalk`{gray ${getTabSpace()}} {cyan INFO:} {blueBright ${mtext}}`);
}

// Native log pass through`
function log(msg) {
    if (msg) {
        cLog(msg);
    } else {
        error("Log has been called without message.");
    }
    justExited = false;
}

// Generating tab string
function getTabSpace() {
    if (_fxTree) {
        let tabspace = '';

        for (i = tab; i > 0; i--) {
            tabspace += " - |";
        }
        return tabspace;
    } else {
        return "";
    }
}

// Toggle display tree
function fxTree(setting) {
    _fxTree = setting;
}

// Toggle display function labels
function fxLabel(setting) {
    _fxLabel = setting;
}

// Toggle all other labels
function label(setting) {
    _label = setting;
}

// Toggle display function num
function fxNums(setting) {
    _fxNums = setting;
}