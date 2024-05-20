//timecourse = Temps de course en minute    fuelpertour = Carburant par tour     tempspartour = Temps par tour
var circuit = msg.req.cookies.circuit; // FuncCircuit('x')
var jeu = msg.req.cookies.jeu; // FuncVoiture('y')
var voiture = msg.req.cookies.voiture; // FuncVoiture('z')
var timecourse = (parseInt(msg.payload["t-heure"]) * 60) + (parseInt(msg.payload["t-heure"]));

//            [L par tour, Temps(décimal)]
var brandshatch_court = undefined;
var lagunaseca = undefined;
var brandshatch_gp = undefined;
var spa = undefined;
var limerock = undefined;
var hockenheim = undefined;
var mugello = undefined;
var nurburgring = undefined;
var catalunyagp = undefined;
var donington = undefined;
var kazanring = undefined;
var portimao = undefined;
var suzuka = undefined;
var redbullring = undefined;
var silverstone = undefined;


if(voiture == "mazda cup") {
    brandshatch_court = ["0,7", "0.88"];
    lagunaseca = ["1.33", "1.67"];
    brandshatch_gp = ["1.33", "1.67"];
    spa = ["2.45", "2.87"];
    limerock = ["0.77", "0.97"];
    hockenheim = ["1.70", "2.07"];
    mugello = ["1.83", "2.17"];
    nurburgring = ["1.32", "1.67"];
    catalunyagp = ["1.68", "2.13"];
    donington = ["0.98", "1.33"];
    kazanring = ["1.2", "1.62"];
    portimao = ["1.67", "2.12"];
    suzuka = ["", ""];
} 

else if(voiture == "f3") {
    mugello = ["2.55", "1.62"];
    redbullring = ["2.2", "1.47"];
    silverstone = ["2.88", "1.78"];
    catalunyagp = [" 2.35", "1.6"];
    hockenheim = ["2.27", "1.53"];
}



if(jeu == "ac") {
    if(voiture == "mazda cup") {
        if (circuit == "laguna seca") {
            fuelpertour = lagunaseca[0];
            tempspartour = lagunaseca[1];
        } else if (circuit == "brandshatch_court") {
            fuelpertour = brandshatch_court[0]
            tempspartour = brandshatch_court[1]
        } else if (circuit == "brandshatch_gp") {
            fuelpertour = brandshatch_gp[0]
            tempspartour = brandshatch_gp[1]
        } else if (circuit == "spa") {
            fuelpertour = spa[0]
            tempspartour = spa[1]
        } else if (circuit == "limerock") {
            fuelpertour = limerock[0]
            tempspartour = limerock[1]
        } else if (circuit == "hockenheim") {
            fuelpertour = hockenheim[0]
            tempspartour = hockenheim[1]
        } else if (circuit == "mugello") {
            fuelpertour = mugello[0]
            tempspartour = mugello[1]
        } else if (circuit == "nurburgring") {
            fuelpertour = nurburgring[0]
            tempspartour = nurburgring[1]
        } else if (circuit == "catalunyagp") {
            fuelpertour = catalunyagp[0]
            tempspartour = catalunyagp[1]
        } else if (circuit == "donington") {
            fuelpertour = donington[0]
            tempspartour = donington[1]
        } else if (circuit == "kazanring") {
            fuelpertour = kazanring[0]
            tempspartour = kazanring[1]
        } else if (circuit == "portimao") {
            fuelpertour = portimao[0]
            tempspartour = portimao[1]
        } else if (circuit == "suzuka") {
            fuelpertour = suzuka[0]
            tempspartour = suzuka[1]
        } 
        
    }

    else if (voiture == "f3") {
        if (circuit == "mugello") {
            fuelpertour = mugello[0];
            tempspartour = mugello[1];
        } else if (circuit == "redbullring") {
            fuelpertour = redbullring[0]
            tempspartour = redbullring[1]
        } else if (circuit == "silverstone") {
            fuelpertour = silverstone[0]
            tempspartour = silverstone[1]
        } else if (circuit == "catalunyagp") {
            fuelpertour = catalunyagp[0]
            tempspartour = catalunyagp[1]
        } else if (circuit == "hockenheim") {
            fuelpertour = hockenheim[0]
            tempspartour = hockenheim[1]
        } 
    }
}   


var fuelpertour = 0;
var tempspartour = 0;
var fuelcourse = (timecourse / tempspartour) * fuelpertour + (2 * fuelpertour);