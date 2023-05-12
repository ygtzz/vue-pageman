<template>
    <div class="pager" @click="pageSelected($event)">
        <c-pager-item :b-cur="currentPage == 0" :pageid="currentPage-1" :text="prevText" classes="prev" :link-to="linkTo"  v-show="bShowPrev"></c-pager-item>
        <c-pager-item :b-cur="currentPage == i" v-for="(i,index) in sItems" :pageid="i" :text="String(i+1)" :key="'sitem'+index" :link-to="linkTo"></c-pager-item>
        <span v-if="bShowStartEllipseItem" v-text="ellipseText" class="ellipse-item"></span>
        <c-pager-item :b-cur="currentPage == i" v-for="(i,index) in mItems" :pageid="i" :text="String(i+1)" :key="'mitem'+index" :link-to="linkTo"></c-pager-item>
        <span v-if="bShowEndEllipseItem" v-text="ellipseText" class="ellipse-item"></span>
        <c-pager-item :b-cur="currentPage == i" v-for="(i,index) in eItems" :pageid="i" :text="String(i+1)" :key="'eitem'+index" :link-to="linkTo"></c-pager-item>
        <c-pager-item :b-cur="currentPage == numPages-1" :pageid="currentPage+1" :text="nextText" classes="next" :link-to="linkTo" v-show="bShowNext"></c-pager-item>
    </div>
</template>

<script>
import pageritem from './pager-item.vue';

export default{
    name:'c-pager',
    props:{
        total:{
            type:Number,
            required:true
        },
        pageSize:{
            type:Number,
            default:10
        },
        numDisplayEntries:{
            type:Number,
            default:10
        },
        currentPage:{
            type:Number,
            default:0
        },
        numEdgeEntries:{
            type:Number,
            default:0
        },
        prevShowAlways:{
            type:Boolean,
            default:true
        },
        nextShowAlways:{
            type:Boolean,
            default:true
        },
        prevText:{
            type:String,
            default:"Prev"
        },
        nextText:{
            type:String,
            default:"Next"
        },
        ellipseText:{
            type:String,
            default:"..."
        },
        linkTo:{
            type:String,
            default:'#'
        }
    },
    data(){
        return {
            
        }
    },
    computed:{
        numPages(){
            return Math.ceil(this.maxentries/this.itemsPerPage);
        },
        maxentries(){
            var total = this.total;
            return (!total || total < 0) ? 1 : total;
        },
        itemsPerPage(){
            var pageSize = this.pageSize;
            return (!pageSize || pageSize < 0) ? 1 : pageSize;
        },
        interval(){
            var numDisplayEntries = this.numDisplayEntries,
                current_page = this.currentPage,
                ne_half = Math.ceil(numDisplayEntries/2),
			    np = this.numPages,
			    upper_limit = np - numDisplayEntries;
			var start = current_page > ne_half ? Math.max(Math.min(current_page - ne_half, upper_limit), 0) : 0;
			var end = current_page > ne_half ? Math.min(current_page + ne_half, np) : Math.min(numDisplayEntries, np);
			return [start,end];
        },
        sItems(){
            var end = Math.min(this.numEdgeEntries, this.interval[0]),
                res = [];
            for(var i=0; i<end; i++) {
                res.push(i);
            }
            return res;
        },
        bShowStartEllipseItem(){
            return this.numEdgeEntries > 0 && this.numEdgeEntries < this.interval[0] && this.ellipseText;
        },
        mItems(){
            var items = [],
                interval = this.interval;
            for(var i=interval[0]; i<interval[1]; i++) {
				items.push(i);
            }
            return items;
        },
        bShowEndEllipseItem(){
            return this.numEdgeEntries > 0 && this.numPages - this.numEdgeEntries > this.interval[1] && this.ellipseText
        },
        eItems(){
            var begin = Math.max(this.numPages - this.numEdgeEntries, this.interval[1]),
                res = [];
            for(var i= begin; i< this.numPages; i++) {
                res.push(i);
            }
            return res;
        },
        bShowPrev(){
            return this.prevText && (this.currentPage > 0 || this.prevShowAlways);
        },
        bShowNext(){
            return this.nextText && (this.currentPage < this.numPages-1 || this.nextShowAlways);
        },
        pageid(){
            var page_id = this.currentPage,
                np = this.numPages;
            return page_id < 0 ? 0 : (page_id < np ? page_id : np-1 );
        }
    },
    methods:{
        pageSelected(e){
			this.currentPage = e.target.pageId;
            this.$emit('select', this.currentPage)
        }
    },
    components:{
        'c-pager-item':pageritem
    }
}
</script>

<style lang="sass" scoped>
     .ellipse-item{
        display: inline-block;
        padding: 0.1em 0.4em;
        margin-right: 5px;
        margin-bottom: 5px;
        cursor:pointer;
     }
</style>