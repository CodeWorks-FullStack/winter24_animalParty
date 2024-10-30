console.log('🎉🪅')

//#region method examples

function hello(things) {
  console.log('hello', things);
}

// NOTE methods are very common, specifically with built in objects in JS
// a "method" is just function attached to something in JS, in this example the function "greeting" is considered a method
let instructor = {
  name: 'Mick',
  greeting: function () {
    console.log('howdy')
  }
}

// NOTE common array methods

const numArray = [1, 25, 100, 5000, 9999, -2]

for (let i = 0; i < numArray.length; i++) {
  // console.log(numArray[i]);
}

// NOTE forEach wants a function to run "For Each" item in the array
numArray.forEach((number) => {
  // console.log('howdy', number)
})

function higherOrder(func) { // forEach is considered a "higher order" function
  func() // this is considered a "callback" function
}

let total = 0
numArray.forEach((number) => {
  if (number % 2 == 0) {
    total += number
  }
})
console.log('💰', total);


const candies = [
  {
    name: 'twix',
    price: .25
  },
  {
    name: 'reeses',
    price: 1.5
  },
  {
    name: 'skittles',
    price: .01
  }
]

// NOTE Find, finds the one item in the array, where you return true
let foundCandy = candies.find((candy) => {
  console.log(candy);
  if (candy.name == 'skittles') {
    console.log('🎃');
    return true
  }
})
console.log(foundCandy.name, foundCandy.price);
// NOTE find can be shortened to just a condition, conditions return true or false
let shortFoundCandy = candies.find((candy) => candy.name == 'pumpkin spice latte')

if (shortFoundCandy != undefined) {
  console.log('🍬', shortFoundCandy.name);
} else {
  console.warn("no candy found")
}


// NOTE Filter, returns all instances of where the condition is true, creating a new array with "good" items
const cheapCandies = candies.filter((candy) => candy.price < 1)
console.log(cheapCandies);

// NOTE Adding items to arrays
candies.push({ name: 'york mint', price: 1.11 }) // adds items to the end, position

candies.unshift({ name: 'nerds gummy cluster', price: 2 }) // adds items to the start position, and "shifts" all items over by 1

candies.splice(2, 0, { name: 'kitkat', price: 1.5 }) // adds/replace/deletes items from arrays given an index

// NOTE removing items

candies.pop() // removes 1 item from the end
candies.shift() // removes 1 item from the front
candies.splice(2, 1) //removes multiple items, starting at a specific index (2 start), (1 deleteCount)

// NOTE weird but also handy
candies.findLast((candy) => candy.price < 1) // find but in reverse
candies.findIndex((candy) => candy.name == 'skittles') // returns the index number of the find instead of the object
candies.findLastIndex((candy) => candy.price < 1) // returns the index number of the last item where the condition is true

//#endregion ----



//#region  🗃️ STATE -----

const animals = [
  {
    name: 'cris p.',
    emoji: '🐖',
    costume: '🩻'
  },
  {
    name: 'Arby',
    emoji: '🐎',
    costume: '👻'
  },
  {
    name: 'Beefy',
    emoji: '🦏',
    costume: '🧛'
  },
  {
    name: 'Dale',
    emoji: '🐅',
    costume: '👻'
  },
  {
    name: 'Doug',
    emoji: '🦒',
    costume: '🦄'
  },
  {
    name: 'Voranthamoar',
    emoji: '🐉',
    costume: '🩻'
  },
  {
    name: 'Georgie',
    emoji: '🐒',
    costume: '🦄'
  },
  {
    name: 'Jaquavion',
    emoji: '🐄',
    costume: '👻'
  },
]
let costumes = ['👻', '🦄', '🩻', '🧛']
//#endregion ---



//#region 🧠 Logic


function changeAnimalsCostumes() {
  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i]
    // console.log('🤡', animal);
    // animal.costume = '🩻'
    // animal.costume = costumes[2]
    let randomNumber = Math.round(Math.random() * costumes.length - 1)
    animal.costume = costumes[randomNumber]
    console.log('costume Change', animal);
  }
  drawAllCostumes()
}


//#endregion ---


//#region 🖼️ Visuals, Graphics, Document manipulators
const ghostsElm = document.getElementById('ghosts')
const vampsElm = document.getElementById('vampires')
const skelesElm = document.getElementById('skeletons')
const unicornsElm = document.getElementById('unicorns')


function drawGhosts() {
  ghostsElm.innerText = '' // empty the element, of OLD data
  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i]
    // console.log('drawing ghosts', animal);
    if (animal.costume == '👻') {
      // console.log('this animal dressed as a ghost');
      ghostsElm.innerHTML += `<p>${animal.emoji} ${animal.name}</p>` // and NEW data into element
    }
  }
}
drawGhosts()

function drawSkeletons() {
  skelesElm.innerHTML = '' // clear old data
  for (let i = 0; i < animals.length; i++) {
    // console.log(i);
    let animal = animals[i]
    if (animal.costume == '🩻') {
      // console.log('in skeleton costume', animal.name);
      skelesElm.innerHTML += `<p>${animal.name} ${animal.emoji}</p>` // add in new data
    }
  }

}
drawSkeletons()


function drawUnicorns() {
  unicornsElm.innerHTML = ''
  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i] // current animal in loop
    if (animal.costume == '🦄') {
      console.log('🦄?', animal);
      unicornsElm.innerHTML += `<p>${animal.name} ${animal.emoji}</p>`
    }
  }
}
drawUnicorns()


function drawVampires() {
  // get vampires out of array
  const vamps = animals.filter((animal) => animal.costume == '🧛')
  // draw vampires to screen
  let vampsContent = ''
  vamps.forEach((vamp) => vampsContent += `${vamp.name} ${vamp.emoji}`)
  vampsElm.innerText = vampsContent
}

drawVampires() // invoking this function after it's written, runs it on load of app.js


function drawAllCostumes() { // draw utility, if i need to draw more than one, just re-draw all
  drawGhosts()
  drawSkeletons()
  drawUnicorns()
  drawVampires()
}

//#endregion ---