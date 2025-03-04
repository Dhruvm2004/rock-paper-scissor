let user = 0;
let comp = 0;
let comment = document.querySelector('#msg');

const draw = () => {
    comment.innerText = "Draw";
    comment.style.backgroundColor = "grey";  // Neutral color for draw
}

const showWinner = (userwin) => {
    if (userwin) {
        comment.innerText = "User wins";
        comment.style.backgroundColor = "green";  // Green for user win
    } else {
        comment.innerText = "Comp wins";
        comment.style.backgroundColor = "red";  // Red for comp win
    }
}

const choices = document.querySelectorAll('.choice');

const genCompChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return arr[randIdx];
}

const playGame = (choiceid) => {
    console.log("clicked", choiceid);
    const compChoice = genCompChoice();
    console.log("compChoice", compChoice);

    if (choiceid == compChoice) {
        console.log("draw");
        draw();
    } else {
        let userwin = true;
        if (choiceid == "rock") {
            userwin = compChoice != "paper";  // Rock loses to paper
        } else if (choiceid == "paper") {
            userwin = compChoice != "scissors";  // Paper loses to scissors
        } else if (choiceid == "scissors") {
            userwin = compChoice != "rock";  // Scissors lose to rock
        }

        if (userwin) {
            console.log("user wins");
            user++;
            document.getElementById('user').innerText = user;
            showWinner(true);  // Set green color
        } else {
            console.log("comp wins");
            comp++;
            document.getElementById('comp').innerText = comp;
            showWinner(false);  // Set red color
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const choiceid = choice.getAttribute('id');
        console.log("choice clicked", choiceid);
        playGame(choiceid);
    })
});
