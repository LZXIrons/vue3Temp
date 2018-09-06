const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'index'
  })
});

router.get('/canvasBasics', async (ctx, next) => {
  await ctx.render('canvasBasics', {
    title: 'canvas基础'
  })
});
router.get('/canvasBasics2', async (ctx, next) => {
  await ctx.render('canvasBasics2', {
    title: 'canvas基础2'
  })
});

router.get('/string', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'POST,GET');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.body = 'koa2 string'
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
});

module.exports = router;
