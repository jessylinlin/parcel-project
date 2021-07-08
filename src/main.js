import foo from "./foo";
import $ from 'jquery'
foo.bar()

$("body").html("123")

if (module.hot) {
    //webpack中 accept接收两个参数，目标和回调
    //accept 只接受一个回调函数
    module.hot.accept(() => {
        console.log('hmr')
    })
}