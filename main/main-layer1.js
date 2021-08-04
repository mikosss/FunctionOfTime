function time() {
    gameData.time += gameData.timespeed
    gameData.dispTime = thousands_separators(Math.round(gameData.time*100)/100)
    gameData.expoTime = gameData.time.toExponential(3)
    document.getElementById("dispTime").innerHTML = gameData.dispTime
    document.getElementById("expoTime").innerHTML = gameData.expoTime
}

function varDisplay() {
    gameData.aVarVal = gameData.rawAVarVal * gameData.res1Boost
    gameData.dispRawAVarVal = thousands_separators(Math.round(gameData.rawAVarVal*100)/100)
    gameData.expoRawAVarVal = gameData.rawAVarVal.toExponential(3)
    gameData.dispAVarVal = thousands_separators(Math.round(gameData.aVarVal*100)/100)
    gameData.expoAVarVal = gameData.aVarVal.toExponential(3)
    document.getElementById("dispAVarVal").innerHTML = gameData.dispAVarVal
    document.getElementById("expoAVarVal").innerHTML = gameData.expoAVarVal
    document.getElementById("dispRawAVarVal").innerHTML = gameData.dispRawAVarVal
    document.getElementById("expoRawAVarVal").innerHTML = gameData.expoRawAVarVal
    gameData.bVarVal = gameData.rawBVarVal * gameData.res1Boost
    gameData.dispRawBVarVal = thousands_separators(Math.round(gameData.rawBVarVal*100)/100)
    gameData.expoRawBVarVal = gameData.rawBVarVal.toExponential(3)
    gameData.dispBVarVal = thousands_separators(Math.round(gameData.bVarVal*100)/100)
    gameData.expoBVarVal = gameData.bVarVal.toExponential(3)
    document.getElementById("dispBVarVal").innerHTML = gameData.dispBVarVal
    document.getElementById("expoBVarVal").innerHTML = gameData.expoBVarVal
    document.getElementById("dispRawBVarVal").innerHTML = gameData.dispRawBVarVal
    document.getElementById("expoRawBVarVal").innerHTML = gameData.expoRawBVarVal
    gameData.cVarVal = gameData.rawCVarVal * gameData.res1Boost
    gameData.dispRawCVarVal = thousands_separators(Math.round(gameData.rawCVarVal*100)/100)
    gameData.expoRawCVarVal = gameData.rawCVarVal.toExponential(3)
    gameData.dispCVarVal = thousands_separators(Math.round(gameData.cVarVal*100)/100)
    gameData.expoCVarVal = gameData.cVarVal.toExponential(3)
    document.getElementById("dispCVarVal").innerHTML = gameData.dispCVarVal
    document.getElementById("expoCVarVal").innerHTML = gameData.expoCVarVal
    document.getElementById("dispRawCVarVal").innerHTML = gameData.dispRawCVarVal
    document.getElementById("expoRawCVarVal").innerHTML = gameData.expoRawCVarVal
    gameData.dVarVal = gameData.rawDVarVal * gameData.res1Boost
    gameData.dispRawDVarVal = thousands_separators(Math.round(gameData.rawDVarVal*100)/100)
    gameData.expoRawDVarVal = gameData.rawDVarVal.toExponential(3)
    gameData.dispDVarVal = thousands_separators(Math.round(gameData.dVarVal*100)/100)
    gameData.expoDVarVal = gameData.dVarVal.toExponential(3)
    document.getElementById("dispDVarVal").innerHTML = gameData.dispDVarVal
    document.getElementById("expoDVarVal").innerHTML = gameData.expoDVarVal
    document.getElementById("dispRawDVarVal").innerHTML = gameData.dispRawDVarVal
    document.getElementById("expoRawDVarVal").innerHTML = gameData.expoRawDVarVal
}

function aVarUp() {
    if (gameData.ftVal >= gameData.aVarCost) {
    gameData.ftVal -= gameData.aVarCost
    gameData.rawAVarVal += 1
    gameData.aVarCost *= 1.5
    gameData.dispAVarCost = thousands_separators(Math.round(gameData.aVarCost*100)/100)
    gameData.expoAVarCost = gameData.aVarCost.toExponential(3)
    document.getElementById("dispAVarCost").innerHTML = gameData.dispAVarCost
    document.getElementById("expoAVarCost").innerHTML = gameData.expoAVarCost
  }
}

function bVarUp() {
    if (gameData.ftVal >= gameData.bVarCost) {
    gameData.ftVal -= gameData.bVarCost
    gameData.rawBVarVal += 1
    gameData.bVarCost *= 1.5
    gameData.dispBVarCost = thousands_separators(Math.round(gameData.bVarCost*100)/100)
    gameData.expoBVarCost = gameData.bVarCost.toExponential(3)
    document.getElementById("dispBVarCost").innerHTML = gameData.dispBVarCost
    document.getElementById("expoBVarCost").innerHTML = gameData.expoBVarCost
  }
}

function cVarUp() {
    if (gameData.ftVal >= gameData.cVarCost) {
    gameData.ftVal -= gameData.cVarCost
    gameData.rawCVarVal += 1
    gameData.cVarCost *= 1.5
    gameData.dispCVarCost = thousands_separators(Math.round(gameData.cVarCost*100)/100)
    gameData.expoCVarCost = gameData.cVarCost.toExponential(3)
    document.getElementById("dispCVarCost").innerHTML = gameData.dispCVarCost
    document.getElementById("expoCVarCost").innerHTML = gameData.expoCVarCost
  }
}

function dVarUp() {
    if (gameData.ftVal >= gameData.dVarCost) {
    gameData.ftVal -= gameData.dVarCost
    gameData.rawDVarVal += 1
    gameData.dVarCost *= 1.5
    gameData.dispDVarCost = thousands_separators(Math.round(gameData.dVarCost*100)/100)
    gameData.expoDVarCost = gameData.dVarCost.toExponential(3)
    document.getElementById("dispDVarCost").innerHTML = gameData.dispDVarCost
    document.getElementById("expoDVarCost").innerHTML = gameData.expoDVarCost
  }
}

function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

var displayGameLoop = window.setInterval(function() {
    varDisplay()
  }, 1)

  
var timeGameLoop = window.setInterval(function() {
    time()
  }, gameData.tickspeed)