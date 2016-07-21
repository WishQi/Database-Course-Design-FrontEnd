// ---------------------------------------------------------------------------------------------------------------------------
// “热卖商品”页面接口

// function showHostSalesList(array){
//     for (var i = 0; i < 5; ++i) {
//
//     }
// }



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

// 编辑楼层信息
$(document).ready(function(){
    $(".edit-btn").on("click", function(){
        $("#floor_des").val($(this).next().text());
        $(this).facebox();
    })
})

// 创建新分区
$(document).ready(function(){
    $("#create_new_district").click(function(){
        $(this).facebox();
    })
})

// 添加分区到分区列表
function addToDistrictList(districtInfo) {
    var districtID = districtInfo[0];
    var districtName = districtInfo[1];

    var div1 = $("<div></div>");
    $("#district_list").append(div1);
    div1.attr("class", "list-group-item");

    var h4 = $("<h4></h4>");
    div1.append(h4);
    h4.attr("class", "list-group-item-heading");
    h4.css("display", "inline-block");

    var a = $("<a></a>");
    h4.append(a);
    a.attr("href", "#");
    a.text(districtID);

    var btn1 = $("<button></button>");
    div1.append(btn1);
    btn1.attr("class", "btn btn-danger delete-item-btn");
    btn1.css("float", "right");
    btn1.text("删除");

    var div2 = $("<div></div>");
    div1.append(div2);
    div2.attr("class", "dropdown");
    div2.css("float", "right");

    var btn2 = $("<button></button>");
    div2.append(btn2);
    btn2.attr("class", "btn btn-primary dropdown-toggle, change-district-des");
    btn2.attr("data-toggle", "dropdown");
    btn2.text("修改");

    var div3 = $("<div></div>");
    div2.append(div3);
    div3.attr("class", "dropdown-menu");

    var li = $("<li></li>");
    div3.append(li);
    li.attr("class", "dropdown-header");
    li.text("分区描述");

    var text = $("<textarea></textarea>");
    div3.append(text);
    text.attr("class", "form-control");
    text.attr("placeholder", "请输入分区描述信息");

    var btn3 = $("<button></button>");
    div3.append(btn3);
    btn3.attr("class", "btn btn-info form-control");
    btn3.text("确定修改");

    var p = $("<p></p>");
    div1.append(p);
    p.attr("class", "list-group-item-text");
    p.text("分区名：" + districtName);
}

// 生成分区列表
function generateDistrictList(array){
    $("#district_list").children().remove();
    for (var i = 0; i < array.length; ++i) {
        addToDistrictList(array[i]);
    }
}

