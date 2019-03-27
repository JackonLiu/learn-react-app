export default `
如何在React中做Ajax 请求？

首先：React本身没有独有的获取数据的方式.实际上，就react而言，它甚至不知道有服务器画面的存在。

React只是简单地渲染组件，单独从两个地方获取数据：props 和 state。

因此，为了使用服务器的数据，你需要在你的组件（component）的props或state里拿到数据。

你可以将这个过程与服务和数据模型复杂化，就像你所希望的那样，但最终只是组件渲染props和state。

选择一个HTTP 库

为了获取来自服务器的数据，你需要一个HTTP库，网上有很多，最终他们都做同样的事情，但他们有不同的特点。

喜欢 Promise？那就选axios吧：https://github.com/mzabriskie/axios

讨厌Promise?，但是喜欢callback？不妨看看superagent？https://github.com/visionmedia/superagent

当然，你也可以选择自己封装一个ajax库，我喜欢Axios，下面将以这个库作为例子，如果你不喜欢，可以选择其他库看看。

npm install axios 

yarn add axios 

\`\`\`jsx

import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios';

class FetchDemo extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      posts: []

    };

  }

componentDidMount(){

    axios.get('http://www.reddit.com/r/\${this.props.subreddit}.json')
        .then(res => {

            const posts = res.data.data.children.map(obj => obj.data);

            this.setState({posts});

        });

}
render() {
    return (
            <div>

        <h1>\${this.props.subreddit}</h1>
        <ul>

          {this.state.posts.map(post =>

            <li key={post.id}>{post.title}</li>

          )}

        </ul>

      </div>
    );
  }

ReactDOM.render(

  <FetchDemo subreddit="reactjs"/>,

  document.getElementById('root')

);

\`\`\`
`

/*

 \`\`\`jsx
 import React from 'react';
 import axios from 'axios';
 class UserGist extends React.Component {
 constructor(props, context) {
 super(props, context);
 //在state设置两个属性，以便后续通过state对象来对其进行修改
 this.state = {username: '', lastGistUrl: '', content: null, posts: []};
 //绑定挂载事件
 this.componentDidMount = this.componentDidMount.bind(this);
 }

 componentDidMount() {

 axios.get(`
 http://www.reddit.com/r/${this.props.subreddit}.json`)

 .
 then(res => {

 const posts = res.data.data.children.map(obj => obj.data);

 this.setState({posts});

 });

 }
 ;
 \
 `\`\`

 \`\`\`jsx
 //卸载React组件时，把多余请求关闭，以免影响其他框架或组件的操作
 componentWillUnmount() {
 this.serverRequest.abort();
 }

 render() {
 return (
 <div>
 <div>
 <h1>{`
 /r/${this.props.subreddit}`}</h1>

 <ul>

 {this.state.posts.map(post =>

 <li key={post.id}>{post.title}</li>
 )}

 </ul>

 </div>
 </div>
 );
 }
 }
 \`\`\`
 */
