function changeWarehouseKind(newKind) {
    document.getElementById("warehouse-kind-selector").innerHTML = newKind;
}

function listAddItem(dataArray) {
    for (var item in dataArray) {
        var newItem = document.createElement("a");
        newItem.setAttribute("href", "#");
        newItem.setAttribute("class", "list-group-item");
        newItem.innerHTML = item;
        document.getElementById("list-group").appendChild(newItem);
    }
}

function warehouseChangeKind(newKind) {
    document.getElementById("warehouse-kind-selector").innerHTML = newKind;
    var caret = document.createElement("span");
    caret.setAttribute("class", "caret");
    document.getElementById("warehouse-kind-selector").appendChild(caret);
}
