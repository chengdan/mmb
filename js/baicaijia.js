/**
 * Created by 程丹 on 2017/11/7.
 */
$(function () {
    var id =0;
    $.ajax({
        type : "get",
        url: ip+"/api/getbaicaijiatitle",
        dataType : "json",
        success : function (msg) {
            // console.log(msg);
            $(".mmb_nav ul").html(template("tpl",msg));
            $(".mmb_nav ul li").each(function (i,e) {
              $(this).on("click",function () {
                  $(".mmb_nav ul li").eq(i).addClass("active").siblings().removeClass("active");
                  id = $(".mmb_nav ul li").eq(i).data("id");
                  render();
              });
                $(".mmb_nav ul li")
            })
        }
    });

    function render() {
        $.ajax({
            type : "get",
            url: ip+"/api/getbaicaijiaproduct",
            data :{
                titleid :id
            },
            dataType : "json",
            success : function (msg) {
                // console.log(msg);
                $(".mmb_content ul").html(template("tpl2",msg));
            }
        })
    }
    render();
});