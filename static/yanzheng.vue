<template>
    <div :id="modelName" :class="[modelName]">
        <div class="nc-container" ></div>
        <!-- <no-captcha-js src="http://g.alicdn.com/sd/ncpc/nc.js?t=2015052012" type="text/javascript" charset="utf-8" /> -->
    </div>
  
</template>

<script>

export default {

    data () {
        return {
            'appKey':'<你的appkey>',
            'modelName':'no-captcha',
            'nc_token':null,
            'lang':'cn',
            'NC_Opt':null,
        }
    },

    mounted(){ this.init(); },
    components:{
        
    },
    methods: {

        init(){
            var self = this;
            this.nc_token = [this.appKey, (new Date()).getTime(), Math.random()].join(':');
            this.NC_Opt = {
                renderTo: "#no-captcha",
                appkey: "<你的appkey>",
                scene: "nc_login",
                token: this.nc_token,
                customWidth: 300,
                trans:{"key1":"code0"},
                // elementID: ["usernameID"],
                is_Opt: 0,
                language: this.lang,
                isEnabled: true,
                timeout: 3000,
                times:5,
                apimap: {},   
                callback: function (data) { 
                    window.console && console.log(self.nc_token)
                    window.console && console.log(data.csessionid)
                    window.console && console.log(data.sig)
                    //将这三个参数在这里回调服务器的接口，进行服务器的验证
                }
            }
            $api.loadJs("http://g.alicdn.com/sd/ncpc/nc.js?t=2015052012",{
                    success(data){
                        self.generarte();
                    }
              });
                    
        },

        generarte(){
            var nc = new noCaptcha(this.NC_Opt)
            nc.upLang('cn', {
                _startTEXT: "请按住滑块，拖动到最右边",
                _yesTEXT: "验证通过",
                _error300: "哎呀，出错了，点击<a href=\"javascript:__nc.reset()\">刷新</a>再来一次",
                _errorNetwork: "网络不给力，请<a href=\"javascript:__nc.reset()\">点击刷新</a>",
            });
        }
    }
}