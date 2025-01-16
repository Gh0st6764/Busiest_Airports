var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Transportation/Busiest%20Airports.csv";
var Rank = getColumn(url, 1);
var Year = getColumn(url, 2);
var Airport = getColumn(url, 3);
var Airport_Code = getColumn(url, 4);
var airportlocation = getColumn(url, 5);
var Country = getColumn(url, 6);
var Passengers = getColumn(url, 7);
// you search first by year, then by rank

function rankingAirports(years){
var lairport = [];   
var ranks = [];  
for(var i=0; i<Year.length; i++){
    // console.log(Year[i])
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
// you search first by year, then by rank
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

