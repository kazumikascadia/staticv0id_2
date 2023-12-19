function currentTime() {
    var currentTime=(new Date()).toLocaleTimeString();
    document.getElementById('time').innerHTML=`${currentTime}`
}
function currentDate() {
    var currentDate=(new Date()).toDateString();
    document.getElementById('date').innerHTML=`${currentDate}`
}

setInterval(function(){
    currentTime()
    currentDate()
}, 1000);