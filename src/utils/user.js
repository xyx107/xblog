import cookie from "cookie_js";

const adminToken = 'token';
const usernameKey = 'username';

export function getToken(){
    return sessionStorage.getItem(adminToken);
}
export function setToken(token){
    return sessionStorage.setItem(adminToken, token);
}
export function removeToken(){
    return sessionStorage.removeItem(adminToken);
}

export function setUserName(value){
    return sessionStorage.setItem('UserName', value);
}
export function getUserName(){
    return sessionStorage.getItem('UserName');
}

export function removeUserName(){
    return sessionStorage.removeItem('UserName');
}
// export function getToken(){
//     return sessionStorage.getItem(adminToken)
// }
// export function setToken(token){
//     return sessionStorage.setItem(adminToken, token);
// }
// export function removeToken(){
//     return sessionStorage.removeItem(adminToken);
// }

// export function setUserName(value){
//     return cookie.set(usernameKey, value);
// }

// export function getUserName(){
//     return cookie.get(usernameKey);
// }

// export function removeUserName(){
//     return cookie.remove(usernameKey);
// }

// export function setUserName(value){
//     return sessionStorage.getItem('referrer');
// }

