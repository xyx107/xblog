import service from '@/utils/request'
// 提交评论
export function SubmitComment(data) {
  return service.request({
        method: "post",
        url: '/api/comment',
        data
})
}

//删除
export function DeleteComment(id) {
  return service.request({
    method: "delete",
    url: `/api/comment/${id}`,
  })
}