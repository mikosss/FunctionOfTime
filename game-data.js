var gameData = {
    ftVal: 1,                       //layer:0
    additive: 0,
    tickspeed: 1000,
    time: 0,                        //layer:1
    timespeed: 1,
    aVarVal: 0,
    rawAVarVal: 0,
    aVarCost: 1,
    bVarVal: 1,
    rawBVarVal: 1,
    bVarCost: 100,
    cVarVal: 1,
    rawCVarVal: 1,
    cVarCost: 10000,
    dVarVal: 1,
    rawDVarVal: 1,
    dVarCost: 1000000,
    uVarVal: 1,
    rawUVarVal: 1,
    multUVarVal: 1,
    studyPoint: 0,                  //research
    studyPower: 1,
    rawStudyPower: 1,
    studyChance: 20,
    resAdditive: 0,
    res01Amt: 0,
    res01Cost: 10,
    res02Boost: 1,
    res02Cost: 10,
    res03Boost: 0,
    res03Amt: 0,
    res03Cost: 100,
    res1Boost: 1,
    res1Cost: 5,
    res2Amt: 0,
    res2Cost: 100,
    res3Boost: 0,
    res3Amt: 0,
    res3Cost: 250,
    res4Boost: 0,
    res4Amt: 0,
    res4Cost: 1000,
    res5Amt: 0,
    res5Cost: 2500,
}

//layer:0
//layer:1
document.getElementById("bVarRow").style.display = "none"
document.getElementById("bText").style.display = "none"
document.getElementById("cVarRow").style.display = "none"
document.getElementById("cText").style.display = "none"
document.getElementById("dVarRow").style.display = "none"
document.getElementById("dText").style.display = "none"
document.getElementById("uTable").style.display = "none"
document.getElementById("uText1").style.display = "none"
document.getElementById("uText2").style.display = "none"
document.getElementById("uText3").style.display = "none"
document.getElementById("researchTabText").style.display = "none"   //research
document.getElementById("researchTab").style.display = "none"
document.getElementById("resAdditiveText").style.display = "none"
document.getElementById("res3Text").style.display = "none"
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
    if (gameData.rawUVarVal >= gameData.uVarVal) {
        document.getElementById("uVarUp").style.backgroundColor = "#FFFFFF"
        document.getElementById("uVarUp").style.cursor = "pointer"
    }
    if (gameData.rawUVarVal < gameData.uVarVal) {
        document.getElementById("uVarUp").style.backgroundColor = "#808080"
        document.getElementById("uVarUp").style.cursor = "default"
    }
    if (gameData.studyPoint >= gameData.res01Cost) {
        document.getElementById("res0.1").style.backgroundColor = "#FFFFFF"
        document.getElementById("res0.1").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res01Cost) {
        document.getElementById("res0.1").style.backgroundColor = "#808080"
        document.getElementById("res0.1").style.cursor = "default"
    }
    if (gameData.res01Amt >= 30) {
        document.getElementById("res0.1").style.backgroundColor = "#7CFC00"
        document.getElementById("res0.1").style.cursor = "default"
    }
    if (gameData.studyPoint >= gameData.res02Cost) {
        document.getElementById("res0.2").style.backgroundColor = "#FFFFFF"
        document.getElementById("res0.2").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res02Cost) {
        document.getElementById("res0.2").style.backgroundColor = "#808080"
        document.getElementById("res0.2").style.cursor = "default"
    }
    if (gameData.studyPoint >= gameData.res03Cost) {
        document.getElementById("res0.3").style.backgroundColor = "#FFFFFF"
        document.getElementById("res0.3").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res03Cost) {
        document.getElementById("res0.3").style.backgroundColor = "#808080"
        document.getElementById("res0.3").style.cursor = "default"
    }
    if (gameData.res03Amt >= 1) {
        document.getElementById("res0.3").style.backgroundColor = "#7CFC00"
        document.getElementById("res0.3").style.cursor = "default"
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
        document.getElementById("res2").style.cursor = "default"
    }
    if (gameData.studyPoint >= gameData.res3Cost) {
        document.getElementById("res3").style.backgroundColor = "#FFFFFF"
        document.getElementById("res3").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res3Cost) {
        document.getElementById("res3").style.backgroundColor = "#808080"
        document.getElementById("res3").style.cursor = "default"
    }
    if (gameData.res3Amt >= 1) {
        document.getElementById("res3").style.backgroundColor = "#7CFC00"
        document.getElementById("res3").style.cursor = "default"
        document.getElementById("res3Text").style.display = "inline"
    }
    if (gameData.studyPoint >= gameData.res4Cost) {
        document.getElementById("res4").style.backgroundColor = "#FFFFFF"
        document.getElementById("res4").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res4Cost) {
        document.getElementById("res4").style.backgroundColor = "#808080"
        document.getElementById("res4").style.cursor = "default"
    }
    if (gameData.res4Amt >= 1) {
        document.getElementById("res4").style.backgroundColor = "#7CFC00"
        document.getElementById("res4").style.cursor = "default"
    }
    if (gameData.studyPoint >= gameData.res5Cost) {
        document.getElementById("res5").style.backgroundColor = "#FFFFFF"
        document.getElementById("res5").style.cursor = "pointer"
    }
    if (gameData.studyPoint < gameData.res5Cost) {
        document.getElementById("res5").style.backgroundColor = "#808080"
        document.getElementById("res5").style.cursor = "default"
    }
    if (gameData.res5Amt >= 1) {
        document.getElementById("res5").style.backgroundColor = "#7CFC00"
        document.getElementById("res5").style.cursor = "default"
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
    if (gameData.res01Amt >= 30) {
        document.getElementById("res0.1").disabled = true;
    }
    if (gameData.res03Amt >= 1) {
        document.getElementById("res0.3").disabled = true;
        document.getElementById("resAdditiveText").style.display = "inline"
    }
    if (gameData.res2Amt >= 1) {
        document.getElementById("res2").disabled = true;
    }
    if (gameData.res3Amt >= 1) {
        document.getElementById("res3").disabled = true;
    }
    if (gameData.res4Amt >= 1) {
        document.getElementById("res4").disabled = true;
    }
    if (gameData.res5Amt >= 1) {
        document.getElementById("res5").disabled = true;
        document.getElementById("uTable").style.display = "table"
        document.getElementById("uText1").style.display = "inline"
        document.getElementById("uText2").style.display = "inline"
        document.getElementById("uText3").style.display = "inline"
        document.getElementById("uText4").style.display = "none"
        document.getElementById("uText5").style.display = "none"
    }
}

