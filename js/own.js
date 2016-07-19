
// 仓库函数
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

// -----------------------------------------------------------------------------------------------------------------------------------
// 供应商函数
// 添加供应商
$(document).ready(function(){
    $("#add_supplier_btn").on("click", function(){
        $(".close").attr("id", "make_sure_add");
        $(this).facebox();
    })
})

// 编辑信息
var editBtn;
$(document).delegate(".edit-facebox-btn", "click", function(){
    $(".close").attr("id", "make_sure_edit");
    var supplierName = $(this).prev().children("a").text();
    var supplierDes = $(this).next().text();
    $("#supplier_name").val(supplierName);
    $("#supplier_des").val(supplierDes);
    $(this).facebox();
    editBtn = $(this);
})

$(document).ready(function(){
    $(".close").click(function(){
        if($(this).attr("id") == "make_sure_add"){
            addSupplier();
        } else if ($(this).attr("id") == "make_sure_edit") {
            editSupplierInfo();
            // alert("xixixi");
        }
    })
})

function editSupplierInfo(){
    var supplierNewName = $("#supplier_name").val();
    var supplierNewDes = $("#supplier_des").val();
    editBtn.prev().children("a").text(supplierNewName);
    editBtn.next().text("描述信息:" + supplierNewDes);
}

function addSupplier() {
    var supplierName = $("#supplier_name").val();
    var supplierDes = $("#supplier_des").val();
    var div = $("<div></div>");
    div.attr("class", "list-group-item");
    var title = $("<h4></h4>");
    title.attr("class", "list-group-item-heading");
    title.css("display", "inline-block");
    var supplier = $("<a></a>");
    supplier.attr("href", "#");
    supplier.text(supplierName);
    title.append(supplier);
    div.append(title);
    var editButton = $("<button></button>");
    editButton.attr("type", "button");
    editButton.text("编辑");
    editButton.attr("class", "btn btn-info edit-facebox-btn");
    editButton.css("float", "right");
    div.append(editButton);
    var des = $("<p></p>");
    des.attr("class", "list-group-item-text");
    des.text("描述信息：" + supplierDes);
    div.append(des);
    $("#list_group").append(div);
}

// 搜索该供货商可以提供的商品
function searchGoods(goodsInfoArray){
    $("#search_result").children().remove();
    var goodsInfoArray = [["limaoqi", "chou"], ["xuyunjia", "shuai"]];
    for(i = 0; i < goodsInfoArray.length; ++i) {
        var itemName = goodsInfoArray[i][0];
        var itemDes = goodsInfoArray[i][1];

        var li = $("<li></li>");
        li.attr("class", "list-group-item");
        var h4 = $("<h4></h4>");
        h4.attr("class", "list-group-item-heading");
        var a = $("<a></a>");
        a.attr("href", "#");
        a.attr("class", "add-to-goods-list");
        a.text(itemName);
        h4.append(a);
        li.append(h4);
        var p = $("<p></p>");
        p.attr("class", "list-group-item-text");
        var span1 = $("<span></span>");
        span1.text("商品描述：");
        p.append(span1);
        var span2 = $("<span></span>");
        span2.text(itemDes);
        p.append(span2);
        li.append(p);

        $("#search_result").append(li);
    }
}

// 将该商品添加到列表中
$(document).delegate(".add-to-goods-list", "click", function(){
    var item = $("<div></div>");
    item.attr("class", "list-group-item");

    var itemName = $(this).text();
    var itemDes = $(this).parent().parent().children("p").clone();

    var a = $("<a></a>");
    a.attr("href", "#");
    a.text(itemName);
    var h4 = $("<h4></h4>");
    h4.attr("class", "list-group-item-heading");
    h4.css("display", "inline-block");
    h4.append(a);
    item.append(h4);

    var deleteBtn = $("<button></button>");
    deleteBtn.attr("class", "btn btn-danger delete-item-btn");
    deleteBtn.css("float", "right");
    deleteBtn.text("删除");
    item.append(deleteBtn);

    var purchaseBtn = $("<button></button>");
    purchaseBtn.attr("class", "btn btn-primary purchase-goods");
    purchaseBtn.css("float", "right");
    purchaseBtn.text("购进");
    item.append(purchaseBtn);

    item.append(itemDes);

    $("#goods_list_group").append(item);
})

// 购进
$(document).delegate(".purchase-goods", "click", function(){
    $(this).facebox();
})

// 删除
$(document).delegate(".delete-item-btn", "click", function(){
    $(this).parent().remove();
})

// 创建可选仓库列表
function generateWarehouseList(warehouseIdArray){
    for(i = 0; i < warehouseIdArray.length; ++i) {
        var content = $("<option></option>").text(warehouseIdArray[i]);
        $("#select_warehouse_list").append(content);
    }
}

// -----------------------------------------------------------------------------------------------------------------------------------
// 分区管理
// 创建新分区
$(document).ready(function(){
    $("#create_new_district").click(function(){
        $(this).facebox();
    })
})

// 确定创建新分区


// 移动货架
$(document).ready(function(){
    $(".move-btn").on("click", function(){
        $(this).facebox();
    })
})
