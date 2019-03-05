window.onload = function () {
    var oUl = document.getElementsByTagName("ul")[0];

    var pOne = document.getElementsByClassName("prv")[0];
    var pTwo = document.getElementsByClassName("next")[0];


    var i = 1;
    pOne.onclick = function () {
        //console.log(1);
        oUl.style.left = -i*900 + "px";
        i++;
    };
    pTwo.onclick = function () {
        //console.log(2);
        oUl.style.left = i*900 + "px";
        i--;
    };
    


}