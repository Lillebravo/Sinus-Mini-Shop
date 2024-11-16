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
allPTags.forEach((paragraph) => {
  paragraph.style.color = "blue";
});

// 9.
const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.innerHTML = "add to cart";
});

// 10.
const menuHome = footer.querySelector("article a");
menuHome.classList.add("active");
console.log(menuHome);

// 11.
document.querySelector("header img").classList.remove("logo");

// 12.
const newMenuOption = document.createElement("a");
newMenuOption.innerHTML = "About Us";
newMenuOption.setAttribute("href", "#");
footer.querySelector("article").appendChild(newMenuOption);

// 13.
class Product {
  constructor(imageSrc, imageAlt, nameText, colorText, descriptionText) {
    this.figure = document.createElement("figure");
    this.img = document.createElement("img");
    this.name = document.createElement("h2");
    this.color = document.createElement("h3");
    this.description = document.createElement("p");

    this.img.setAttribute("src", imageSrc);
    this.img.setAttribute("alt", imageAlt);
    this.name.innerHTML = nameText;
    this.color.innerHTML = colorText;
    this.description.innerHTML = descriptionText;

    this.figure.appendChild(this.img);
  }

  initialiseProduct(parentElement) {
    const elements = [this.figure, this.name, this.color, this.description];
    elements.forEach((element) => parentElement.appendChild(element));
  }
}

const products = document.querySelector("main");
const newProduct = document.createElement("article");
products.appendChild(newProduct);

const hoodieForrest = new Product(
  "img/hoodie-forrest.png",
  "hoodie-forrest",
  "Sinus Hoodie",
  "Forrest",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."
);

hoodieForrest.initialiseProduct(newProduct);
