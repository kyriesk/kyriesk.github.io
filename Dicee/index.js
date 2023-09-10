let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randonPic1 = "./images/dice" + randomNumber1 +".png";

document.querySelector("img").setAttribute("src", randonPic1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randonPic2 = "./images/dice" + randomNumber2 +".png";

document.querySelector(".img2").setAttribute("src", randonPic2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}