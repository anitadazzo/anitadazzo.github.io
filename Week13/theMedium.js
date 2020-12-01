const milks = ["whole milk", "skim milk", "2% milk", "oat milk", "almond milk", "coconut milk", "soy milk", "no milk", "cream", "foam"];
const addIns = ["splenda", "sweet n low", "cinnamon", "sugar", "no sugar"];
const syrups = ["caramel", "vanilla", "mocha", "hazelnut", "no", "pumpkin spice", "white chocolate"];
const drinks = ["dark roast", "light roast", "medium roast", "americano", "espresso", "macchiato", "latte", "cold brew", "green tea", "black tea", "chai"];
const temp = ["hot", "iced"];

// function to generate new coffee order each game
function randOrder(){
    const randMilk = milks[Math.floor(Math.random()* milks.length)];
    const randAddIn = addIns[Math.floor(Math.random()* addIns.length)];
    const randSyrup = syrups[Math.floor(Math.random()* syrups.length)];
    const randDrink = drinks[Math.floor(Math.random()* drinks.length)];
    const randTemp = temp[Math.floor(Math.random()* temp.length)];
    const order = randTemp + " " + randDrink + " with " + randMilk + ", " + randAddIn + ", and " + randSyrup + " syrup";
    console.log(order);
}
function startGame() {
    $('button').click(function(){
        window.location.href='game.html';
     })
    randOrder();
    myGameArea.start();
}

let cup = document.querySelector('.cup');
let moveBy = 10;
 
window.addEventListener('load', () => {
    cup.style.position = 'absolute';
    cup.style.left = 0;
    cup.style.bottom = 0;
});
 
 
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            cup.style.left = parseInt(cup.style.left) - moveBy + '.8px';
            break;
        case 'ArrowRight':
            cup.style.left = parseInt(cup.style.left) + moveBy + '.8px';
            break;
    }
});

// using each() function to iterate through divs and push id of each div into array $objs
var $objs = [];
$('div').each(function(){
    var id = $(this).attr('id');
    $objs.push(id);
});
console.log($objs);

// selecting random id of divs and storing it in newObj
function randObj(){
    const newObj = $objs[Math.floor(Math.random()* $objs.length)];
    //storing randomly selected img in url string
    var img = "images/" + newObj + ".jpg";
    return img;
}

function generateNew(){
    // generating new object every 3 seconds
    setInterval(function(){
        var myObject = new thing(20, 30, randObj(), 10, 120, "image");
        }, 3000);
    

}
function newImg (width, height, image, x, y, type){
    $this.css("background-image", img);
    $this.width() = 20;
    this.height() = 30;

    

}
