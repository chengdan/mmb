/**
 * Created by 程丹 on 2017/11/6.
 */
$(function () {
    var id = getId();
    var page = 1;
    var pageSize = "";
    var totalCount = "";
    
    $.ajax({
        type:"get",
        url:"http://192.168.32.24:9090/api/getcategorybyid",
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
            url:"http://192.168.32.24:9090/api/getproductlist",
            data:{
                categoryid:id,
                pageid : page
            },
            dataType : "json",
            success : function (msg) {
                // console.log(msg);
                $(".content_info").html(template("tpl2",msg));
                pageSize = msg.pagesize;
                totalCount = msg.totalCount;
            }
        })
    }
    render();

    $(".up").on("click",function () {
        getPage();
        page--;
        if(page <= 0){
            page =1;
        }
        render();
    });
    
    $(".down").on("click",function () {
        getPage();
        page++;
        if(page >= Math.ceil(totalCount / pageSize)){
            page = Math.ceil(totalCount / pageSize);
        }
        render();
    });

    function getPage() {
        setTimeout(function () {
            var count = Math.ceil(totalCount / pageSize);
            var data = [];
            for (var i = 0; i < count; i++){
                var  datas = {count:count};
                data.push(datas);
            }
            // console.log(data);
            $(".lis_page select").html(template("tpl3",{msg:data}));
            $("option").each(function (i,e) {
                $("option").eq(page-1).prop("selected","selected");
            })
        },100);
    }
    getPage();

    $(".lis_page select").on("change",function () {
        page = $(".lis_page select").val();
        render();
    })
});