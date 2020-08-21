; (function (global) {
    // 严格模式，提高浏览器效率
    "use strict";

    //定义屏幕类
    class Screen {
        //为弹幕设置的id
        id = 0;
        constructor(selector, height = 0, isShow = true) {
            //屏幕选择器
            this.selector = selector;
            //弹幕显示的高度
            if (!height) {
                //console.log(height);
                this.height = $(selector).height();
            } else {
                this.height = height;
            }
            //屏幕宽度
            this.width = $(selector).width();
            //屏幕左上角位置的left参数
            this.offset_left = $(selector).offset().left;
            //是否显示弹幕
            this.isShow = isShow;
        }
        change_height(new_height) {
            this.height = new_height;
        }
        change_show() {
            if (this.isShow) {
                //设置屏幕透明度，使弹幕消失
                $(this.selector).css("opacity", 0);
                this.isShow = false;
            } else {
                //设置屏幕透明度，使弹幕出现
                $(this.selector).css("opacity", 1);
                this.isShow = true;
            }
        }

        // offset_left() {
        //     return $(this.selector).offset().left;
        // }
        get_id() {
            this.id++;
            return this.id;
        }
        // set id(new_id) {
        //     this.id = new_id;
        // }

    }


    //定义弹幕类
    class Item {
        constructor(screen, context, color, font_size, set_self) {
            //对应的屏幕
            this.screen = screen;
            //弹幕id值
            this.id = screen.get_id();
            //生成弹幕dom节点
            this.Dom = $("<div class='dan_mu'>" + context + "</div>");
            //绑定弹幕dom的id
            this.Dom.attr('id', this.id);

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
            this.top = Math.floor(Math.random() * screen.height) + "px";
            //获取弹幕区的宽度
            let left = screen.width + "px";
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
            $(screen.selector).append(this.Dom);
        }
        move() {
            //弹幕div所在位置减去屏幕左上角位置，得left参数：弹幕div离最左边的位置
            let left = this.Dom.offset().left - this.screen.offset_left;
            //随机生成弹幕移动速度
            this.speed = Math.random() * 20 + 3;
            //拼接获取弹幕元素的选择器
            let ide = '#' + this.id;
            //设置计时器
            let timer = setInterval(function () {
                left--;
                //console.log(left);
                //设置弹幕div的left属性
                $(ide).css("left", left + "px");
                if ($(ide).offset().left + $(ide).width() < this.screen.offset_left) {
                    //当弹幕div的位置在屏幕左边，remove
                    $(ide).remove();
                    clearInterval(timer);
                }
            }, this.speed);
        }
    }


    // 兼容CommonJs规范
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { Item, Screen }
    }

    // 兼容AMD/CMD规范
    if (typeof define === 'function') {
        define(function () {
            return { Item, Screen }
        })
    }

    // 注册全局变量，兼容直接使用script标签引入插件
    global.Item = Item;
    global.Screen = Screen;

})(this);