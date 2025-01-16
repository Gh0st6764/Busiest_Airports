var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Transportation/Busiest%20Airports.csv";
var Rank = getColumn(url, 1);
var Year = getColumn(url, 2);
var Airport = getColumn(url, 3);
var Airport_Code = getColumn(url, 4);
var Airportlocation = getColumn(url, 5);
var Country = getColumn(url, 6);
var Passengers = getColumn(url, 7);

//----------------------------------------------------------------------------
///This function will search airports on the list from the most recent year(2016),
//and then finds the busiest from the most recent year.
function getBusiestAirport(){
    var max = 0;
    var maxAirport = "";
    for (i = 0; i < Passengers.length; i++){
        console.log(Passengers[i])
        if (parseFloat(Passengers[i]) > max){
            console.log("help")
            max = parseFloat(Passengers[i]);
            maxAirport = Airport[i];
        }
    }

    return maxAirport;
}

 console.log(getBusiestAirport())
//---------------------------------------------------------------------------
//This checks all the visiters on the list 
//and returns the least busiest airport from the year 2016.

function getCalmestAirport(){
    var min = 1000000000000;
    var minAirport = "";
    for (i = 0; i < Passengers.length; i++){
        // console.log(Passengers[i])
        if (parseFloat(Passengers[i]) <= min){
            min = parseFloat(Passengers[i]);
            minAirport = Airport[i];
        }
    }

    return minAirport;
}

console.log(getCalmestAirport())

//---------------------------------------------------------------------------
//Find the average total across all airports from 2015-2016



//---------------------------------------------------------------------------
//if there is an airport from united states in 2016, print 


function printAirports2016() {
    for (i = 0; i < Year.length; i++) {
        if (Year[i] == 2016) {
            console.log(Airport[i]);
        }
    }
}

printAirports2016();

//---------------------------------------------------------------------------
//Checks all airports from florida and then prints airports that were busy from 2013-2016
//THIS SHOULD PRINT ("Miami International Airport", "Orlando International Airport", "Miami International Airport")
