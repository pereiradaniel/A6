function showElem(thing) {
    thing.classList.add("show");
    return;
}

function hideElem(thing) {
    thing.classList.remove("show");
    return;
}

window.addEventListener("load", function() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var postalCode = document.getElementById('postalcode');
    var contactMessage = document.getElementById('message');
    var orderBox = document.getElementById('order-box');
    var question = document.getElementById('question');
    var comment = document.getElementById('comment');
    var orderProblem = document.getElementById('orderproblem');
    var orderNo = document.getElementById('order-no');

    var form = document.getElementById('form');
    var errorElement = document.getElementById('error');

    orderBox.classList.add("hide");

    orderProblem.onclick = function (e) {
        showElem(orderBox);
    };

    question.onclick = function (e) {
        hideElem(orderBox);
    };

    comment.onclick = function (e) {
        hideElem(orderBox);
    };



    form.addEventListener('submit', (e) => {
        let messages = [];
        if (name.value === '' || name.value == null) {
            messages.push('Name is required');
        };
        
        if (email.value === '' || email.value == null) {
            messages.push('Email is required');
        };

        if (address.value === '' || address.value == null) {
            messages.push('Address is required');
        };

        if (city.value === '' || city.value == null) {
            messages.push('City is required');
        };

        if (postalcode.value === '' || postalcode.value == null) {
            messages.push('Postal code is required');
        };

        if (contactMessage.value === '' || contactMessage.value == null) {
            messages.push('Message is required');
        };

        if (orderBox.classList.contains("show")) {
            if (orderNo.value === '' || orderNo.value === null) {
                messages.push('Order number is required');
            }
        } else {
            orderNo.value = 'NA';
        }

        if (messages.length > 0) {
            e.preventDefault();
            errorElement.innerText = messages.join(', ');
        };
    });
});