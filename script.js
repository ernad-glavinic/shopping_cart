let allTotal = 0;

function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    quantity = parseInt(quantity);
    let cartItems = document.querySelector('.cart-items');

    if(quantity > 0){
        price = price.substring(1);
        price = parseInt(price);
        
        let total = price * quantity;
        allTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>${price} x ${quantity} = $<span>${total}<span></p>
                                    <button class="remove-item" onClick="removeFromCart(this)">Ukloni</button>
                                </div>`;

        document.querySelector('.total').innerText = `Total: $${allTotal}`;

        element.innerText = "Dodano";
        element.setAttribute('disabled', 'true');
    }else{
        alert("Odaberi količinu!"); 
    }
}

function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    price = parseInt(price);
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item')

    allTotal -= price;

    document.querySelector('.total').innerText = `Total: $${allTotal}`;
    mainEl.remove();

    vegetables.forEach(function(vege){
        let itemName = vege.querySelector('.si-content h3').innerText;
        let input = vege.querySelector('.actions input');
        let button = vege.querySelector('.actions button');
        
        if(itemName === name){
            input.value = 0;
            button.removeAttribute('disabled');
            button.innerText = "Dodaj";
        }
    });
}