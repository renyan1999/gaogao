let order = [];
let totalPrice = 0;

function addToOrder(dishName, price) {
    const existingItem = order.find(item => item.name === dishName);
    
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += price;
    } else {
        order.push({ name: dishName, unitPrice: price, price: price, quantity: 1 });
    }

    totalPrice += price;
    updateOrderDisplay();
}

function updateOrderDisplay() {
    const orderList = document.getElementById("orderList");
    const totalPriceElement = document.getElementById("totalPrice");

    orderList.innerHTML = "";

    order.forEach((item, index) => {
        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `
            <span>${item.name} x${item.quantity} - ¥${item.price}</span>
            <button class="delete-btn" onclick="removeFromOrder(${index})">删除</button>
        `;
        orderList.appendChild(orderItem);
    });

    totalPriceElement.innerText = totalPrice;
}

function removeFromOrder(index) {
    totalPrice -= order[index].price;
    order.splice(index, 1);
    updateOrderDisplay();
}

function resetOrder() {
    order = [];
    totalPrice = 0;
    updateOrderDisplay();
}
