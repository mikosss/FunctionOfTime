var gameData = {
    ftVal: 1,                       //layer:0
    dispftVal: 1,
    expoftVal: 1,
    additive: 0,
    dispAdditive: 0,
    expoAdditive: 0,
    tickspeed: 1000,
    dispTickspeed: 1000,
    time: 0,                        //layer:1
    dispTime: 0,
    expoTime: 0,
    timespeed: 1,
    aVarVal: 0,
    dispAVarVal: 0,
    expoAVarVal: 0,
    rawAVarVal: 0,
    dispRawAVarVal: 0,
    expoRawAVarVal: 0,
    aVarCost: 1,
    dispAVarCost: 1,
    expoAVarCost: 1,
    bVarVal: 1,
    dispBVarVal: 1,
    expoBVarVal: 1,
    rawBVarVal: 1,
    dispRawBVarVal: 1,
    expoRawBVarVal: 1,
    bVarCost: 100,
    dispBVarCost: 100,
    expoBVarCost: 100,
    cVarVal: 1,
    dispCVarVal: 1,
    expoCVarVal: 1,
    rawCVarVal: 1,
    dispRawCVarVal: 1,
    expoRawCVarVal: 1,
    cVarCost: 10000,
    dispCVarCost: 10000,
    expoCVarCost: 10000,
    dVarVal: 1,
    dispDVarVal: 1,
    expoDVarVal: 1,
    rawDVarVal: 1,
    dispRawDVarVal: 1,
    expoRawDVarVal: 1,
    dVarCost: 1000000,
    dispDVarCost: 1000000,
    expoDVarCost: 1000000,
    studyPoint: 0,                  //research
    dispStudyPoint: 0,
    expoStudyPoint: 0,
    studyPower: 1,
    rawStudyPower: 1,
    dispStudyPower: 1,
    studyChance: 10,
    res01Amt: 0,
    res01Cost: 10,
    dispRes01Cost: 10,
    res02Boost: 1,
    res02Cost: 10,
    dispRes02Cost: 10,
    expoRes02Cost: 10,
    res1Boost: 1,
    res1Cost: 5,
    dispRes1Cost: 5,
    expoRes1Cost: 5,
    res2Amt: 0,
    res2Cost: 100,
    dispRes2Cost: 100,
}

document.getElementById("expoftVal").style.display = "none"         //layer:0
document.getElementById("expoAdditive").style.display = "none"
document.getElementById("expoTime").style.display = "none"          //layer:1
document.getElementById("bVarRow").style.display = "none"
document.getElementById("bText").style.display = "none"
document.getElementById("cVarRow").style.display = "none"
document.getElementById("cText").style.display = "none"
document.getElementById("dVarRow").style.display = "none"
document.getElementById("dText").style.display = "none"
document.getElementById("expoAVarVal").style.display = "none"
document.getElementById("expoRawAVarVal").style.display = "none"
document.getElementById("expoAVarCost").style.display = "none"
document.getElementById("expoBVarVal").style.display = "none"
document.getElementById("expoRawBVarVal").style.display = "none"
document.getElementById("expoBVarCost").style.display = "none"
document.getElementById("expoCVarVal").style.display = "none"
document.getElementById("expoRawCVarVal").style.display = "none"
document.getElementById("expoCVarCost").style.display = "none"
document.getElementById("expoDVarVal").style.display = "none"
document.getElementById("expoRawDVarVal").style.display = "none"
document.getElementById("expoDVarCost").style.display = "none"
document.getElementById("researchTabText").style.display = "none"   //research
document.getElementById("researchTab").style.display = "none"
document.getElementById("expoStudyPoint").style.display = "none"
document.getElementById("expoRes02Cost").style.display = "none"
document.getElementById("expoRes1Cost").style.display = "none"
document.getElementById("fogTab").style.display = "none"            //layer:2
document.getElementById("fohTab").style.display = "none"            //layer:3


