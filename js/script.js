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
  "A vibrant fire-red hoodie made from soft, breathable cotton blend." +
  " It features a cozy adjustable drawstring hood and hem for a snug fit.";

// 5.
const art1Button = art1.querySelector("button");
art1Button.innerHTML = "add to cart";
art1Button.style.backgroundColor = "red";

// 6.
art1.querySelector("figure").style.backgroundColor = "red";

// 7.
const footer = document.querySelector("footer section");
footer.children[1].querySelector("p").innerHTML =
  "Sinus skateboards<br>Malmöleden 22 <br>320 20, Malmö";

// 8. 
const allPTags = document.querySelectorAll("body p");
allPTags.forEach(paragraph => {
    paragraph.style.color = "blue";
});

// 9.
const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.innerHTML = "add to cart"
});

// 10. 
const menuHome = footer.querySelector("article a");
menuHome.classList.add("active"); 
console.log(menuHome);

// 11. 
