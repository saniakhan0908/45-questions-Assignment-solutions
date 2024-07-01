// Cars: write a function that stores information about a car in a object.The function should always receive a manufacturer and a model name.It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a colour or an optional feature. print the object that,s returned to make sure all the information was stored correctly.

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]:  any } []): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)

   }
    return carInfo;
};


 let answare = storeCarInfo('Honda','civic', {color:'black'}, {features: ['Navigation','Power window']})

console.log(answare);