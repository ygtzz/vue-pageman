## vue-pager

a vue pagination component, modified from jquery pagination

### Install

```bash
npm install vue-pageman -S

yarn add vue-pageman
```

### Quickstart
```javascript
require('vue-pager/dist/vue-pager.css');

// in ES6 modules
import { pager } from 'vue-pager';

// in CommonJS
const { pager } = require('vue-pager');

// in Global variable
const { pager } = VuePager;

Vue.component('c-pager',pager);
```
```html
<c-pager :total="total" :pgeSize="pageSize" 
         :num-display-entries="num_display_entries" :num-edge-entries="num_edge_entries" 
         :cur-page="cur_page"></c-pager>
```

### Params

`props`
- `maxentries`	         item's total count	            required，Number
- `items_per_page`	     item's count per page	        optional，default is 10
- `num_display_entries`	 item's count in center area    optional，defalut is 10
- `current_page`	     current selected page	        optional，default is 0，representing first page
- `num_edge_entries`	 item's count in both sides	    optional，default is 0
- `link_to`	             page item's link               String，optional，default is "#"
- `prev_text`	         pre page button's text	        String，可选，默认是"Prev"
- `next_text`	         next page button's text	    String，可选，默认是"Next"
- `ellipse_text`	     ellipsis text on not showing pages	optional，default is "..."
- `prev_show_always`	 whether to show pre button	    Boolean，optional，default is true
- `next_show_always`	 whether to show next button	Boolean，optional，default is true
- `callback`	         callback function	            default is no return value

### Preview

![pager image](./doc/pager.png)