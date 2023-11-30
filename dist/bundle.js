var magnifier;(()=>{var e={553:(e,r,t)=>{var n=t(576),u=t(984),i={};function s(e,r,t){for(var u=new n(r,t,s),i=0;i<e.length&&!a(e[i],u);i++);if(a(null,u),u.currentItem instanceof Object)u.addReference(u.currentItem);else{var o=function(e){for(var r=0;r<e.length;r++)if(!(e[r+1]&&e[r+1].value instanceof Object))return e[r].value}(u.currentParents);o&&u.addReference(o)}return{value:u.currentItem,key:u.currentKey,references:u.currentReferences,parents:u.currentParents}}function a(e,r){if(null==e)!r.currentItem&&r.options.force&&r.force(r.options.force);else if(e.values)if(r.currentItem){var t=Object.keys(r.currentItem),n=[];t.forEach((function(t){e.deep&&Array.isArray(r.currentItem[t])?r.currentItem[t].forEach((function(e){n.push(e)})):n.push(r.currentItem[t])})),r.setCurrent(t,n)}else r.setCurrent(t,[]);else if(e.get){var u=r.getValue(e.get);!function(e,r){return e.override&&e.currentItem===e.rootContext&&void 0!==e.override[r]}(r,u)?r.currentItem||r.options.force&&r.force({})?function(e,r){return e instanceof Array&&parseInt(r)!=r}(r.currentItem,u)||e.multiple?(n=r.currentItem.map((function(e){return e[u]})).filter(l),n=Array.prototype.concat.apply([],n),r.setCurrent(u,n)):r.setCurrent(u,r.currentItem[u]):r.setCurrent(u,null):r.setCurrent(u,r.override[u])}else if(e.select)if(Array.isArray(r.currentItem)||r.options.force&&r.force([])){var i=(e.boolean?e.select:[e]).map((function(e){if(":"===e.op){var t=r.getValue(e.select[0]);return{func:function(n){return t&&(n=n[t]),r.getValueFrom(e.select[1],n)},negate:e.negate,booleanOp:e.booleanOp}}var n=r.getValues(e.select);if(!r.options.allowRegexp&&"~"===e.op&&n[1]instanceof RegExp)throw new Error("options.allowRegexp is not enabled.");return{key:n[0],value:n[1],negate:e.negate,booleanOp:e.booleanOp,op:e.op}}));if(e.multiple){t=[];var s=[];r.currentItem.forEach((function(e,r){o(e,i)&&(t.push(r),s.push(e))})),r.setCurrent(t,s)}else r.currentItem.some((function(e,t){if(o(e,i))return r.setCurrent(t,e),!0}))||r.setCurrent(null,null)}else r.setCurrent(null,null);else if(e.root)r.resetCurrent(),e.args&&e.args.length?r.setCurrent(null,r.getValue(e.args[0])):r.setCurrent(null,r.rootContext);else if(e.parent)r.resetCurrent(),r.setCurrent(null,r.options.parent);else if(e.or){if(r.currentItem)return!0;r.resetCurrent(),r.setCurrent(null,r.context)}else if(e.filter){var a=r.getLocal(e.filter)||r.getGlobal(e.filter);if("function"==typeof a){n=r.getValues(e.args||[]);var c=a.apply(r.options,[r.currentItem].concat(n));r.setCurrent(null,c)}else{var f=r.getFilter(e.filter);"function"==typeof f&&(n=r.getValues(e.args||[]),c=f.call(r.options,r.currentItem,{args:n,state:r,data:r.rootContext}),r.setCurrent(null,c))}}else if(e.deep)if(r.currentItem){if(0===e.deep.length)return;if(c=r.deepQuery(r.currentItem,e.deep,r.options)){r.setCurrent(c.key,c.value);for(var p=0;p<c.parents.length;p++)r.currentParents.push(c.parents[p])}else r.setCurrent(null,null)}else r.currentItem=null}function o(e,r){for(var t=!1,n=0;n<r.length;n++){var u=r[n],i=!1;u.func?i=u.func(e):"~"===u.op?i=u.value instanceof RegExp?e[u.key]&&!!e[u.key].match(u.value):e[u.key]&&!!~e[u.key].indexOf(u.value):"="===u.op?i=!0===e[u.key]&&"true"===u.value||!1===e[u.key]&&"false"===u.value||e[u.key]==u.value:">"===u.op?i=e[u.key]>u.value:"<"===u.op?i=e[u.key]<u.value:">="===u.op?i=e[u.key]>=u.value:"<="===u.op&&(i=e[u.key]<=u.value),u.negate&&(i=!i),t="&"===u.booleanOp?t&&i:"|"===u.booleanOp&&t||i}return t}function l(e){return void 0!==e}e.exports=function(e,r){var t=r&&r.params||null;return Array.isArray(e)&&(t=e.slice(1),e=e[0]),i[e]||(i[e]=u(e,!0)),s(i[e],r,t)},e.exports.lastParent=function(e){var r=e.parents[e.parents.length-1];return r?r.value:null}},559:e=>{e.exports=function(e,r,t){var n=t&&t.max||1/0,u=t&&t.includeDelimiters||!1,i=0,s=0,a=[],o=[];e.replace(/([\[\(\{])|([\]\)\}])/g,(function(e,r,t,n){r?(0===i&&o.push([s,n]),i+=1):t&&0==(i-=1)&&(s=n+e.length)})),0===i&&s<e.length&&o.push([s,e.length]),s=0;for(var l=0;l<o.length&&n>0;l++)for(var c=o[l][0],f=r.exec(e.slice(c,o[l][1]));f&&n>1;c+=f.index+f[0].length,s=c,f=r.exec(e.slice(c,o[l][1])))a.push(e.slice(s,f.index+c)),u&&a.push(f[0]),n-=1;return s<e.length&&a.push(e.slice(s)),a}},576:e=>{function r(e,r,n){e=e||{},this.handleQuery=n,this.options=e,this.locals=this.options.locals||{},this.globals=this.options.globals||{},this.rootContext=t(e.data,e.rootContext,e.context,e.source),this.parent=e.parent,this.override=e.override,this.filters=e.filters||{},this.params=r||e.params||[],this.context=t(e.currentItem,e.context,e.source),this.currentItem=t(this.context,e.rootContext,e.data),this.currentKey=null,this.currentReferences=[],this.currentParents=[]}function t(e){for(var r=0;r<arguments.length;r++)if(null!=arguments[r])return arguments[r]}function n(e){var r={};if(e)for(var t in e)t in e&&(r[t]=e[t]);return r}e.exports=r,r.prototype={setCurrent:function(e,r){(this.currentItem||this.currentKey||this.currentParents.length>0)&&this.currentParents.push({key:this.currentKey,value:this.currentItem}),this.currentItem=r,this.currentKey=e},resetCurrent:function(){this.currentItem=null,this.currentKey=null,this.currentParents=[]},force:function(e){var r=this.currentParents[this.currentParents.length-1];return!this.currentItem&&r&&null!=this.currentKey&&(this.currentItem=e||{},r.value[this.currentKey]=this.currentItem),!!this.currentItem},getLocal:function(e){if(~e.indexOf("/")){for(var r=null,t=e.split("/"),n=0;n<t.length;n++){var u=t[n];0==n?r=this.locals[u]:r&&r[u]&&(r=r[u])}return r}return this.locals[e]},getGlobal:function(e){if(~e.indexOf("/")){for(var r=null,t=e.split("/"),n=0;n<t.length;n++){var u=t[n];0==n?r=this.globals[u]:r&&r[u]&&(r=r[u])}return r}return this.globals[e]},getFilter:function(e){if(~e.indexOf("/")){for(var r=null,t=e.split("/"),n=0;n<t.length;n++){var u=t[n];0==n?r=this.filters[u]:r&&r[u]&&(r=r[u])}return r}return this.filters[e]},addReferences:function(e){e&&e.forEach(this.addReference,this)},addReference:function(e){e instanceof Object&&!~this.currentReferences.indexOf(e)&&this.currentReferences.push(e)},getValues:function(e,r){return e.map(this.getValue,this)},getValue:function(e){return this.getValueFrom(e,null)},getValueFrom:function(e,r){if(null!=e._param)return this.params[e._param];if(e._sub){var t=n(this.options);t.force=null,t.currentItem=r;var u=this.handleQuery(e._sub,t,this.params);return this.addReferences(u.references),u.value}return e},deepQuery:function(e,r,t,u){for(var i in Object.keys(e),e)if(i in e){(t=n(this.options)).currentItem=e[i];var s=this.handleQuery(r,t,this.params);if(s.value)return s}return null}}},984:(e,r,t)=>{var n=t(559);function u(r){var t=n(r,/(!)?(=|~|\:|<=|>=|<|>)/,{max:2,includeDelimiters:!0});if(3===t.length){var u="!"===t[1].charAt(0),s=i(t[0].trim()),a={negate:u,op:u?t[1].slice(1):t[1]};if(":"===a.op)a.select=[s,{_sub:e.exports(":"+t[2].trim())}];else if("~"===a.op){var o=i(t[2].trim());if("string"==typeof o){var l=t[2].trim().match(/^\/(.*)\/([a-z]?)$/);a.select=l?[s,new RegExp(l[1],l[2])]:[s,o]}else a.select=[s,o]}else a.select=[s,i(t[2].trim())];return a}}function i(r){if("{"===(n=r).charAt(0)&&"}"===n.charAt(n.length-1)){var t=r.slice(1,-1);return{_sub:e.exports(t)}}return function(e){if("?"===e.charAt(0)){var r=parseInt(e.slice(1));return isNaN(r)?e:{_param:r}}return e}(r);var n}e.exports=function(e,r){if(!e)return[];var t,s=[],a=e.charAt(0),o=0,l=0,c=0,f=0,p=0,h="get",v=null;r&&(e=function(e){var r=0;return e.replace(/\?/g,(function(e){return e+r++}))}(e));var m={".":{mode:"get"},":":{mode:"filter"},"|":{handle:"or"},"[":{open:"select"},"]":{close:"select"},"{":{open:"meta"},"}":{close:"meta"},"(":{open:"args"},")":{close:"args"}};function g(e){v?v.push(e):s.push(e)}var y={get:function(e){var r="string"==typeof e?e.trim():null;r&&g({get:r})},select:function(e){if(e)g(function(e){if("*"===e)return{values:!0};if("**"===e)return{values:!0,deep:!0};var r=!1;"*"===e.charAt(0)&&(r=!0,e=e.slice(1));var t=n(e,/&|\|/,{includeDelimiters:!0});if(t.length>1){for(var s=[u(t[0].trim())],a=1;a<t.length;a+=2){var o=u(t[a+1].trim());o&&(o.booleanOp=t[a],s.push(o))}return{multiple:r,boolean:!0,select:s}}return(s=u(e.trim()))?(r&&(s.multiple=!0),s):{get:i(e.trim())}}(e));else{var r={deep:[]};s.push(r),v=r.deep}},filter:function(e){e&&g({filter:e.trim()})},or:function(){v=null,s.push({or:!0}),c=x+1},args:function(e){var r,t=","===(r=e)?[","]:n(r,/,/).map((function(e){return i(e.trim())}));s[s.length-1].args=t}};function d(){var r=e.slice(o,l);y[h]&&y[h](r),h="get",o=l+1}for(var x=0;x<e.length;x++){t=a,a=e.charAt(x+1),0==(f=x-c)&&":"!==t&&"."!==t&&s.push({root:!0}),0===f&&"."===t&&"."===a&&s.push({parent:!0});var I=m[t];I&&(0===p&&(I.mode||I.open)&&(d(),h=I.mode||I.open),0===p&&I.handle&&(d(),y[I.handle]()),I.open?p+=1:I.close&&(p-=1),0===p&&I.close&&d()),l=x+1}return d(),s}}},r={};function t(n){var u=r[n];if(void 0!==u)return u.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";t.r(n),t.d(n,{runQuery:()=>i});var e=t(553);function r(e,r){e.hasOwnProperty(r)||(e[r]=0),e[r]++}const u={select:function(e){if(Array.isArray(e)){var r=[].slice.call(arguments,1);return e.map((function(e){return Object.keys(e).reduce((function(t,n){return~r.indexOf(n)&&(t[n]=e[n]),t}),{})}))}},first:function(e,r){return Array.isArray(e)&&Array.isArray(e[0][r])?e.map((e=>e[r][0])):e},last:function(e,r){return Array.isArray(e)&&Array.isArray(e[0][r])?e.map((e=>e[r][e[r].length-1])):e},sum:function(e,...r){if(Array.isArray(e))return e.reduce(((e,t)=>(r.forEach((r=>{isNaN(t[r])||(e[r]=e[r]??0,e[r]+=Number(t[r]))})),e)),{})}};function i(t,n,i){let s=e(n,{data:JSON.parse(t),locals:u}).value;return i.count&&Array.isArray(s)&&(s=s.reduce(((e,t)=>{if("object"==typeof t)for(let n in t)r(e,n);else r(e,t);return e}),{})),s}})(),magnifier=n})();