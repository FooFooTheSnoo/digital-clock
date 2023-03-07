function realtimeClock() {
  let rtClock = new Date();

  let hours = rtClock.getHours();
  let minutes = rtClock.getMinutes();
  let seconds = rtClock.getSeconds();

  //am/pm system
 let amPm = (hours < 12) ? 'AM' : 'PM';
  // conver hours to 12-hr format
 hours = (hours > 12) ? hours - 12 : hours;

//pad the hours, minutes and seconds with leading zeros
hours = ('0' + hours).slice(-2);
minutes = ('0' + hours).slice(-2);
seconds = ('0' + hours).slice(-2);

//display the clock
document.getElementById('clock').innerHTML =
    hours + '  :  ' + minutes + '  :  ' + seconds + '  :  ' + amPm;
    let t = setTimeout(realtimeClock, 500);
}


