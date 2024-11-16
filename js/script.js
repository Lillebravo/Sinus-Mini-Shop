// 1.
const art1 = document.querySelector(".art-1");
art1.querySelector("h3").innerHTML = "Potato";

// 2.
const headerNav = document.querySelector("header nav");
headerNav.firstElementChild.innerHTML = "Start";

// 3.
headerNav.children[2].innerHTML = "Mail Us";

// 4.
const art2 = document.querySelector(".art-2");
art2.querySelector("p").innerHTML =
  "A vibrant fire-red hoodie made from soft, breathable cotton blend."
  + " It features a cozy adjustable drawstring hood and hem for a snug fit.";

// 5.
const art1Button = art1.querySelector("button");
art1Button.innerHTML = "add to cart";
art1Button.style.backgroundColor = "red";

//6. 

