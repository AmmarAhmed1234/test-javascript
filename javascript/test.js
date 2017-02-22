/**
 * Created by Ammar on 2/22/2017.
 */

///////////////********* Question no 1 *********////////////////

var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
var text = "";
var i;
for (i = 0; i < A.length; i++) {
    text += A[i] + "<br>";
}
document.getElementById("demosss").innerHTML = text;

///////////////********* Question no 2 *********///////////////






////////////// Counting ///////////////

var count = "";
var h;
for (h = 1; h < 16; h++) {
    count +=  h + " ";
}
document.getElementById("demossss").innerHTML = count;

////////////// Reverse counting ///////////////

var res = "";
var c;
for (c = 10; c > 0; c--) {
    res += c + " ";
}
document.getElementById("rescs").innerHTML = res;

/////////////// Even ////////////////

var even = "";
var v;
for (v = 0; v <= 20; v += 2) {
    even += v + " ";
}
document.getElementById("evenNo").innerHTML = even;

/////////////// Even ////////////////

var odd = "";
var t;
for (t = 1; t <= 20; t += 2) {
    odd += t + " ";
}
document.getElementById("oddNo").innerHTML = odd;


///////////////********* Question no 3 *********///////////////

var g = "John";
var j = new String("John");
var l = 23456677;
var th = undefined;
document.getElementById("demoss").innerHTML =
    typeof g + "<br>" +
    typeof j + "<br>" +
    typeof l + "<br>" +
    typeof th;

///////////////********* Question no 4 *********///////////////

function cOrNot(c){
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if(vowels.indexOf(c, 0) === -1) return false;
    return true;

}

var chr = 'a',
    x = cOrNot(chr);

document.getElementById("filler").innerHTML += x;

///////////////********* Quedtion no 5 *********///////////////

function myFunction() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age > 50) ? "Try again...!":"You are passed";
    document.getElementById("demo").innerHTML = voteable;
}

///////////////********** Question no 6 ***********////////////

var k1 = 1,
    k2= 2,
    k3= 3;
document.getElementById("declear").innerHTML= k1+k2+k3;

/////////////////// Question 7 ///////////////////

    var str = document.getElementById("demos").innerHTML;
    var txt = str.replace("the","Ammar");
    document.getElementById("demos").innerHTML = txt;

//////////////////