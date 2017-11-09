/**
 * Created by 程丹 on 2017/11/8.
 */
$(function () {
    $.ajax({
        type : "get",
        url:"http://192.168.32.24:9090/api/getbrandtitle",
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            $(".content ul").html(template("tpl",msg));
        }
    })
});