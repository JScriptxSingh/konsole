# konsole
Kustom console logging with simple functions.

Debugging JavaScript can be painful and often means spending hours looking at boring console logs. I made my own console logger &mdash; but with customizable commands to give an interactive logging experience.

# Getting Started

Simply include `konsole.js` in your project or copy/past/adapt the code.

```javascript
const console = require('konsole');
```

# Log App Events
```javascript
console.startApp("Starting app");
console.closeApp("Closing app");
```
collect data during app session and display at exit
```javascript
// Define array variable and give a dummy structure
var data = [['key', 'value']];

// Add data into array
data.push(['firstName', 'John']);
data.push(['lastName', 'Doe']);

// Pass array to `.closeApp` to display data at end
console.closeApp("Closing app", data);
```


console.enFx("Entering function");
console.exFx("Exiting function");

&copy; 2019 [Jass Bhamra](https://jassbhamra.com)
