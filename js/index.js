$(document).ready(function(){
    setTimeout(function(){
        $(".aui-content").css({"background-image":"url(images/1.gif)","background-size":"cover"})
    },1000);
    setTimeout(function(){
        $(".aui-content1").hide().siblings(".aui-content2").show();
        $(".aui-content").css({"background-image":"url(images/2-3.gif)","background-size":"cover"})
    },8000);
    $(".aui-content2").on("click",function(){
        $(".aui-content2").hide().siblings(".aui-content3").show();
        $(".aui-content").css({"background-image":"url(images/2-4.gif)","background-size":"cover"})
    })
    $(".aui-content3").on("click",function(){
        $(".aui-content3").hide().siblings(".aui-content4").show();
        $(".aui-content").css({"background-image":"url(images/3-5.gif)","background-size":"cover"})
    })
    $(".aui-content4").on("click",function(){
        // $(".aui-content3").hide().siblings(".aui-content4").show();
        $(".aui-content").css({"background-image":"url(images/5-7.gif)","background-size":"cover"})
    })
})
