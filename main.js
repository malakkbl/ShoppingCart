// When the header_img is clicked, reload the page :
document.getElementById('header_img').addEventListener('click', function() {
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
    title: "Urban Blue Side-Pocket Jeans",
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
    title: "Beige Statement Oversized Vest",
    price: "250",
    imgSrc: "./img/vest.jpg",
  },
];

// Creating an object to store the quantities of each item
let quantities = {};
// Initialize the quantities for each item to be 0
itemList.forEach(item => quantities[item.title] = 0);

const rowElement = document.createElement("div");
rowElement.className = "row justify-content-center";

itemList.forEach((item) => {
  const cardElement = document.createElement("div");
  cardElement.id = `${item.title.replace(/\s/g, '')}-card`; // replace spaces with nothing
  cardElement.className = "card col-3 m-4 ";
  cardElement.innerHTML = `
    <img src="${item.imgSrc}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">Price: ${item.price}</p>
        <span id="${item.title.replace(/\s/g, '')}-quantity">Quantity: 0</span>
        <button onclick="increaseQuantity('${item.title}')" class="btn btn-primary m-1">+</button>
        <button onclick="decreaseQuantity('${item.title}')" class="btn btn-primary m-1">-</button>
        <button onclick="removeFromCart('${item.title.replace(/\s/g, '')}')" class="btn btn-danger m-1">Remove</button>
        <button id="${item.title.replace(/\s/g, '')}-like" onclick="toggleLike('${item.title.replace(/\s/g, '')}')" class="btn btn-outline-primary m-1"><i class="fas fa-heart"></i></button>
    </div>
  `;

  rowElement.appendChild(cardElement);
});

document.getElementById("cart").appendChild(rowElement);

function increaseQuantity(itemTitle) {
  quantities[itemTitle]++;
  document.getElementById(`${itemTitle.replace(/\s/g, '')}-quantity`).innerText = `Quantity: ${quantities[itemTitle]}`;
}

function decreaseQuantity(itemTitle) {
  if (quantities[itemTitle] > 0) {
    quantities[itemTitle]--;
    document.getElementById(`${itemTitle.replace(/\s/g, '')}-quantity`).innerText = `Quantity: ${quantities[itemTitle]}`;
  }
}

function removeFromCart(itemTitle) {
  // Delete the item from the quantities object
  delete quantities[itemTitle];
  
  // Remove the item's card from the DOM
  const card = document.getElementById(`${itemTitle}-card`);
  card.remove();
}

function toggleLike(itemTitle) {
  const likeButton = document.getElementById(`${itemTitle}-like`);
  likeButton.classList.toggle('btn-primary');
  likeButton.classList.toggle('btn-outline-primary');
}