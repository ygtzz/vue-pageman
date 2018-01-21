<template>
    <span v-if="bCur" class='current page-item' :class="classes" v-text="text"></span>
    <a v-else :href="link" v-text="text" class="page-item" :class="classes" @click="clickHandler(pageid)"></a>
</template>

<script>
export default{
    name:'c-pager-item',
    props:{
        bCur:{
            type:Boolean,
            default:false
        },
        pageid:{
            type: Number,
            required:true
        },
        text:{
            type:String,
            default:''
        },
        classes:{
            type:String,
            default:''
        },
        linkto:{
            type:String,
            default:'#'
        },
        clickHandler:{
            type:Function,
            default:function(){},
            required:true
        }
    },
    data(){
        return {
            current_page: this.cur_page
        }
    },
    computed:{
       link(){
           return this.linkto.replace(/__id__/,this.page_id)
       }
    },
    methods:{
        
    }
}
</script>

<style lang="sass" scoped>
     .page-item{
        display: inline-block;
        padding: 0.1em 0.4em;
        margin-right: 5px;
        margin-bottom: 5px;
     }
     .page-item:link,.page-item:visited,.page-item:hover,.page-item:active{
        text-decoration: none;
        border: 1px solid #AAE;
        color: #15B;
     }
     .page-item:hover,.page-item:active{
        
     }
</style>