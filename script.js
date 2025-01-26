var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Transportation/Busiest%20Airports.csv";
var Rank = getColumn(url, 1);
var Year = getColumn(url, 2);
var Airport = getColumn(url, 3);
var Airport_Code = getColumn(url, 4);
var Airportlocation = getColumn(url, 5);
var Country = getColumn(url, 6);
var Passengers = getColumn(url, 7);

//----------------------------------------------------------------------------
function getBusiestAirportInYear(year) {
    var max = 0;
    var maxAirport = "";
    for (var i = 0; i < Passengers.length; i++) {
        if (Year[i] == year && parseFloat(Passengers[i]) > max) {
            max = parseFloat(Passengers[i]);
            maxAirport = Airport[i];
        }
    }
    return maxAirport;
}

console.log(getBusiestAirportInYear(2016));
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
//if there is an american airport from 2016 then print
function getUSAairports2016() {
    return Airport.filter((airport, index) => Year[index] == 2016 && Country[index] === "United States");
}

// Example usage
console.log(getUSAairports2016());
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
    //--------------------------------------------------------------------------------------------------------------
    function countAirportsInYearAndCountry(year, country) {
        let count = 0;
        for (let i = 0; i < Year.length; i++) {
            if (Year[i] == year && Country[i] === country) {
                count++;
            }
        }
        return count;
    }
    
    console.log(countAirportsInYearAndCountry(2016, "United States"));
    
//-------------------------------------------------------------------------------
function totalPassengersByYearAndCountry(year, country) {
    return Year.reduce((total, currentYear, index) => {
        if (currentYear == year && Country[index] === country) {
            return total + parseFloat(Passengers[index]);
        }
        return total;
    }, 0);
}

console.log(totalPassengersByYearAndCountry(2016, "United States"));
