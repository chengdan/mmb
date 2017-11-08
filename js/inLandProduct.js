/**
 * Created by 程丹 on 2017/11/7.
 */
$(function () {
   var id = getId();
    // console.log(id);
    $.ajax({
        type : "get",
        url:"http://192.168.32.29:9090/api/getdiscountproduct",
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