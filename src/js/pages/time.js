let handleTime = function (options) {

    $('body').append('<div class="clock"></div>');

    setInterval(clock, 1000);

    function clock() {
        let date = new Date();
        console.log(date);

        let hh = addZero(date.getHours());
        console.log(hh);

        let mm = addZero(date.getMinutes());
        console.log(mm);

        let ss = addZero(date.getSeconds());
        console.log(ss);

        let time = date.getTime(); // unix u milisec od 1970...
        console.log(time);

        console.log(hh + ' : ' + mm + ' : ' + ss);

        $('.clock').text(hh + ' : ' + mm + ' : ' + ss);
    }

    function addZero(x) {
        return (x < 10) ? (x = '0' + x) : x;
    }
};

// git add .
// git commit -a -m "commit" (do not need commit message either)
// git push