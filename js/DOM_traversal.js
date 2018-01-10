(function() {
"use strict";
var imageBanner, listItems;
function init(){
//alert("Hello!");
imageBanner = document.querySelector("#marvelImages");
//console.log(imageBanner);
listItems = document.querySelectorAll("#navList li"); 
//console.log(listItems);
setUpListItems();
}
function setUpListItems() {
var offSet =600;
for (var i=0; i<listItems.length; i++) {

listItems[i].addEventListener("click",fireMove,false);	
}

function fireMove(e) {
moveBanner(e.target.parentNode.id);
}

function moveBanner(howMuch) {
TweenMax.to(imageBanner,.7,{right:(offSet*howMuch)});

}
function complete() {
	TweenMax.to(imageBanner,.7,{
	opacity:1});
}	
}

window.addEventListener("load",init,false);
})();