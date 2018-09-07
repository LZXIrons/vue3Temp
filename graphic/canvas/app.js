const Koa = require('koa'),
    app = new Koa(),
    views = require('koa-views'),
    json = require('koa-json'),
    onerror = require('koa-onerror'),
    bodyparser = require('koa-bodyparser'),
    logger = require('koa-logger'),
    index = require('./routes/index'),
    interface = require('./routes/interface');

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}));

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    const _pname=ctx.url;
    if(_pname.indexOf('/staticpage/')==0){
        const hname=_pname.match(/\/staticpage\/(.*).htm/);
        if(!hname || !hname[1]){
            await next();
        }else{
            await ctx.render(hname[1], {
                title: hname[1]
            });
        }
    }else{
        await next();
    }
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(interface.routes(), interface.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app;
