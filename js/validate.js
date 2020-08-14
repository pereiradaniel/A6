window.addEventListener("load", function() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var postalCode = document.getElementById('postalcode');
    var contactMessage = document.getElementById('message');

    var form = document.getElementById('form');
    var errorElement = document.getElementById('error');

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

        if (messages.length > 0) {
            e.preventDefault();
            errorElement.innerText = messages.join(', ');
        };
    });
});