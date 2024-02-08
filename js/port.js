$(".basic_cate ul li")
.on("click", function(){
    $(this).addClass("on").siblings().removeClass("on")
let num =$(this).index();
$(this)
.parent()
.find("li")
.eq(num)
.addClass("on")
.siblings()
.removeClass("on");
})
