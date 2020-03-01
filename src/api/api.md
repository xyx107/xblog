查询文章详情接口

请求示例：GET http://localhost:8080/article/2

请求参数：path中的文章id

返回参数：

{
    "code": 0,   //0代表查询成功，无报错，其他均代表有错误
    "message": "OK",  
    "data": {   //真正的查询返回状态
        "id": 2,  //文章id
        "createAt": "2020-02-28T21:01:36+08:00",   //文章创建时间
        "updateAt": "2020-02-29T17:43:04+08:00",   //文章更新时间，如果文章未被修改过。则时间同创建时间
        "title": "如何吃饭",     //文章标题，下面是文章内容
        "content": "如何吃饭的发生，到底需要如何做到，不如何吃饭的发生，又会如何产生。 要想清楚，如何吃饭，到底是一种怎么样的存在。 而这些
        时， 生活中，若如何吃饭出现了，我们就不得不考虑它出现了的事实。 生活中，若如何吃饭出现了，我们就不得不考虑它出现了的事实。 那么， 叔本华曾经提到过，意志是一个强壮的盲人，倚靠在明眼的跛子肩上。这不禁令我深思。",
        "tag": "安全",  //文章标签,一个文章可有多个标签，中间逗号隔开
        "readNum": 1,   //文章阅读量
        "zanNum": 0,  //文章获赞数
        "User": {    //下面是该文章作者信息，实际使用数据库中外建关联
            "id": 6,      //作者id
            "createAt": "2020-02-27T21:07:21+08:00",  //作者注册时间
            "updateAt": "2020-02-27T21:07:21+08:00",   //作者上次信息修改时间，如未修改过则与创建时间相同
            "username": "archerx",   //作者用户名
            "email": "755563428@qq.com",  //作者邮箱
            "avator": "",   //此处为作者头像链接，功能目前未开发
            "role": 0   //作者权限信息
        },
        "comments": [  //该文章评论信息，下面是所有评论的list
            {
                "id": 1,  //评论id
                "createAt": "2020-02-29T18:07:32+08:00",
                "updateAt": "2020-02-29T18:07:36+08:00",
                "content": "写的很好解决了吃饭问题",   //评论内容
                "parentId": 0,  //是否是回复的消息,如果是0代表不是回复消息
                "userId": 6  //评论用户的id
            },
            {
                "id": 2,
                "createAt": "2020-02-29T18:07:49+08:00",
                "updateAt": "2020-02-29T18:07:51+08:00",
                "content": "哈哈，必须的",
                "parentId": 1,  //此条消息带便是恢复的消息，1代表是回复id为1的评论
                "userId": 6
            }
        ]
    }
}


查询文章列表接口

请求示例：http://localhost:8080/article?page=2

>> 代表请求第二页文章，默认每一页的文章数量为10，可以在后台修改

请求参数： query：page

返回参数：

{
    "code": 0,
    "message": "OK",
    "data": {
        "totalCount": 4,   //总共分页的数量
        "articleList": [    //下面是当前页所有文章的列表，具体字段与上面想同
            {
                "id": 2,
                "createAt": "2020-02-28T21:01:36+08:00",
                "updateAt": "2020-02-29T18:08:33+08:00",
                "title": "如何吃饭",
                "content": "如何吃饭的发生，到底需要如何做到，不如何吃饭的发生，又会如何产生。 要想清楚，如何吃饭，到底是一种怎么样的存在。 而这些并不是完全重要，不得不考虑它出现了的事实。 生活中，若如何吃饭出现了，我们就不得不考虑它出现了的事实。 那么， 叔本华曾经提到过，意志是一个强壮的盲人，倚靠在明眼的跛子肩上。这不禁令我深思。",
                "tag": "安全",
                "readNum": 3,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": [
                    {
                        "id": 1,
                        "createAt": "2020-02-29T18:07:32+08:00",
                        "updateAt": "2020-02-29T18:07:36+08:00",
                        "content": "写的很好解决了吃饭问题",
                        "parentId": 0,
                        "userId": 6
                    },
                    {
                        "id": 2,
                        "createAt": "2020-02-29T18:07:49+08:00",
                        "updateAt": "2020-02-29T18:07:51+08:00",
                        "content": "哈哈，必须的",
                        "parentId": 1,
                        "userId": 6
                    }
                ]
            },
            {
                "id": 3,
                "createAt": "2020-02-28T21:01:57+08:00",
                "updateAt": "2020-02-28T21:01:57+08:00",
                "title": "如何睡觉",
                "content": "了解清楚如何睡觉到底是一种怎么样的存在，是解决一切问题的关键。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 洛克曾经提到过，学到很多东西的诀窍，就是一下子不要学面对这些问题。 在面对这种问题时， 既然如何。",
                "tag": "安全",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            },
            {
                "id": 6,
                "createAt": "2020-02-28T21:11:36+08:00",
                "updateAt": "2020-02-28T21:11:36+08:00",
                "title": "怎么哄老婆",
                "content": "",
                "tag": "",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            },
            {
                "id": 7,
                "createAt": "2020-02-28T21:11:43+08:00",
                "updateAt": "2020-02-28T21:11:43+08:00",
                "title": "什么叫居居",
                "content": "11",
                "tag": "安全",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            },
            {
                "id": 8,
                "createAt": "2020-02-28T21:11:51+08:00",
                "updateAt": "2020-02-28T21:11:51+08:00",
                "title": "居居是个什么物种",
                "content": "11",
                "tag": "安全",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            },
            {
                "id": 9,
                "createAt": "2020-02-28T21:13:34+08:00",
                "updateAt": "2020-02-28T21:13:34+08:00",
                "title": "谁是大居居",
                "content": "11",
                "tag": "安全",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            },
            {
                "id": 10,
                "createAt": "2020-02-28T21:15:31+08:00",
                "updateAt": "2020-02-28T21:15:31+08:00",
                "title": "一只居居的自我修养",
                "content": "11",
                "tag": "安全",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            },
            {
                "id": 11,
                "createAt": "2020-02-28T22:07:20+08:00",
                "updateAt": "2020-02-28T22:07:20+08:00",
                "title": "s是是是s",
                "content": "11",
                "tag": "安全",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            },
            {
                "id": 12,
                "createAt": "2020-02-28T22:07:24+08:00",
                "updateAt": "2020-02-28T22:07:24+08:00",
                "title": "s是1是是s",
                "content": "11",
                "tag": "安全",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            },
            {
                "id": 13,
                "createAt": "2020-02-28T22:07:26+08:00",
                "updateAt": "2020-02-28T22:07:26+08:00",
                "title": "s是1是2是s",
                "content": "11",
                "tag": "安全",
                "readNum": 0,
                "zanNum": 0,
                "User": {
                    "id": 6,
                    "createAt": "2020-02-27T21:07:21+08:00",
                    "updateAt": "2020-02-27T21:07:21+08:00",
                    "username": "archerx",
                    "email": "755563428@qq.com",
                    "avator": "",
                    "role": 0
                },
                "comments": []
            }
        ]
    }
}