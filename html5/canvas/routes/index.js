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

module.exports = router;
