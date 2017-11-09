/**
 * Created by 程丹 on 2017/11/8.
 */
$(function () {
    
   var id = getId();
    $.ajax({
        type: "get",
        url: "http://1192.168.32.24:9090/api/getcouponproduct",
        data: {
            couponid: id
        },
        dataType: "json",
        success: function (msg) {
            // console.log(msg);
            $(".content ul").html(template("tpl", msg));
            $(".content ul li").each(function (i,e) {
                $(this).on("click",function () {
                    $(".modal").addClass("now");
                    $(".modal").append(msg.result[i].couponProductImg);
                    $(".modal").on("click",function () {
                        $(this).removeClass("now");
                        $(".modal img").remove();
                    })
                })
            })
        }
    });
});