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

// decides if there are higher or lower passengers 
function getBusiestAirport(){
    var max = 0;
    var maxAirport = "";
    for (i = 0; i < Passengers.length; i++){
        console.log(Passengers[i])
        if (parseFloat(Passengers[i]) > max){
//prints the most populated and busiest airports
            max = parseFloat(Passengers[i]);
    //links the highest number with an airport
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
//One of the largest numbers, if anything is below its added to the list 
    var min = 1000000000000;
    var minAirport = "";
    for (i = 0; i < Passengers.length; i++){
        // console.log(Passengers[i])
        if (parseFloat(Passengers[i]) <= min){
    //cycles through.........
            min = parseFloat(Passengers[i]);
            minAirport = Airport[i];
        }
    }


    return minAirport;
}

console.log(getCalmestAirport())
//---------------------------------------------------------------------------
//if there is an airport from united states in 2016, print 

function printUSAairports2016() {
    for (i = 0; i < Year.length; i++) {
        if (Year[i] == 2016 && Country[i] === "United States") {
            console.log(Airport[i]);
        }
    }
}

console.log (USAairports2016());
//---------------------------------------------------------------------------
// the function of this code is to recieve a year and rank, and returns the respective airport name, such as the 8th most busy airport in 2015
// @years{number} this must be between 2010 and 2016 since that is what the data set covers, and it needs to be in the format of "2011.0", or "2016.0"
function rankingAirports(years){
    var lairport = [];   
    var ranks = [];  
    for(var i=0; i<Year.length; i++){
        if(Year[i]==years){
        lairport.push(Airport[i]);
        ranks.push(Rank[i]);
        }
    }
    console.log(lairport);
    console.log(ranks);
    var num = BusiestAirportsPerYear(ranks, 8);
    console.log(lairport[num]);
    }
    //@numbers{list} is the list of ranks
    //@targetNumber{number} this is the rank of how busy the airport is per year, no letters accepted!
    function BusiestAirportsPerYear (numbers, targetNumber){
        var minIndex = 0;
        var maxIndex = numbers.length-1;
        while(minIndex <= maxIndex){
            var midIndex = Math.floor((minIndex+maxIndex) /2);
            if(numbers[midIndex] == targetNumber){
                return midIndex;
            }
            else if (targetNumber > numbers[midIndex]){
                minIndex = midIndex +1; }
                else { maxIndex = midIndex - 1;}
        }
        return -1;
    }
    
    rankingAirports("2015.0")
    //---------------------------------------------------------------------------

// counts the number of airports in USA (2016) with passengers below a certain
function SmallUSAairports2016() {
    let count = 0;
    for (i = 0; i < Year.length; i++) {
        if (Year[i] == 2016 && Country[i] === "United States" && parseFloat(Passengers[i]) < 0) {
            count++;
        }
    }
    return SmallUSAairports2016
}

console.log(SmallUSAairports2016);

//irports with fewer than 100 million passengers
console.log(countSmallUSAairports2016(100000000));
    

//Total amount of passengers in USA
function totalPassengersUSA2016() {
    let totalPassengers = 0;
    for (i = 0; i < Year.length; i++) {
        if (Year[i] == 2016 && Country[i] === "United States") {
            totalPassengers += parseFloat(Passengers[i]);
        }
    }
    return totalPassengers;
}

console.log(totalPassengersUSA2016());
