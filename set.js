//新建Screen
window.screen = new Screen('.screen', 400);

$('#select_height').change(function () {
    var height = $(this).children('option:selected').val();
    //console.log(height);
    screen.change_height(height)
})

$(".send").on("click", function () {
    //先获取弹幕各样式值
    //let color_arr = [$(".word_style input[name='red']").val(), $(".word_style input[name='green']").val(), $(".word_style input[name='blue']").val()] || []
    let color = $(".word_style input[name='color']").val();
    //console.log(color);

    let font_size = $(".word_style input[name='font_size']").val() || ''

    // 创建弹幕
    let Dom = new Item(screen, $("#text").val(), color, font_size, true);
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
        let color = $(".word_style input[name='color']").val();
        //console.log(color);
        let font_size = $(".word_style input[name='font_size']").val() || ''
        // 创建弹幕
        let Dom = new Item(screen, $("#text").val(), color, font_size, true);
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
    if (screen.isShow) {
        //设置样式输入区透明度，使其消失
        $('.word_style').css("opacity", 0);
        //修改button的内容
        this.innerHTML = '打开弹幕'
    } else {
        //设置样式输入区透明度，使其出现
        $('.word_style').css("opacity", 1);
        //修改button的内容
        this.innerHTML = '关闭弹幕'
    }
    screen.change_show();
});