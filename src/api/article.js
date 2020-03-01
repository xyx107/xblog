import service from '@/utils/request'

// 新增
export function Addblog(data) {
   return service.request({
        method: "post",
        url: '/article',
        data
})
}

// 点赞
export function Dianzan(data) {
    return service.request({
        method: "get",
        url: '/article/{id}/zan',
        data
})
}

// 列表,data是 linite和offset
export function Bloglist(data) {
    return service.request({
        method: "get",
        url: '/article',
        data
})
}

// 编辑
export function Editblog(data) {
    return service.request({
        method: "put",
        url: '/article/{id}',
        data
})
}

// 删除
export function Deleteblog(delarr) {
    return service.request({
        method: "delete",
        url: `article/${delarr}`
})
}
// 文章详情
export function Singleblog(id) {
    return service.request({
        method: "get",
        url: `/article/${id}`
})
}

// 搜索
export function Search(data) {
    return service.request({
        method: "post",
        url: '/login',
        data
})
}



