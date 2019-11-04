const Moon = {
    // Original Snippet: https://gist.github.com/endel/dfe6bb2fbe679781948c
    phase: function (year, month, day) {
        var c = e = jd = b = 0;

        if (month < 3) {
            year--;
            month += 12;
        }

        ++month;
        c = 365.25 * year;
        e = 30.6 * month;
        jd = c + e + day - 694039.09; // jd is total days elapsed
        jd /= 29.5305882; // divide by the moon cycle
        b = parseInt(jd); // int(jd) -> b, take integer part of jd
        jd -= b; // subtract integer part to leave fractional part of original jd
        b = Math.round(jd * 8); // scale fraction from 0-8 and round

        if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0

        switch (b) {
        case 0:
            return 'New-Moon';
            break;
        case 1:
            return 'Waxing-Crescent-Moon';
            break;
        case 2:
            return 'Quarter-Moon';
            break;
        case 3:
            return 'Waxing-Gibbous-Moon';
            break;
        case 4:
            return 'Full-Moon';
            break;
        case 5:
            return 'Waning-Gibbous-Moon';
            break;
        case 6:
            return 'last-quarter-moon';
            break;
        case 7:
            return 'Waning-Crescent-Moon';
            break;
        }
    }
};

// Moon.phase('2018', '01', '19');