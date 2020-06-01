
const monthNames = [" ", "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

function updatetime(){

var time = document.getElementById("time");
var date = document.getElementById("date");

var d = new Date;
//console.log(d);

var day = d.getDate();
//console.log(day);
var month = d.getMonth();
var year = d.getFullYear();
//console.log(year);

var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();

if(day<10){
   day = "0" + day;
}
if(hour<10){
   hour = "0" + hour;
}
if(minute<10){
   minute = "0" + minute;
}
if(second<10){
   second = "0" + second;
}

time.innerHTML = hour + ":" + minute + ":" + second;
date.innerHTML = day + "-" + monthNames[month] + "-" + year;

setTimeout(updatetime, 1000);

}

updatetime();