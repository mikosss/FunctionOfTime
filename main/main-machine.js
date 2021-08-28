function tmAdditive() {
    gameData.tmf += gameData.tmfAdditive
}

function tmVal() {
    gameData.tmfAdditive = gameData.tmfGenBoost**2
}

function tmfGen() {
    if (gameData.ftVal >= gameData.tmfGenCost) {
        gameData.ftVal += gameData.tmfGenCost
        gameData.tmfGenBoost += 1
        gameData.tmfGenCost *= 10
    }
}

function timeMachUp() {
    if (gameData.tmf >= gameData.timeMachCost) {
        gameData.tmf -= gameData.timeMachCost
        gameData.rawTickspeed *= 0.98
        gameData.timeMachCost *= 2
    }
}

var tmAdd = window.setInterval(function() {
    tmAdditive()
  }, 1000)

var machFunc = window.setInterval(function() {
    tmVal()
  }, 1)