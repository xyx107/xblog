/**
 * 验证邮箱,不匹配返回false
 */
export function validateEmail(value){
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; 
    return !reg.test(value) ? true : false;
}