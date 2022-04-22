//variables

let dayOfWeek = "Monday"
console.log(dayOfWeek)
let = dayOfWeek = "Friday"
console.log(`I can't wait for ${dayOfWeek}!`)

//user input
let animalInput = prompt('What is your favorite animal?')
let colorInput = prompt('What is your favorite color?')
console.log(`I've never seen a ${colorInput} ${animalInput}!`)


//conditionals

//my favorite breakfast is Omlettes
//my favorite lunch is chic-fil-a
//my favorite dinner is grilled steak

let timeOfDay = 1100
let mealTime = ''
if (timeOfDay < 1200) {
    mealTime = ("Omlettes")
}
else if (timeOfDay > 1200 < 1700) {
    mealTime = ("Chic-Fil-A")
}
else if (timeOfDay > 1700) {
    mealTime = ("Grilled steak")
}
console.log(mealTime)


//random number

let randomNumber = Math.floor(Math.random() * 10);
if (randomNumber < 3) {
    console.log("Beatles")
}
else if (randomNumber > 2 < 6) {
    console.log("Stones")
}
else if (randomNumber > 5 < 9) {
    console.log("Floyd")
}
else if (randomNumber > 8 < 11) {
    console.log("Hendrix")
}

//loops
for(let i = 0; i < 7; i++){
    console.log("JavaScript is cool!")
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 0; i < 5; i++){
    console.log('hello');
    console.log('goodbye');
}

//functions

function printMovieName()
{
    let favoriteMovie = 'Enterview with the Vampire';
    console.log(favoriteMovie);
}
printMovieName()

function getFavoriteBand(){
    userInput = prompt('What is your favorite band?');
    return userInput;
}

favoriteBand = getFavoriteBand();
console.log(favoriteBand);

function concertDisplay(musicalAct){
    myStreet = prompt('What street do you live on?');
    console.log(`It would be greate if ${musicalAct} played on ${myStreet}`);
}

concertDisplay(favoriteBand);

let desktopItems = ['desk', 'lamp', 'laptop'];
console.log(desktopItems[1]);
desktopItems.push('Infinity Guantlet');
for(i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i]);
}