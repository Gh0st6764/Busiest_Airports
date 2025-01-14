var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Transportation/Busiest%20Airports.csv";
var Rank = getColumn(url, 2);
var Year = getColumn(url, 3);
var Airport = getColumn(url, 4);
var Airport_Code = getColumn(url, 5);
var location = getColumn(url, 6);
var Country = getColumn(url, 7);
var Passengers = getColumn(url, 8);

// functions could be something like searching for large airports by country?
// or it could be finding the largest airport averaged over many years?

//thanks for linking every column, 
//I think it should be searching for the largest airports by country,
//because if airports are busy they have to be safe and like 
//good? and it could help people with planning if it has to have
//a real world affect. 
