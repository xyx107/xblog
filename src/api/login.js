import service from '@/utils/request'
// 登录
export function Login(data) {
  return service.request({
        method: "post",
        url: '/api/login',
        data
})
}

// 注册
export function Register(data) {
    return service.request({
        method: "post",
        url: '/api/register',
        data
    })
}

// 获取验证码
export function GetCode(data) {
    return service.request({
        method: "post",
        url: '/api/getCode',
        data
    })
}
// 获取用户名
// service.request({
//     method: 'post',
//     url: '/api/user/12345',
//     data: {
//         firstName: 'Adf',
//         lastName: 'Sfdv'
//     }
// })


