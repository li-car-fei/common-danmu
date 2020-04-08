//定义弹幕类
class Item {
    constructor(context, id, color, font_size, set_self) {
        //弹幕id值
        this.id = id;
        //生成弹幕dom节点
        this.Dom = $("<div class='dan_mu'>" + context + "</div>");
        //绑定弹幕dom的id
        this.Dom.attr('id', id);

        /*
        if ((color_arr[0] == '') && (color_arr[1] == '') && (color_arr[2] == '')) {
            //随机生成弹幕颜色
            this.fontColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
        } else {
            //根据color_arr生成弹幕颜色
            this.fontColor = "rgb(" + ((color_arr[0] == '') ? 0 : color_arr[0]) + "," + ((color_arr[1] == '') ? 0 : color_arr[1]) + "," + ((color_arr[2] == '') ? 0 : color_arr[2]) + ")";
        }
        */

        if (color == '') {
            //随机生成弹幕颜色
            this.fontColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
        } else {
            this.fontColor = color;
        }


        if (font_size == '') {
            //随机生成弹幕大小
            this.fontSize = Math.floor((Math.random() + 1) * 20) + "px";
        } else {
            //根据font_size生成弹幕大小
            this.fontSize = font_size + "px";
        }
        //随机生成弹幕所在的高度
        this.top = Math.floor(Math.random() * 250) + "px";
        //获取弹幕区的宽度
        let left = $(".screen").width() + "px";
        //设置弹幕的样式参数
        this.Dom.css({
            "position": 'absolute',
            "color": this.fontColor,
            "font-size": this.fontSize,
            "left": left,
            "top": this.top
        });
        if (set_self) {
            this.Dom.css('border', '1px solid black')
        };
        //将弹幕div加入到弹幕区
        $(".screen").append(this.Dom);
    }
    move() {
        //弹幕div所在位置减去屏幕左上角位置，得left参数：弹幕div离最左边的位置
        let left = this.Dom.offset().left - $(".screen").offset().left;
        //随机生成弹幕移动速度
        this.speed = Math.random() * 20 + 3;
        //拼接获取弹幕元素的选择器
        let ide = '#' + this.id;
        //设置计时器
        let timer = setInterval(function () {
            left--;
            //设置弹幕div的left属性
            $(ide).css("left", left + "px");
            if ($(ide).offset().left + $(ide).width() < $(".screen").offset().left) {
                //当弹幕div的位置在屏幕左边，remove
                $(ide).remove();
                clearInterval(timer);
            }
        }, this.speed);
    }
}