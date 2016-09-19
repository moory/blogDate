/**
 * Created by moory on 2016/9/6.
 */

//载入页控制
window.onload=function(){
  $("body").addClass("loaded");
};
//轮播控制
$("#myNav ul").on("click","li",function(e){
    var now=$("#myNav li.active").index("#myNav li")+1;
    $("#myNav li").removeClass("active");
    $(this).addClass("active");
    var target=$(this).index("#myNav li")+1;
    if(target-now>0){
        nextSlide(now,target);
    }else if(target-now<0){
        prevSlide(now,target);
    }
});
function nextSlide(now,target){
    $("#main li").removeClass("ismove moveLeft selected");
    $("#main li:nth-child("+now+")").addClass("ismove moveLeft");
    $("#main li:nth-child("+target+")").addClass("selected");
    $("#main li:nth-child("+target+")").prevAll().addClass("moveLeft");
}
function prevSlide(now,target){
    $("#main li").removeClass("ismove moveLeft selected");
    $("#main li:nth-child("+now+")").addClass("ismove");
    $("#main li:nth-child("+target+")").addClass("selected");
    $("#main li:nth-child("+target+")").prevAll().addClass("moveLeft");
    $("#main li:nth-child("+target+")").nextAll().removeClass("moveLeft");
}

//相册动效
$("#all").click(function(){
    unmiss();
    $("#p4 .btn").removeClass("currunt");
    $(this).addClass("currunt");
});
$("#btn1").click(function(){
    miss("fruit");
    miss("coike");
    unmiss("drink");
    fly("drink");
    $("#p4 .btn").removeClass("currunt");
    $(this).addClass("currunt");
});
$("#btn2").click(function(){
    miss("fruit");
    miss("drink");
    unmiss("coike");
    fly("coike");
    $("#p4 .btn").removeClass("currunt");
    $(this).addClass("currunt");
});
$("#btn3").click(function(){
    miss("drink");
    miss("coike");
    unmiss("fruit");
    fly("fruit");
    $("#p4 .btn").removeClass("currunt");
    $(this).addClass("currunt");
});
function miss(str){
    $("."+str).animate({
        "width":"0px",
        "height":"0px",
        "margin":"120px",
        "opacity":"0.3"
    },500,function(){
        $("."+str).parent().css("display","none");
    });
};
function unmiss(str){
    if(str){
        $("."+str).parent().css("display","block");
        $("."+str).animate({
                "width":"180px",
                "height":"240px",
                "margin":"0px",
                "opacity":"1"
            },500
        );
    }else{
        $("#p4 img").parent().css("display","block");
        $("#p4 img").animate({
                "width":"180px",
                "height":"240px",
                "margin":"0px",
                "opacity":"1"
            },500
        );
    }
};
function fly(str){
    var address=[];
    $(".content:visible").each(function(i,elem){
        address.push([elem.offsetLeft,elem.offsetTop]);
        $(this).css("left",address[i][0]);
        $(this).css("top",address[i][1]);
    });
    $(".content").css("position","absolute");
    $("."+str).each(function(i,elem){
        $(this).parent().animate({
            "left":address[i][0],
            "top":address[i][1]
        },500,function(){
            $(".content").css("position","");
        });
    });
}

//FOOTER 按钮事件
$("#footer>i").on("mouseover",function(){
    var num=$(this).index();
    $("#footer b:nth-of-type("+num+")").css("display","block");
});
$("#footer>i").on("mouseout",function(){
    var num=$(this).index();
    $("#footer b:nth-of-type("+num+")").css("display","none");
});

//模态框事件
$("#modal").click(function(){
    $(this).hide();
});
$("#p4 img").click(function(){
    var src=$(this).attr("src");
    src=src.replace("sp","p");
    $("#modal img").attr("src",src);
    $("#modal").show();
});
