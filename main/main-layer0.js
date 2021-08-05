function additive() {
    gameData.ftVal += gameData.additive
    gameData.dispftVal = thousands_separators(Math.round(gameData.ftVal*100)/100)
    gameData.expoftVal = gameData.ftVal.toExponential(3)
    document.getElementById("dispftVal").innerHTML = gameData.dispftVal
    document.getElementById("expoftVal").innerHTML = gameData.expoftVal
}

function additiveVal() {
    gameData.additive = gameData.aVarVal * gameData.bVarVal * gameData.cVarVal * gameData.dVarVal * (Math.log10(gameData.time+10))**gameData.res3Boost
    gameData.dispAdditive = thousands_separators(Math.round(gameData.additive*100)/100)
    gameData.expoAdditive = gameData.additive.toExponential(3)
    document.getElementById("dispAdditive").innerHTML = gameData.dispAdditive
    document.getElementById("expoAdditive").innerHTML = gameData.expoAdditive
}

var layer01GameLoop = window.setInterval(function() {
    additive()
  }, gameData.tickspeed)

var layer02GameLoop = window.setInterval(function() {
    additiveVal()
  }, 1)