const gif = document.querySelector('.giffy');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question')
const buttons = document.querySelector('.buttons')
const text = document.querySelector('.text')
const body = document.querySelector('body')



function yes() {
    text.style.display = 'block'
    buttons.style.display = 'none'
    question.textContent = "Yey! It's a date then"
    gif.src = '/assets/giphy.gif'


    createHearts(100);
}




var phrase = ['why no?', 'u dont want?:(', 'still no?', 'should be yes!', 'yess ;)']
var gifs = ['/assets/hug-me-im-sad.gif', '/assets/goma-peach.gif', '/assets/cash-app-empty.gif', '/assets/sad.gif', '/assets/cry-cute.gif', '/assets/reaction-sad.gif']
var noCount = 0

function no() {
    if (noCount != 5) {
        noBtn.style.position  = 'absolute'
        var newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        var newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
        noBtn.textContent = phrase[noCount];
        gif.src = gifs[noCount]
        noCount++;
    }else {

        yes()
    }


}



function createHearts(numbers) {

for (var i = 0; i < numbers; i++) {
    var heart = document.createElement("img");

    heart.src = '/assets/Heart_corazón.svg.png';
    heart.alt = "Heart";
    heart.classList.add("heart");
    heart.classList.add("heart" + (i % 3 + 1)); // Assigning different animation classes
    var size = Math.floor(Math.random() * 51) + 50; // Random size between 50 and 100
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.left = Math.random() * (window.innerWidth - size) + "px";
    heart.style.top = Math.random() * (window.innerHeight - size) + "px";
    document.querySelector('body').appendChild(heart);
    setTimeout(function() {
        heart.remove();
    }, 1500); // Remove the heart after 1.5 seconds
}
}

