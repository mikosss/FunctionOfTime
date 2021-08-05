function study() {
    var studyChance = Math.random() * 100
    if (studyChance <= gameData.studyChance) {
        gameData.studyPoint += gameData.studyPower
        document.getElementById("dispStudy").innerHTML = "Woweers, u gaIned " + gameData.dispStudyPower + " studi Poits..."
        document.getElementById("dispStudy").style.color = "green"
    }
    if (studyChance > gameData.studyChance) {
        document.getElementById("dispStudy").innerHTML = "U faile.. :c"
        document.getElementById("dispStudy").style.color = "red"
    }
    gameData.studyPower = gameData.rawStudyPower * gameData.res02Boost * (Math.sqrt(Math.log10(gameData.time+10)))**gameData.res4Boost
    gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
    gameData.dispStudyPower = thousands_separators(Math.round(gameData.studyPower*100)/100)
    gameData.expoStudyPoint = gameData.studyPoint.toExponential(3)
    document.getElementById("studyChance").innerHTML = gameData.studyChance
    document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
    document.getElementById("expoStudyPoint").innerHTML = gameData.expoStudyPoint
}

function resAdditive() {
    gameData.studyPoint += gameData.resAdditive
    gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
    gameData.expoStudyPoint = gameData.studyPoint.toExponential(3)
    document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
    document.getElementById("expoStudyPoint").innerHTML = gameData.expoStudyPoint
}

function resAdditiveVal() {
    gameData.resAdditive = gameData.studyPower * (gameData.studyChance / 100) * (1000 / gameData.tickspeed) * gameData.res03Boost
    gameData.studyPower = gameData.rawStudyPower * gameData.res02Boost * (Math.sqrt(Math.log10(gameData.time+10)))**gameData.res4Boost
    gameData.dispResAdditive = thousands_separators(Math.round(gameData.resAdditive*100)/100)
    gameData.expoResAdditive = gameData.resAdditive.toExponential(3)
    document.getElementById("dispResAdditive").innerHTML = gameData.dispResAdditive
    document.getElementById("expoResAdditive").innerHTML = gameData.expoResAdditive
}

function res01() {
    if (gameData.studyPoint >= gameData.res01Cost) {
        gameData.studyPoint -= gameData.res01Cost
        gameData.studyChance += 1
        gameData.res01Cost *= 1.2
        gameData.res01Amt += 1
        gameData.dispRes01Cost = thousands_separators(Math.round(gameData.res01Cost*100)/100)
        gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
        gameData.expoStudyPoint = gameData.studyPoint.toExponential(3)
        document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
        document.getElementById("expoStudyPoint").innerHTML = gameData.expoStudyPoint
        document.getElementById("dispRes01Cost").innerHTML = gameData.dispRes01Cost
        document.getElementById("studyChance").innerHTML = gameData.studyChance
        document.getElementById("res01Amt").innerHTML = gameData.res01Amt
    }
}

function res02() {
    if (gameData.studyPoint >= gameData.res02Cost) {
        gameData.studyPoint -= gameData.res02Cost
        gameData.res02Boost += 0.1
        gameData.res02Cost *= 1.2
        gameData.dispRes02Cost = thousands_separators(Math.round(gameData.res02Cost*100)/100)
        gameData.expoRes02Cost = gameData.res02Cost.toExponential(3)
        gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
        gameData.expoStudyPoint = gameData.studyPoint.toExponential(3)
        document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
        document.getElementById("expoStudyPoint").innerHTML = gameData.expoStudyPoint
        document.getElementById("dispRes02Cost").innerHTML = gameData.dispRes02Cost
        document.getElementById("expoRes02Cost").innerHTML = gameData.dispRes02Cost
    }
}

function res03() {
    if (gameData.studyPoint >= gameData.res03Cost) {
        gameData.studyPoint -= gameData.res03Cost
        gameData.res03Boost += 1
        gameData.res03Amt += 1
        gameData.dispRes03Cost = thousands_separators(Math.round(gameData.res03Cost*100)/100)
        gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
        document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
        document.getElementById("dispRes02Cost").innerHTML = gameData.dispRes02Cost
    }
}

function res1() {
    if (gameData.studyPoint >= gameData.res1Cost) {
        gameData.studyPoint -= gameData.res1Cost
        gameData.res1Boost += 0.01
        gameData.res1Cost *= 1.2
        gameData.dispRes1Cost = thousands_separators(Math.round(gameData.res1Cost*100)/100)
        gameData.expoRes1Cost = gameData.res1Cost.toExponential(3)
        gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
        gameData.expoStudyPoint = gameData.studyPoint.toExponential(3)
        document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
        document.getElementById("expoStudyPoint").innerHTML = gameData.expoStudyPoint
        document.getElementById("dispRes1Cost").innerHTML = gameData.dispRes1Cost
        document.getElementById("expoRes1Cost").innerHTML = gameData.dispRes1Cost
    }
}

function res2() {
    if (gameData.studyPoint >= gameData.res2Cost) {
        gameData.studyPoint -= gameData.res2Cost
        gameData.tickspeed *= 0.9
        gameData.res2Amt += 1
        gameData.dispTickspeed = thousands_separators(Math.round(gameData.tickspeed*100)/100)
        gameData.dispRes2Cost = thousands_separators(Math.round(gameData.res2Cost*100)/100)
        gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
        document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
        document.getElementById("dispRes2Cost").innerHTML = gameData.dispRes2Cost
        document.getElementById("dispTickspeed").innerHTML = gameData.dispTickspeed
    }
}

function res3() {
    if (gameData.studyPoint >= gameData.res3Cost) {
        gameData.studyPoint -= gameData.res3Cost
        gameData.res3Boost += 1
        gameData.res3Amt += 1
        gameData.dispRes3Cost = thousands_separators(Math.round(gameData.res3Cost*100)/100)
        gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
        document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
        document.getElementById("dispRes3Cost").innerHTML = gameData.dispRes3Cost
    }
}

function res4() {
    if (gameData.studyPoint >= gameData.res4Cost) {
        gameData.studyPoint -= gameData.res4Cost
        gameData.res4Boost += 1
        gameData.res4Amt += 1
        gameData.dispRes4Cost = thousands_separators(Math.round(gameData.res4Cost*100)/100)
        gameData.dispStudyPoint = thousands_separators(Math.round(gameData.studyPoint*100)/100)
        document.getElementById("dispStudyPoint").innerHTML = gameData.dispStudyPoint
        document.getElementById("dispRes4Cost").innerHTML = gameData.dispRes4Cost
    }
}

var displayGameLoop = window.setInterval(function() {
    resAdditiveVal()
  }, 1)

  
var timeGameLoop = window.setInterval(function() {
    resAdditive()
  }, 1000)