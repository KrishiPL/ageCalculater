const ageCalculater = (date,month,year) => {
let dateOfBirth = Number(date);
let monthOfbirth = Number(month);
let yearOfBirth = Number(year);

let myDate = new Date();
let currentYear = myDate.getFullYear();
let currentMonth = myDate.getMonth()+1;
let currentDate = myDate.getDate();
let arr = [31,29,31,30,31,30,31,31,30,31,30,31];

if(dateOfBirth > currentDate){
currentDate = currentDate + arr[currentMonth - 1];
currentMonth = currentMonth - 1;
}
if(monthOfbirth > currentMonth ){
currentMonth = currentMonth + 12;
currentYear = currentYear - 1;
}

let year1 = currentYear - yearOfBirth;
let month1 = currentMonth - monthOfbirth;
let date1 = currentDate - dateOfBirth;

let age = `${date1} ${month1} ${year1}`;
return age;
};            



           













    

  

