// Code your solution here
let driverNames = [
    {
        name: "Michael"
        hometown:"Nakuru"
        
    },
    {
        name: "John"
        hometown:"Mombasa"
    },
    {
        name: "Michael"
        hometown:"Kisumu"
    },
    {
        name: "Maureen"
        hometown:"Marsabit"
       
    },
    {
        name: "James"
        hometown:"Isiolo"
    },
    {
        name: "Jonathan"
        hometown:"Kisii"
        
    },
];

const findMatch = (driverNames, string) => {
    return driverNames.filter(driver =>driverNames.toLowerCase() === string.toLowerCase())
}
console.log(findMatch(driverNames,'Michael'))

function fuzzyMatch(driverNames,query){
    const results = [];//initialize an empty array to store the results 
    for(let i=0;i<driverNames.length;i++){
        if(driverNames[i].startsWith(query)){
            results.push(driverNames[i]);
        }
    }
    return results;
}
console.log(matches);

const matchName = (array, string) => {
    return array.filter(driver => driver.name === string)
}
