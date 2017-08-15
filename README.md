# 介绍
这是一个用于做图片预览或者图片查看得react插件

#下载 
    npm install esn_img --save
    
#引入  
    import Esn_img from 'esn_img'  //这个是js文件
    import 'esn_img/dist/styles.css' //这个是css文件，都要引入哦
![一个直接得例子](https://github.com/aiyuekuang/esn_img/blob/master/src/images/lizi.png?raw=true "一个直接得例子")

#配置使用  
    <Esn_img tit=['是多少','Zz','fdsfds'] pic=['http://img.mingxing.com/upload/thumb/2014/05/0-a9toiI.jpg', 'http://pic.baike.soso.com/p/20121008/20121008095554-50976746.jpg', 'http://img5.duitang.com/uploads/item/201509/10/20150910193415_BVHfd.thumb.700_0.jpeg'] describe=['ccc','sdsds','dww'] close=()=>{alert('自己实现一下关闭')} left_done=()=>{alert('这是第一张')} right_done=()=>{alert('没有了')}/>
   
**解释一波**
    