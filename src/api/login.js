import service from '@/utils/request'
// 登录
export function Login(data) {
  return service.request({
        method: "post",
        url: '/login',
        data
})
}
// 注册
export function Register() {
    return  service.request({
        method: "post",
        url: '/register',
        data: {}
    })
}
// 获取用户名
// service.request({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Adf',
//         lastName: 'Sfdv'
//     }
// })


// 获取验证码
export function GetCode() {
    return  service.request({
        method: "post",
        url: '/code',
        data
    })
}