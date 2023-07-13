const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

function validateInput(){
    // if(day.value.invalid || day.value === " "){
    //     document.getElementById("error-day").innerHTML ="This is a required field";
    // }
    if(day.value > 31){
        document.getElementById("error-day").innerHTML = "Must be a valid day";
    }
    if(month.value >12){
        document.getElementById("error-month").innerHTML = "Must be a valid month";
    }
    if(year.value > 2023){
        document.getElementById("error-year").innerHTML = "Must be in the past";
    }
}

function calculateAge(){
    this.validateInput();
    console.log(day.value); 
    console.log(month.value);
    console.log(year.value);

    var years;
    var days;
    var months;
    const todayDate = new Date();
    console.log(todayDate.getFullYear());
    console.log(todayDate.getMonth()+1);
    console.log(todayDate.getDate());
    console.log(todayDate);

    years = todayDate.getFullYear() - year.value;
    months = Math.abs((todayDate.getMonth()+1) - month.value);
    days = todayDate.getDate();
    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
}


