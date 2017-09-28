var osmosis = require('osmosis');

osmosis
  .get('http://8.m.tuniu.com/msite/m')
  .find('.floor-block[2] ul li')
  .set({
    title: "a h3",
    imgSrc: "a img@src",
  })
  .then(function(ctx,item){
    console.log(item);
  })
  .log(console.log)
  .error(console.log)
  .debug(console.log);

