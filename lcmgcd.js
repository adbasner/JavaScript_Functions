function leastCommonMultiple(min, max) {
    //makes a range of all needed numbers
    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    //finds gcd for use with euclidian 
    function gcd (a, b) {
        if ( ! b) {
            return a;
        }

        return gcd(b, a % b);
    }

    //fins lcm, calls gcd - euclidian 
    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    //starts at min
    var multiple = min;

    //foreach is callback, finds lcm between range[0] and range [last]
    range(min, max).forEach(function(n) {
        //sets new lcm, compares next value of range to this
        multiple = lcm(multiple, n);
    });

    return multiple;
}

leastCommonMultiple(1, 13);
console.log(leastCommonMultiple(1, 13));