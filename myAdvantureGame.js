var user = prompt("you are runnig away from a beast which path will you take ? forest , sea or highway?").toUpperCase();

switch(user){

    case 'SEA':
        var seaSwimHand = prompt("do you know how to swim? yes or no");
        if(seaSwimHand === "yes"){ seaSwimHand = true;}
        else { seaSwimHand = false;}
        var seaSwimBoat = prompt("do you have a boat? yes or no");
        if(seaSwimBoat === "yes"){ seaSwimBoat = true;}
        else { seaSwimBoat = false;}
        if(seaSwimHand || seaSwimBoat){
            console.log("you are saved!");}
        else { console.log("you are screwed!");}
        break;
    case 'FOREST':
        var gotChainSaw = prompt("do you have a chainsaw? yes or no");
        if(gotChainSaw === "yes"){ seaSwimHand = true;}
        else { gotChainSaw = false;}
        var gotGun = prompt("do you have a gun? yes or no");
        if(gotGun === "yes"){ gotGun = true;}
        else { gotGun = false;}
        if(gotGun && gotChainSaw){
            console.log("you are saved!");}
        else { console.log("you are screwed!");}

        break;



    case 'HIGHWAY': console.log("you are saved!");
        break;

    default:
        break;

}