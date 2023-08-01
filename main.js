const itemList = [
  {
    title: "Retro Chic: Vintage Handbag",
    description:
      "Embrace the elegance of the past with our Retro Chic handbag. This accessory, inspired by classic designs, marries vintage charm with modern style. Perfect for elevating any outfit, it's more than just a bag - it's a fashion statement.",
    price: "100",
    imgSrc: "./img/bag.jpg",
  },
  {
    title: "Urban Blue Side-Pocket Jeans",
    description:
      "Sport casual cool with our Urban Blue Side-Pocket Jeans. Featuring modern design, comfortable fabric, and trendy side pockets - these jeans are your go-to for any relaxed outing.",
    price: "250",
    imgSrc: "./img/jeans.jpg",
  },
  {
    title: "Bear Hug Beige Pants",
    description:
      "Embrace comfort with our Bear Hug oversized pants. Featuring a cute bear design, these are your go-to for casual charm.",
    price: "200",
    imgSrc: "./img/pants.jpg",
  },
  {
    title: "Blue Breezy Bear Tee",
    description:
      "Our 'Blue Breezy Bear Tee' is perfect for laid-back days. With a cool blue shade, trendy beige borders, and a playful bear design, it adds a youthful touch to your casual wear. A must-have for your wardrobe.",
    price: "150",
    imgSrc: "./img/shirt.jpg",
  },
  {
    title: "Military Chic Shorts",
    description:
      "Experience the fusion of comfort and style with our 'Military Chic Shorts'. These shorts, with their functional side pockets, are a modern take on military style. Perfect for those who seek a cool, yet feminine look.",
    price: "200",
    imgSrc: "./img/shorts.jpg",
  },
  {
    title: "Beige Statement Oversized Vest",
    description:
      "Embrace the oversized trend with our 'Beige Statement Vest'. Its ample cut and bold black writing make it a standout piece, perfect for those looking to make a statement while staying comfortable and chic.",
    price: "250",
    imgSrc: "./img/vest.jpg",
  },
];

const rowElement = document.createElement("div");
rowElement.className = "row justify-content-center";

itemList.forEach((item) => {
  const cardElement = document.createElement("div");
  cardElement.className = "card col-3 m-3 ";
  cardElement.innerHTML = `
      <img src="${item.imgSrc}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">Price: ${item.price}</p>
          <button onclick="increaseQuantity('${item.title}')" class="btn btn-primary m-1">+</button>
          <button onclick="decreaseQuantity('${item.title}')" class="btn btn-primary m-1">-</button>
          <button onclick="removeFromCart('${item.title}')" class="btn btn-danger m-1">Remove</button>
      </div>
    `;
  rowElement.appendChild(cardElement);
});

document.getElementById("cart").appendChild(rowElement);

function increaseQuantity(itemTitle) {}

function decreaseQuantity(itemTitle) {}

function removeFromCart(itemTitle) {}
