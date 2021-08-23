
/****************Love calculator****************/    

    var user = prompt("What is your name?");
    var crush = prompt("What is your crush name?");

    var lovescore = Math.random();
    lovescore = lovescore * 100;
    lovescore = Math.floor(n) + 1;

    if(lovescore > 70){
    alert(user + " and " + crush + " will choose each others in the percentage of " + lovescore + "%. I hope you guys will make each other happy." );
    }

    if(lovescore > 30 && lovescore <= 70){
    alert(user + " and " + crush + " will choose each others in the percentage of " + lovescore + "%." );
    }
    
    if(lovescore < 30){
    alert(user + " and " + crush + " will choose each others in the percentage of " + lovescore + "%. You guys are like oil and water. But don't trust us completely, we can't be right all the time." );
    }
