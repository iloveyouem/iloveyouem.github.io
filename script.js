window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("May 9, 2021 21:00:00", 'time'); // ****** Change this line!
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    if (years > 1){ days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    if (years == 1) {yearp = " year";} else {yearp = " years";}
    if (days == 1) {dayp = " year";} else {dayp = " days";}
    if (hours == 1) {hourp = " hour";} else {hourp = " hours";}
    if (mins == 1) {minp = " minute";} else {minp = " minutes";}
    if (secs == 1) {secp = " second";} else {secp = " seconds";}

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('years')[0].innerHTML = years + yearp;
    idEl.getElementsByClassName('days')[0].innerHTML = (days - (365 * years)) + dayp;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours + hourp;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins + minp;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs + secp;
  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }

  function moveScroller() {
    var $anchor = $("#scroller-anchor");
    var $scroller = $('#scroller');

    var move = function() {
        var st = $(window).scrollTop();
        var ot = $anchor.offset().top;
        if(st > ot) {
            $scroller.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            $scroller.css({
                position: "relative",
                top: ""
            });
        }
    };
    $(window).scroll(move);
    move();
}