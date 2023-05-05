var score = 0;
var wickets = 0;
var counter = 0;

function selectrandom() {

    const teama = localStorage.getItem("prevone") == null ? "Team A Score 0/0" : localStorage.getItem("prevone");
    const teamb = localStorage.getItem("prevtwo") == null ? "Team B Score 0/0" : localStorage.getItem("prevtwo");
    document.getElementById("lastscore").innerHTML = `${teama}`;
    document.getElementById("lastscoretwo").innerHTML = `${teamb}`;


    let rnd = Math.floor(Math.random() * 10);

    if (rnd % 2 == 0) {
        //console.log(rnd);
        score = score + rnd;
        if (rnd == 0) {
            wickets++;
        }
        document.getElementById("display").innerHTML = `Score is ${score} for ${wickets} wickets`;
        console.log(`Score is ${score} for ${wickets} wickets`);
        checkwickets();

    } else {
        rnd = rnd - 1;
        score = score + rnd;
        if (rnd == 0) {
            wickets++;
        }
        //console.log(rnd);
        document.getElementById("display").innerHTML = `Score is ${score} for ${wickets} wickets`;

        console.log(`Score is ${score} for ${wickets} wickets`);
        checkwickets();

    }

}

function clearscores() {
    localStorage.clear();
    document.getElementById("lastscore").innerHTML = "Team A Score 0/0";
    document.getElementById("lastscoretwo").innerHTML = "Team B Score 0/0 ";

}

function defaultdisplay() {

    document.getElementById("lastscore").innerHTML = localStorage.getItem("prevone") == null ? "Team A Score 0/0" : localStorage.getItem("prevone");
    document.getElementById("lastscoretwo").innerHTML = localStorage.getItem("prevtwo") == null ? "Team B Score 0/0" : localStorage.getItem("prevtwo");;

}

function checkwickets() {
    if (wickets > 9) {
        counter++;




        if (counter < 2) {
            document.getElementById("btnaction").style.visibility = "hidden";
            let msg = `Team A Score ${score} for ${wickets} wickets`;
            localStorage.setItem("prevone", msg);
            updatedisplay();



        } else {
            document.getElementById("btnaction").style.visibility = "hidden";
            let msg = `Team B Score ${score} for ${wickets} wickets`;
            localStorage.setItem("prevtwo", msg)
            updatedisplay();
            counter = 0;
        }

        wickets = 0;
        score = 0;

    }
}

function updatedisplay() {
    document.getElementById("lastscore").innerHTML = localStorage.getItem("prevone") == null ? "Team A Score 0/0" : localStorage.getItem("prevone");
    document.getElementById("lastscoretwo").innerHTML = localStorage.getItem("prevtwo") == null ? "Team B Score 0/0" : localStorage.getItem("prevtwo");;
    document.getElementById("btnresume").style.visibility = "visible";
}

function resume() {
    document.getElementById("btnaction").style.visibility = "visible";
    document.getElementById("btnresume").style.visibility = "hidden";

}