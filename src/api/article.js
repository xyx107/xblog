import service from '@/utils/request'

// 列表
export function Bloglist(data) {
    return service.request({
        method: "post",
        url: '/api/article/list',
        data
    })
}
// 文章详情
export function Singleblog(id) {
    return service.request({
        method: "get",
        url: `/api/article/${id}`
})
}
// 新增
export function Addblog(data) {
   return service.request({
        method: "post",
        url: '/api/article',
        data
})
}
// 编辑
export function Editblog(id,data) {
    return service.request({
        method: "put",
        url: `/api/article/${id}`,
        data
})
}

// 删除
export function Deleteblog(data) {
    return service.request({
        method: "delete",
        url: `/api/article/${data}`
})
}

// 批量删除
export function Deleteblogs(arrdata) {
    return service.request({
        method: "delete",
        url: '/api/article',
        arrdata
})
}
// 点赞
export function Dianzan(data) {
    return service.request({
        method: "get",
        url: '/api/article/{id}/zan',
        data
})
}

// 搜索
export function Search(data) {
    return service.request({
        method: "post",
        url: '/api/search',
        data
})
}



