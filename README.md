# 介绍
这是一个用于做图片预览或者图片查看得react插件，有用到得小伙伴，给个星，敬谢

# 下载  

    npm install esn_img --save
    
# 引入  

    import Esn_img from 'esn_img'  //这个是js文件
    import 'esn_img/dist/styles.css' //这个是css文件，都要引入哦，如果css引入有问题，你可以isuess或者百度寻找答案，实在没招得话，你也可以把这个css复制出来放到你得src里直接调用
![一个直接得例子](https://github.com/aiyuekuang/esn_img/blob/master/src/images/lizi.png?raw=true "一个直接得例子")

# 配置使用  
**你可以先试试，插件本身已经默认加了几张女神图片**  

    <Esn_img/>  

**下面就是配置了得，当然你实际应用得话肯定是需要配置得，就是下面这个样**  

    <Esn_img tit=['是多少','Zz','fdsfds'] pic=['http://img.mingxing.com/upload/thumb/2014/05/0-a9toiI.jpg', 'http://pic.baike.soso.com/p/20121008/20121008095554-50976746.jpg', 'http://img5.duitang.com/uploads/item/201509/10/20150910193415_BVHfd.thumb.700_0.jpeg'] describe=['ccc','sdsds','dww'] close=()=>{alert('自己实现一下关闭')} left_done=()=>{alert('这是第一张')} right_done=()=>{alert('没有了')}/>
   
**图文解释一波**
    ![一个图片解释全部](https://github.com/aiyuekuang/esn_img/blob/master/src/images/jieshi.png?raw=true "一个图片解释全部")
    
    tit：就是图片标题得数组  类型：array
    pic：就是图片得数组    类型：array
    describe：就是描述的数组    类型：array
    close：就是你点击上面得关闭需要实现得关闭函数，需要自己实现，不然你怎么关闭这个插件呢    类型：function
    left_done：点击左边得如果到了第一张就会触发    类型：function
    right_done：点击右边得，到了最后一张就会触发    类型：function
    
# 希望
能用得上得小伙伴，欢迎issues，把遇到得需求和问题反馈给我，我将继续改进这个插件，让他更加方便，实用