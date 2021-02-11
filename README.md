## Space Age Calculator with Jest Testing Framework

Fun application that takes your age, and your life expectancy and tells you your expected age left converted to various solar bodies including Mars, Venus, Mercury & Jupiter.

By Austin Schrader

## Description

This project was created by Austin Schrader for the Friday project where we are using Test Driven Development and the Jest testing framework. It was created using CSS, HTML, JavaScript, Git, GitHub, and Markdown, VSCode, Emmet, Prettier, and Jest.

## Setup

1. Download this repository by clicking the "Clone or Download" button
2. Navigate to the folder where it downloaded
3. Open the index.html file inside of your preferred browser
4. Congratulations, this is the website!

## Specs

### Describe: 
User Class <br>
#### Test: "should correctly output the Earth age" <br>
let user = new User(45); <br>
Expect(user.earthAge).toEqual(45); 

#### Test: "should correctly output the Mercury age"<br>
let user = new User(45);<br>
Expect(user.mercuryAge()).toEqual(45 / 0.24);<br>

#### Test: "should correctly output the Venus age"<br>
let user = new User(45);<br>
Expect(user.venusAge()).toEqual(45 / 0.62);<br>

#### Test: "should correctly output the Mars age"<br>
let user = new User(45);<br>
Expect(user.marsAge()).toEqual(45 / 1.88);<br>

#### Test: "should correctly output the Jupiter"<br>
let user = new User(45);<br>
Expect(user.jupiterAge()).toEqual(45 / 11.86);<br>

#### Test: "should correctly output the life expectancy left in Earth years"<br>
let user = new User(45);<br>
Expect(user.earthYearsLeft()).toEqual(78.54 - 45);<br>

#### Test: "should correctly output the life expectancy left in Mercury years"<br>
let user = new User(45);<br>
Expect(user.mercuryYearsLeft()).toEqual((78.54 - 45) / 0.24);<br>

#### Test: "should correctly output the life expectancy left in Venus years"<br>
let user = new User(45);<br>
Expect(user.venusYearsLeft()).toEqual((78.54 - 45) / 0.62);<br>

#### Test: "should correctly output the life expectancy left in Mars years"<br>
let user = new User(45);<br>
Expect(user.marsYearsLeft()).toEqual((78.54 - 45) / 1.88);<br>

#### Test: "should correctly output the life expectancy left in Jupiter years"<br>
let user = new User(45);<br>
Expect(user.jupiterYearsLeft()).toEqual((78.54 - 45) / 11.86);<br>

## Known Bugs

At this time, there are no known bugs. If you see spot a bug feel free to make a pull request.

## Technologies Used

- HTML
- CSS
- Git
- Github
- JavaScript
- VSCode
- Markdown
- Emmet (Extension)
- Prettier (Extension)
- Jest Testing Framework

## License

This repository is licensed under the MIT license.

Copyright (c) 2020 by _Austin Schrader_
