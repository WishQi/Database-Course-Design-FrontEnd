

function changeWarehouseKind(newKind) {
    document.getElementById("warehouse-kind-selector").innerHTML = newKind;
}

function listAddItem(dataArray) {
    for (i = 0; i < dataArray.length; ++i) {
        var newItem = document.createElement("a");
        newItem.setAttribute("href", "#");
        newItem.setAttribute("class", "list-group-item");
        newItem.innerHTML = dataArray[i];
        document.getElementById("list-group").appendChild(newItem);
    }
}

function warehouseChangeKind(newKind) {
    document.getElementById("warehouse-kind-selector").innerHTML = newKind;
    var caret = document.createElement("span");
    caret.setAttribute("class", "caret");
    document.getElementById("warehouse-kind-selector").appendChild(caret);
}

$(document).ready(function() {
    $(".delete-item-btn").click(function(){
        $(this).parent().remove();
    })
})

$(document).ready(function(){
    $("#edit_facebox_btn").click(function(){
        $(this).facebox();
    })
})

$(document).ready(function(){
    $("#add_supplier_btn").click(function(){
        $(this).facebox();
    })
})

$(document).ready(function(){
    $(".des-btn").click(function(){
        var content = "我要崩溃了！"
        $(this).attr("data-content", content).popover();
    })
})

$(document).ready(function(){
    $("#add_goods_supplied").click(function(){
        $(this).facebox();
    })
})

// $(document).ready(function(){
//     $("#make_sure").click(function(){
//
//     })
// })
//
// function addSupplier(supplierName) {
//     var list_group = document.getElementById("list_group");
//     var newSupplierItem = document.createElement("div");
//     newSupplierItem.setAttribute("class", "list-group-item");
//     newSupplierItem.innerHTML = ""
// }
