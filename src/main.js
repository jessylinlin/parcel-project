import foo from "./foo";
// import $ from 'jquery'
import './main.css'
import logo from './3.jpg'
foo.bar()

import('jquery').then($ => {
    $(document.body).append('<h2>121111111111113</h2>')
})

$("body").html("123")
const image = new Image()
image.src = logo
document.body.append(image)

if (module.hot) {
    //webpack中 accept接收两个参数，目标和回调
    //accept 只接受一个回调函数  
    module.hot.accept(() => {
        console.log('hmr')
    })
}