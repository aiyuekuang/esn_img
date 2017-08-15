'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zengtao on 2017/3/1.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.anxia = false;
        _this.chushiy = null;
        _this.chushix = null;
        _this.state = {
            top: 0,
            left: 0,
            index: 0,
            kuan: 0,
            show: false
        };

        _this.tu_init = function () {
            _this.setState({
                kuan: 0,
                show: false
            });
            var lunxun = setInterval(function () {
                if (_this.refs.tu.scrollHeight && _this.refs.tu.style.width == 'auto') {
                    _this.setState({
                        top: (document.body.scrollHeight - _this.refs.tu.scrollHeight) / 2,
                        left: (document.body.scrollWidth - _this.refs.tu.scrollWidth) / 2
                    });
                    _this.setState({
                        show: true
                    });
                    clearInterval(lunxun);
                }
            }, 5);
        };

        _this.onMouseDown = function (e) {
            e.preventDefault();
            _this.anxia = true;
            _this.chushiy = e.clientY - _this.state.top;
            _this.chushix = e.clientX - _this.state.left;
        };

        _this.onMouseUp = function (e) {
            _this.anxia = false;
        };

        _this.onMouseMove = function (e) {
            if (_this.anxia) {
                _this.setState({
                    top: e.clientY - _this.chushiy,
                    left: e.clientX - _this.chushix
                });
            }
        };

        _this.onDoubleClick = function (e) {
            _this.tu_init();
        };

        _this.onWheel = function (e) {
            if (e.deltaY < 0) {
                _this.setState({
                    kuan: _this.refs.tu.scrollWidth + 20
                });
            } else {
                _this.setState({
                    kuan: _this.refs.tu.scrollWidth - 20
                });
            }
        };

        _this.zuo = function (e) {
            if (_this.state.index !== 0) {
                _this.setState({
                    index: _this.state.index -= 1
                });
                _this.tu_init();
            } else {
                _this.props.left_done();
            }
        };

        _this.you = function (e) {
            if (_this.state.index < _this.props.pic.length - 1) {
                _this.setState({
                    index: _this.state.index += 1
                });
                _this.tu_init();
            } else {
                _this.props.right_done();
            }
        };

        return _this;
    }

    _createClass(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.tu_init();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'ztao_tupian', onMouseUp: this.onMouseUp, onWheel: this.onWheel },
                _react2.default.createElement(
                    'div',
                    { className: 'ztao_tupian_head' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ztao_tupian_head_l' },
                        this.state.index + 1,
                        '\xA0/\xA0',
                        this.props.pic.length
                    ),
                    this.props.tit.length == 0 ? null : _react2.default.createElement(
                        'div',
                        { className: 'ztao_tupian_head_m' },
                        this.props.tit[this.state.index]
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ztao_tupian_head_r', onClick: this.props.close },
                        _react2.default.createElement('i', { className: 'iconoo-cross' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ztao_tupian_l', onClick: this.zuo },
                    _react2.default.createElement('i', { className: 'iconoo-caretLeft' })
                ),
                _react2.default.createElement('img', { onDoubleClick: this.onDoubleClick, onMouseDown: this.onMouseDown, onMouseMove: this.onMouseMove,
                    ref: 'tu', src: this.props.pic[this.state.index],
                    style: { visibility: this.state.show ? 'inherit' : 'hidden', top: this.state.top + 'px', left: this.state.left + 'px', width: this.state.kuan == 0 ? 'auto' : this.state.kuan + 'px' },
                    alt: '' }),
                _react2.default.createElement(
                    'div',
                    { className: 'ztao_tupian_r', onClick: this.you },
                    _react2.default.createElement('i', { className: 'iconoo-caretRight' })
                ),
                this.props.describe.length == 0 ? null : _react2.default.createElement(
                    'div',
                    { className: 'ztao_tupian_miaoshu' },
                    this.props.describe[this.state.index]
                )
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

Index.defaultProps = {
    tit: ['是多少', 'Zz', 'fdsfds'],
    pic: ['http://img.mingxing.com/upload/thumb/2014/05/0-a9toiI.jpg', 'http://pic.baike.soso.com/p/20121008/20121008095554-50976746.jpg', 'http://img5.duitang.com/uploads/item/201509/10/20150910193415_BVHfd.thumb.700_0.jpeg'],
    describe: ['ccc', 'sdsds', 'dww'],
    close: function close() {
        alert('自己实现一下关闭');
    },
    left_done: function left_done() {
        alert('这是第一张');
    },
    right_done: function right_done() {
        alert('没有了');
    }
};
exports.default = Index;