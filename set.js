$(".send").on("click", function () {
    //先获取弹幕各样式值
    //let color_arr = [$(".word_style input[name='red']").val(), $(".word_style input[name='green']").val(), $(".word_style input[name='blue']").val()] || []
    let color = $(".word_style input[name='color']").val();
    console.log(color);

    let font_size = $(".word_style input[name='font_size']").val() || ''

    // 创建弹幕
    let Dom = new Item($("#text").val(), id++, color, font_size, true);
    // 移动弹幕
    Dom.move()
    //输入框置空
    $("#text").val('')

    /*
    $(".word_style input[name='red']").val('')
    $(".word_style input[name='green']").val('')
    $(".word_style input[name='blue']").val('')
    */

    $(".word_style input[name='font_size']").val('')

});

$("#text").on("keydown", function (event) {
    if (event.keyCode == 13) {
        //先获取弹幕各样式值
        let color_arr = [$(".word_style input[name='red']").val(), $(".word_style input[name='green']").val(), $(".word_style input[name='blue']").val()] || []
        let font_size = $(".word_style input[name='font_size']").val() || ''
        // 创建弹幕
        let Dom = new Item($("#text").val(), id++, color_arr, font_size, true);
        // 移动弹幕
        Dom.move()
        //输入框置空
        $("#text").val('')
        $(".word_style input[name='red']").val('')
        $(".word_style input[name='green']").val('')
        $(".word_style input[name='blue']").val('')
        $(".word_style input[name='font_size']").val('')
    }
});

$(".clear").on("click", function () {
    if (isShow) {
        //设置屏幕透明度，使弹幕消失
        $(".screen").css("opacity", 0);
        //设置样式输入区透明度，使其消失
        $('.word_style').css("opacity", 0);
        isShow = false;
        //修改button的内容
        this.innerHTML = '打开弹幕'
    } else {
        //设置屏幕透明度，使弹幕出现
        $(".screen").css("opacity", 1);
        //设置样式输入区透明度，使其消失
        $('.word_style').css("opacity", 1);
        isShow = true;
        //修改button的内容
        this.innerHTML = '关闭弹幕'
    }
});