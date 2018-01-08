<template>
    <ul class="pwd-list">
        <li v-for="n in len" :class="{'active': n <= password.length}" class="pwd-item" :key="'pwd'+n"></li>
    </ul>
</template>

<script>

export default{
    name:'c-pager',
    props:{
        maxentries:{
            type:Number,
            required:true
        },
        items_per_page:{
            type:Number,
            default:10
        },
        num_display_entries:{
            type:Number,
            default:10
        },
        current_page:{
            type:Number,
            default:0
        },
        num_edge_entries:{
            type:Number,
            default:0
        },
        link_to:{
            type:String,
            default:'#'
        },
        prev_text:{
            type:String,
            default:"Prev"
        },
        next_text:{
            type:String,
            default:"Next"
        },
        ellipse_text:{
            type:String,
            default:"..."
        },
        prev_show_always:{
            type:Boolean,
            default:true
        },
        next_show_always:{
            type:Boolean,
            default:true
        },
        callback:{
            type:Function,
            default:function(){return false;}
        }
    },
    computed:{
        numPages(){
            return Math.ceil(this.maxentries/this.items_per_page);
        }
    },
    methods:{
        
    }
}
</script>

<style lang="sass" scoped>
     .pwd-list {
        display: inline-block;
        border: 1px solid #ffa200;
        // position: relative;
        font-size:0;
        padding-left:0;
    }
    .pwd-item {
        display: inline-block;
        width:  100px;
        height: 88px;
        position: relative;
        border-right: 1px solid #ccc;
        &:last-of-type{
          border:0 none;
        }
        &.active{
          &:before{
              position: absolute;
              content: '';
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              background-color: #000;
              margin: auto;
          }
        }
    }
</style>