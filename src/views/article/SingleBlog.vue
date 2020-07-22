<template>
  <div id="singleblog" v-cloak>
    <header>
      <h3>Archex's Blog /</h3>
      <div class="title">
        <h1>{{blog.title}}</h1>
        <div class="icon">
          <a href="https://github.com/xuchaoa"><img src="https://blog.ixuchao.cn/usr/themes/Plain-master/images/github.png" alt="github图标"></a>
        </div>
      </div>
    </header>
    <!-- <ul id="tags" v-for="tag in blog.tag" :key="tag.index">
      <li>{{tag}}</li>
    </ul> -->
    <ul>
      <li>发布时间 {{blog.createAt}}</li>
      <li>访问量 {{blog.rearNum}}</li>
      <li  @click="zan()"><i class="iconfont icon-love"></i>点赞{{blog.zanNum}}</li>
      <!-- <li>评论数{{blog.comments}}</li> -->
    </ul>
    <section id="content" >
      <el-scrollbar style=" height: 100%; ">
        <div v-html="blog.content"></div>
        <!-- <div v-html="blog.content"> {{blog.content}}</div> -->
      </el-scrollbar>
    </section>
    <section>
        <el-form id="messageForm" :model="comments" ref="messageFormRef" :rules="messageRules">
          <el-form-item>
            <el-input placeholder="恁叫哈~" v-model="comments.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="恁邮箱是哈~" v-model="comments.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="恁想说哈~" v-model="comments.content"></el-input>
          </el-form-item>
          <el-form-item>
            <img src="https://blog.ixuchao.cn/usr/themes/Plain-master/images/commentsbg.gif" alt="blackcat">
            <el-radio v-model="notrobot">俺不是机器银</el-radio>
            <el-button type="primary" @click="consol">发表评论</el-button>
          </el-form-item>
        </el-form>
    </section>
    <!-- <section id="comment">
    <el-button type="primary" @click="dialogFormVisible = true">我也要发表评论</el-button>
      <el-dialog title="发表评论" :visible.sync="dialogFormVisible">
        <el-form :model="comment">
          <el-form-item label="用户名" :label-width="formLabelWidth" >
            <el-input v-model="comment.name" autocomplete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="内容" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="comment.content" :autosize="{ minRows: 8, maxRows: 15}" placeholder="请输入您的宝贵意见">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" id="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitComment">确 定</el-button>
        </div>
      </el-dialog>
      <ul id="com" v-for="comment in blog.comments" :key="comment.index">
        <li >{{comment.userId}}: {{comment.content}}</li>
      </ul>
    </section> -->
  </div>
</template>

