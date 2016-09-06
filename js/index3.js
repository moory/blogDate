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