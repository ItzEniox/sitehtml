//timecourse = Temps de course en minute    fuelpertour = Carburant par tour     tempspartour = Temps par tour
var circuit = msg.req.cookies.circuit; // FuncCircuit('x')
var jeu = msg.req.cookies.jeu; // FuncVoiture('y')
var voiture = msg.req.cookies.voiture; // FuncVoiture('z')
var timecourse = (parseInt(msg.payload["t-heure"]) * 60) + (parseInt(msg.payload["t-heure"]));

//            [L par tour, Temps(décimal)]

//MX CUP AC
const brandshatch_court = ["0,7", "0.88"];
const lagunaseca = ["1.33", "1.67"];
const brandshatch_gp = ["1.33", "1.67"];
const spa = ["2.45", "2.87"];
const limerock = ["0.77", "0.97"];
const hockenheim = ["1.70", "2.07"];
const mugello = ["1.83", "2.17"];
const nurburgring = ["1.32", "1.67"];
const catalunyagp = ["1.68", "2.13"];
const donington = ["0.98", "1.33"];
const kazanring = ["1.2", "1.62"];
const portimao = ["1.67", "2.12"];
const suzuka = ["", ""];


if (jeu == "laguna seca") {
    fuelpertour = lagunaseca[0];
    tempspartour = lagunaseca[1];
} else if (jeu == "brandshatch_court") {
    fuelpertour = brandshatch_court[0]
    tempspartour = brandshatch_court[1]
} else if (jeu == "brandshatch_gp") {
    fuelpertour = brandshatch_gp[0]
    tempspartour = brandshatch_gp[1]
} else if (jeu == "spa") {
    fuelpertour = spa[0]
    tempspartour = spa[1]
} else if (jeu == "limerock") {
    fuelpertour = limerock[0]
    tempspartour = limerock[1]
} else if (jeu == "hockenheim") {
    fuelpertour = hockenheim[0]
    tempspartour = hockenheim[1]
} else if (jeu == "mugello") {
    fuelpertour = mugello[0]
    tempspartour = mugello[1]
} else if (jeu == "nurburgring") {
    fuelpertour = nurburgring[0]
    tempspartour = nurburgring[1]
}



//F3 AC
mugello = ["2.55", "1.62"];
const redbullring = ["2.2", "1.47"];
const silverstone = ["2.88", "1.78"];




var fuelpertour = 0;
var tempspartour = 0;
var fuelcourse = (timecourse / tempspartour) * fuelpertour + (2 * fuelpertour);