/**
 * Created by 程丹 on 2017/11/8.
 */
$(function () {
    var id = getId();
    $.ajax({
        type: "get",
        url: "http://192.168.32.24:9090/api/getbrand",
        data: {
            brandtitleid: id
        },
        dataType: "json",
        success: function (msg) {
            // console.log(msg);
            $(".info ul").html(template("tpl", msg));
        }
    });


    $.ajax({
        type: "get",
        url: "http://192.168.32.24:9090/api/getbrandproductlist",
        data: {
            brandtitleid: id,
            pagesize : 4
        },
        dataType: "json",
        success: function (msg) {
            console.log(msg);
            $(".content ul").html(template("tpl2", msg));
            if(msg.result.length == 0){
                return;
            }else {
                var productid = msg.result[0].productId;
                var img = msg.result[0].productImg;
                // console.log(productid);
                $.ajax({
                    type: "get",
                    url: "http://192.168.32.24:9090/api/getproductcom",
                    data: {
                        productid: productid
                    },
                    dataType: "json",
                    success: function (msg) {
                        console.log(msg);
                        msg["img"] = img;
                        $(".plBox ul").html(template("tpl3", msg));
                    }
                });
            }
        }
    });

});