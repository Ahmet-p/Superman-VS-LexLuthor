var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var modal = document.getElementById('startModal');
var startBtn = document.getElementById('startBtn');
var closeBtn = document.getElementsByClassName('close')[0];
var gameStarted = false; 


function showModal() {
    modal.style.display = 'block';
}

function startGame() {
    modal.style.display = 'none';
    gameStarted = true; 
    resetGame(); 
}

function resetGame() {
    counter = 0; 
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100); // 

    block.style.animation = "none"; 
    block.offsetHeight; 
    block.style.animation = "block 1s infinite linear"; 

    character.classList.remove("animate");
}
window.onload = function() {
    showModal();
}

startBtn.onclick = function() {
    startGame();
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
    if (!gameStarted) {
        startGame();
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        if (!gameStarted) {
            startGame();
        }
    }
}

function jump() {
    if (character.classList.contains("animate")) { return; }
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function() {
    if (!gameStarted) return; 

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        endGame();
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);

function endGame() {
    block.style.animation = "none"; 
    alert("GAME OVER score = " + Math.floor(counter / 100)); 
    gameStarted = false; 
    resetGame(); 

    startGame();
}
