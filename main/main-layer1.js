function val() {
  gameData.aVarVal = gameData.rawAVarVal * gameData.resBooster
  gameData.bVarVal = gameData.rawBVarVal * gameData.resBooster
  gameData.cVarVal = gameData.rawCVarVal * gameData.resBooster
  gameData.dVarVal = gameData.rawDVarVal * gameData.resBooster
  gameData.multUVarVal = gameData.rawUVarVal / gameData.uVarVal
  gameData.rawUVarVal = (Math.log(gameData.ftVal + 2) / Math.log(2)) * ((Math.log(gameData.studyPoint + 2) / Math.log(2)) ** gameData.res8Boost)
}

function time() {
  gameData.time += gameData.timespeed * gameData.uVarVal * gameData.ftTickspeedBoost
}

function ftTickBoost() {
  if (gameData.rawTickspeed > 50) {
      gameData.tickspeed = gameData.rawTickspeed
      gameData.ftTickspeedBoost = 1
  }
  if (gameData.rawTickspeed <= 50) {
      gameData.tickspeed = 50
      gameData.ftTickspeedBoost = 50 / gameData.rawTickspeed
  }
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
     gameData.additive = 0
     gameData.rawAVarVal = 0
     gameData.aVarCost = 1
     gameData.rawBVarVal = 1
     gameData.bVarCost = 100
     gameData.rawCVarVal = 1
     gameData.cVarCost = 10000
     gameData.rawDVarVal = 1
     gameData.dVarCost = 1000000
     gameData.ftVal = 1 
   }
}

var displayGameLoop = window.setInterval(function() {
    val()
    ftTickBoost()
  }, 1)

var timeGameLoop = function() {
    time()
  setTimeout(timeGameLoop, gameData.tickspeed);
}
setTimeout(timeGameLoop, gameData.tickspeed);