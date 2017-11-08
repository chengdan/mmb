/**
 * Created by 程丹 on 2017/11/8.
 */
$.ajax({
    type : "get",
    url:"http://192.168.32.29:9090/api/getsitenav",
    dataType : "json",
    success : function (msg) {
        console.log(msg);
        $(".mmb_content ul").html(template("tpl",msg));
    }
});