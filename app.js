scoreboard = [0,0]


function score(team, points){
    scoreboard[team] += points
    updatescore(team)
    console.log(scoreboard)
}

function updatescore(team){
    document.getElementById(team).innerText = scoreboard[team]
}

function clearScore() {
    console.log(scoreboard)
    scoreboard = [0,0]
    console.log(scoreboard)
    updatescore(0)
    updatescore(1)
}