const round = parseInt(prompt("How many round u wanna play"));
let score = 0;

for(let i=0; i<round; i++){
    const bot_pick = Math.floor(Math.random()*3)+1;
    let user_input = parseInt(prompt("pick Rock = 1, Paper = 2, Scissor = 3"));

    alert((() => {
        if(user_input === bot_pick){
            score++;
            return `draw at round ${i+1}`;
        } 
        if (
            (user_input === 1 && bot_pick === 3) || 
            (user_input === 2 && bot_pick === 1) ||
            (user_input === 3 && bot_pick === 2)    
        ) {
            score++;
            return `You win! 🎉 at round ${i+1}`;
        }
        return `You lose! 🤖 at round ${i+1}` ;
    })()); 
}

if(round-score > score) alert(`Final score YOU : ${score} BOT : ${round-score} YOU LOSE`)
else alert(`Final score YOU : ${score} BOT : ${round-score} YOU WIN!`)