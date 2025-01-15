var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Transportation/Busiest%20Airports.csv";
var Rank = getColumn(url, 2);
var Year = getColumn(url, 3);
var Airport = getColumn(url, 4);
var Airport_Code = getColumn(url, 5);
var Airportlocation = getColumn(url, 6);
var Country = getColumn(url, 7);
var Passengers = getColumn(url, 8);

// functions could be something like searching for large airports by country?
// or it could be finding the largest airport averaged over many years?

//thanks for linking every column, 
//I think it should be searching for the largest airports by country,
//because if airports are busy they have to be safe and like 
//good? and it could help people with planning if it has to have
//a real world affect. 

//----------------------------------------------------------------------------
///This function will search airports on the list from the most recent year(2016),
//and then finds the busiest from the most recent year.
function getBusiestAirport(){
    var max = 0;
    var maxAirport = "";
    for (i < 0; i < Passengers.length; i++){
        if (Passengers[i] >= max){
            max = Passengers[i];
            maxAirport = Airport[i];
        }
    }

    return maxAirport;
}

console.log(getBusiestAirport())
//---------------------------------------------------------------------------
//This checks all the visiters on the list 
//and returns the least busiest airport from the year 2016.


//---------------------------------------------------------------------------
//Find the average total across all airports from 2015-2016


//---------------------------------------------------------------------------
//if there is an airport from united states in 2016, print 



//---------------------------------------------------------------------------
//Checks all airports from florida and then prints airports that were busy from 2013-2016
//THIS SHOULD PRINT ("Miami International Airport", "Orlando International Airport", "Miami International Airport")

