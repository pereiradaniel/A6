function sortList(category) {
    var sortedList = [];
    for (var i = 0; i < items.length; i++) {
        if (category == items[i].Category || category == "All") {
            sortedList.push(items[i]);
        };
    };
    return sortedList;
};

function emptyList(listElem) {
    if (listElem.hasChildNodes()) {
        while (listElem.firstChild) {
            listElem.removeChild(listElem.firstChild);
        };
    };
    return;
};

function clearMenu() {
    menu_1.classList.remove("highlighted");
    menu_2.classList.remove("highlighted");
    menu_3.classList.remove("highlighted");
    return;
}

function toggleMenu(newMenu) {
    newMenu.classList.toggle("highlighted");
    return;
}

function buildList(sortedList) {
    for (var i = 0; i < sortedList.length; i++) {
        var currentItem = document.createElement('div');
        
        // Add img
        var itemImg = document.createElement("img");
        itemImg.src = "./images/" + sortedList[i].Code + ".jpg";
        itemImg.alt = "";
        itemImg.classList.add("item-image");
        currentItem.appendChild(itemImg);

        // Add name
        var nameField = document.createElement('h3');
        var itemName = document.createTextNode("Item name:  " + sortedList[i].Name);
        nameField.appendChild(itemName);
        currentItem.appendChild(nameField);

        // Add category
        var categoryField = document.createElement('h4');
        var itemCategory = document.createTextNode("Category:  " + sortedList[i].Category);
        categoryField.appendChild(itemCategory);
        currentItem.appendChild(categoryField);

        // Add description
        var descField = document.createElement('p');
        var itemDesc = document.createTextNode(sortedList[i].Description);
        descField.classList.add("item-desc");
        descField.appendChild(itemDesc);
        currentItem.appendChild(descField);

        // Add price
        var priceField = document.createElement('h4');
        var itemPrice = document.createTextNode("Price:  $" + sortedList[i].Price + ".00");
        priceField.classList.add("item-price");
        priceField.appendChild(itemPrice);
        currentItem.appendChild(priceField);

        currentItem.classList.add("item");
        itemsList.appendChild(currentItem);
    };
};

window.addEventListener("load", function() {
    var menu_1 = document.getElementById("menu_1");
    var menu_2 = document.getElementById("menu_2");
    var menu_3 = document.getElementById("menu_3");
    var menuLength = 3;

    itemsList = document.getElementById("items-list");

    menu_1.onclick = function (e) {
        clearMenu();
        toggleMenu(menu_1);
        emptyList(itemsList);
        var sortedList = sortList("All");
        buildList(sortedList);
    };

    menu_2.onclick = function (e) {
        clearMenu();
        toggleMenu(menu_2);
        emptyList(itemsList);
        var sortedList = sortList("Rifles");
        buildList(sortedList);
    };

    menu_3.onclick = function (e) {
        clearMenu();
        toggleMenu(menu_3);
        emptyList(itemsList);
        var sortedList = sortList("Bows");
        buildList(sortedList);
    };
});