
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
// 供应商管理函数
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
    $("#supplier_list").append(div);
}


// 生成供应商列表
function generateSupplierList(supplierInfoArray){
    $("#supplier_list").children().remove();
    supplierInfoArray = [["limaoqi", "chou"], ["xuyunjia", "shuai"]];

    for (i = 0; i < supplierInfoArray.length; ++i) {
        var supplierName = supplierInfoArray[i][0];
        var supplierDes = supplierInfoArray[i][1];
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
        $("#supplier_list").append(div);
    }
}

// 生成供应商可以提供的商品列表
function generateSupplierGoodsList(array){
    $("#goods_list_group").children().remove();
    for (var i = 0; i < array.length; ++i) {
        var commodityName = array[i][0];
        var commodityDes = array[i][1];

        var div = $("<div></div>");
        $("#goods_list_group").append(div);
        div.attr("class", "list-group-item");

        var h4 = $("<h4></h4>");
        div.append(h4);
        h4.attr("class", "list-group-item-heading");
        h4.css("display", "inline-block");

        var a = $("<a></a>");
        h4.append(a);
        a.attr("href", "#");
        a.text(commodityName);

        var btn1 = $("<button></button>");
        div.append(btn1);
        btn1.attr("class", "btn btn-danger delete-item-btn");
        btn1.css("float", "right");
        btn1.text("删除");

        var btn2 = $("<button></button>");
        div.append(btn2);
        btn2.attr("class", "btn btn-primary purchase-goods");
        btn2.css("float", "right");
        btn2.text("购进");

        var p = $("<p></p>");
        div.append(p);
        p.attr("class", "list-group-item-text");
        p.text("商品描述：" + commodityDes);
    }
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

// 生成货架列表
function generateShelfList(shelfInfoArray){
    $("#shelf_list").children().remove();

    for(var i = 0; i < shelfInfoArray.length; ++i) {
        var shelfID = shelfInfoArray[i][0];
        var districtID = shelfInfoArray[i][1];

        var li = $("<li></li>");
        $("#shelf_list").append(li);
        li.attr("class", "list-group-item");

        var h4 = $("<h4></h4>");
        li.append(h4);
        h4.attr("class", "list-group-item-heading");
        h4.css("display", "inline-block");
        h4.text(shelfID);

        var btn = $("<button></button>");
        li.append(btn);
        btn.attr("class", "btn btn-info move-btn");
        btn.css("float", "right");
        btn.text("移动");

        var p = $("<p></p>");
        li.append(p);
        p.attr("class", "list-group-item-text");

        var span1 = $("<span></span>")
        p.append(span1);
        span1.text("所在分区号：");

        var span2 = $("<span></span>");
        p.append(span2);
        span2.text(districtID);
    }
}

// 生成分区列表 分区搜索调用的
function showSearchDistrictResult(districtInfoArray){
    $("#district_search_result").children().remove();

    for (var i = 0; i < districtInfoArray.length; ++i) {
        var districtID = districtInfoArray[i][0];
        var districtName = districtInfoArray[i][1];
        var districtFloor = districtInfoArray[i][2];

        var li = $("<li></li>");
        $("#district_search_result").append(li);
        li.attr("class", "list-group-item");

        var h4 = $("<h4></h4>");
        li.append(h4);
        h4.attr("class", "list-group-item-heading");
        h4.css("display", "inline-block");

        var a = $("<a></a>");
        h4.append(a);
        a.attr("href", "#");
        a.text(districtID);

        var p = $("<p></p>");
        li.append(p);
        p.attr("class", "list-group-item-text");

        var span1 = $("<span></span>")
        p.append(span1);
        span1.text("分区名：" + districtName);

        var span2 = $("<span></span>")
        p.append(span2);
        span2.attr("class", "col-md-offset-1");
        span2.text("所在楼层号：" + districtFloor);
    }
}

// 点击分区搜索触发的函数
$(document).ready(function(){
    $("#district_search_btn").click(function(){
        // 测试数据
        var array = [["limaoqi", "hairihan", "xuyunjia"], ["hahah", "xixixi", "rriiiririri"]];
        showSearchDistrictResult(array);
    })
})

// 点击“移动”出发的函数
$(document).delegate(".move-btn", "click", function(){
    $(this).facebox();
})

// 确认移动触发的函数
$(document).ready(function(){
    $("#make_sure_move").click(function(){
        // 移动的操作
    })
})

// ------------------------------------------------------------------------------------------------------------------------------------------
// 商品管理

$(document).delegate(".make-sure-change", "click", function(){
    var price = $(this).prev().val();
    $(this).parent().parent().prev().text(price);
})

// 添加商品
function addGoods(dataArray){
    // dataArray = ["李茂琦", "李茂琦", "李茂琦", "李茂琦", "李茂琦", "李茂琦"];
    var tr = $("<tr></tr>");
    for(i = 0; i < dataArray.length; ++i) {
        if (i != 2) {
            var th = $("<th></th>");
            th.text(dataArray[i]);
            tr.append(th);
        } else if (i == 2){
            var th = $("<th></th>");
            tr.append(th);

            var span = $("<span></span>");
            span.text(dataArray[i]);
            th.append(span);

            var div = $("<div></div>");
            div.attr("class", "dropdown");
            div.css("float", "right");
            th.append(div);

            var btn = $("<button></button>");
            btn.attr("class", "btn btn-primary dropdown-toggle");
            btn.attr("data-toggle", "dropdown");
            btn.text("修改");
            div.append(btn);

            var div2 = $("<div></div>");
            div2.attr("class", "dropdown-menu");
            div.append(div2);

            var input = $("<input></input>");
            input.attr({"class":"input-price", "type":"text", "placeholder":"请输入价格"});
            div2.append(input);

            var btn2 = $("<button></button>");
            btn2.attr("class", "btn btn-info make-sure-change");
            btn2.text("确定");
            div2.append(btn2);
        }
    }
    $("#all_goods_list").append(tr);
}

// 生成商品列表
function generateGoodsTable(goodsArray){
    $("#all_goods_list").children().remove();
    for (j = 0; j < goodsArray.length; ++j) {
        addGoods(goodsArray[j]);
    }
}

// 确定添加商品
$(document).ready(function(){
    $("#make_sure_create_district").click(function(){
        var commodityName = $("#commodity_name").val();
        var commodityID = $("#commodity_id").val();
        var price = $("#current_price").val();
        var expirationTime = $("#expiration_time").val();
        var shelfID = $("#shelf_id").val();
        var warehosueID = $("#warehosue_id").val();
        var itemInfo = [commodityName, commodityID, price, expirationTime, shelfID, warehosueID];
        addGoods(itemInfo);
    })
})

// 搜索商品
$(document).ready(function(){
    $("#search_commodity").click(function(){
        generateGoodsTable();
    })
})


$(document).ready(function(){
    $("#add_goods_btn").click(function(){
        $(this).facebox();
    })
})

// --------------------------------------------------------------------------------------------------------------------------
// 徐运佳写的，不管李茂琦的事

function BatchlistAddItem(dataArray, warehouseID, commodityType, commodityName)
{
    for (var item in dataArray) {
        var newItem = document.createElement("a");
        newItem.setAttribute("href", "warehouse-batch-info.aspx?batchID=" + dataArray[item] +
            "&warehouseID=" + warehouseID + "&commodityType=" + commodityType + "&commodityName=" +
            commodityName);
        newItem.setAttribute("class", "list-group-item");
        newItem.setAttribute("runat", "server");
        newItem.innerHTML = dataArray[item];
        document.getElementById("list-group").appendChild(newItem);
    }
}

function CommodityNamelistAddItem(dataArray, warehouseID, commodityType)
{
    for (var item in dataArray) {
        var newItem = document.createElement("a");
        newItem.setAttribute("href", "warehouse-batch-id.aspx?name=" + dataArray[item] + "&warehouseID=" + warehouseID +
            "&type=" + commodityType);
        newItem.setAttribute("class", "list-group-item");
        newItem.setAttribute("runat", "server");
        newItem.innerHTML = dataArray[item];
        document.getElementById("list-group").appendChild(newItem);
    }
}

function CommodityTypelistAddItem(dataArray, warehouseID)
{
    for (var item in dataArray) {
        var newItem = document.createElement("a");
        newItem.setAttribute("href", "warehouse-goods-item.aspx?type=" + dataArray[item] + "&warehouseID=" + warehouseID);
        newItem.setAttribute("class", "list-group-item");
        newItem.setAttribute("runat", "server");
        newItem.innerHTML = dataArray[item];
        document.getElementById("list-group").appendChild(newItem);
    }
}

function WarehouseIDlistAddItem(dataArray) {
    for (var item in dataArray) {
        var newItem = document.createElement("a");
        newItem.setAttribute("href", "warehouse-goods-kind.aspx?id=" + dataArray[item]);
        newItem.setAttribute("class", "list-group-item");
        newItem.setAttribute("runat", "server");
        newItem.innerHTML = dataArray[item];
        document.getElementById("list-group").appendChild(newItem);
    }
}
