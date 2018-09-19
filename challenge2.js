//alert ("hello");

var vehicleYear = document.getElementById('vehicle-year'),
    vehicleMake = document.getElementById('vehicle-make'),
    vehicleModel = document.getElementById('vehicle-model'),
    vehicleVin = document.getElementById('vehicle-vin'),
    submitButton = document.getElementById('submit-button'),
    carArea = document.getElementById('car-area');

    var cars = [];

    var Car = function Car(year,make,model,vin){
        var carYear = year.value,
            carMake = make.value,
            carModel = model.value,
            carVin = vin.value;
        return{
            Display: carYear + "  |  " + carMake +  "  |  " + carModel + "  |  VIN#= " + carVin + "<br>"

        }
    }

submitButton.addEventListener("click",function(){
var currentCar = new Car(vehicleYear,vehicleMake,vehicleModel,vehicleVin);
cars.push(currentCar.Display);
    carArea.innerHTML = cars;
    return false;

})
