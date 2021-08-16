/**
 * Created by Administrator on 2020/8/4 0004.
 */
//自适应设备

var deviceWidth = document.documentElement.clientWidth > 1300 ? 1300 : document.documentElement.clientWidth;
//按照640像素下字体为100px的标准来，得到一个字体缩放比例值 6.4
document.documentElement.style.fontSize = (deviceWidth /7.5) + 'px';

