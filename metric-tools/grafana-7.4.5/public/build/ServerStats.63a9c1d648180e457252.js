(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{Gw5z:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("t8hP");function a(e,t,n,r,a,o,s){try{var i=e[o](s),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}var o=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(r.getBackendSrv)().get("api/admin/stats");case 3:return t=e.sent,e.abrupt("return",[{name:"Total users",value:t.users},{name:"Total admins",value:t.admins},{name:"Total editors",value:t.editors},{name:"Total viewers",value:t.viewers},{name:"Active users (seen last 30 days)",value:t.activeUsers},{name:"Active admins (seen last 30 days)",value:t.activeAdmins},{name:"Active editors (seen last 30 days)",value:t.activeEditors},{name:"Active viewers (seen last 30 days)",value:t.activeViewers},{name:"Active sessions",value:t.activeSessions},{name:"Total dashboards",value:t.dashboards},{name:"Total orgs",value:t.orgs},{name:"Total playlists",value:t.playlists},{name:"Total snapshots",value:t.snapshots},{name:"Total dashboard tags",value:t.tags},{name:"Total starred dashboards",value:t.stars},{name:"Total alerts",value:t.alerts}]);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){a(s,r,o,i,u,"next",e)}function u(e){a(s,r,o,i,u,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}()},jmwA:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"ServerStats",(function(){return y}));var r=n("q1tI"),a=n.n(r),o=n("0cfB"),s=n("/MKj"),i=n("lzJ5"),u=n("Gw5z"),c=n("ZGyg");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n,r,a,o,s){try{var i=e[o](s),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=m(this,(e=d(t)).call.apply(e,[this].concat(a)))).state={stats:[],isLoading:!0},n}var n,r,o,s,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(s=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.props.getServerStats();case 3:t=e.sent,this.setState({stats:t,isLoading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=s.apply(e,t);function o(e){v(a,n,r,o,i,"next",e)}function i(e){v(a,n,r,o,i,"throw",e)}o(void 0)}))},function(){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.navModel,t=this.state,n=t.stats,r=t.isLoading;return a.a.createElement(c.a,{navModel:e},a.a.createElement(c.a.Contents,{isLoading:r},a.a.createElement("table",{className:"filter-table form-inline"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Value"))),a.a.createElement("tbody",null,n.map(b)))))}}])&&p(n.prototype,r),o&&p(n,o),t}(r.PureComponent);function b(e){return a.a.createElement("tr",{key:e.name},a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.value))}t.default=Object(o.hot)(e)(Object(s.connect)((function(e){return{navModel:Object(i.a)(e.navIndex,"server-stats"),getServerStats:u.a}}))(y))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=ServerStats.63a9c1d648180e457252.js.map