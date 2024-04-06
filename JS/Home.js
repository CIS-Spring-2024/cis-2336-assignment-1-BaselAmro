console.log("Welcome to Coug Cafe!");

document.addEventListener('DOMContentLoaded', function() {
    generateMenuItems();
});

// Declare your menuItems array once, with all items included
const menuItems = [
    { name: "Coug Burger", description: "A juicy burger with all the fixings", price: "$5.99", image: "/Picture/food1.jpg" },
    { name: "Coug Pizza", description: "Delicious pizza topped with cougar cheese", price: "$7.99", image: "/Picture/food7.jpg" },
    { name: "Coug Wrap", description: "Fresh veggies and grilled chicken in a hearty wrap", price: "$6.49", image: "/Picture/wrap.jpg" },
    { name: "Coug Salad", description: "Crisp greens tossed with seasonal produce", price: "$4.99", image: "/Picture/salad.jpg" },
    { name: "Coug Smoothie", description: "A refreshing blend of fruits and yogurt", price: "$3.99", image: "/Picture/smoothie.jpg" },
    { name: "Coug Coffee", description: "Rich, aromatic coffee sourced from local beans", price: "$1.99", image: "/Picture/coffee.jpg" },
    // ...and so on for each item
];

// Define the generateMenuItems function once
function generateMenuItems() {
    const menuContainer = document.getElementById('menu-container');
    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');

        menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        `;

        menuContainer.appendChild(menuItemElement);
    });
}
