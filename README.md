## vue-pageman

a vue pagination component, modified from jquery pagination

### Install

```bash
npm install vue-pageman -S

yarn add vue-pageman
```

### Quickstart
```javascript
require('vue-pager/dist/vue-pageman.css');

// in ES6 modules
import { pager } from 'vue-pageman';

// in CommonJS
const { pager } = require('vue-pageman');

// in Global variable
const { pager } = VuePageman;

Vue.component('c-pager',pager);
```
```html
<c-pager :total="total" :pgeSize="10" 
         :num-display-entries="4" :num-edge-entries="1" 
         :cur-page="1"></c-pager>
```

### Params

`props`
- `maxentries`	         item's total count	            required，Number
- `items-per-page`	     item's count per page	        optional，default is 10
- `num-display-entries`	 item's count in center area    optional，defalut is 10
- `cur-page`	     current selected page	        optional，default is 0，representing first page
- `num-edge-entries`	 item's count in both sides	    optional，default is 0
- `link-to`	             page item's link               String，optional，default is "#"
- `prev-text`	         pre page button's text	        String，optional，default is "Prev"
- `next-text`	         next page button's text	    String，optional，default is "Next"
- `ellipse-text`	     ellipsis text on not showing pages	optional，default is "..."
- `prev-show-always`	 whether to show pre button	    Boolean，optional，default is true
- `next-show-always`	 whether to show next button	Boolean，optional，default is true
- `callback`	         callback function	            default is no return value

### Preview

![pager image](./doc/pager.png)