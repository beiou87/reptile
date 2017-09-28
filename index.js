var osmosis = require('osmosis');
var Constants = require('./constants');

var list = [];
osmosis
  .get('http://wap.yunspace.com.cn/space/filter')
  //.paginate('#app + div')
  .then(function(ctx){
    console.log(ctx.document.querySelector("#app"));
  })
  .find('.form-content select[0]')
  .set({
    //场地类型
    type: 'option'
  })
  .data((listing) => {
    console.log(listing)
  })
  .then(function(ctx, item){
    if (!isEmpty(item)) { list.push(item); }
  })
  .log(console.log)
  .error(console.log)
  .debug(console.log);


/*
osmosis
  .get('www.craigslist.org/about/sites')
  .find('h1 + div a')
  .set('location')
  .follow('@href')
  .find('header + div + div li > a')
  .set('category')
  .follow('@href')
  .paginate('.totallink + a.button.next:first')
  .find('p > a')
  .follow('@href')
  .set({
      'title':        'section > h2',
      'description':  '#postingbody',
      'subcategory':  'div.breadbox > span[4]',
      'date':         'time@datetime',
      'latitude':     '#map@data-latitude',
      'longitude':    '#map@data-longitude',
      'images':       ['img@src']
  })
  .data(function(listing) {
      // do something with listing data
  })
  .log(console.log)
  .error(console.log)
  .debug(console.log);
*/
