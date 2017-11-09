/**
 * Created by 程丹 on 2017/11/8.
 */
$(function () {
    $.ajax({
        type : "get",
        url: ip+"/api/getbrandtitle",
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            $(".content ul").html(template("tpl",msg));
        }
    })
});