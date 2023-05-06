//Task One 
//Check current Year is leap or not

function checkLeap(current) {
    if(current%4==0){
        alert("Current Year "+current+ "is a leap year")
    }

    else{
        alert("Current Year "+current+ "is not a leap year")
    }
}

var current = new Date ();
checkLeap(current.getFullYear());

//Task two
//A Function that returns the leap years of upcoming next 10 years

function nextLeap(year) {
    var i, leaplist = [];
    for (i = 1; i <= 10; i++) {
        if (year % 4 == 0) {
            leapList.push(year)
        }

        else {
            i--;
    }
        year++;
    }
    return leaplist;
}

var year = prompt("Enter a year to find next 10 leap years:");
var list = nextLeaps(year);
document.write("Upcoming next 10 leap years are:");
document.write(list);



//Task three
//Generate OTP

function generateOTP(){
    var OTP = Math.floor((Math.random()*2650)* (
        Math.floor(Math.random()*14700)));
        return "Z-"+OTP;
}

var myOTP = generateOTP();
alert("Your OTP is :" +myOTP)



