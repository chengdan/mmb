/**
 * Created by 程丹 on 2017/11/7.
 */
$(function () {
   var id = getId();
    // console.log(id);
    $.ajax({
        type : "get",
        url: ip+"/api/getdiscountproduct",
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