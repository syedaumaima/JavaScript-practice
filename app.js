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



