// When the header_img is clicked, reload the page :
document.getElementById("header_img").addEventListener("click", function () {
  location.reload();
});

// Displaying our initial items :
const itemList = [
  {
    title: "Retro Chic: Vintage Handbag",
    price: "100",
    imgSrc: "./img/bag.jpg",
  },
  {
    title: "Urban Side-Pocket Jeans",
    price: "250",
    imgSrc: "./img/jeans.jpg",
  },
  {
    title: "Bear Hug Beige Pants",
    price: "200",
    imgSrc: "./img/pants.jpg",
  },
  {
    title: "Blue Breezy Bear Tee",
    price: "150",
    imgSrc: "./img/shirt.jpg",
  },
  {
    title: "Beige Oversized Vest",
    price: "250",
    imgSrc: "./img/vest.jpg",
  },
];

// Creating an object to store the quantities of each item
let quantities = {};
// Initialize the quantities for each item to be 0
itemList.forEach((item) => (quantities[item.title] = 0));

const rowElement = document.createElement("div");
rowElement.className = "row justify-content-center";

itemList.forEach((item) => {
  const cardElement = document.createElement("div");
  cardElement.id = `${item.title.replace(/\s/g, "")}-card`; // replace spaces with nothing
  cardElement.className = "card col-2 m-3";

  // Create the image object :
  let MyImage = document.createElement("img");
  MyImage.setAttribute("src", `${item.imgSrc}`);
  MyImage.setAttribute("class", "card-img-top");
  MyImage.setAttribute("alt", `${item.title}`);
  cardElement.appendChild(MyImage);

  // Create the body object :
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  // Create the title object :
  let myTitle = document.createElement("h5");
  myTitle.setAttribute("class", "card-title");
  myTitle.textContent = `${item.title}`;
  cardBody.appendChild(myTitle);
  // Create the price object :
  let myPara = document.createElement("p");
  myPara.setAttribute("class", "card-text");
  myPara.textContent = `Price: ${item.price}`;
  cardBody.appendChild(myPara);
  //Create the quantity object :
  let myQuantity = document.createElement("span");
  myQuantity.id = `${item.title.replace(/\s/g, "")}-quantity`; // globally replace all spaces
  myQuantity.textContent = "Quantity: 0";
  cardBody.appendChild(myQuantity);
  // Create the "+"button object :
  let increase = document.createElement("button");
  increase.className = "btn btn-primary m-1";
  increase.textContent = "+";
  increase.onclick = (function (itemTitle) {
    return function () {
      increaseQuantity(itemTitle);
    };
  })(item.title);
  cardBody.appendChild(increase);
  // Create the "-"button object :
  let decrease = document.createElement("button");
  decrease.className = "btn btn-primary m-1";
  decrease.textContent = "-";
  decrease.onclick = (function (itemTitle) {
    return function () {
      decreaseQuantity(itemTitle);
    };
  })(item.title);
  cardBody.appendChild(decrease);
  // Create the remove button object :
  let removeButton = document.createElement("button");
  removeButton.className = "btn btn-danger m-1";
  removeButton.textContent = "Remove";
  removeButton.onclick = (function (itemTitle) {
    return function () {
      removeFromCart(itemTitle);
    };
  })(item.title);
  cardBody.appendChild(removeButton);
  // Create the liking button object :
  let Mylike = document.createElement("button");
  Mylike.id = `${item.title.replace(/\s/g, "")}-like`;
  Mylike.className = "btn btn-outline-primary m-1";
  Mylike.onclick = function () {
    like(item.title.replace(/\s/g, ""));
  };
  let heart = document.createElement("i");
  heart.className = "fas fa-heart";
  Mylike.appendChild(heart);
  cardBody.appendChild(Mylike);

  cardElement.appendChild(cardBody);
  rowElement.appendChild(cardElement);
});

document.getElementById("cart").appendChild(rowElement);

// Display initial total price :
let total_price = 0;
let deletedItems = [];

updateTotalPrice();

function increaseQuantity(itemTitle) {
  quantities[itemTitle]++;
  document.getElementById(
    `${itemTitle.replace(/\s/g, "")}-quantity`
  ).innerText = `Quantity: ${quantities[itemTitle]}`;
  updateTotalPrice();
}

function decreaseQuantity(itemTitle) {
  if (quantities[itemTitle] > 0) {
    quantities[itemTitle]--;
    document.getElementById(
      `${itemTitle.replace(/\s/g, "")}-quantity`
    ).innerText = `Quantity: ${quantities[itemTitle]}`;
  }
  updateTotalPrice();
}

function removeFromCart(itemTitle) {
  const card = document.getElementById(`${itemTitle.replace(/\s/g, "")}-card`);
  card.remove();
  deletedItems.push(itemTitle);
  updateTotalPrice();
}

function updateTotalPrice() {
  total_price = 0;
  for (let itemTitle in quantities) {
    // check if the itemTitle is not in the deletedItems array
    if (!deletedItems.includes(itemTitle)) {
      let item = itemList.find((item) => item.title === itemTitle);
      if (item) {
        total_price += Number(item.price) * quantities[itemTitle];
      }
    }
  }
  document.getElementById(
    "totalPrice"
  ).innerText = `Total price: ${total_price}`;
}

function like(itemTitle) {
  // We first get the like button for the item specified by itemTitle:
  const likeButton = document.getElementById(`${itemTitle}-like`);

  // The classList property returns the class name(s) of an element as a DOMTokenList object.
  //The toggle() method of this object is used to add a class if it does not exist, and remove a class if it does exist.
  likeButton.classList.toggle("btn-primary");
  likeButton.classList.toggle("btn-outline-primary");
  //The net effect of these two lines is to switch between the 'btn-primary' and 'btn-outline-primary' styles whenever the like button is clicked.
}
