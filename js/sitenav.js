/**
 * Created by 程丹 on 2017/11/8.
 */
$.ajax({
    type : "get",
    url: ip+"/api/getsitenav",
    dataType : "json",
    success : function (msg) {
        console.log(msg);
        $(".mmb_content ul").html(template("tpl",msg));
    }
});