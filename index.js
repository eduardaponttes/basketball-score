let homePts=document.getElementById('home-pts')
let homeCount=0
let guestPts=document.getElementById('guest-pts')
let guestCount=0

function homeAddPoint() {
    homeCount=homeCount+1
    homePts.innerText=homeCount    
}

function homeAddTwoPoints() {
    homeCount=homeCount+2
    homePts.innerText=homeCount
}

function homeAddThreePoints() {
    homeCount=homeCount+3
    homePts.innerText=homeCount
}


function guestAddPoint() {
    guestCount=guestCount+1
    guestPts.innerText=guestCount    
}

function guestAddTwoPoints() {
    guestCount=guestCount+2
    guestPts.innerText=guestCount
}

function guestAddThreePoints() {
    guestCount=guestCount+3
    guestPts.innerText=guestCount
}

function resetPointshome() {
    homeCount=0
    homePts.innerText=homeCount
}

function resetPointstwo() {
    guestCount=0
    guestPts.innerText=guestCount
}