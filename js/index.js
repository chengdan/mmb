/**
 * Created by 程丹 on 2017/11/5.
 */
$(function () {
    $.ajax({
        type:"get",
        url:"http://192.168.32.24:9090/api/getindexmenu",
        dataType:"json",
        success : function (msg) {
            // console.log(msg);
            $(".mmb_nav ul").html(template("tpl",msg));
            $(".mmb_nav ul a").each(function (i,e) {
                $(this).prepend(msg.result[i].img);
                $(".mmb_nav ul a").eq(0).attr("href","category.html");
                $(".mmb_nav ul a").eq(1).attr("href","money.html");
                $(".mmb_nav ul a").eq(2).attr("href","inLand.html");
                $(".mmb_nav ul a").eq(3).attr("href","baicaijia.html?titleId=0");
                $(".mmb_nav ul a").eq(4).attr("href","money.html");
                $(".mmb_nav ul a").eq(5).attr("href","coupon.html");
                $(".mmb_nav ul a").eq(6).attr("href","category.html");
                $(".mmb_nav ul a").eq(8).attr("href","gsshop.html");
                $(".mmb_nav ul a").eq(9).attr("href","category.html");
                $(".mmb_nav ul a").eq(10).attr("href","sitenav.html");
                $(".mmb_nav ul a").eq(11).attr("href","brand.html");
                if(i > 7){
                    $(".mmb_nav ul a").eq(7).attr("href","javascript:;");
                    $(".mmb_nav ul a").eq(i).parent().addClass("now");
                    $(".mmb_nav ul a").eq(7).on("click",function () {
                        $(".mmb_nav ul a").eq(i).parent().toggleClass("now");
                    })
                }
            })
        }
    });

    $.ajax({
        type : "get",
        url:'http://192.168.32.24:9090/api/getmoneyctrl',
        dataType : "json",
        success : function (msg) {
            // console.log(msg);
            $(".content_info ul").html(template("tpl2",msg));
            // $(".content_info ul a").each(function (i,e) {
            //     $(this).prepend(msg.result[i].productImgSm)
            // })
        }
    })
});