setInterval(() => {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        // Now it will rotate clock hours hand according to current time
        hr = h * 30 + m / 2;
        m = 6 * m;
        s = 6 * s;

        document.querySelector('#h').style.transform = `rotate(${hr}deg)`;
        document.querySelector('#m').style.transform = `rotate(${m}deg)`;
        document.querySelector('#s').style.transform = `rotate(${s}deg)`;
    }, 1000);
