<template>
  <div id="singleblog">
    <blog-header/>
    <!-- <header> -->
      <!-- <p>Archex's Blog  /  </p>
      <h2>{{blog.title}}</h2>
      <ul v-for="tags in blog.tag" :key="tags.insex">
        <li>{{tags}}</li>
      </ul>
    </header> -->
    <section>
      <ul>
        <li>发布时间 {{blog.createAt}}</li>
        <li>访问量 {{blog.rearNum}}</li>
        <li  @click="zan()"><i class="iconfont icon-love"></i>点赞{{blog.zanNum}}</li>
        <!-- <li>评论数{{blog.comments}}</li> -->
      </ul>
    </section>
    <section id="content">
      <div> afsdsgvsdt</div>
      {{blog.content}}
    </section>
    <section>
      <el-form action="">
        <el-button @click="consol">发表评论</el-button>
        <el-input>
          
        </el-input>
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
        msg: 'fgukf dsylgtdh',
        // blog: {},
        blog: {
          title: 'Python Enhancement Proposals',
          content: '中文一般叫做python增强提案，简称PEP，多看看发现能了解到更多关于python的特性，为什么要设计这些特性，如何实现，或者怎样更好的运用甚至了解一些细分最佳实践，极力推荐。'
        },
        id: this.$route.params.id,
        imageUrl: '',
        dialogFormVisible: false,
        formLabelWidth: '20%',
        comment: {
          name: '',
          content: '',
          parentId: '',
        }
    }
  },
  methods: {
    zan(){
      console.log(this.blog.zanNum)
    },
    consol(){
      
    },
    submitComment() {
      const comment =  {
        // name: this.comment.name,
        content: this.comment.content,
        // parentId: this.comment.parentId,
         parentId: 3,
        aticleId: this.id
      }
      SubmitComment(comment).then( res => {
        console.log(111)
      })
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    beforeAvatarUpload (file) {
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isLt2M
      },
      upload (item) {
        getAliOSSCreds().then(res => { // 向后台发请求 拉取OSS相关配置
          let creds = res.body.data
          let client = new OSS.Wrapper({
            region: 'oss-cn-beijing', // 服务器集群地区
            accessKeyId: creds.accessKeyId, // OSS帐号
            accessKeySecret: creds.accessKeySecret, // OSS 密码
            stsToken: creds.securityToken, // 签名token
            bucket: 'imgXXXX' // 阿里云上存储的 Bucket
          })
          let key = 'resource/' + localStorage.userId + '/images/' + createId() + '.jpg'  // 存储路径，并且给图片改成唯一名字
          return client.put(key, item.file) // OSS上传
        }).then(res => {
          console.log(res.url)
          this.$emit('on-success', res.url) // 返回图片的存储路径
        }).catch(err => {
          console.log(err)
        })
      }
  },
  created() {

    Singleblog(this.id).then( data => {
          this.blog = data.data;
          let timeRegex = /(.*)T(.{8})/;
      this.blog.createAt = this.blog.createAt.slice(0,19).split('-').join('/').replace(timeRegex,"$2 $1")
      })
  },
  beforeRouteEnter (to, from, next){
    window.document.body.style.backgroundColor = 'blue';
    next();
  },
  beforeRouteLeave(to, from, next) {
    window.document.body.style.backgroundColor = '';
    next();
  }
}
</script>

<style scoped>
#singleblog{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
header{
  border-bottom: 1px solid #eee;
  padding-top: 20px ;
}
header h2,p{
  margin: 5px 0;
}
ul{
  margin-top: 0;
  padding-top: 0;
}
li{
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
}
#comment{
  margin-top: 10px;
  /* border: 1px solid #eee; */
}
#com{
  padding-left: 0;
  margin-top: 20px;
}
#com li{
  border-bottom: 3px solid #eee;
  width: 100%;
  font-size: 16px;
  margin-left: 0;
  color: #aaa;
}
#content{
  /* background-color: rgba(205, 200, 240, .3); */
  height: 300px;
}
#el-dialog__body{
  padding: 0 20px;
}
#el-dialog__footer{
  padding: 0 20px;
}
/* form{
  background-color: #ffccff;
  display: flex;
  flex-direction: column;
} */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
