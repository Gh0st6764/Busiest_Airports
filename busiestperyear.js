var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Transportation/Busiest%20Airports.csv";
var Rank = getColumn(url, 1);
var Year = getColumn(url, 2);
var Airport = getColumn(url, 3);
var Airport_Code = getColumn(url, 4);
var airportlocation = getColumn(url, 5);
var Country = getColumn(url, 6);
var Passengers = getColumn(url, 7);
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

