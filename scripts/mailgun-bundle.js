(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;

},{}],2:[function(require,module,exports){
(function (Buffer){(function (){
/*! For license information please see mailgun.web.js.LICENSE.txt */
define((()=>(()=>{var t={5205:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e,r){this.name=t.name,this.require_tls=t.require_tls,this.skip_verification=t.skip_verification,this.state=t.state,this.wildcard=t.wildcard,this.spam_action=t.spam_action,this.created_at=t.created_at,this.smtp_password=t.smtp_password,this.smtp_login=t.smtp_login,this.type=t.type,this.receiving_dns_records=e||null,this.sending_dns_records=r||null;var n=["id","is_disabled","web_prefix","web_scheme"].reduce((function(e,r){return r in t&&(e[r]=t[r]),e}),{});Object.assign(this,n)};e.default=r},8127:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(r(4078)),s=o(r(3757)),a=o(r(5205)),u=function(){function t(t,e,r,n){this.request=t,this.domainCredentials=e,this.domainTemplates=r,this.domainTags=n}return t.prototype._handleBoolValues=function(t){var e=t,r=Object.keys(e).reduce((function(t,r){var n=r;if("boolean"==typeof e[n]){var o=e[n];t[n]="true"===o.toString()?"true":"false"}return t}),{});return n(n({},t),r)},t.prototype._parseMessage=function(t){return t.body},t.prototype.parseDomainList=function(t){return t.body&&t.body.items?t.body.items.map((function(t){return new a.default(t)})):[]},t.prototype._parseDomain=function(t){return new a.default(t.body.domain,t.body.receiving_dns_records,t.body.sending_dns_records)},t.prototype._parseTrackingSettings=function(t){return t.body.tracking},t.prototype._parseTrackingUpdate=function(t){return t.body},t.prototype.list=function(t){var e=this;return this.request.get("/v3/domains",t).then((function(t){return e.parseDomainList(t)}))},t.prototype.get=function(t){var e=this;return this.request.get("/v3/domains/".concat(t)).then((function(t){return e._parseDomain(t)}))},t.prototype.create=function(t){var e=this,r=this._handleBoolValues(t);return this.request.postWithFD("/v3/domains",r).then((function(t){return e._parseDomain(t)}))},t.prototype.update=function(t,e){var r=this,n=this._handleBoolValues(e);return this.request.putWithFD("/v3/domains/".concat(t),n).then((function(t){return r._parseDomain(t)}))},t.prototype.verify=function(t){var e=this;return this.request.put("/v3/domains/".concat(t,"/verify")).then((function(t){return e._parseDomain(t)}))},t.prototype.destroy=function(t){var e=this;return this.request.delete("/v3/domains/".concat(t)).then((function(t){return e._parseMessage(t)}))},t.prototype.getConnection=function(t){return this.request.get("/v3/domains/".concat(t,"/connection")).then((function(t){return t})).then((function(t){return t.body.connection}))},t.prototype.updateConnection=function(t,e){return this.request.put("/v3/domains/".concat(t,"/connection"),e).then((function(t){return t})).then((function(t){return t.body}))},t.prototype.getTracking=function(t){return this.request.get((0,i.default)("/v3/domains",t,"tracking")).then(this._parseTrackingSettings)},t.prototype.updateTracking=function(t,e,r){var n=this;if("boolean"==typeof(null==r?void 0:r.active))throw new s.default({status:400,statusText:"Received boolean value for active property",body:{message:'Property "active" must contain string value.'}});return this.request.putWithFD((0,i.default)("/v3/domains",t,"tracking",e),r).then((function(t){return n._parseTrackingUpdate(t)}))},t.prototype.getIps=function(t){return this.request.get((0,i.default)("/v3/domains",t,"ips")).then((function(t){var e;return null===(e=null==t?void 0:t.body)||void 0===e?void 0:e.items}))},t.prototype.assignIp=function(t,e){return this.request.postWithFD((0,i.default)("/v3/domains",t,"ips"),{ip:e})},t.prototype.deleteIp=function(t,e){return this.request.delete((0,i.default)("/v3/domains",t,"ips",e))},t.prototype.linkIpPool=function(t,e){return this.request.postWithFD((0,i.default)("/v3/domains",t,"ips"),{pool_id:e})},t.prototype.unlinkIpPoll=function(t,e){var r="";if(e.pool_id&&e.ip)throw new s.default({status:400,statusText:"Too much data for replacement",body:{message:"Please specify either pool_id or ip (not both)"}});return e.pool_id?r="?pool_id=".concat(e.pool_id):e.ip&&(r="?ip=".concat(e.ip)),this.request.delete((0,i.default)("/v3/domains",t,"ips","ip_pool",r))},t.prototype.updateDKIMAuthority=function(t,e){return this.request.put("/v3/domains/".concat(t,"/dkim_authority"),{},{query:"self=".concat(e.self)}).then((function(t){return t})).then((function(t){return t.body}))},t.prototype.updateDKIMSelector=function(t,e){return this.request.put("/v3/domains/".concat(t,"/dkim_selector"),{},{query:"dkim_selector=".concat(e.dkimSelector)}).then((function(t){return t}))},t.prototype.updateWebPrefix=function(t,e){return this.request.put("/v3/domains/".concat(t,"/web_prefix"),{},{query:"web_prefix=".concat(e.webPrefix)}).then((function(t){return t}))},t}();e.default=u},254:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r(4078)),i=function(){function t(t){this.request=t,this.baseRoute="/v3/domains/"}return t.prototype._parseDomainCredentialsList=function(t){return{items:t.body.items,totalCount:t.body.total_count}},t.prototype._parseMessageResponse=function(t){return{status:t.status,message:t.body.message}},t.prototype._parseDeletedResponse=function(t){return{status:t.status,message:t.body.message,spec:t.body.spec}},t.prototype.list=function(t,e){var r=this;return this.request.get((0,o.default)(this.baseRoute,t,"/credentials"),e).then((function(t){return r._parseDomainCredentialsList(t)}))},t.prototype.create=function(t,e){var r=this;return this.request.postWithFD("".concat(this.baseRoute).concat(t,"/credentials"),e).then((function(t){return r._parseMessageResponse(t)}))},t.prototype.update=function(t,e,r){var n=this;return this.request.putWithFD("".concat(this.baseRoute).concat(t,"/credentials/").concat(e),r).then((function(t){return n._parseMessageResponse(t)}))},t.prototype.destroy=function(t,e){var r=this;return this.request.delete("".concat(this.baseRoute).concat(t,"/credentials/").concat(e)).then((function(t){return r._parseDeletedResponse(t)}))},t}();e.default=i},5160:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DomainTagStatistic=e.DomainTag=void 0;var c=u(r(4078)),l=u(r(3709)),f=function(t){this.tag=t.tag,this.description=t.description,this["first-seen"]=new Date(t["first-seen"]),this["last-seen"]=new Date(t["last-seen"])};e.DomainTag=f;var p=function(t){this.tag=t.body.tag,this.description=t.body.description,this.start=new Date(t.body.start),this.end=new Date(t.body.end),this.resolution=t.body.resolution,this.stats=t.body.stats.map((function(t){return i(i({},t),{time:new Date(t.time)})}))};e.DomainTagStatistic=p;var d=function(t){function e(e){var r=t.call(this,e)||this;return r.request=e,r.baseRoute="/v3/",r}return o(e,t),e.prototype.parseList=function(t){var e={};return e.items=t.body.items.map((function(t){return new f(t)})),e.pages=this.parsePageLinks(t,"?","tag"),e.status=t.status,e},e.prototype._parseTagStatistic=function(t){return new p(t)},e.prototype.list=function(t,e){return s(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.requestListWithPages((0,c.default)(this.baseRoute,t,"/tags"),e)]}))}))},e.prototype.get=function(t,e){return this.request.get((0,c.default)(this.baseRoute,t,"/tags",e)).then((function(t){return new f(t.body)}))},e.prototype.update=function(t,e,r){return this.request.put((0,c.default)(this.baseRoute,t,"/tags",e),r).then((function(t){return t.body}))},e.prototype.destroy=function(t,e){return this.request.delete("".concat(this.baseRoute).concat(t,"/tags/").concat(e)).then((function(t){return{message:t.body.message,status:t.status}}))},e.prototype.statistic=function(t,e,r){var n=this;return this.request.get((0,c.default)(this.baseRoute,t,"/tags",e,"stats"),r).then((function(t){return n._parseTagStatistic(t)}))},e.prototype.countries=function(t,e){return this.request.get((0,c.default)(this.baseRoute,t,"/tags",e,"stats/aggregates/countries")).then((function(t){return t.body}))},e.prototype.providers=function(t,e){return this.request.get((0,c.default)(this.baseRoute,t,"/tags",e,"stats/aggregates/providers")).then((function(t){return t.body}))},e.prototype.devices=function(t,e){return this.request.get((0,c.default)(this.baseRoute,t,"/tags",e,"stats/aggregates/devices")).then((function(t){return t.body}))},e}(l.default);e.default=d},6229:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DomainTemplateItem=void 0;var c=u(r(4078)),l=u(r(3709)),f=function(t){this.name=t.name,this.description=t.description,this.createdAt=t.createdAt?new Date(t.createdAt):"",this.createdBy=t.createdBy,this.id=t.id,t.version&&(this.version=t.version,t.version.createdAt&&(this.version.createdAt=new Date(t.version.createdAt))),t.versions&&t.versions.length&&(this.versions=t.versions.map((function(t){var e=i({},t);return e.createdAt=new Date(t.createdAt),e})))};e.DomainTemplateItem=f;var p=function(t){function e(e){var r=t.call(this,e)||this;return r.request=e,r.baseRoute="/v3/",r}return o(e,t),e.prototype.parseCreationResponse=function(t){return new f(t.body.template)},e.prototype.parseCreationVersionResponse=function(t){var e={};return e.status=t.status,e.message=t.body.message,t.body&&t.body.template&&(e.template=new f(t.body.template)),e},e.prototype.parseMutationResponse=function(t){var e={};return e.status=t.status,e.message=t.body.message,t.body&&t.body.template&&(e.templateName=t.body.template.name),e},e.prototype.parseNotificationResponse=function(t){var e={};return e.status=t.status,e.message=t.body.message,e},e.prototype.parseMutateTemplateVersionResponse=function(t){var e={};return e.status=t.status,e.message=t.body.message,t.body.template&&(e.templateName=t.body.template.name,e.templateVersion={tag:t.body.template.version.tag}),e},e.prototype.parseList=function(t){var e={};return e.items=t.body.items.map((function(t){return new f(t)})),e.pages=this.parsePageLinks(t,"?","p"),e.status=t.status,e},e.prototype.parseListTemplateVersions=function(t){var e={};return e.template=new f(t.body.template),e.pages=this.parsePageLinks(t,"?","p"),e},e.prototype.list=function(t,e){return s(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.requestListWithPages((0,c.default)(this.baseRoute,t,"/templates"),e)]}))}))},e.prototype.get=function(t,e,r){return this.request.get((0,c.default)(this.baseRoute,t,"/templates/",e),r).then((function(t){return new f(t.body.template)}))},e.prototype.create=function(t,e){var r=this;return this.request.postWithFD((0,c.default)(this.baseRoute,t,"/templates"),e).then((function(t){return r.parseCreationResponse(t)}))},e.prototype.update=function(t,e,r){var n=this;return this.request.putWithFD((0,c.default)(this.baseRoute,t,"/templates/",e),r).then((function(t){return n.parseMutationResponse(t)}))},e.prototype.destroy=function(t,e){var r=this;return this.request.delete((0,c.default)(this.baseRoute,t,"/templates/",e)).then((function(t){return r.parseMutationResponse(t)}))},e.prototype.destroyAll=function(t){var e=this;return this.request.delete((0,c.default)(this.baseRoute,t,"/templates")).then((function(t){return e.parseNotificationResponse(t)}))},e.prototype.createVersion=function(t,e,r){var n=this;return this.request.postWithFD((0,c.default)(this.baseRoute,t,"/templates/",e,"/versions"),r).then((function(t){return n.parseCreationVersionResponse(t)}))},e.prototype.getVersion=function(t,e,r){return this.request.get((0,c.default)(this.baseRoute,t,"/templates/",e,"/versions/",r)).then((function(t){return new f(t.body.template)}))},e.prototype.updateVersion=function(t,e,r,n){var o=this;return this.request.putWithFD((0,c.default)(this.baseRoute,t,"/templates/",e,"/versions/",r),n).then((function(t){return o.parseMutateTemplateVersionResponse(t)}))},e.prototype.destroyVersion=function(t,e,r){var n=this;return this.request.delete((0,c.default)(this.baseRoute,t,"/templates/",e,"/versions/",r)).then((function(t){return n.parseMutateTemplateVersionResponse(t)}))},e.prototype.listVersions=function(t,e,r){var n=this;return this.request.get((0,c.default)(this.baseRoute,t,"/templates",e,"/versions"),r).then((function(t){return n.parseListTemplateVersions(t)}))},e}(l.default);e.default=p},1691:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=a(r(4078)),c=function(t){function e(e){var r=t.call(this,e)||this;return r.request=e,r}return o(e,t),e.prototype.parseList=function(t){var e={};return e.items=t.body.items,e.pages=this.parsePageLinks(t,"/"),e.status=t.status,e},e.prototype.get=function(t,e){return i(this,void 0,void 0,(function(){return s(this,(function(r){return[2,this.requestListWithPages((0,u.default)("/v3",t,"events"),e)]}))}))},e}(a(r(3709)).default);e.default=c},7238:function(t,e){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.request=t}return t.prototype.list=function(){var t=this;return this.request.get("/v1/ip_pools").then((function(e){return t.parseIpPoolsResponse(e)}))},t.prototype.create=function(t){return n(this,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return[4,this.request.postWithFD("/v1/ip_pools",t)];case 1:return e=n.sent(),[2,r({status:e.status},e.body)]}}))}))},t.prototype.update=function(t,e){return n(this,void 0,void 0,(function(){var n;return o(this,(function(o){switch(o.label){case 0:return[4,this.request.patchWithFD("/v1/ip_pools/".concat(t),e)];case 1:return n=o.sent(),[2,r({status:n.status},n.body)]}}))}))},t.prototype.delete=function(t,e){return n(this,void 0,void 0,(function(){var n;return o(this,(function(o){switch(o.label){case 0:return[4,this.request.delete("/v1/ip_pools/".concat(t),e)];case 1:return n=o.sent(),[2,r({status:n.status},n.body)]}}))}))},t.prototype.parseIpPoolsResponse=function(t){return r({status:t.status},t.body)},t}();e.default=i},9874:function(t,e){"use strict";var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.request=t}return t.prototype.list=function(t){return r(this,void 0,void 0,(function(){var e;return n(this,(function(r){switch(r.label){case 0:return[4,this.request.get("/v3/ips",t)];case 1:return e=r.sent(),[2,this.parseIpsResponse(e)]}}))}))},t.prototype.get=function(t){return r(this,void 0,void 0,(function(){var e;return n(this,(function(r){switch(r.label){case 0:return[4,this.request.get("/v3/ips/".concat(t))];case 1:return e=r.sent(),[2,this.parseIpsResponse(e)]}}))}))},t.prototype.parseIpsResponse=function(t){return t.body},t}();e.default=o},5558:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(r(7028)),s=o(r(8127)),a=o(r(1691)),u=o(r(8165)),c=o(r(1481)),l=o(r(815)),f=o(r(2011)),p=o(r(7917)),d=o(r(5937)),h=o(r(9874)),y=o(r(7238)),b=o(r(507)),v=o(r(2382)),_=o(r(254)),g=o(r(2537)),m=o(r(6229)),w=o(r(5160)),O=function(t,e){var r=n({},t);if(r.url||(r.url="https://api.mailgun.net"),!r.username)throw new Error('Parameter "username" is required');if(!r.key)throw new Error('Parameter "key" is required');this.request=new i.default(r,e);var o=new v.default(this.request),O=new _.default(this.request),j=new m.default(this.request),P=new w.default(this.request),S=new g.default(this.request);this.domains=new s.default(this.request,O,j,P),this.webhooks=new l.default(this.request),this.events=new a.default(this.request),this.stats=new u.default(this.request),this.suppressions=new c.default(this.request),this.messages=new f.default(this.request),this.routes=new p.default(this.request),this.ips=new h.default(this.request),this.ip_pools=new y.default(this.request),this.lists=new b.default(this.request,o),this.validate=new d.default(this.request,S)};e.default=O},2382:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(e){var r=t.call(this,e)||this;return r.request=e,r.baseRoute="/v3/lists",r}return o(e,t),e.prototype.checkAndUpdateData=function(t){var e=i({},t);return"object"==typeof t.vars&&(e.vars=JSON.stringify(e.vars)),"boolean"==typeof t.subscribed&&(e.subscribed=t.subscribed?"yes":"no"),e},e.prototype.parseList=function(t){var e={};return e.items=t.body.items,e.pages=this.parsePageLinks(t,"?","address"),e},e.prototype.listMembers=function(t,e){return s(this,void 0,void 0,(function(){return a(this,(function(r){return[2,this.requestListWithPages("".concat(this.baseRoute,"/").concat(t,"/members/pages"),e)]}))}))},e.prototype.getMember=function(t,e){return this.request.get("".concat(this.baseRoute,"/").concat(t,"/members/").concat(e)).then((function(t){return t.body.member}))},e.prototype.createMember=function(t,e){var r=this.checkAndUpdateData(e);return this.request.postWithFD("".concat(this.baseRoute,"/").concat(t,"/members"),r).then((function(t){return t.body.member}))},e.prototype.createMembers=function(t,e){var r={members:Array.isArray(e.members)?JSON.stringify(e.members):e.members,upsert:e.upsert};return this.request.postWithFD("".concat(this.baseRoute,"/").concat(t,"/members.json"),r).then((function(t){return t.body}))},e.prototype.updateMember=function(t,e,r){var n=this.checkAndUpdateData(r);return this.request.putWithFD("".concat(this.baseRoute,"/").concat(t,"/members/").concat(e),n).then((function(t){return t.body.member}))},e.prototype.destroyMember=function(t,e){return this.request.delete("".concat(this.baseRoute,"/").concat(t,"/members/").concat(e)).then((function(t){return t.body}))},e}(u(r(3709)).default);e.default=c},507:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(e,r){var n=t.call(this,e)||this;return n.request=e,n.baseRoute="/v3/lists",n.members=r,n}return o(e,t),e.prototype.parseValidationResult=function(t,e){return{status:t,validationResult:i(i({},e),{created_at:new Date(1e3*e.created_at)})}},e.prototype.parseList=function(t){var e={};return e.items=t.body.items,e.pages=this.parsePageLinks(t,"?","address"),e.status=t.status,e},e.prototype.list=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.requestListWithPages("".concat(this.baseRoute,"/pages"),t)]}))}))},e.prototype.get=function(t){return this.request.get("".concat(this.baseRoute,"/").concat(t)).then((function(t){return t.body.list}))},e.prototype.create=function(t){return this.request.postWithFD(this.baseRoute,t).then((function(t){return t.body.list}))},e.prototype.update=function(t,e){return this.request.putWithFD("".concat(this.baseRoute,"/").concat(t),e).then((function(t){return t.body.list}))},e.prototype.destroy=function(t){return this.request.delete("".concat(this.baseRoute,"/").concat(t)).then((function(t){return t.body}))},e.prototype.validate=function(t){return this.request.post("".concat(this.baseRoute,"/").concat(t,"/validate"),{}).then((function(t){return i({status:t.status},t.body)}))},e.prototype.validationResult=function(t){var e=this;return this.request.get("".concat(this.baseRoute,"/").concat(t,"/validate")).then((function(t){return e.parseValidationResult(t.status,t.body)}))},e.prototype.cancelValidation=function(t){return this.request.delete("".concat(this.baseRoute,"/").concat(t,"/validate")).then((function(t){return{status:t.status,message:t.body.message}}))},e}(u(r(3709)).default);e.default=c},2011:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(r(3757)),s=function(){function t(t){this.request=t}return t.prototype.prepareBooleanValues=function(t){var e=new Set(["o:testmode","t:text","o:dkim","o:tracking","o:tracking-clicks","o:tracking-opens","o:require-tls","o:skip-verification"]);if(!t||0===Object.keys(t).length)throw new i.default({status:400,message:"Message data object can not be empty"});return Object.keys(t).reduce((function(r,n){return e.has(n)&&"boolean"==typeof t[n]?r[n]=t[n]?"yes":"no":r[n]=t[n],r}),{})},t.prototype._parseResponse=function(t){return n({status:t.status},t.body)},t.prototype.create=function(t,e){if(e.message)return this.request.postWithFD("/v3/".concat(t,"/messages.mime"),e).then(this._parseResponse);var r=this.prepareBooleanValues(e);return this.request.postWithFD("/v3/".concat(t,"/messages"),r).then(this._parseResponse)},t}();e.default=s},7917:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.request=t}return t.prototype.list=function(t){return this.request.get("/v3/routes",t).then((function(t){return t.body.items}))},t.prototype.get=function(t){return this.request.get("/v3/routes/".concat(t)).then((function(t){return t.body.route}))},t.prototype.create=function(t){return this.request.postWithFD("/v3/routes",t).then((function(t){return t.body.route}))},t.prototype.update=function(t,e){return this.request.putWithFD("/v3/routes/".concat(t),e).then((function(t){return t.body}))},t.prototype.destroy=function(t){return this.request.delete("/v3/routes/".concat(t)).then((function(t){return t.body}))},t}();e.default=r},8165:function(t,e,r){"use strict";var n=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(r(4078)),s=o(r(7669)),a=function(){function t(t,e){void 0===e&&(e=console),this.request=t,this.logger=e}return t.prototype.convertDateToUTC=function(t,e){return this.logger.warn('Date:"'.concat(e,'" was auto-converted to UTC time zone.\nValue "').concat(e.toUTCString(),'" will be used for request.\nConsider using sting type for property "').concat(t,'" to avoid auto-converting')),[t,e.toUTCString()]},t.prototype.prepareSearchParams=function(t){var e=this,r=[];return"object"==typeof t&&Object.keys(t).length&&(r=Object.entries(t).reduce((function(t,r){var o=r[0],i=r[1];if(Array.isArray(i)&&i.length){var s=i.map((function(t){return[o,t]}));return n(n([],t,!0),s,!0)}return i instanceof Date?(t.push(e.convertDateToUTC(o,i)),t):("string"==typeof i&&t.push([o,i]),t)}),[])),r},t.prototype.parseStats=function(t){return new s.default(t.body)},t.prototype.getDomain=function(t,e){var r=this.prepareSearchParams(e);return this.request.get((0,i.default)("/v3",t,"stats/total"),r).then(this.parseStats)},t.prototype.getAccount=function(t){var e=this.prepareSearchParams(t);return this.request.get("/v3/stats/total",e).then(this.parseStats)},t}();e.default=a},7669:function(t,e){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){this.start=new Date(t.start),this.end=new Date(t.end),this.resolution=t.resolution,this.stats=t.stats.map((function(t){var e=r({},t);return e.time=new Date(t.time),e}))};e.default=n},7002:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(8089),a=function(t){function e(e){var r=t.call(this,s.SuppressionModels.BOUNCES)||this;return r.address=e.address,r.code=+e.code,r.error=e.error,r.created_at=new Date(e.created_at),r}return o(e,t),e}(i(r(9013)).default);e.default=a},9601:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(8089),a=function(t){function e(e){var r=t.call(this,s.SuppressionModels.COMPLAINTS)||this;return r.address=e.address,r.created_at=new Date(e.created_at),r}return o(e,t),e}(i(r(9013)).default);e.default=a},9013:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){this.type=t};e.default=r},1481:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},a=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(r(4078)),l=u(r(3757)),f=u(r(3709)),p=u(r(7002)),d=u(r(9601)),h=u(r(8093)),y=u(r(4804)),b={headers:{"Content-Type":"application/json"}},v=function(t){function e(e){var r=t.call(this,e)||this;return r.request=e,r.models={bounces:p.default,complaints:d.default,unsubscribes:h.default,whitelists:y.default},r}return o(e,t),e.prototype.parseList=function(t,e){var r,n={};return n.items=(null===(r=t.body.items)||void 0===r?void 0:r.map((function(t){return new e(t)})))||[],n.pages=this.parsePageLinks(t,"?","address"),n.status=t.status,n},e.prototype._parseItem=function(t,e){return new e(t)},e.prototype.createWhiteList=function(t,e,r){if(r)throw new l.default({status:400,statusText:"Data property should be an object",body:{message:"Whitelist's creation process does not support multiple creations. Data property should be an object"}});return this.request.postWithFD((0,c.default)("v3",t,"whitelists"),e).then(this.prepareResponse)},e.prototype.createUnsubscribe=function(t,e){if(Array.isArray(e)){if(e.some((function(t){return t.tag})))throw new l.default({status:400,statusText:"Tag property should not be used for creating multiple unsubscribes.",body:{message:"Tag property can be used only if one unsubscribe provided as second argument of create method. Please use tags instead."}});return this.request.post((0,c.default)("v3",t,"unsubscribes"),JSON.stringify(e),b).then(this.prepareResponse)}if(null==e?void 0:e.tags)throw new l.default({status:400,statusText:"Tags property should not be used for creating one unsubscribe.",body:{message:"Tags property can be used if you provides an array of unsubscribes as second argument of create method. Please use tag instead"}});if(Array.isArray(e.tag))throw new l.default({status:400,statusText:"Tag property can not be an array",body:{message:"Please use array of unsubscribes as second argument of create method to be able to provide few tags"}});return this.request.postWithFD((0,c.default)("v3",t,"unsubscribes"),e).then(this.prepareResponse)},e.prototype.getModel=function(t){if(t in this.models)return this.models[t];throw new l.default({status:400,statusText:"Unknown type value",body:{message:"Type may be only one of [bounces, complaints, unsubscribes, whitelists]"}})},e.prototype.prepareResponse=function(t){return{message:t.body.message,type:t.body.type||"",value:t.body.value||"",status:t.status}},e.prototype.list=function(t,e,r){return i(this,void 0,void 0,(function(){var n;return s(this,(function(o){return n=this.getModel(e),[2,this.requestListWithPages((0,c.default)("v3",t,e),r,n)]}))}))},e.prototype.get=function(t,e,r){var n=this,o=this.getModel(e);return this.request.get((0,c.default)("v3",t,e,encodeURIComponent(r))).then((function(t){return n._parseItem(t.body,o)}))},e.prototype.create=function(t,e,r){var n;this.getModel(e);var o=Array.isArray(r);return"whitelists"===e?this.createWhiteList(t,r,o):"unsubscribes"===e?this.createUnsubscribe(t,r):(n=o?a([],r,!0):[r],this.request.post((0,c.default)("v3",t,e),JSON.stringify(n),b).then(this.prepareResponse))},e.prototype.destroy=function(t,e,r){return this.getModel(e),this.request.delete((0,c.default)("v3",t,e,encodeURIComponent(r))).then((function(t){return{message:t.body.message,value:t.body.value||"",address:t.body.address||"",status:t.status}}))},e}(f.default);e.default=v,t.exports=v},8093:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(8089),a=function(t){function e(e){var r=t.call(this,s.SuppressionModels.UNSUBSCRIBES)||this;return r.address=e.address,r.tags=e.tags,r.created_at=new Date(e.created_at),r}return o(e,t),e}(i(r(9013)).default);e.default=a},4804:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(8089),a=function(t){function e(e){var r=t.call(this,s.SuppressionModels.WHITELISTS)||this;return r.value=e.value,r.reason=e.reason,r.createdAt=new Date(e.createdAt),r}return o(e,t),e}(i(r(9013)).default);e.default=a},2537:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MultipleValidationJob=void 0;var c=u(r(3709)),l=function(t,e){var r,n;this.createdAt=new Date(t.created_at),this.id=t.id,this.quantity=t.quantity,this.recordsProcessed=t.records_processed,this.status=t.status,this.responseStatusCode=e,t.download_url&&(this.downloadUrl={csv:null===(r=t.download_url)||void 0===r?void 0:r.csv,json:null===(n=t.download_url)||void 0===n?void 0:n.json}),t.summary&&(this.summary={result:{catchAll:t.summary.result.catch_all,deliverable:t.summary.result.deliverable,doNotSend:t.summary.result.do_not_send,undeliverable:t.summary.result.undeliverable,unknown:t.summary.result.unknown},risk:{high:t.summary.risk.high,low:t.summary.risk.low,medium:t.summary.risk.medium,unknown:t.summary.risk.unknown}})};e.MultipleValidationJob=l;var f=function(t){function e(e){var r=t.call(this)||this;return r.request=e,r}return o(e,t),e.prototype.handleResponse=function(t){return i({status:t.status},null==t?void 0:t.body)},e.prototype.parseList=function(t){var e={};return e.jobs=t.body.jobs.map((function(e){return new l(e,t.status)})),e.pages=this.parsePageLinks(t,"?","pivot"),e.total=t.body.total,e.status=t.status,e},e.prototype.list=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.requestListWithPages("/v4/address/validate/bulk",t)]}))}))},e.prototype.get=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:return[4,this.request.get("/v4/address/validate/bulk/".concat(t))];case 1:return e=r.sent(),[2,new l(e.body,e.status)]}}))}))},e.prototype.create=function(t,e){return s(this,void 0,void 0,(function(){var r,n;return a(this,(function(o){switch(o.label){case 0:return delete(r=i({multipleValidationFile:i({},null==e?void 0:e.file)},e)).file,[4,this.request.postWithFD("/v4/address/validate/bulk/".concat(t),r)];case 1:return n=o.sent(),[2,this.handleResponse(n)]}}))}))},e.prototype.destroy=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:return[4,this.request.delete("/v4/address/validate/bulk/".concat(t))];case 1:return e=r.sent(),[2,this.handleResponse(e)]}}))}))},e}(c.default);e.default=f},5937:function(t,e){"use strict";var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){this.request=t,this.multipleValidation=e}return t.prototype.get=function(t){return r(this,void 0,void 0,(function(){var e;return n(this,(function(r){switch(r.label){case 0:return e={address:t},[4,this.request.get("/v4/address/validate",e)];case 1:return[2,r.sent().body]}}))}))},t}();e.default=o},815:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Webhook=void 0;var o=n(r(4078)),i=function(t,e,r){this.id=t,this.url=e,this.urls=r};e.Webhook=i;var s=function(){function t(t){this.request=t}return t.prototype._parseWebhookList=function(t){return t.body.webhooks},t.prototype._parseWebhookWithID=function(t){return function(e){var r,n=null===(r=null==e?void 0:e.body)||void 0===r?void 0:r.webhook,o=null==n?void 0:n.url,s=null==n?void 0:n.urls;return o||(o=s&&s.length?s[0]:void 0),s&&0!==s.length||!o||(s=[o]),new i(t,o,s)}},t.prototype._parseWebhookTest=function(t){return{code:t.body.code,message:t.body.message}},t.prototype.list=function(t,e){return this.request.get((0,o.default)("/v3/domains",t,"webhooks"),e).then(this._parseWebhookList)},t.prototype.get=function(t,e){return this.request.get((0,o.default)("/v3/domains",t,"webhooks",e)).then(this._parseWebhookWithID(e))},t.prototype.create=function(t,e,r,n){return void 0===n&&(n=!1),n?this.request.putWithFD((0,o.default)("/v3/domains",t,"webhooks",e,"test"),{url:r}).then(this._parseWebhookTest):this.request.postWithFD((0,o.default)("/v3/domains",t,"webhooks"),{id:e,url:r}).then(this._parseWebhookWithID(e))},t.prototype.update=function(t,e,r){return this.request.putWithFD((0,o.default)("/v3/domains",t,"webhooks",e),{url:r}).then(this._parseWebhookWithID(e))},t.prototype.destroy=function(t,e){return this.request.delete((0,o.default)("/v3/domains",t,"webhooks",e)).then(this._parseWebhookWithID(e))},t}();e.default=s},3757:function(t,e){"use strict";var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e){var r=e.status,n=e.statusText,o=e.message,i=e.body,s=void 0===i?{}:i,a=this,u="",c="";return"string"==typeof s?u=s:(u=(null==s?void 0:s.message)||"",c=(null==s?void 0:s.error)||""),(a=t.call(this)||this).stack="",a.status=r,a.message=o||c||n||"",a.details=u,a.type="MailgunAPIError",a}return n(e,t),e}(Error);e.default=o},9465:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(r(3757)),s=function(){function t(t){this.FormDataConstructor=t}return t.prototype.createFormData=function(t){var e=this;if(!t)throw new Error("Please provide data object");return Object.keys(t).filter((function(e){return t[e]})).reduce((function(r,n){return["attachment","inline","multipleValidationFile"].includes(n)?(e.addFilesToFD(n,t[n],r),r):"message"===n?(e.addMimeDataToFD(n,t[n],r),r):(e.addCommonPropertyToFD(n,t[n],r),r)}),new this.FormDataConstructor)},t.prototype.isFormDataPackage=function(t){return void 0!==t.getHeaders},t.prototype.getAttachmentOptions=function(t){if("object"!=typeof t||this.isStream(t))return{};var e=t.filename,r=t.contentType,o=t.knownLength;return n(n(n({},e?{filename:e}:{filename:"file"}),r&&{contentType:r}),o&&{knownLength:o})},t.prototype.addMimeDataToFD=function(t,e,r){if("string"!=typeof e){if(!this.isFormDataPackage(r)){if(void 0!==typeof Blob){var n=r;if(e instanceof Blob)return void n.append(t,e,"MimeMessage");if("undefined"!=typeof Buffer&&Buffer.isBuffer(e)){var o=new Blob([e]);return void n.append(t,o,"MimeMessage")}}throw new i.default({status:400,statusText:"Unknown data type for ".concat(t," property"),body:"The mime data should have type of Buffer, String or Blob"})}r.append(t,e,{filename:"MimeMessage"})}else r.append(t,e)},t.prototype.addFilesToFD=function(t,e,r){var n=this,o=function(t,e,o){var i="multipleValidationFile"===t?"file":t,s=n.isStream(e)?e:e.data,a=n.getAttachmentOptions(e);if("string"!=typeof s){if(n.isFormDataPackage(o))o.append(i,s,a);else if(void 0!==typeof Blob){var u=r;if(s instanceof Blob)return void u.append(i,s,a.filename);if("undefined"!=typeof Buffer&&Buffer.isBuffer(s)){var c=new Blob([s]);u.append(i,c,a.filename)}}}else o.append(i,s)};Array.isArray(e)?e.forEach((function(e){o(t,e,r)})):o(t,e,r)},t.prototype.isStream=function(t){return"object"==typeof t&&"function"==typeof t.pipe},t.prototype.addCommonPropertyToFD=function(t,e,r){Array.isArray(e)?e.forEach((function(e){r.append(t,e)})):null!=e&&r.append(t,e)},t}();e.default=s},3709:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=s(r(4078)),u=s(r(3757)),c=function(){function t(t){t&&(this.request=t)}return t.prototype.parsePage=function(t,e,r,n){var o=new URL(e).searchParams,i=e&&"string"==typeof e&&e.split(r).pop()||"",s=null;return n&&(s=o.has(n)?o.get(n):void 0),{id:t,page:"?"===r?"?".concat(i):i,iteratorPosition:s,url:e}},t.prototype.parsePageLinks=function(t,e,r){var n=this;return Object.entries(t.body.paging).reduce((function(t,o){var i=o[0],s=o[1];return t[i]=n.parsePage(i,s,e,r),t}),{})},t.prototype.updateUrlAndQuery=function(t,e){var r=t,o=n({},e);return o.page&&(r=(0,a.default)(t,o.page),delete o.page),{url:r,updatedQuery:o}},t.prototype.requestListWithPages=function(t,e,r){return o(this,void 0,void 0,(function(){var n,o,s,a;return i(this,(function(i){switch(i.label){case 0:return n=this.updateUrlAndQuery(t,e),o=n.url,s=n.updatedQuery,this.request?[4,this.request.get(o,s)]:[3,2];case 1:return a=i.sent(),[2,this.parseList(a,r)];case 2:throw new u.default({status:500,statusText:"Request property is empty",body:{message:""}})}}))}))},t}();e.default=c},7028:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&o(e,t,r);return i(e,t),e},a=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},u=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=s(r(7501)),f=c(r(4078)),p=s(r(7218)),d=c(r(3757)),h=c(r(9465)),y=function(){function t(t,e){this.username=t.username,this.key=t.key,this.url=t.url,this.timeout=t.timeout,this.headers=this.makeHeadersFromObject(t.headers),this.formDataBuilder=new h.default(e),this.maxBodyLength=52428800}return t.prototype.request=function(t,e,r){var o,i,s;return a(this,void 0,void 0,(function(){var a,c,l,h,y,b,v,_;return u(this,(function(u){switch(u.label){case 0:null==(a=n({},r))||delete a.headers,c=this.joinAndTransformHeaders(r),l=n({},a),(null==a?void 0:a.query)&&Object.getOwnPropertyNames(null==a?void 0:a.query).length>0&&(l.params=new URLSearchParams(a.query),delete l.query),(null==a?void 0:a.body)&&(h=null==a?void 0:a.body,l.data=h,delete l.body),b=(0,f.default)(this.url,e),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,p.default.request(n(n({method:t.toLocaleUpperCase(),timeout:this.timeout,url:b,headers:c},l),{maxBodyLength:this.maxBodyLength}))];case 2:return y=u.sent(),[3,4];case 3:throw v=u.sent(),_=v,new d.default({status:(null===(o=null==_?void 0:_.response)||void 0===o?void 0:o.status)||400,statusText:(null===(i=null==_?void 0:_.response)||void 0===i?void 0:i.statusText)||_.code,body:(null===(s=null==_?void 0:_.response)||void 0===s?void 0:s.data)||_.message});case 4:return[4,this.getResponseBody(y)];case 5:return[2,u.sent()]}}))}))},t.prototype.getResponseBody=function(t){return a(this,void 0,void 0,(function(){var e;return u(this,(function(r){if(e={body:{},status:null==t?void 0:t.status},"string"==typeof t.data){if("Mailgun Magnificent API"===t.data)throw new d.default({status:400,statusText:"Incorrect url",body:t.data});e.body={message:t.data}}else e.body=t.data;return[2,e]}))}))},t.prototype.joinAndTransformHeaders=function(t){var e=new p.AxiosHeaders,r=l.encode("".concat(this.username,":").concat(this.key));e.setAuthorization("Basic ".concat(r)),e.set(this.headers);var n=t&&t.headers,o=this.makeHeadersFromObject(n);return e.set(o),e},t.prototype.makeHeadersFromObject=function(t){void 0===t&&(t={});var e=new p.AxiosHeaders;return e=Object.entries(t).reduce((function(t,e){var r=e[0],n=e[1];return t.set(r,n),t}),e)},t.prototype.query=function(t,e,r,o){return this.request(t,e,n({query:r},o))},t.prototype.command=function(t,e,r,o,i){void 0===i&&(i=!0);var s={};i&&(s={"Content-Type":"application/x-www-form-urlencoded"});var a=n(n(n({},s),{body:r}),o);return this.request(t,e,a)},t.prototype.get=function(t,e,r){return this.query("get",t,e,r)},t.prototype.post=function(t,e,r){return this.command("post",t,e,r)},t.prototype.postWithFD=function(t,e){var r=this.formDataBuilder.createFormData(e);return this.command("post",t,r,{headers:{"Content-Type":"multipart/form-data"}},!1)},t.prototype.putWithFD=function(t,e){var r=this.formDataBuilder.createFormData(e);return this.command("put",t,r,{headers:{"Content-Type":"multipart/form-data"}},!1)},t.prototype.patchWithFD=function(t,e){var r=this.formDataBuilder.createFormData(e);return this.command("patch",t,r,{headers:{"Content-Type":"multipart/form-data"}},!1)},t.prototype.put=function(t,e,r){return this.command("put",t,e,r)},t.prototype.delete=function(t,e){return this.command("delete",t,e)},t}();e.default=y},8089:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.YesNo=e.WebhooksIds=e.SuppressionModels=e.Resolution=void 0,function(t){t.HOUR="hour",t.DAY="day",t.MONTH="month"}(e.Resolution||(e.Resolution={})),function(t){t.BOUNCES="bounces",t.COMPLAINTS="complaints",t.UNSUBSCRIBES="unsubscribes",t.WHITELISTS="whitelists"}(e.SuppressionModels||(e.SuppressionModels={})),function(t){t.CLICKED="clicked",t.COMPLAINED="complained",t.DELIVERED="delivered",t.OPENED="opened",t.PERMANENT_FAIL="permanent_fail",t.TEMPORARY_FAIL="temporary_fail",t.UNSUBSCRIBED="unsubscribe"}(e.WebhooksIds||(e.WebhooksIds={})),function(t){t.YES="yes",t.NO="no"}(e.YesNo||(e.YesNo={}))},7471:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},466:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(7471),e)},7647:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},7546:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},1358:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2236:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},9483:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(7647),e),o(r(7546),e),o(r(1358),e),o(r(2236),e)},4251:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},896:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(4251),e)},9798:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},188:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(9798),e)},7677:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2685:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(7677),e)},7913:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},1094:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(7913),e)},3446:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},1225:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2570:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(3446),e),o(r(1225),e)},7104:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4005:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(7104),e)},6115:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},848:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(6115),e)},4012:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},1574:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},9923:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(4012),e),o(r(1574),e)},5129:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},157:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2818:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},504:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},3740:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2043:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(5129),e),o(r(157),e),o(r(504),e),o(r(3740),e),o(r(2818),e)},6233:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4826:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},7272:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(6233),e),o(r(4826),e)},1034:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2955:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(1034),e)},799:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(466),e),o(r(9483),e),o(r(1094),e),o(r(2570),e),o(r(9923),e),o(r(2043),e),o(r(7272),e),o(r(896),e),o(r(2955),e),o(r(4005),e),o(r(848),e),o(r(2685),e),o(r(188),e)},4859:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},7843:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2755:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4994:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},643:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4886:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(7843),e),o(r(4859),e),o(r(2755),e),o(r(4994),e),o(r(643),e)},8011:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},1409:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},3627:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},970:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2179:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},9543:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(8011),e),o(r(2179),e),o(r(1409),e),o(r(3627),e),o(r(970),e)},8483:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4385:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(8483),e)},3097:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},720:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(3097),e)},2409:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},5986:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(2409),e)},7666:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4553:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(7666),e)},5560:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},5810:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},9977:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(5560),e),o(r(5810),e)},9348:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},7313:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(9348),e)},9006:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},5006:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(9006),e)},2144:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4744:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(2144),e)},8275:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},5451:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},7935:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4205:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},4312:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2267:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(8275),e),o(r(5451),e),o(r(7935),e),o(r(4205),e),o(r(4312),e)},4090:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},202:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},7587:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(4090),e),o(r(202),e)},771:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},8042:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(771),e)},8615:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(4886),e),o(r(9543),e),o(r(4385),e),o(r(720),e),o(r(5986),e),o(r(4553),e),o(r(9977),e),o(r(7313),e),o(r(5006),e),o(r(4744),e),o(r(2267),e),o(r(7587),e),o(r(8042),e)},7530:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e},s=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Interfaces=e.Enums=void 0;var u=a(r(5558));e.Enums=i(r(8089)),s(r(8615),e),e.Interfaces=i(r(799));var c=function(){function t(t){this.formData=t}return Object.defineProperty(t,"default",{get:function(){return this},enumerable:!1,configurable:!0}),t.prototype.client=function(t){return new u.default(t,this.formData)},t}();e.default=c},7501:function(t,e,r){var n;t=r.nmd(t),function(o){var i=e,s=(t&&t.exports,"object"==typeof r.g&&r.g);s.global!==s&&s.window;var a=function(t){this.message=t};(a.prototype=new Error).name="InvalidCharacterError";var u=function(t){throw new a(t)},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=/[\t\n\f\r ]/g,f={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&u("The string to be encoded contains characters outside of the Latin1 range.");for(var e,r,n,o,i=t.length%3,s="",a=-1,l=t.length-i;++a<l;)e=t.charCodeAt(a)<<16,r=t.charCodeAt(++a)<<8,n=t.charCodeAt(++a),s+=c.charAt((o=e+r+n)>>18&63)+c.charAt(o>>12&63)+c.charAt(o>>6&63)+c.charAt(63&o);return 2==i?(e=t.charCodeAt(a)<<8,r=t.charCodeAt(++a),s+=c.charAt((o=e+r)>>10)+c.charAt(o>>4&63)+c.charAt(o<<2&63)+"="):1==i&&(o=t.charCodeAt(a),s+=c.charAt(o>>2)+c.charAt(o<<4&63)+"=="),s},decode:function(t){var e=(t=String(t).replace(l,"")).length;e%4==0&&(e=(t=t.replace(/==?$/,"")).length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&u("Invalid character: the string to be decoded is not correctly encoded.");for(var r,n,o=0,i="",s=-1;++s<e;)n=c.indexOf(t.charAt(s)),r=o%4?64*r+n:n,o++%4&&(i+=String.fromCharCode(255&r>>(-2*o&6)));return i},version:"1.0.0"};void 0===(n=function(){return f}.call(e,r,e,t))||(t.exports=n)}()},4078:function(t,e,r){var n,o,i;i=function(){return function(){return function(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var r=t.shift();t[0]=r+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<t.length;n++){var o=t[n];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(n>0&&(o=o.replace(/^[\/]+/,"")),o=n<t.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),e.push(o))}var i=e.join("/"),s=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return s.shift()+(s.length>0?"?":"")+s.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=i():void 0===(o="function"==typeof(n=i)?n.call(e,r,e,t):n)||(t.exports=o)},7218:(t,e,r)=>{"use strict";function n(t,e){return function(){return t.apply(e,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:i}=Object,s=(a=Object.create(null),t=>{const e=o.call(t);return a[e]||(a[e]=e.slice(8,-1).toLowerCase())});var a;const u=t=>(t=t.toLowerCase(),e=>s(e)===t),c=t=>e=>typeof e===t,{isArray:l}=Array,f=c("undefined");const p=u("ArrayBuffer");const d=c("string"),h=c("function"),y=c("number"),b=t=>null!==t&&"object"==typeof t,v=t=>{if("object"!==s(t))return!1;const e=i(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},_=u("Date"),g=u("File"),m=u("Blob"),w=u("FileList"),O=u("URLSearchParams");function j(t,e,{allOwnKeys:r=!1}={}){if(null==t)return;let n,o;if("object"!=typeof t&&(t=[t]),l(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{const o=r?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let s;for(n=0;n<i;n++)s=o[n],e.call(null,t[s],s,t)}}function P(t,e){e=e.toLowerCase();const r=Object.keys(t);let n,o=r.length;for(;o-- >0;)if(n=r[o],e===n.toLowerCase())return n;return null}const S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:r.g,M=t=>!f(t)&&t!==S;const x=(D="undefined"!=typeof Uint8Array&&i(Uint8Array),t=>D&&t instanceof D);var D;const R=u("HTMLFormElement"),E=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),A=u("RegExp"),T=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),n={};j(r,((r,o)=>{!1!==e(r,o,t)&&(n[o]=r)})),Object.defineProperties(t,n)},k="abcdefghijklmnopqrstuvwxyz",q="0123456789",C={DIGIT:q,ALPHA:k,ALPHA_DIGIT:k+k.toUpperCase()+q};const B=u("AsyncFunction");var F={isArray:l,isArrayBuffer:p,isBuffer:function(t){return null!==t&&!f(t)&&null!==t.constructor&&!f(t.constructor)&&h(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||h(t.append)&&("formdata"===(e=s(t))||"object"===e&&h(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&p(t.buffer),e},isString:d,isNumber:y,isBoolean:t=>!0===t||!1===t,isObject:b,isPlainObject:v,isUndefined:f,isDate:_,isFile:g,isBlob:m,isRegExp:A,isFunction:h,isStream:t=>b(t)&&h(t.pipe),isURLSearchParams:O,isTypedArray:x,isFileList:w,forEach:j,merge:function t(){const{caseless:e}=M(this)&&this||{},r={},n=(n,o)=>{const i=e&&P(r,o)||o;v(r[i])&&v(n)?r[i]=t(r[i],n):v(n)?r[i]=t({},n):l(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&j(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:o}={})=>(j(e,((e,o)=>{r&&h(e)?t[o]=n(e,r):t[o]=e}),{allOwnKeys:o}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,s,a;const u={};if(e=e||{},null==t)return e;do{for(o=Object.getOwnPropertyNames(t),s=o.length;s-- >0;)a=o[s],n&&!n(a,t,e)||u[a]||(e[a]=t[a],u[a]=!0);t=!1!==r&&i(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},kindOf:s,kindOfTest:u,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;const n=t.indexOf(e,r);return-1!==n&&n===r},toArray:t=>{if(!t)return null;if(l(t))return t;let e=t.length;if(!y(e))return null;const r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let n;for(;(n=r.next())&&!n.done;){const r=n.value;e.call(t,r[0],r[1])}},matchAll:(t,e)=>{let r;const n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:R,hasOwnProperty:E,hasOwnProp:E,reduceDescriptors:T,freezeMethods:t=>{T(t,((e,r)=>{if(h(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=t[r];h(n)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(t,e)=>{const r={},n=t=>{t.forEach((t=>{r[t]=!0}))};return l(t)?n(t):n(String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,r){return e.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:P,global:S,isContextDefined:M,ALPHABET:C,generateString:(t=16,e=C.ALPHA_DIGIT)=>{let r="";const{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:function(t){return!!(t&&h(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),r=(t,n)=>{if(b(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;const o=l(t)?[]:{};return j(t,((t,e)=>{const i=r(t,n+1);!f(i)&&(o[e]=i)})),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:B,isThenable:t=>t&&(b(t)||h(t))&&h(t.then)&&h(t.catch)};function L(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}F.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const N=L.prototype,U={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{U[t]={value:t}})),Object.defineProperties(L,U),Object.defineProperty(N,"isAxiosError",{value:!0}),L.from=(t,e,r,n,o,i)=>{const s=Object.create(N);return F.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),L.call(s,t.message,e,r,n,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s};function W(t){return F.isPlainObject(t)||F.isArray(t)}function I(t){return F.endsWith(t,"[]")?t.slice(0,-2):t}function V(t,e,r){return t?t.concat(e).map((function(t,e){return t=I(t),!r&&e?"["+t+"]":t})).join(r?".":""):e}const H=F.toFlatObject(F,{},null,(function(t){return/^is[A-Z]/.test(t)}));function z(t,e,r){if(!F.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const n=(r=F.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!F.isUndefined(e[t])}))).metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&F.isSpecCompliantForm(e);if(!F.isFunction(o))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(F.isDate(t))return t.toISOString();if(!a&&F.isBlob(t))throw new L("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(t)||F.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function c(t,r,o){let a=t;if(t&&!o&&"object"==typeof t)if(F.endsWith(r,"{}"))r=n?r:r.slice(0,-2),t=JSON.stringify(t);else if(F.isArray(t)&&function(t){return F.isArray(t)&&!t.some(W)}(t)||(F.isFileList(t)||F.endsWith(r,"[]"))&&(a=F.toArray(t)))return r=I(r),a.forEach((function(t,n){!F.isUndefined(t)&&null!==t&&e.append(!0===s?V([r],n,i):null===s?r:r+"[]",u(t))})),!1;return!!W(t)||(e.append(V(o,r,i),u(t)),!1)}const l=[],f=Object.assign(H,{defaultVisitor:c,convertValue:u,isVisitable:W});if(!F.isObject(t))throw new TypeError("data must be an object");return function t(r,n){if(!F.isUndefined(r)){if(-1!==l.indexOf(r))throw Error("Circular reference detected in "+n.join("."));l.push(r),F.forEach(r,(function(r,i){!0===(!(F.isUndefined(r)||null===r)&&o.call(e,r,F.isString(i)?i.trim():i,n,f))&&t(r,n?n.concat(i):[i])})),l.pop()}}(t),e}function J(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function G(t,e){this._pairs=[],t&&z(t,this,e)}const K=G.prototype;function $(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Q(t,e,r){if(!e)return t;const n=r&&r.encode||$,o=r&&r.serialize;let i;if(i=o?o(e,r):F.isURLSearchParams(e)?e.toString():new G(e,r).toString(n),i){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}K.append=function(t,e){this._pairs.push([t,e])},K.toString=function(t){const e=t?function(e){return t.call(this,e,J)}:J;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Y=class InterceptorManager{constructor(){this.handlers=[]}use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){F.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},X={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Z={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:G,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function tt(t){function e(t,r,n,o){let i=t[o++];const s=Number.isFinite(+i),a=o>=t.length;if(i=!i&&F.isArray(n)?n.length:i,a)return F.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&F.isObject(n[i])||(n[i]=[]);return e(t,r,n[i],o)&&F.isArray(n[i])&&(n[i]=function(t){const e={},r=Object.keys(t);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],e[i]=t[i];return e}(n[i])),!s}if(F.isFormData(t)&&F.isFunction(t.entries)){const r={};return F.forEachEntry(t,((t,n)=>{e(function(t){return F.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),n,r,0)})),r}return null}const et={"Content-Type":void 0};const rt={transitional:X,adapter:["xhr","http"],transformRequest:[function(t,e){const r=e.getContentType()||"",n=r.indexOf("application/json")>-1,o=F.isObject(t);o&&F.isHTMLForm(t)&&(t=new FormData(t));if(F.isFormData(t))return n&&n?JSON.stringify(tt(t)):t;if(F.isArrayBuffer(t)||F.isBuffer(t)||F.isStream(t)||F.isFile(t)||F.isBlob(t))return t;if(F.isArrayBufferView(t))return t.buffer;if(F.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return z(t,new Z.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return Z.isNode&&F.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((i=F.isFileList(t))||r.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return z(i?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||n?(e.setContentType("application/json",!1),function(t,e,r){if(F.isString(t))try{return(e||JSON.parse)(t),F.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(r||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||rt.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&F.isString(t)&&(r&&!this.responseType||n)){const r=!(e&&e.silentJSONParsing)&&n;try{return JSON.parse(t)}catch(t){if(r){if("SyntaxError"===t.name)throw L.from(t,L.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Z.classes.FormData,Blob:Z.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};F.forEach(["delete","get","head"],(function(t){rt.headers[t]={}})),F.forEach(["post","put","patch"],(function(t){rt.headers[t]=F.merge(et)}));var nt=rt;const ot=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const it=Symbol("internals");function st(t){return t&&String(t).trim().toLowerCase()}function at(t){return!1===t||null==t?t:F.isArray(t)?t.map(at):String(t)}function ut(t,e,r,n,o){return F.isFunction(n)?n.call(this,e,r):(o&&(e=r),F.isString(e)?F.isString(n)?-1!==e.indexOf(n):F.isRegExp(n)?n.test(e):void 0:void 0)}class AxiosHeaders{constructor(t){t&&this.set(t)}set(t,e,r){const n=this;function o(t,e,r){const o=st(e);if(!o)throw new Error("header name must be a non-empty string");const i=F.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||e]=at(t))}const i=(t,e)=>F.forEach(t,((t,r)=>o(t,r,e)));return F.isPlainObject(t)||t instanceof this.constructor?i(t,e):F.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?i((t=>{const e={};let r,n,o;return t&&t.split("\n").forEach((function(t){o=t.indexOf(":"),r=t.substring(0,o).trim().toLowerCase(),n=t.substring(o+1).trim(),!r||e[r]&&ot[r]||("set-cookie"===r?e[r]?e[r].push(n):e[r]=[n]:e[r]=e[r]?e[r]+", "+n:n)})),e})(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=st(t)){const r=F.findKey(this,t);if(r){const t=this[r];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(t);)e[n[1]]=n[2];return e}(t);if(F.isFunction(e))return e.call(this,t,r);if(F.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=st(t)){const r=F.findKey(this,t);return!(!r||void 0===this[r]||e&&!ut(0,this[r],r,e))}return!1}delete(t,e){const r=this;let n=!1;function o(t){if(t=st(t)){const o=F.findKey(r,t);!o||e&&!ut(0,r[o],o,e)||(delete r[o],n=!0)}}return F.isArray(t)?t.forEach(o):o(t),n}clear(t){const e=Object.keys(this);let r=e.length,n=!1;for(;r--;){const o=e[r];t&&!ut(0,this[o],o,t,!0)||(delete this[o],n=!0)}return n}normalize(t){const e=this,r={};return F.forEach(this,((n,o)=>{const i=F.findKey(r,o);if(i)return e[i]=at(n),void delete e[o];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,r)=>e.toUpperCase()+r))}(o):String(o).trim();s!==o&&delete e[o],e[s]=at(n),r[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return F.forEach(this,((r,n)=>{null!=r&&!1!==r&&(e[n]=t&&F.isArray(r)?r.join(", "):r)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const r=new this(t);return e.forEach((t=>r.set(t))),r}static accessor(t){const e=(this[it]=this[it]={accessors:{}}).accessors,r=this.prototype;function n(t){const n=st(t);e[n]||(!function(t,e){const r=F.toCamelCase(" "+e);["get","set","has"].forEach((n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})}))}(r,t),e[n]=!0)}return F.isArray(t)?t.forEach(n):n(t),this}}AxiosHeaders.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),F.freezeMethods(AxiosHeaders.prototype),F.freezeMethods(AxiosHeaders);var ct=AxiosHeaders;function lt(t,e){const r=this||nt,n=e||r,o=ct.from(n.headers);let i=n.data;return F.forEach(t,(function(t){i=t.call(r,i,o.normalize(),e?e.status:void 0)})),o.normalize(),i}function ft(t){return!(!t||!t.__CANCEL__)}function pt(t,e,r){L.call(this,null==t?"canceled":t,L.ERR_CANCELED,e,r),this.name="CanceledError"}F.inherits(pt,L,{__CANCEL__:!0});var dt=Z.isStandardBrowserEnv?{write:function(t,e,r,n,o,i){const s=[];s.push(t+"="+encodeURIComponent(e)),F.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),F.isString(n)&&s.push("path="+n),F.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ht(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}var yt=Z.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let r;function n(r){let n=r;return t&&(e.setAttribute("href",n),n=e.href),e.setAttribute("href",n),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return r=n(window.location.href),function(t){const e=F.isString(t)?n(t):t;return e.protocol===r.protocol&&e.host===r.host}}():function(){return!0};function bt(t,e){let r=0;const n=function(t,e){t=t||10;const r=new Array(t),n=new Array(t);let o,i=0,s=0;return e=void 0!==e?e:1e3,function(a){const u=Date.now(),c=n[s];o||(o=u),r[i]=a,n[i]=u;let l=s,f=0;for(;l!==i;)f+=r[l++],l%=t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const p=c&&u-c;return p?Math.round(1e3*f/p):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,u=n(a);r=i;const c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&i<=s?(s-i)/u:void 0,event:o};c[e?"download":"upload"]=!0,t(c)}}const vt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,r){let n=t.data;const o=ct.from(t.headers).normalize(),i=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}F.isFormData(n)&&(Z.isStandardBrowserEnv||Z.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(e+":"+r))}const c=ht(t.baseURL,t.url);function l(){if(!u)return;const n=ct.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(t,e,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?e(new L("Request failed with status code "+r.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}((function(t){e(t),a()}),(function(t){r(t),a()}),{data:i&&"text"!==i&&"json"!==i?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:n,config:t,request:u}),u=null}if(u.open(t.method.toUpperCase(),Q(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout,"onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(l)},u.onabort=function(){u&&(r(new L("Request aborted",L.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new L("Network Error",L.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const n=t.transitional||X;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new L(e,n.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,t,u)),u=null},Z.isStandardBrowserEnv){const e=(t.withCredentials||yt(c))&&t.xsrfCookieName&&dt.read(t.xsrfCookieName);e&&o.set(t.xsrfHeaderName,e)}void 0===n&&o.setContentType(null),"setRequestHeader"in u&&F.forEach(o.toJSON(),(function(t,e){u.setRequestHeader(e,t)})),F.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),i&&"json"!==i&&(u.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&u.addEventListener("progress",bt(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",bt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{u&&(r(!e||e.type?new pt(null,t,u):e),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const f=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(c);f&&-1===Z.protocols.indexOf(f)?r(new L("Unsupported protocol "+f+":",L.ERR_BAD_REQUEST,t)):u.send(n||null)}))}};F.forEach(vt,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var _t=t=>{t=F.isArray(t)?t:[t];const{length:e}=t;let r,n;for(let o=0;o<e&&(r=t[o],!(n=F.isString(r)?vt[r.toLowerCase()]:r));o++);if(!n){if(!1===n)throw new L(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(F.hasOwnProp(vt,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`)}if(!F.isFunction(n))throw new TypeError("adapter is not a function");return n};function gt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new pt(null,t)}function mt(t){gt(t),t.headers=ct.from(t.headers),t.data=lt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return _t(t.adapter||nt.adapter)(t).then((function(e){return gt(t),e.data=lt.call(t,t.transformResponse,e),e.headers=ct.from(e.headers),e}),(function(e){return ft(e)||(gt(t),e&&e.response&&(e.response.data=lt.call(t,t.transformResponse,e.response),e.response.headers=ct.from(e.response.headers))),Promise.reject(e)}))}const wt=t=>t instanceof ct?t.toJSON():t;function Ot(t,e){e=e||{};const r={};function n(t,e,r){return F.isPlainObject(t)&&F.isPlainObject(e)?F.merge.call({caseless:r},t,e):F.isPlainObject(e)?F.merge({},e):F.isArray(e)?e.slice():e}function o(t,e,r){return F.isUndefined(e)?F.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}function i(t,e){if(!F.isUndefined(e))return n(void 0,e)}function s(t,e){return F.isUndefined(e)?F.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}function a(r,o,i){return i in e?n(r,o):i in t?n(void 0,r):void 0}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(wt(t),wt(e),!0)};return F.forEach(Object.keys(Object.assign({},t,e)),(function(n){const i=u[n]||o,s=i(t[n],e[n],n);F.isUndefined(s)&&i!==a||(r[n]=s)})),r}const jt="1.4.0",Pt={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Pt[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}}));const St={};Pt.transitional=function(t,e,r){function n(t,e){return"[Axios v1.4.0] Transitional option '"+t+"'"+e+(r?". "+r:"")}return(r,o,i)=>{if(!1===t)throw new L(n(o," has been removed"+(e?" in "+e:"")),L.ERR_DEPRECATED);return e&&!St[o]&&(St[o]=!0,console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,i)}};var Mt={assertOptions:function(t,e,r){if("object"!=typeof t)throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let o=n.length;for(;o-- >0;){const i=n[o],s=e[i];if(s){const e=t[i],r=void 0===e||s(e,i,t);if(!0!==r)throw new L("option "+i+" must be "+r,L.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new L("Unknown option "+i,L.ERR_BAD_OPTION)}},validators:Pt};const xt=Mt.validators;class Axios{constructor(t){this.defaults=t,this.interceptors={request:new Y,response:new Y}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Ot(this.defaults,e);const{transitional:r,paramsSerializer:n,headers:o}=e;let i;void 0!==r&&Mt.assertOptions(r,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),null!=n&&(F.isFunction(n)?e.paramsSerializer={serialize:n}:Mt.assertOptions(n,{encode:xt.function,serialize:xt.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),i=o&&F.merge(o.common,o[e.method]),i&&F.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete o[t]})),e.headers=ct.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const u=[];let c;this.interceptors.response.forEach((function(t){u.push(t.fulfilled,t.rejected)}));let l,f=0;if(!a){const t=[mt.bind(this),void 0];for(t.unshift.apply(t,s),t.push.apply(t,u),l=t.length,c=Promise.resolve(e);f<l;)c=c.then(t[f++],t[f++]);return c}l=s.length;let p=e;for(f=0;f<l;){const t=s[f++],e=s[f++];try{p=t(p)}catch(t){e.call(this,t);break}}try{c=mt.call(this,p)}catch(t){return Promise.reject(t)}for(f=0,l=u.length;f<l;)c=c.then(u[f++],u[f++]);return c}getUri(t){return Q(ht((t=Ot(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}F.forEach(["delete","get","head","options"],(function(t){Axios.prototype[t]=function(e,r){return this.request(Ot(r||{},{method:t,url:e,data:(r||{}).data}))}})),F.forEach(["post","put","patch"],(function(t){function e(e){return function(r,n,o){return this.request(Ot(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Axios.prototype[t]=e(),Axios.prototype[t+"Form"]=e(!0)}));var Dt=Axios;class CancelToken{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const r=this;this.promise.then((t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null})),this.promise.then=t=>{let e;const n=new Promise((t=>{r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t,n,o){r.reason||(r.reason=new pt(t,n,o),e(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new CancelToken((function(e){t=e})),cancel:t}}}var Rt=CancelToken;const Et={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Et).forEach((([t,e])=>{Et[e]=t}));var At=Et;const Tt=function t(e){const r=new Dt(e),o=n(Dt.prototype.request,r);return F.extend(o,Dt.prototype,r,{allOwnKeys:!0}),F.extend(o,r,null,{allOwnKeys:!0}),o.create=function(r){return t(Ot(e,r))},o}(nt);Tt.Axios=Dt,Tt.CanceledError=pt,Tt.CancelToken=Rt,Tt.isCancel=ft,Tt.VERSION=jt,Tt.toFormData=z,Tt.AxiosError=L,Tt.Cancel=Tt.CanceledError,Tt.all=function(t){return Promise.all(t)},Tt.spread=function(t){return function(e){return t.apply(null,e)}},Tt.isAxiosError=function(t){return F.isObject(t)&&!0===t.isAxiosError},Tt.mergeConfig=Ot,Tt.AxiosHeaders=ct,Tt.formToJSON=t=>tt(F.isHTMLForm(t)?new FormData(t):t),Tt.HttpStatusCode=At,Tt.default=Tt,t.exports=Tt}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}return r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r(7530)})()));

}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":5}],3:[function(require,module,exports){
console.log('loading... mailgun bundle');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const API_KEY = 'YOUR_API_KEY';
const DOMAIN = 'YOUR_DOMAIN_NAME';
const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

const name = document.querySelector('#name').value;
const phone = document.querySelector('#phone').value;
const email = document.querySelector('#email').value;
const text = document.querySelector('#note').value;

const messageData = {
    from: name+' <'+email+'>',
    to: 'rliechti@adobe.com.com',
    subject: 'Contact form 99brandparty: '+name,
    text: 'phone: '+phone+' text: '+text,
};

client.messages.create(DOMAIN, messageData)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });

console.log('loaded mailgun bundle');

},{"form-data":1,"mailgun.js":2}],4:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],5:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":4,"buffer":5,"ieee754":6}],6:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}]},{},[3]);
