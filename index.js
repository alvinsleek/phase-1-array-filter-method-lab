//let driverNames = [
//    {
//        name: "Michael"
//        hometown:"Nakuru"
        
//    },
//    {
//        name: "John"
//        hometown:"Mombasa"
//    },
//    {
//        name: "Michael"
//        hometown:"Kisumu"
//    },
//    {
//      name: "Maureen"
//        hometown:"Marsabit"
       
//    },
//    {
//        name: "James"
//        hometown:"Isiolo"
//   },
//    {
//        name: "Jonathan"
//        hometown:"Kisii"
        
//    },
//];

const findMatch = (driverNames, string) => {
    return driverNames.filter(driver =>driverNames.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (array, string) => {
    return array.filter(driver => {
        return new RegExp(`^${string.toLowerCase()}`).test(driver.toLowerCase())
    })
}

const matchName = (array, string) => {
    return array.filter(driver => driver.name === string)
}
        
