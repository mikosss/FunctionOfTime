function additive() {
    gameData.ftVal += gameData.additive
}

function additiveVal() {
    gameData.additive = gameData.aVarVal * gameData.bVarVal * gameData.cVarVal * gameData.dVarVal * gameData.uVarVal * ((Math.log10(gameData.time+10))**gameData.res3Boost) * gameData.ftTickspeedBoost
}

var additiveGameLoop = window.setInterval(function() {
  additiveVal()
}, 1)

var valGameLoop = function() {
  additive()
  setTimeout(valGameLoop, gameData.tickspeed);
}
setTimeout(valGameLoop, gameData.tickspeed);