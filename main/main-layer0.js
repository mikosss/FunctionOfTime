function additive() {
    gameData.ftVal += gameData.additive
    gameData.additive = gameData.aVarVal * gameData.bVarVal * gameData.cVarVal * gameData.dVarVal
    gameData.dispftVal = thousands_separators(Math.round(gameData.ftVal*100)/100)
    gameData.expoftVal = gameData.ftVal.toExponential(3)
    gameData.dispAdditive = thousands_separators(Math.round(gameData.additive*100)/100)
    gameData.expoAdditive = gameData.additive.toExponential(3)
    document.getElementById("dispftVal").innerHTML = gameData.dispftVal
    document.getElementById("expoftVal").innerHTML = gameData.expoftVal
    document.getElementById("dispAdditive").innerHTML = gameData.dispAdditive
    document.getElementById("expoAdditive").innerHTML = gameData.expoAdditive
}

var layer0GameLoop = window.setInterval(function() {
    additive()
  }, gameData.tickspeed)