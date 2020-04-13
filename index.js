function price() {
    var checkbox = document.getElementById("checkbox");
    for(let i=0; i<3; i++) {
        var monthly = document.getElementById("monthly-price" + i);
        console.log(monthly);
            if(checkbox.checked === true) {
                monthly.style.display = "block";
                
            }else{
                monthly.style.display = "none";
            }
    }
    for(let i=0; i<3; i++) {
        var annually = document.getElementById("annually-price" + i);
        console.log(annually);
            if(checkbox.checked === true) {
                annually.style.display = "none";
            }else{
                annually.style.display = "block";
            }
        }
}