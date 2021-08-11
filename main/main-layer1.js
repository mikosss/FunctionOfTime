function val() {
  gameData.aVarVal = gameData.rawAVarVal * gameData.resBooster
  gameData.bVarVal = gameData.rawBVarVal * gameData.resBooster
  gameData.cVarVal = gameData.rawCVarVal * gameData.resBooster
  gameData.dVarVal = gameData.rawDVarVal * gameData.resBooster
  gameData.multUVarVal = gameData.rawUVarVal / gameData.uVarVal
  gameData.rawUVarVal = Math.log(gameData.ftVal) / Math.log(2)
}

function time() {
  gameData.time += gameData.timespeed * gameData.uVarVal
}

function aVarUp() {
    if (gameData.ftVal >= gameData.aVarCost) {
    gameData.ftVal -= gameData.aVarCost
    gameData.rawAVarVal += 1
    gameData.aVarCost *= 1.5
  }
}

function bVarUp() {
    if (gameData.ftVal >= gameData.bVarCost) {
    gameData.ftVal -= gameData.bVarCost
    gameData.rawBVarVal += 1
    gameData.bVarCost *= 1.5
  }
}

function cVarUp() {
    if (gameData.ftVal >= gameData.cVarCost) {
    gameData.ftVal -= gameData.cVarCost
    gameData.rawCVarVal += 1
    gameData.cVarCost *= 1.5
  }
}

function dVarUp() {
    if (gameData.ftVal >= gameData.dVarCost) {
    gameData.ftVal -= gameData.dVarCost
    gameData.rawDVarVal += 1
    gameData.dVarCost *= 1.5
  }
}

function uVarUp() {
   if (gameData.rawUVarVal >= gameData.uVarVal) {
     gameData.uVarVal *= gameData.multUVarVal
     gameData.ftVal = 1 
     gameData.additive = 0
     gameData.rawAVarVal = 0
     gameData.aVarCost = 1
     gameData.rawBVarVal = 1
     gameData.bVarCost = 100
     gameData.rawCVarVal = 1
     gameData.cVarCost = 10000
     gameData.rawDVarVal = 1
     gameData.dVarCost = 1000000
   }
}

var displayGameLoop = window.setInterval(function() {
    val()
  }, 1)

var timeGameLoop = function() {
    time()
  setTimeout(timeGameLoop, gameData.tickspeed);
}
setTimeout(timeGameLoop, gameData.tickspeed);