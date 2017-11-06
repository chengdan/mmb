/**
 * Created by 程丹 on 2017/11/6.
 */
$(function () {
    var search = location.search;
    search = search.slice(1);
    var arr = search.split("&");
    var id = arr[0].split("=")[1];
    // console.log(id);

    $.ajax({
        type : "get",
        url:"http://192.168.32.31:9090/api/getmoneyctrlproduct",
        data :{
            productid : id
        },
        dataType : "json",
        success : function (msg) {
            console.log(msg);
         $(".mmb_content").html(template("tpl",msg));
        }
    });
});