const { pager } = VuePageman;

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      total:1000,
      pageSize:10,
      num_display_entries:4,
      cur_page:1,
      num_edge_entries:1
    }
  },
  methods:{
    
  },
  components: {
    'c-pager':pager,
  }
});