const osmosis = require('osmosis');
const CONST = require('../constants');
const Utils = require('../utils');

function run(){  
  const list = [];
  let totalPage = 0;
  //https://www.hotelgg.com/venue/m/
  osmosis
    .get(CONST.HOTELGG.URL)
    .paginate("#page_block a:last:contains(下一页)")
    .delay(1000 * 10)
    .then((ctx) => {
      totalPage = ctx.request.count;
    })
    .find('.hotel_list .info a')
    .delay(1000 * 3)
    .follow('@href')
    .delay(1000 * 10)
    .find('#hotel_detail_info')
    .set({
      title: 'h3:first',
      city: '.address .city',
      region: '.address .region',
      street: '.address .street',
      business_area: '.address .business_area',
      tags: ['.address .tags'],
    })
    .data(function(listing){
      list.push(listing);
      console.log('-----------》记录数量：', list.length);
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
    .done(() => {
      console.log('============结束============');
      console.log("记录数量：", list.length);
      console.log("统计页面数：", totalPage);
      Utils.WriteFile(`${CONST.HOTELGG.NAME}.json`,JSON.stringify(list));
    });
}

function run2(){
  const list = [];
  osmosis
    //3589 || 6194
    .get('https://www.hotelgg.com/view-6194.html')
    .find('#hotel_detail_info')
    .set({
      title: 'h3:first',
      city: '.address .city',
      region: '.address .region',
      street: '.address .street',
      business_area: '.address .business_area',
      tags: ['.address .tags'],
    })
    .then((ctx,item) => {
      list.push(item);
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
    .done(() => {
      console.log('============结束============');
      console.log(list, list.length);
      Utils.WriteFile(`${CONST.HOTELGG.NAME}.json`,JSON.stringify(list),null);
    });
}

run2();