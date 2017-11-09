/**
 * Created by 程丹 on 2017/11/6.
 */
$(function () {
   var id = getId();
    // console.log(id);

    $.ajax({
        type : "get",
        url: ip+"/api/getproduct",
        data :{
            productid : id
        },
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            $(".lis_title").html(template("tpl",msg));
            $(".content_text").html(template("tpl2",msg));
            $(".content_all").html(template("tpl3",msg));
        }
    });

    $.ajax({
        type : "get",
        url: ip+"/api/getproductcom",
        data :{
            productid : id
        },
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            $(".content_pj ul").html(template("tpl4",msg));
        }
    })
});