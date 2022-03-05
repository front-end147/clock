let now, dname, mo, dnum, yr, hour, minute, sec, day_status, months, day;
// function to get date
function getDate() {
  // get date and time of the day
  now = new Date();
  // get date only and store values in variables
  dname = now.getDay();
  mo = now.getMonth();
  dnum = now.getDate();
  yr = now.getFullYear();
  // get time only and store values in variables
  hour = now.getHours();
  minute = now.getMinutes();
  sec = now.getSeconds();
  day_status = "AM";
  // array to change the default names of the days and months
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
}
// function to change the date
function changeDate() {
  getDate();
  if (hour > 12) {
    hour -= 12;
    day_status = "PM";
  }
  // time
  document.querySelector("#hour").innerHTML = ((hour < 10) ? `0${hour}` : hour) + " :";
  document.querySelector("#minute").innerHTML = ((minute < 10) ? `0${minute}` : minute) + " :";
  document.querySelector("#sec").innerHTML = (sec < 10) ? `0${sec}` : sec;
  document.querySelector("#day_status").innerHTML = day_status;
  // date
  document.querySelector("#dayname").innerHTML = `${day[dname]},`;
  document.querySelector("#month").innerHTML = `${months[mo]}`;
  document.querySelector("#daynum").innerHTML = ((dnum < 10) ? `0${dnum}`: dnum) + ",";
  document.querySelector("#year").innerHTML = yr;
}
// change the date after 1 sec repeatly
setInterval(() => {
  changeDate();
}, 1000);