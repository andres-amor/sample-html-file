// Declaration.
var myVariable;

// Assignment - give it a value.
myVariable = 'Bob';

// Declaration + Assignment.
var otherVariable = 'John';

// Reassignment.
myVariable = 'Sam';

// Constant.
const myConstantValue = 'John';



// String	
var myVariable = 'Bob';

// Number
var myVariable = 10;

// Boolean
var myVariable = true;
var otherVariable = false;

// Array	
var myVariable = [1, 'Bob', 'Steve', 10];
// Refer to each member of the array like this:
var firstValue = myVariable[0];
var secondValue = myVariable[1];

// Null
var nextWinner = null;

// Object	
var myVariable = document.querySelector('h1');
var otherVariable = {
    name: 'John',
    age: 24,
    sampleProperty: 'sampleValue',
    friends: [
        {
            name: 'Andrew'
        },
        {
            name: 'Sam'
        }
    ]
};

var name = otherVariable.name;
var age = otherVariable.age;
var friendName = otherVariable.friends[0].name;


// Addition ( + )
var sum = 6 + 9;
var name = 'john';
var message1 = 'Hello ' + 'world!';
var message2 = 'Hello ' + name;

// Subtraction, Multiplication, Division  	-, *, /
var substract = 9 - 3;
var multiply = 8 * 2;
var divide = 9 / 3;
var module = 10 % 2; // remainder after division.

// Equality (returns boolean: true/false)   ===	
var myVariable = 3;
var isFour = myVariable === 4; // false
var isThree = myVariable === 3; // true

// Does-not-equal	!== 
var myVariable = 3;
var notThree = myVariable !== 3;

// Greater than, smaller than, greater/smaller or equal.
var myVariable = 3;
var isGreater = myVariable > 10;
var isSmaller = myVariable < 10;
var isGreaterOrEqual = myVariable >= 10;

// Logical Operators
// Not      !
var myVariable = 3;
var notThree = !(myVariable === 3);
var isThree = !notThree;

// AND  &&
var total = 1560;
var accountBalance = 12000;
var accountIsBlocked = false;
var canBuy = !accountIsBlocked && (total < accountBalance);

// OR   || 
var showHelpButton = accountIsBlocked || (accountBalance < total);

// Contorl Flow

// Conditionals
var message;
if (amountOfItems > 0) {
    message = 'You have ' + amountOfItems + ' items on your cart';
} else {
    message = "Your cart is empty";
}

if (accountIsBlocked) {
    // show Help Button.
} else if ((accountBalance <= 0) || ((total > 0) && (accountBalance < total))) {
    // show AddCreditsToAccount Button.
} else {
    // show ConfirmPayment Button.
}

// Switch
var currentState = 'SoldOut';
switch (currentState) {
    case 'Discontinued':
        // show a disabled buy button.
        break;
    case 'InStock':
    // shows in stock quantity.
    case 'SoldOut':
        // show buy button.
        break;
}

// Iterations
// For  init; conditional; nextStep
var prices = [23, 4, 3, 12, 23, 34, 54];
var total = 0;
for (var i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

// While.
var items = [23, 4, 3, 12, 23, 34, 54];
var accountBalance = 120;
var total = 0;
var itemsThatCanBuy = [];
var i = 0;
while (total < accountBalance) {
    total = total + items[i];
    itemsThatCanBuy.push(items[i]);
    i++;
    if (i >= items.length) {
        break;
    }
}

// Functions
function calculateRectanguleSurface(width, height) {
    return width * height;
}

const calculateRectanguleSurface = (width, height) => {
    return width * height;
}

const calculateRectanguleSurface = (width, height) => width * height;

const scrollToTop = () => {
    window.scrollTo(0, 0);
}

// Functions usage
var surface = calculateRectanguleSurface(200, 300);
scrollToTop();


// Native data types properties and methods.
// Arrays
var tvShows = [
    {
        name: 'Rick and Morty',
        episodes: 50
    },
    {
        name: 'Game of Thrones',
        episodes: 64
    }
];

tvShows.push({
    name: 'Simpsons',
    episodes: 210
});

var amountOfShows = tvShows.length;
var allEpisodes;
tvShows.forEach((tvShow) => {
    allEpisodes = allEpisodes + tvShow.episodes;
});

var spanifiedShows = tvShows.map(tvShow => {
    return '<span>' + tvShow.name + '</span> - <span>' + tvShow.episodes + '</span>' ;
});

var commaSeparatedShows = tvShows.map(tvShow => tvShow.name).join(', ');

var allEpisodes = tvShows.reduce((acc, tvShow) => acc + tvShow.episodes, 0);

var onlyShortSeries = tvShows.filter(tvShow => tvShow.episodes < 100);

var myFavouriteShowNames = tvShows
    .filter(tvShow => tvShow.episodes < 70)
    .sort((a, b) => a.episodes - b.episodes)
    .map(tvShow => tvShow.name)
    .join(', ');

// DOM - Element

// Get an element using a query similar as CSS selector.
const cards = document.querySelector('#animals .list');

// Create new elements
var newCard = document.createElement("div");

// Assign classes and attributes
newCard.classList.add("available-animal");
newCard.setAttribute("id", "animal24");

var animalName = "Sparkles"
var newCardText = document.createTextNode(animalName);
newCard.appendChild(newCardText);

// will append #animals .list div this new div: 
// <div class="available-animal" id="animal24">Sparkles</div>
cards.appendChild(newCard);