<script>
import { Singleblog } from '@/api/article.js'
import { SubmitComment } from '@/api/comment.js'
import { getAliOSSCreds } from '@/api/oss.js'
import OSS from 'ali-oss'
export default {
  name: 'SingleBlog',
  components: {},
  data() {
    return {
        blog: {},
        id: this.$route.params.id,
        imageUrl: '',
        // dialogFormVisible: false,
        formLabelWidth: '20%',
        notrobot: false,
        comments: {
          parentId: 1,
          aticleId: this.id,
          email: '',
          name: '',
          content: '',
        },
        messageRules: {
          username: [
            {required: true, message: "请输入用户名", trigger: "blur"}
          ],
        }
    }
  },
  methods: {
    zan(){
      console.log(this.blog.zanNum)
    },
    consol(){
      this.$refs.messageFormRef.validate( valid => {
        if (valid){
          SubmitComment(this.comments)
          .then( () => {
            console.log(1111)
          }).catch(error => {
            // console.log(error)
          });  
        }else {
          return false;
        }
      })
    },
    // submitComment() {
    //   const comment =  {
    //     // name: this.comment.name,
    //     content: this.comment.content,
    //     // parentId: this.comment.parentId,
    //      parentId: 3,
    //     aticleId: this.id
    //   }
    //   SubmitComment(comment).then( res => {
    //     console.log(111)
    //   })
    // },

    // handleAvatarSuccess(res, file) {
    //     this.imageUrl = URL.createObjectURL(file.raw);
    //   },
    // beforeAvatarUpload (file) {
    //     const isLt2M = file.size / 1024 / 1024 < 2
    //     if (!isLt2M) {
    //       this.$message.error('上传头像图片大小不能超过 2MB!')
    //     }
    //     return isLt2M
    //   },
    //   upload (item) {
    //     getAliOSSCreds().then(res => { // 向后台发请求 拉取OSS相关配置
    //       let creds = res.body.data
    //       let client = new OSS.Wrapper({
    //         region: 'oss-cn-beijing', // 服务器集群地区
    //         accessKeyId: creds.accessKeyId, // OSS帐号
    //         accessKeySecret: creds.accessKeySecret, // OSS 密码
    //         stsToken: creds.securityToken, // 签名token
    //         bucket: 'imgXXXX' // 阿里云上存储的 Bucket
    //       })
    //       let key = 'resource/' + localStorage.userId + '/images/' + createId() + '.jpg'  // 存储路径，并且给图片改成唯一名字
    //       return client.put(key, item.file) // OSS上传
    //     }).then(res => {
    //       console.log(res.url)
    //       this.$emit('on-success', res.url) // 返回图片的存储路径
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }
  },
  created() {
    Singleblog(this.id).then( data => {
          this.blog = data.data;
          console.log(this.blog)
          let timeRegex = /(.*)T(.{8})/;
      this.blog.createAt = this.blog.createAt.slice(0,19).split('-').join('/').replace(timeRegex,"$2 $1")
      })
  },
  // beforeRouteEnter (to, from, next){
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   next();
  // }
}
</script>

<style lang="scss" scoped>
#singleblog{
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
header{
  border-bottom: 1px solid #eee;
  margin-top: 40px ;
  h1{
    font-family: 'zashu';
    color: #666;
  }
  h3{
    margin: 5px 0;
    font-weight: 50;
  }
}
.title{
  display: flex;
  justify-content: space-between;
  margin: 5px 3px 0 0;
  padding: 0;
}
.icon{
  line-height: 11px;
  padding: 2px;
  margin-top: 5px;
}
// #tags{
//   height: 10px;
//   display: inline;
// }
ul{
  margin-top: 0;
  margin-left: 50%;
  color: #666;
  padding-top: 0;
  li{

    list-style: none;
    display: inline-block;
    margin-left: 10px;
    font-size: 12px;
  }
}
#content{
  border: 2px solid #eee;
  height: 400px;
}
.el-scrollbar__wrap{ 
  overflow-x: hidden;
}
#messageForm{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .el-form-item{
    margin: 0;
  }
}
// #comment{
//   margin-top: 10px;
//   /* border: 1px solid #eee; */
// }
// #com{
//   padding-left: 0;
//   margin-top: 20px;
// }
// #com li{
//   border-bottom: 3px solid #eee;
//   width: 100%;
//   font-size: 16px;
//   margin-left: 0;
//   color: #aaa;
// }


// #el-dialog__body{
//   padding: 0 20px;
// }
// #el-dialog__footer{
//   padding: 0 20px;
// }

/* form{
  background-color: #ffccff;
  display: flex;
  flex-direction: column;
} */
// .avatar-uploader .el-upload {
//     border: 1px dashed #d9d9d9;
//     border-radius: 6px;
//     cursor: pointer;
//     position: relative;
//     overflow: hidden;
//   }
//   .avatar-uploader .el-upload:hover {
//     border-color: #409EFF;
//   }
//   .avatar-uploader-icon {
//     font-size: 28px;
//     color: #8c939d;
//     width: 178px;
//     height: 178px;
//     line-height: 178px;
//     text-align: center;
//   }
//   .avatar {
//     width: 178px;
//     height: 178px;
//     display: block;
//   }
</style>
