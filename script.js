 var price  = document.querySelectorAll(".price");
 var input  = document.querySelector("input");
//  var checked = document.querySelector("input::checked")

//  addEventListener("click" , checked);

//  function checked(){

//     price[0].innerHTML = "&dollar;199.99" ;
//      price[1].innerHTML = "&dollar;249.99" ;
//        price[2].innerHTML = "&dollar;399.99" ;
     

//  }

 function change() {

    if(input.checked === true){
        price[0].innerHTML = "&dollar;199.99" ;
        price[1].innerHTML = "&dollar;249.99" ;
        price[2].innerHTML = "&dollar;399.99" ;

    } else{
           
        price[0].innerHTML = "&dollar;19.99" ;
        price[1].innerHTML = "&dollar;24.99" ;
        price[2].innerHTML = "&dollar;39.99" ;
    };
  
 };