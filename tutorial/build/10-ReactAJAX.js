/**
 * Created by lenovo on 2019/3/26.
 */
import React from 'react';
class UserGist extends React.Component {
    constructor(props,context) {
        super(props, context);
        //在state设置两个属性，以便后续通过state对象来对其进行修改
        this.state = {username: '', lastGistUrl: '',content:null};
        //绑定挂载事件
        this.componentDidMount = this.componentDidMount.bind(this);
    }


//网络请求方法
/*
    Add = () => {
        var formData = new FormData($("#userForm")[0]);  // 定位到userForm表单，并将表单定位转为FormData对象
        $.ajax({
            url: '/add',   //网络请求url地址
            type: 'POST',
            data: formData, //表单数据
            async:false,
            cache: false,
            contentType: false,  //或者 contentType:multipart/form-data均可以，multipart/form-data表示可以上传下载文件（既可以发送文本数据，也支持二进制数据上载），表明传输的数据要用到多媒体传输协议，由于多媒体传输的都是大量的数据，所以规定上传文件必须是post方法；contentType默认为application/x-www-form-urlencoded不能上传文件
            processData: false,
            success: function (data) {
                console.log('成功'); this.setState({content:'修改成功'})
            }.bind(this),
            error: function (xhr, status, err) {
            }.bind(this)
        });
    }
*/

    componentDidMount() {
        //接下来操作state时上下文对象发生改变，此处拿到操作句柄
        const that = this;
        //ajax请求
/*        this.serverRequest =$.ajax({
            url: this.props.source,
            type:"GET",
            dataType: 'jsonp',
            success: function (result) {
                console.log(result.data);
                const lastGist = result.data[0];
                //此处的上下文发生改变，this的指针指向发生了变化，通过上述定义的that来操作
                that.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                })
            }
        })*/
    }

    //卸载React组件时，把多余请求关闭，以免影响其他框架或组件的操作
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                {this.state.username} 用户最新的 Gist 共享地址：
                <a href={this.state.lastGistUrl} rel="nofollow">{this.state.lastGistUrl}</a>
            </div>
        );
    }
}
