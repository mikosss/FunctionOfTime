function study() {
    var studyChance = Math.random() * 100
    if (studyChance <= gameData.studyChance) {
        gameData.studyPoint += gameData.studyPower
        document.getElementById("dispStudy").innerHTML = "Woweers, u gaIned " + displayNum(Math.round(gameData.studyPower*100)/100) + " studi Poits..."
        document.getElementById("dispStudy").style.color = "green"
    }
    if (studyChance > gameData.studyChance) {
        document.getElementById("dispStudy").innerHTML = "U faile.. :c"
        document.getElementById("dispStudy").style.color = "red"
    }
}

function resAdditive() {
    gameData.studyPoint += gameData.resAdditive
}

function resAdditiveVal() {
    gameData.resAdditive = gameData.studyPower * (gameData.studyChance / 100) * (1000 / gameData.tickspeed) * gameData.res03Boost
    gameData.studyPower = gameData.rawStudyPower * gameData.res02Boost * (Math.sqrt(Math.log10(gameData.time+10)))**gameData.res4Boost
}

function res01() {
    if (gameData.studyPoint >= gameData.res01Cost) {
        gameData.studyPoint -= gameData.res01Cost
        gameData.studyChance += 1
        gameData.res01Cost *= 1.2
        gameData.res01Amt += 1
    }
}

function res02() {
    if (gameData.studyPoint >= gameData.res02Cost) {
        gameData.studyPoint -= gameData.res02Cost
        gameData.res02Boost += 0.1
        gameData.res02Cost *= 1.2
    }
}

function res03() {
    if (gameData.studyPoint >= gameData.res03Cost) {
        gameData.studyPoint -= gameData.res03Cost
        gameData.res03Boost += 1
        gameData.res03Amt += 1
    }
}

function res1() {
    if (gameData.studyPoint >= gameData.res1Cost) {
        gameData.studyPoint -= gameData.res1Cost
        gameData.res1Boost += 0.01
        gameData.res1Cost *= 1.2
    }
}

function res2() {
    if (gameData.studyPoint >= gameData.res2Cost) {
        gameData.studyPoint -= gameData.res2Cost
        gameData.tickspeed *= 0.9
        gameData.res2Amt += 1
    }
}

function res3() {
    if (gameData.studyPoint >= gameData.res3Cost) {
        gameData.studyPoint -= gameData.res3Cost
        gameData.res3Boost += 1
        gameData.res3Amt += 1
    }
}

function res4() {
    if (gameData.studyPoint >= gameData.res4Cost) {
        gameData.studyPoint -= gameData.res4Cost
        gameData.res4Boost += 1
        gameData.res4Amt += 1
    }
}

function res5() {
    if (gameData.studyPoint >= gameData.res5Cost) {
        gameData.studyPoint -= gameData.res5Cost
        gameData.res5Amt += 1
    }
}

var displayGameLoop = window.setInterval(function() {
    resAdditiveVal()
  }, 1)

  
var timeGameLoop = window.setInterval(function() {
    resAdditive()
  }, 1000)