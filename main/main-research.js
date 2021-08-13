function study() {
    var studyChance = Math.random() * 100
    if (studyChance <= gameData.studyChance) {
        gameData.studyPoint += gameData.resAdditive
        document.getElementById("dispStudy").innerHTML = "Woweers, u gaIned " + displayNum(Math.round(gameData.resAdditive*100)/100) + " studi Poits..."
        document.getElementById("dispStudy").style.color = "green"
    }
    if (studyChance > gameData.studyChance) {
        document.getElementById("dispStudy").innerHTML = "U faile.. :c"
        document.getElementById("dispStudy").style.color = "red"
    }
}

function resVal() {
    gameData.resAdditive = gameData.studyPower
    gameData.studyPower = gameData.rawStudyPower * ((Math.sqrt(Math.log10(gameData.time+10)))**gameData.res4Boost) * (gameData.studySpeedBoost**gameData.res7Boost)
    gameData.resBooster = (1 + gameData.res1Boost) + (gameData.res6Boost * gameData.res1Amt)
    gameData.res1Booster = 1 + (gameData.res6Boost * 100) 
}

function resSpeed() {
    if (gameData.rawStudySpeed > 50) {
        gameData.studySpeed = gameData.rawStudySpeed
        gameData.studySpeedBoost = 1
    }
    if (gameData.rawStudySpeed <= 50) {
        gameData.studySpeed = 50
        gameData.studySpeedBoost = 50 / gameData.rawStudySpeed
    }
}

function res03CostEffect() {
    if (gameData.res03Amt <= 59) {
        gameData.res03CostMult = 1.2
    }
    if (gameData.res03Amt > 59) {
        gameData.res03CostMult = 1.2 * (gameData.res03Amt - 59)
    }
}

function res01() {
    if (gameData.ftVal >= gameData.res01Cost) {
        gameData.ftVal -= gameData.res01Cost
        gameData.studyChance += 1
        gameData.res01Cost *= 1.2
        gameData.res01Amt += 1
    }
}

function res02() {
    if (gameData.ftVal >= gameData.res02Cost) {
        gameData.ftVal -= gameData.res02Cost
        gameData.rawStudyPower += 0.5
        gameData.res02Cost *= 1.2
    }
}

function res03() {
    if (gameData.ftVal >= gameData.res03Cost) {
        gameData.ftVal -= gameData.res03Cost
        gameData.rawStudySpeed *= 0.95
        gameData.res03Cost *= gameData.res03CostMult
        gameData.res03Amt += 1
    }
}

function res1() {
    if (gameData.studyPoint >= gameData.res1Cost) {
        gameData.studyPoint -= gameData.res1Cost
        gameData.res1Boost += 0.01
        gameData.res1Cost *= 1.2
        gameData.res1Amt += 1
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

function res6() {
    if (gameData.studyPoint >= gameData.res6Cost) {
        gameData.studyPoint -= gameData.res6Cost
        gameData.res6Boost += 0.005
        gameData.res6Cost *= 1.2
    }
}

function res7() {
    if (gameData.studyPoint >= gameData.res7Cost) {
        gameData.studyPoint -= gameData.res7Cost
        gameData.res7Boost += 1
        gameData.res7Amt += 1
    }
}

function res8() {
    if (gameData.studyPoint >= gameData.res8Cost) {
        gameData.studyPoint -= gameData.res8Cost
        gameData.res8Boost += 1
        gameData.res8Amt += 1
    }
}

var displayGameLoop = window.setInterval(function() {
    resVal()
    resSpeed()
    res03CostEffect()
  }, 1)

var resStudyGameLoop = function() {
    study()
  setTimeout(resStudyGameLoop, gameData.studySpeed);
}
setTimeout(resStudyGameLoop, gameData.studySpeed);