// 点击“修改”按钮触发的事件
$(document).delegate(".change-district-des", "click", function(){
    $(this).next().children("textarea").val();
})

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
function addGoodsToTable(dataArray){
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
        addGoodsToTable(goodsArray[j]);
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
        addGoodsToTable(itemInfo);
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
// 员工管理

// 点击“新增员工信息”按钮触发的事件
$(document).ready(function(){
    $("#add_employee_info").click(function(){
        $(this).facebox();
    })
})

$(document).ready(function(){
    $("#make_sure_add_employee").click(function(){
        makeSureAddEmployeeToTable();
    })
})

// 确定添加员工信息到表格中
function makeSureAddEmployeeToTable() {
    var employeeId = $("#employee_id").val();
    var employeeName = $("#employee_name").val();
    var idNum = $("#id_number").val();
    var workTypeId = $("#worker_type_id").val();
    var salary = $("#salary").val();

    var array = [employeeId, employeeName, idNum, workTypeId, salary];
    addEmployeeToTable(array);
}

// 添加员工信息到表格中
function addEmployeeToTable(array){
    var tr = $("<tr></tr>");
    $("#employee_table").append(tr);

    for (var i = 0; i < 5; ++i) {
        var th = $("<th></th>");
        tr.append(th);
        th.text(array[i]);
    }
}

// 生成员工列表  “所有员工”页面调用的函数
function generateEmployeeTable(array){
    $("#employee_table").children().remove();
    for (var i = 0; i < array.length; ++i) {
        addEmployeeToTable(array[i]);
    }
}

// 点击“显示该员工信息”触发的函数
function showTheEmployeeInfo(infoArray){
    infoArray = [1,"李茂琦","513001199510170019","haha",100000,1,8,"男","1995-10-17","同济大学"];
    $("#info1").children().remove();
    $("#info2").children().remove();
    var tr1 = $("<tr></tr>");
    var tr2 = $("<tr></tr>");
    $("#info1").append(tr1);
    $("#info2").append(tr2);

    for (var i = 0; i < infoArray.length; ++i) {
        var data = $("<th></th>");
        data.text(infoArray[i]);

        switch (i) {
            case 0: data.attr("id", "employee_id"); break;
            case 1: data.attr("id", "employee_name"); break;
            case 2: data.attr("id", "id_number"); break;
            case 3: data.attr("id", "worker_type_id"); break;
            case 4: data.attr("id", "salary"); break;
            case 5: data.attr("id", "his_floor"); break;
            case 6: data.attr("id", "work_time"); break;
            case 7: data.attr("id", "gender"); break;
            case 8: data.attr("id", "birthdate"); break;
            case 9: data.attr("id", "address"); break;
        }

        if (i < 5) {
            tr1.append(data);
        } else {
            tr2.append(data);
        }
    }
}

// 点击“修改员工信息”触发的弹窗事件
$(document).ready(function(){
    $("#change_employee_info").click(function(){
        $("#worker_type_id_input").val( $("#worker_type_id").text() );
        $("#his_floor_input").val( $("#his_floor").text() );
        $("#salary_input").val( $("#salary").text() );
        $("#work_time_input").val( $("#work_time").text() );
        $("#address_input").val( $("#address").text() );
        $(this).facebox();
    })
})

// 确定修改信息
$(document).ready(function(){
    $("#make_sure_change_employee_info").click(function(){
        $("#employee_id").text( $("#worker_type_id_input").val() );
        $("#his_floor").text( $("#his_floor_input").val() );
        $("#salary").text( $("#salary_input").val() );
        $("#work_time").text( $("#work_time_input").val() );
        $("#address").text( $("#address_input").val() );
    })
})

// ----------------------------------------------------------------------------------------------------------------------------

// 投诉管理

// 点击“修改投诉信息”触发的函数
$(document).ready(function(){
    $("#change_complaint_info").click(function(){
        $(this).facebox();
    })
})

// 确定修改
$(document).ready(function(){
    $("#make_sure_change_condition").click(function(){
        var data = $("#selected_condition").val();
        $("#deal_condition").text(data);
    })
})

// 生成投诉信息表格
function generateComplaintTable(array){
    $("#complaint_info_table").children().remove();
    for(var i = 0; i < array.length; ++i) {
        addComplaintInfoToTable(array[i]);
    }
}

// 添加投诉信息到表格中
function addComplaintInfoToTable(array){
    var tr = $("<tr></tr>");
    $("#complaint_info_table").append(tr);
    for (var i = 0; i < array.length; ++i){
        var th = $("<th></th>");
        tr.append(th);
        th.text(array[i]);
    }
}

// 点击“查询投诉信息”触发的函数
function generateOneComplaintInfo(array){
    array = [1,1,11,1,1];
    if (array.length == 0) {
        return 0;
    }
    $("#complaint_info").children().remove();
    var tr = $("<tr></tr>");
    $("#complaint_info").append(tr);
    for (var i = 0; i < 4; ++i) {
        var th = $("<th></th>");
        tr.append(th);
        th.text(array[i]);
        if (i == 3) {
            th.attr("id", "deal_condition");
        }
    }
    $("#complaint_des").text(array[4]);
}

// ----------------------------------------------------------------------------------------------------------------------------
// 批次管理

function addToWarehouseInfoList(array, j){
    // for (var i = 0; i < array.length; ++i) {
        var first = array[0];
        var second = array[1];
        var li = $("<li></li>");
        $("#warehouse_info_list").append(li);

        switch ( (j + 1) % 3) {
            case 1: li.attr("class", "list-group-item list-group-item-info"); break;
            case 2: li.attr("class", "list-group-item list-group-item-success"); break;
            case 0: li.attr("class", "list-group-item list-group-item-warning"); break;
            default: break;
        }

        var span1 = $("<span></span>");
        span1.text(first + "-库存量");
        var span2 = $("<span></span>");
        span2.attr("class", "badge");
        span2.text(second);
        li.append(span1);
        li.append(span2);
}

function generateWarehouseInfoList(array){
    $("#warehouse_info_list").children().remove();
    for (var i = 0; i < array.length; ++i) {
        addToWarehouseInfoList(array[i], i);
    }
}

function generateShelfInfoList(array){
    $("#shelf_id").text(array[0]);
    $("#floor_id").text(array[1]);
    $("#in_shelf_amount").text(array[2]);
}

function generateSaleAndExpirationInfoList(array){
    $("#total_amount").text(array[0]);
    $("#sale_amount").text(array[1]);
    $("#expired_amount").text(array[2]);
}

function addShelfInfoToTable(array){
    var tr = $("<tr></tr>");
    $("#shelf_table").append(tr);

    for (var i = 0; i < 3; ++i) {
        var th = $("<th></th>").text(array[i]);
        tr.append(th);
    }
}

function generateSelfTable(array){
    $("#shelf_table").children().remove();
    for (var i = 0; i < array.length; ++i) {
        addShelfInfoToTable(array[i]);
    }
}

function addWarehouseInfoToTable(array){
    var tr = $("<tr></tr>");
    $("#warehouse_table").append(tr);

    for (var i = 0; i < 2; ++i) {
        var th = $("<th></th>").text(array[i]);
        tr.append(th);
    }
}

function generateWarehouseInfoTable(array){
    $("#warehouse_table").children().remove();
    for (var i = 0; i < array.length; ++i) {
        addWarehouseInfoToTable(array[i]);
    }
}


function addToExpiredGoodsTable(array){
    var tr = $("<tr></tr>");
    $("#expired_goods_table").append(tr);

    for (var i = 0; i < array.length; ++i) {
        var th = $("<th></th>");
        th.text(array[i]);
        tr.append(th);
    }
}
function generateExpiredGoodsTable(array){
    $("#expired_goods_table").children().remove();
    for (var i = 0; i < array.length; ++i) {
        addToExpiredGoodsTable(array[i]);
    }
}

$(document).ready(function(){
    $("#delete_all_expired_goods").click(function(){
        $("#expired_goods_table").children().remove();
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
