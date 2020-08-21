var dan_mu_arr = ['我是捞马',
    '66666',
    '无敌',
    '77777',
    '886886',
    '无语',
    '怎么说，这波',
    '难受啊马飞',
    '起飞了',
    '下次一定'
];
let clock_dan_mu = setInterval(() => {
    const index = Math.floor(Math.random() * 10);
    // 创建弹幕
    let Dom = new Item(window.screen, dan_mu_arr[index], '', '', false);
    // 移动弹幕
    Dom.move()
}, 2500);