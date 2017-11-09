/**
 * Created by 程丹 on 2017/11/2.
 */
function getId() {
    var search = location.search;
    search = search.slice(1);
    var arr = search.split("&");
    var id = arr[0].split("=")[1];
    return id;
}
var ip = "http://192.168.32.24:9090";

