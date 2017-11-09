/**
 * Created by 程丹 on 2017/11/6.
 */
$(function () {
    $.ajax({
        type:"get",
        url:"http://192.168.32.24:9090/api/getcategorytitle",
        dataType:"json",
        success:function (msg) {
            // console.log(msg);
            $(".mmb_content").html(template("tpl",msg));
            $(".content_title").each(function (i,e) {
                var id = $(this).data("id");
                $(this).on("click",function () {
                    $(".content_box").eq(i).toggleClass("now");
                    $.ajax({
                        type:"get",
                        url:'http://192.168.32.24:9090/api/getcategory',
                        data:{
                            titleid:id
                        },
                        dataType:"json",
                        success:function (msg) {
                            // console.log(msg);
                            $(".content_box").html(template("tpl2",msg));
                        }
                    });
                })
            })
        }
    });
});