function overallDisplay() {
    document.getElementById("dispftVal").innerHTML = displayNum(Math.round(gameData.ftVal*100)/100)
    document.getElementById("dispAdditive").innerHTML = displayNum(Math.round(gameData.additive*100)/100)
    document.getElementById("dispTime").innerHTML = displayNum(Math.round(gameData.time*100)/100)
    document.getElementById("dispTickspeed").innerHTML = gameData.tickspeed
    document.getElementById("dispRawAVarVal").innerHTML = displayNum(Math.round(gameData.rawAVarVal*100)/100)
    document.getElementById("dispRawBVarVal").innerHTML = displayNum(Math.round(gameData.rawBVarVal*100)/100)
    document.getElementById("dispRawCVarVal").innerHTML = displayNum(Math.round(gameData.rawCVarVal*100)/100)
    document.getElementById("dispRawDVarVal").innerHTML = displayNum(Math.round(gameData.rawDVarVal*100)/100)
    document.getElementById("dispMultUVarVal").innerHTML = displayNum(Math.round(gameData.multUVarVal*100)/100)
    document.getElementById("dispAVarVal").innerHTML = displayNum(Math.round(gameData.aVarVal*100)/100)
    document.getElementById("dispBVarVal").innerHTML = displayNum(Math.round(gameData.bVarVal*100)/100)
    document.getElementById("dispCVarVal").innerHTML = displayNum(Math.round(gameData.cVarVal*100)/100)
    document.getElementById("dispDVarVal").innerHTML = displayNum(Math.round(gameData.dVarVal*100)/100)
    document.getElementById("dispUVarVal").innerHTML = displayNum(Math.round(gameData.uVarVal*100)/100)
    document.getElementById("dispAVarCost").innerHTML = displayNum(Math.round(gameData.aVarCost*100)/100)
    document.getElementById("dispBVarCost").innerHTML = displayNum(Math.round(gameData.bVarCost*100)/100)
    document.getElementById("dispCVarCost").innerHTML = displayNum(Math.round(gameData.cVarCost*100)/100)
    document.getElementById("dispDVarCost").innerHTML = displayNum(Math.round(gameData.dVarCost*100)/100)
    document.getElementById("studyChance").innerHTML = gameData.studyChance
    document.getElementById("dispStudyPoint").innerHTML = displayNum(Math.round(gameData.studyPoint*100)/100)
    document.getElementById("dispResAdditive").innerHTML = displayNum(Math.round(gameData.resAdditive*100)/100)
    document.getElementById("dispRes01Cost").innerHTML = displayNum(Math.round(gameData.res01Cost*100)/100)
    document.getElementById("res01Amt").innerHTML = gameData.res01Amt
    document.getElementById("dispRes02Cost").innerHTML = displayNum(Math.round(gameData.res02Cost*100)/100)
    document.getElementById("dispRes03Cost").innerHTML = displayNum(Math.round(gameData.res03Cost*100)/100)
    document.getElementById("dispRes1Cost").innerHTML = displayNum(Math.round(gameData.res1Cost*100)/100)
    document.getElementById("dispRes2Cost").innerHTML = displayNum(Math.round(gameData.res2Cost*100)/100)
    document.getElementById("dispRes3Cost").innerHTML = displayNum(Math.round(gameData.res3Cost*100)/100)
    document.getElementById("dispRes4Cost").innerHTML = displayNum(Math.round(gameData.res4Cost*100)/100)
    document.getElementById("dispRes5Cost").innerHTML = displayNum(Math.round(gameData.res5Cost*100)/100)
}

function displayNum(num) {
    if (num < 1e9) {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }
    if (num >= 1e9) {
        return Number.parseFloat(num).toExponential(3);
    }
  }

var mainGameLoop = window.setInterval(function() {
    unlocks()
    buttonColor()
    overallDisplay()
  }, 1)