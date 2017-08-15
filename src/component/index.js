/**
 * Created by zengtao on 2017/3/1.
 */
import React from 'react';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    anxia = false
    chushiy = null
    chushix = null
    static defaultProps = {
        tit:['是多少','Zz','fdsfds'],
        pic: ['http://img.mingxing.com/upload/thumb/2014/05/0-a9toiI.jpg', 'http://pic.baike.soso.com/p/20121008/20121008095554-50976746.jpg', 'http://img5.duitang.com/uploads/item/201509/10/20150910193415_BVHfd.thumb.700_0.jpeg'],
        describe:['ccc','sdsds','dww'],
        close:()=>{
            alert('自己实现一下关闭')
        },
        left_done:()=>{
            alert('这是第一张')
        },
        right_done:()=>{
            alert('没有了')
        }
    }

    state = {
        top: 0,
        left: 0,
        index: 0,
        kuan: 0,
        show:false
    }

    componentDidMount() {
        this.tu_init();
    }

    tu_init = ()=> {
        this.setState({
            kuan:0,
            show:false
        })
        let lunxun = setInterval(()=> {
            if (this.refs.tu.scrollHeight && this.refs.tu.style.width == 'auto') {
                this.setState({
                    top: (document.body.scrollHeight - this.refs.tu.scrollHeight) / 2,
                    left: (document.body.scrollWidth - this.refs.tu.scrollWidth) / 2
                })
                this.setState({
                    show:true
                })
                clearInterval(lunxun)
            }
        }, 5)
    }


    onMouseDown = (e)=> {
        e.preventDefault();
        this.anxia = true;
        this.chushiy = e.clientY - this.state.top;
        this.chushix = e.clientX - this.state.left;
    }
    onMouseUp = (e)=> {
        this.anxia = false
    }
    onMouseMove = (e)=> {
        if (this.anxia) {
            this.setState({
                top: e.clientY - this.chushiy,
                left: e.clientX - this.chushix
            })
        }
    }
    onDoubleClick = (e)=> {
        this.tu_init();
    }
    onWheel = (e)=> {
        if (e.deltaY < 0) {
            this.setState({
                kuan: this.refs.tu.scrollWidth + 20
            })
        } else {
            this.setState({
                kuan: this.refs.tu.scrollWidth - 20,
            })
        }
    }
    zuo = (e)=> {
        if (this.state.index !== 0) {
            this.setState({
                index: this.state.index -= 1
            })
            this.tu_init();
        } else {
            this.props.left_done()
        }
    }
    you = (e)=> {
        if (this.state.index < this.props.pic.length - 1) {
            this.setState({
                index: this.state.index += 1
            })
            this.tu_init();
        } else {
            this.props.right_done()
        }
    }


    render() {
        return (
            <div className="ztao_tupian" onMouseUp={this.onMouseUp} onWheel={this.onWheel}>
                <div className="ztao_tupian_head">
                    <div className="ztao_tupian_head_l">
                        {this.state.index + 1}&nbsp;/&nbsp;{this.props.pic.length}
                    </div>
                    {this.props.tit.length == 0?null:<div className="ztao_tupian_head_m">
                        {this.props.tit[this.state.index]}
                    </div>}
                    <div className="ztao_tupian_head_r" onClick={this.props.close}>
                        <i className="iconoo-cross"></i>
                    </div>
                </div>
                <div className="ztao_tupian_l" onClick={this.zuo}>
                    <i className="iconoo-caretLeft"></i>
                </div>
                <img onDoubleClick={this.onDoubleClick} onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove}
                     ref="tu" src={this.props.pic[this.state.index]}
                     style={{visibility:this.state.show?'inherit':'hidden',top:this.state.top+ 'px',left:this.state.left + 'px',width:this.state.kuan == 0?'auto':this.state.kuan + 'px'}}
                     alt=""/>
                <div className="ztao_tupian_r" onClick={this.you}>
                    <i className="iconoo-caretRight"></i>
                </div>

                {this.props.describe.length == 0?null:<div className="ztao_tupian_miaoshu">
                    {this.props.describe[this.state.index]}
                </div>}
            </div>
        )
    }
}
