//use gcet
//db.createCollection("products")
db.products.insertMany([
  {
    name: "Wireless Mouse",
    description: "A smooth and responsive wireless mouse",
    price: 25.99,
    imgUrl: "https://example.com/images/mouse.jpg"
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable speaker with powerful sound",
    price: 45.50,
    imgUrl: "https://example.com/images/speaker.jpg"
  },
  {
    name: "USB-C Charger",
    description: "Fast-charging USB-C adapter",
    price: 19.99,
    imgUrl: "https://example.com/images/charger.jpg"
  }
])
