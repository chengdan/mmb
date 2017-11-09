/**
 * Created by 程丹 on 2017/11/7.
 */
$(function () {
    $.ajax({
        type : "get",
        url: ip+"/api/getcoupon",
        dataType : "json",
        success : function (msg) {
            // console.log(msg);
            $(".mmb_content ul").html(template("tpl",msg));
        }
    })
});