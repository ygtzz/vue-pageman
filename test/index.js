const { pager } = VuePager;

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      maxentries:1000,
      items_per_page:10,
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