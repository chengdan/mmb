/**
 * Created by 程丹 on 2017/11/6.
 */
$(function () {
    var page = 0;
    var pageSize = "";
    var totalCount = "";
    var html = "";
    
    function render() {
        $.ajax({
            type : "get",
            url:"http://192.168.32.24:9090/api/getmoneyctrl",
            data:{
                pageid : page
            },
            dataType : "json",
            success : function (msg) {
                // console.log(msg);
                $(".content_info").html(template("tpl",msg));
                pageSize = msg.pagesize;
                totalCount = msg.totalCount;
            }
        });
    }
    render();

    $(".up").on("click",function () {
        getPage()
        page--;
        if(page <= -1){
            page =0;
        }
        render();
    });

    $(".down").on("click",function () {
        getPage();
        page++;
        if(page >=  Math.ceil(totalCount / pageSize)-1){
            page =  Math.ceil(totalCount / pageSize)-1;
        }
        render();
    });

    function getPage() {
        setTimeout(function () {
            var count = Math.ceil(totalCount / pageSize);
            // console.log(count);
            var data = [];
            for (var i = 0; i < count; i++){
                var datas = {page:page,count:count};
                data.push(datas);
            }
            $(".lis_page select").html(template("tpl2",{msg:data}));
            $("option").each(function (i,e) {
                $("option").eq(page).prop("selected","selected")
            })
        },100)
    }
    getPage();

    $(".lis_page select").on("change",function () {
        page = $(".lis_page select").val();
        render();
    })
});