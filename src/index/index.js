// import webpackConfig from '../../config/webpack.config'

// let config = {
//     entry:'./src/home/index.js',
//     output:{
//         filename:'home/helloworld.js',
//         path:'/docs'
//     }
// }
// function Webpack(config){
//     this.config = config
// }
// Webpack.prototype.compile = function(){
//     let entry = this.config.entry;
//     let dir = this.config.entry.split('/')[3];
//     let fiename = this.config.entry.substring(5,10);
//     let path = this.config.output.path;
//     var str = `将${entry}中的代码打包到${path}${fiename}文件夹中，文件名称叫${dir}`
//     console.log(str);

// }

// let webpack = new Webpack(webpackConfig);
// webpack.compile()

// function Webpack(configs){
//     this.config = configs
// }
// Webpack.prototype.compile = function(){
//     let {entry,output} = this.config;
//     let {home,index} = entry;
//     let {fiename,path} = output;
//     path = path.substr(0);
//     home = home.substring(5,11);
//     fiename = fiename.substring(0,3)
//     var str = `将${home}中的代码打包到${path}${home}文件夹中，
//     文件名称叫${fiename}.jfkasldfjklas.js`
//     console.log(str);
// }
// let webpack = new Webpack(webpackConfig);
// webpack.compile()
//将./src/home/home.js中的代码打包到/docs/home/文件夹中，
//文件名称叫home.jfkasldfjklas.js

//作业： 页面输出：
// 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫index.js
// class Url {
//     constructor(url) {
//         this.url = url;
//         this.searchParams = this.url.split('?')[1];
//         this.params = this.getParams(this.searchParams);
//     }
//     getParams(prop) {
//         let res = {};
//         prop.split('&').forEach(element => {
//             let arr = element.split('=');
//             res[arr[0]] = arr[1]
//         });
//         return res
//     }
//     get(name) {
//         return this.params[name]
//     }
// }
// var url = new Url('localhost:8080?type=2&id=1&name=xiaoming');
// console.log(url.get('type')); // 2；
// url.get('id') // 1；
// url.get('name') // xiaoming;