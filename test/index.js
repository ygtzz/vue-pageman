const { pager } = VuePager;

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      pwd:'',
      len: 6
    }
  },
  methods:{
    fChangePwd(){
      const len = this.len;
      const list = Array(len+1).join(0).split('').map((item,index) => index+1);
      const num = list[Math.floor(list.length * Math.random())];
      if(this.pwd.length <= len){
        this.pwd += num;
      }
      console.log(this.pwd);
    }
  },
  components: {
    'c-pager':pager,
  }
});