function changeOne(textId,val,priceId,price)
{
    var quantity =  document.getElementById(textId).value;

    var quantityValu = parseInt(quantity);

    var count = quantityValu + val ;

    if(count>=0){

        document.getElementById(textId).value = count;

        document.getElementById(priceId).value = ( count * price );
    }

}

function Addtocart(){
    
    var price1 =  document.getElementById("price1").value;
    var price2 =  document.getElementById("price2").value;
    var price3 =  document.getElementById("price3").value;
    var price4 =  document.getElementById("price4").value;

    var qt1 = document.getElementById("quantity1").value;
    var qt2 = document.getElementById("quantity2").value;
    var qt3 = document.getElementById("quantity3").value;
    var qt4 = document.getElementById("quantity4").value;

var price = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4);

var modal = document.getElementById("myModal");

document.querySelector("#fName").textContent = document.getElementById("firstName").value;

    if (qt1 != "0"){
        document.querySelector("#cart1").textContent = "Sri Lankan Culture T-Shirt     = " +qt1+ " items at price of LKR"+price1 ;
    }
    if (qt2 != "0"){
        document.querySelector("#cart2").textContent = "Painted Srilankan Culture T-Shirt = " +qt2+ " items at price of LKR"+price2  ;
    }
    if (qt3 != "0"){
        document.querySelector("#cart3").textContent = "painted Tuk T-Shirt  = " +qt3+ " items at price of LKR"+price3 ;
    }
    if (qt4 != "0"){
        document.querySelector("#cart4").textContent = "Srilankan Devil mask T-Shirt  = " +qt4+ " items at price of LKR"+price4 ;
    }
    document.querySelector("#totalBill").textContent = "Your Total Bill is LKR"+price;

 modal.style.display = "block"; 
}

function placeOrder1() {

    var price1 =  document.getElementById("price1").value;
    var price2 =  document.getElementById("price2").value;
    var price3 =  document.getElementById("price3").value;
    var price4 =  document.getElementById("price4").value;

    var qt1 = document.getElementById("quantity1").value;
    var qt2 = document.getElementById("quantity2").value;
    var qt3 = document.getElementById("quantity3").value;
    var qt4 = document.getElementById("quantity4").value;

var price = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4);

var modal = document.getElementById("myModal");

document.querySelector("#fName").textContent = document.getElementById("firstName").value;

    if (qt1 != "0"){
        document.querySelector("#cart1").textContent = "Sri Lankan Culture T-Shirt      = " +qt1+ " items at price of LKR"+price1 ;
    }
    if (qt2 != "0"){
        document.querySelector("#cart2").textContent = "Painted Srilankan Culture T-Shirt = " +qt2+ " items at price of LKR"+price2  ;
    }
    if (qt3 != "0"){
        document.querySelector("#cart3").textContent = "painted Tuk T-Shirt  = " +qt3+ " items at price of LKR"+price3 ;
    }
    if (qt4 != "0"){
        document.querySelector("#cart4").textContent = "Srilankan Devil mask T-Shirt  = " +qt4+ " items at price of LKR"+price4 ;
        
    }
    document.querySelector("#totalBill").textContent = "Your Total Bill is LKR"+price;

modal.style.display = "block";

}

function closeWindow()
{

var modal = document.getElementById("myModal");

modal.style.display = "none";

}

function validateShoppingForm()
{

    var fn = document.forms["shoppingForm"]["firstName"].value;
    var cn = document.forms["shoppingForm"]["contactNumber"].value;
    var ad = document.forms["shoppingForm"]["address"].value;

    var qt1 = document.getElementById("quantity1").value;
    var qt2 = document.getElementById("quantity2").value;
    var qt3 = document.getElementById("quantity3").value;
    var qt4 = document.getElementById("quantity4").value;

    if ( qt1==0 && qt2==0 && qt3==0 && qt4==0 )
    {
        alert("At least one gift item should be selected")
        return false;;
    }

    if (fn == "" || cn == "" || ad == "")
    {
      alert("Fill your name and Contact is cumpulsory");
      return false;
    }

    else {

        placeOrder1();
        return false;
    }
}