function buttonColor() {
    if (gameData.ftVal >= gameData.aVarCost) {
        document.getElementById("aVarUp").style.backgroundColor = "#FFFFFF"
        document.getElementById("aVarUp").style.cursor = "pointer"
    }
    if (gameData.ftVal < gameData.aVarCost) {
        document.getElementById("aVarUp").style.backgroundColor = "#808080"
        document.getElementById("aVarUp").style.cursor = "default"
    }
    if (gameData.ftVal >= gameData.bVarCost) {
        document.getElementById("bVarUp").style.backgroundColor = "#FFFFFF"
        document.getElementById("bVarUp").style.cursor = "pointer"
    }
    if (gameData.ftVal < gameData.bVarCost) {
        document.getElementById("bVarUp").style.backgroundColor = "#808080"
        document.getElementById("bVarUp").style.cursor = "default"
    }
    if (gameData.ftVal >= gameData.cVarCost) {
        document.getElementById("cVarUp").style.backgroundColor = "#FFFFFF"
        document.getElementById("cVarUp").style.cursor = "pointer"
    }
    if (gameData.ftVal < gameData.cVarCost) {
        document.getElementById("cVarUp").style.backgroundColor = "#808080"
        document.getElementById("cVarUp").style.cursor = "default"
    }
    if (gameData.ftVal >= gameData.dVarCost) {
        document.getElementById("dVarUp").style.backgroundColor = "#FFFFFF"
        document.getElementById("dVarUp").style.cursor = "pointer"
    }
    if (gameData.ftVal < gameData.dVarCost) {
        document.getElementById("dVarUp").style.backgroundColor = "#808080"
        document.getElementById("dVarUp").style.cursor = "default"
    }
    if (gameData.studyPoint >= gameData.res01Cost) {
        document.getElementById("res0.1").style.backgroundColor = "#FFFFFF"
        document.getElementById("res0.1").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res01Cost) {
        document.getElementById("res0.1").style.backgroundColor = "#808080"
        document.getElementById("res0.1").style.cursor = "default"
    }
    if (gameData.res01Amt >= 40) {
        document.getElementById("res0.1").style.backgroundColor = "#7CFC00"
    }
    if (gameData.studyPoint >= gameData.res02Cost) {
        document.getElementById("res0.2").style.backgroundColor = "#FFFFFF"
        document.getElementById("res0.2").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res02Cost) {
        document.getElementById("res0.2").style.backgroundColor = "#808080"
        document.getElementById("res0.2").style.cursor = "default"
    }
    if (gameData.studyPoint >= gameData.res1Cost) {
        document.getElementById("res1").style.backgroundColor = "#FFFFFF"
        document.getElementById("res1").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res1Cost) {
        document.getElementById("res1").style.backgroundColor = "#808080"
        document.getElementById("res1").style.cursor = "default"
    }
    if (gameData.studyPoint >= gameData.res2Cost) {
        document.getElementById("res2").style.backgroundColor = "#FFFFFF"
        document.getElementById("res2").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res2Cost) {
        document.getElementById("res2").style.backgroundColor = "#808080"
        document.getElementById("res2").style.cursor = "default"
    }
    if (gameData.res2Amt >= 1) {
        document.getElementById("res2").style.backgroundColor = "#7CFC00"
    }
}

function unlocks() {
    if (gameData.ftVal >= 100) {
        document.getElementById("bVarRow").style.display = "table-row"
        document.getElementById("bText").style.display = "inline"
    }
    if (gameData.ftVal >= 10000) {
        document.getElementById("cVarRow").style.display = "table-row"
        document.getElementById("cText").style.display = "inline"
    }
    if (gameData.ftVal >= 100000) {
        document.getElementById("researchTabText").style.display = "inline"
        document.getElementById("researchTab").style.display = "inline"
        document.getElementById("unlockResearchTabText").style.display = "none"
        document.getElementById("unlockResearch").style.display = "none"
        document.getElementById("fogTab").style.display = "inline"
    }
    if (gameData.ftVal >= 1000000) {
        document.getElementById("dVarRow").style.display = "table-row"
        document.getElementById("dText").style.display = "inline"
    }
    if (gameData.studyChance >= 25) {
        document.getElementById("lazyText").style.display = "none"
    }
    if (gameData.res01Amt >= 40) {
        document.getElementById("res0.1").disabled = true;
    }
    if (gameData.res2Amt >= 1) {
        document.getElementById("res2").disabled = true;
    }
}

var mainGameLoop = window.setInterval(function() {
    unlocks()
    buttonColor()
  }, 1)