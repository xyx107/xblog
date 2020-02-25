<template>
  <div >

  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {

    }
  },
  methods: {
    handler(captchaObj) {
        captchaObj.appendTo('#captcha');
        captchaObj.onReady(function () {
            $("#wait").hide();
        });
        $('#btn').click(function () {
            var result = captchaObj.getValidate();
            if (!result) {
                return alert('Please complete verification');
            }
            $.ajax({
                url: 'http://39.106.169.248:8080/login',
                type: 'POST',
                dataType: 'json',
                data: {
                    username: $('#username2').val(),
                    password: $('#password2').val(),
                    geetest_challenge: result.geetest_challenge,
                    geetest_validate: result.geetest_validate,
                    geetest_seccode: result.geetest_seccode
                },
                success: function (data) {
                    if (data.status === 'success') {
                        alert('success');
                    } else if (data.status === 'fail') {
                        alert('fail, Please complete verification');
                        captchaObj.reset();
                    }
                }
            });
        })
      },
      $.ajax({
        url: "http://39.106.169.248:8080/gee", // 加随机数防止缓存
        type: "get",
        dataType: "json",
        success: function (data) {

            $('#text').hide();
            $('#wait').show();
            // 调用 initGeetest 进行初始化
            // 参数1：配置参数
            // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
            initGeetest({
                // 以下 4 个配置参数为必须，不能缺少
                gt: data.data.gt,
                challenge: data.challenge,
                offline: !data.success, // 表示用户后台检测极验服务器是否宕机
                new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机

                product: "popup", // 产品形式，包括：float，popup
                lang: 'zh-cn',
                width: "300px",
                 https: true

                // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
            }, handler);
        }
    })  
  } 
}
</script>

<style>
</style>
