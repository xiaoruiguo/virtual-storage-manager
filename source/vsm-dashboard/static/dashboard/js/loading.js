$(function(){
        CheckClusterExist();
})

function CheckClusterExist(){
        $.ajax({
        data: "",
        type: "get",
        dataType: "json",
        url: "/dashboard/vsm/clustermgmt/check_cluster_exist/",
        success: function (data) {
            if(data.is_exsit==false){
                $("dl.nav_accordion>dd>div>ul>li>a").each(function(){
                    var nav_name = this.innerHTML;
                    if(nav_name!="Create Cluster" && nav_name!="Import Cluster" && nav_name!="Add/Remove User" && nav_name!="Language"
                     && nav_name!="创建集群" && nav_name!="导入集群"
                     && nav_name!="Создать кластер" && nav_name!="Импортировать кластер" && nav_name!="Создать/удалить пользователя" && nav_name!="Язык интерфейса"
                     ){
                        this.href = "#";
                        this.style.color = "#ccc";
                    }
                });
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        },
        complete: function(){

        }
    });
}
