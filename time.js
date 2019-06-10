function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var t = setTimeout(startTime, 500);
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    document.getElementById('wires').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('frame').innerHTML = h + ":" + m + ":" + s;
    }

function addZero(i) {
    if (i < 10) {i = "0" + i};
    return i;
}