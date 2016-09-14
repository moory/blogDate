/**
 * Created by bjwsl-001 on 2016/9/6.
 */
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
$("#all").click(function(){
    unmiss();
});
$("#btn1").click(function(){
    miss("fruit");
    miss("coike");
    unmiss("drink");
    fly("drink");
});
$("#btn2").click(function(){
    miss("fruit");
    miss("drink");
    unmiss("coike");
    fly("coike");
});
$("#btn3").click(function(){
    miss("drink");
    miss("coike");
    unmiss("fruit");
    fly("fruit");
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
        $("img").parent().css("display","block");
        $("img").animate({
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
            "top":address[i][1],
        },500,function(){
            $(".content").css("position","");
        });
    });
}