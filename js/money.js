/**
 * Created by 程丹 on 2017/11/6.
 */
$(function () {
    var page = 0;
    function render() {
        $.ajax({
            type : "get",
            url:"http://192.168.32.29:9090/api/getmoneyctrl",
            data:{
                pageid : page
            },
            dataType : "json",
            success : function (msg) {
                // console.log(msg);
                $(".content_info").html(template("tpl",msg));
            }
        });
    }
    render();

    $(".up").on("click",function () {
        page--;
        // console.log(page);
        if(page <= -1){
            page =0;
        }
        render();
        $(".lis_page option").html((page+1)+"/14");
    });


    $(".down").on("click",function () {
        // console.log(page);
        page++;
        if(page >= 14){
            page = 14;
        }
        render();
        $(".lis_page option").html((page-1)+"/14");
    });



});