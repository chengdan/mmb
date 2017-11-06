/**
 * Created by 程丹 on 2017/11/6.
 */
$(function () {
    var search = location.search;
    var obj = {};
    search = search.slice(1);
    var arr = search.split("&");
    var id = arr[0].split("=")[1];

    var page = 1;

    $.ajax({
        type:"get",
        url:"http://192.168.32.31:9090/api/getcategorybyid",
        data:{
            categoryid:id
        },
        dataType:"json",
        success:function (msg) {
            // console.log(msg);
            $(".lis_title").html(template("tpl",msg));
        }
    });

    function render() {
        $.ajax({
            type : "get",
            url:"http://192.168.32.31:9090/api/getproductlist",
            data:{
                categoryid:id,
                pageid : page
            },
            dataType : "json",
            success : function (msg) {
                console.log(msg);
                $(".content_info").html(template("tpl2",msg));
            }
        })
    }
    render();

    $(".up").on("click",function () {
        page--;
        // console.log(page);
        if(page <= 0){
            page =1;
        }
        render();
        $(".lis_page option").html(page+"/3");
    });


    $(".down").on("click",function () {
        // console.log(page);
        page++;
        if(page >= 3){
            page = 3;
        }
        render();
        $(".lis_page option").html(page+"/3");
    });
});