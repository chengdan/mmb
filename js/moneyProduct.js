/**
 * Created by 程丹 on 2017/11/6.
 */
$(function () {
    var id = getId();
    $.ajax({
        type : "get",
        url: ip+"/api/getmoneyctrlproduct",
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