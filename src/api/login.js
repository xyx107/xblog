import service from '@/utils/request'
// 获取验证码
export function Login() {
    service.request({
        method: "post",
        url: '/user/12345',
        data: {
            firstName: 'Adf',
            lastName: 'Sfdv'
        }
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
// 登录

// 注册