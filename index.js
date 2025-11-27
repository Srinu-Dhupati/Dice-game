function whole(){
function dice(){
var number1 = Math.floor(Math.random()*6)+1;           //genarate a random number from 1 to 6
var randomImage = "dice"+number1+".png";              //here we creating diceimages from 1 to 6
var randomimageSource = "images/"+randomImage;       //here we creating total path of images
var Image1 = document.querySelectorAll("img")[0];    //here we select the element imge
Image1.setAttribute("src",randomimageSource);
return number1 ;      //here we changig images randomly
}

function dice2(){
var number2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+number2+".png";
var randomimageSource2 = "images/"+randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimageSource2);
return number2;
}

function result(){
    var p1=dice()
    var p2=dice2()
    if(p1 > p2){
        document.querySelector("h1").innerHTML = "🏁 Player 1 Win!";
 
}
else if(p1 < p2){
        document.querySelector("h1").innerHTML = "🏁 Player 2 Wins!";

}
else{
        document.querySelector("h1").innerHTML = "🎌 Draw";

}
}

return result();

}
