/*eslint-env browser*/

document.addEventListener("DOMContentLoaded", init, false);

var $ = function(id) {
        return window.document.getElementById(id).value;
    }

function init() {
    "use strict";
    
    one.addEventListener("click", enter($("one").value));
    two.addEventListener("click", enter);
    three.addEventListener("click", enter);
    four.addEventListener("click", enter);
    five.addEventListener("click", enter);
    six.addEventListener("click", enter);
    seven.addEventListener("click", enter);
    eight.addEventListener("click", enter);
    nine.addEventListener("click", enter);
    zero.addEventListener("click", enter);
    divide.addEventListener("click", enter);
    multiply.addEventListener("click", enter);
    add.addEventListener("click", enter);
    subtract.addEventListener("click", enter);
    period.addEventListener("click", enter);
    equal.addEventListener("click", calculate);    
    
}

    
    function enter(val) {
        var val = $; document.getElementById("result").value;
        
        //$("one").value
    }
    function calculate() {
        val = document.getElementById("result").value;
        eval(val);
    }
