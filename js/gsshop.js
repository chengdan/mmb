/**
 * Created by 程丹 on 2017/11/8.
 */
$(function () {
    var shopid = 0;
    var areaid = 0;

    function render() {
        $.ajax({
            type : "get",
            url: ip+"/api/getgsproduct",
            data :{
                shopid :shopid,
                areaid :areaid
            },
            dataType : "json",
            success : function (msg) {
                // console.log(msg);
                $(".mmb_content ul").html(template("tpl3",msg));
            }
        })
    }
    render();
    $(".tit .jd").on("click",function () {
            $(".nav2").removeClass("now");
            $(".nav").toggleClass("now");
            $.ajax({
                type : "get",
                url: ip+"/api/getgsshop",
                dataType : "json",
                success : function (msg) {
                    // console.log(msg);
                    $(".nav ul").html(template("tpl",msg));
                    $(".nav ul li").each(function (i,e) {
                        $(".nav ul li").eq(i).on("click",function () {
                            // $(".nav span").eq(i).addClass("now");
                            $(".tit .jd span").html($(".nav li a").eq(i).html());
                            $(".nav").removeClass("now");
                            shopid = $(".nav ul li").eq(i).data("id");
                           // $(".nav ul span").eq(i).addClass("now");
                            render();
                        })
                    });
                }
            });
        });

    $(".tit .city").on("click",function () {
            $(".nav2").removeClass("now");
            $(".nav").toggleClass("now");
            $.ajax({
                type : "get",
                url: ip+"/api/getgsshoparea",
                dataType : "json",
                success : function (msg) {
                    // console.log(msg);
                    $(".nav ul").html(template("tp2",msg));
                    $(".nav ul li").each(function (i,e) {
                        $(".nav ul li").eq(i).on("click",function () {
                            var html = $(".nav li a").eq(i).html().slice(0,2);
                            $(".tit .city span").html(html);
                            $(".nav").removeClass("now");
                            areaid = $(".nav ul li").eq(i).data("id");
                            // $(".nav ul span").eq(i).addClass("now");
                            render();
                        });
                    })
                }
            });
        });
    
    $(".tit .price").on("click",function () {
        $(".nav").removeClass("now");
        $(".nav2").toggleClass("now");
    });

    $(window).resize(function () {
        if($(window).width() < 410){
            $(".mmb_content li img").css("width","75%")
        }else {
            $(".mmb_content li img").css("width","174px")
        }
    }).resize();
});