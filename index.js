// Write your solution in this file!
const employee = { 
    name: "Jasec",
    streetAddress: "229 Clement"
};

function updateEmployeeWithKeyAndValue(obj,key,value) {
    return {
        ...obj,
    [key]: value,
 };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
employee.streetAddress = "12 Broadway"

function deleteFromEmployeeByKey(obj, key) {
    return {
        ...obj[key],
    }
};
delete employee.name;




function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj;
}


