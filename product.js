let imgContainers = document.getElementsByClassName("img");
let productsName = document.getElementsByClassName("product-name");
let prices = document.getElementsByClassName("price");

let images = [
    "url(ab_roller.jpg)" , "url(adjustable_dumbells.jpg)" , "url(bp_monitor.jpg)" , "url(fitness_band.jpg)" , "url(gymnastic_rings.jpg)" , "url(hand_gripper.jpg)" , "url(pullup_bar.jpg)" , "url(resistance_band.jpg)" , 
    "url(skipping_rope.jpg)" , "url(treadmill.jpg)" , "url(wrist_band.jpg)"
]

let products = [
    ["Ab Roller" , "Price: 349" ],
    ["Adjustable Dumbells" , "Price: 17999" ],
    ["BP Monitor" , "Price: 3999" ],
    ["Fitness Band" , "Price: 2499" ],
    ["Gymnastic Rings" , "Price: 1499" ],
    ["Hand Gripper" , "Price: 249" ],
    ["Pull Up Bar" , "Price: 999" ],
    ["Resistance Band" , "Price: 499" ],
    ["Skipping Rope" , "Price: 349" ],
    ["Treadmill" , "Price: 6999" ],
    ["Wrist Band" , "Price: 499" ]
]

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    imgContainers[i].style.backgroundImage = images[i];
    productsName[i].innerHTML = product[0]; 
    prices[i].innerHTML = product[1];
}