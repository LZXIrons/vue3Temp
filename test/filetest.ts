/**
    文件操作是node.js里面非常重要的一系列API了，我们这里来说下一些常用的API，这里是基于node 14的版本，我们的示例代码也是在 v14.15.0 版本上运行通过了的
    node.js 里面文件、文件夹操作主要通过文件系统fs模块提供支持，fs模块支持以标准POSIX函数建模的方式与文件系统进行交互。 
所有文件系统操作都具有同步、回调和基于promise三种形式来执行，并且获得相应执行结果。
    下面大致说下这三种执行形式：
    一、同步
        说明：同步代码会阻塞node.js的事件循环和JavaScript的执行，知道文件操作完成返回结果，当然也可能是抛出异常，我们可以把文件操作放在try…catch块里面，通过catch来捕获这种异常，如果我们不通过try…catch捕获异常，那么他会继续向上层环境抛出。
            除了fs.FSWatcher()和那些显式同步的使用libuv的线程池的API，其他文件系统的API使用同步的方式可能会对程序性能产生很大不好的影响。
示例代码：
const fs = require('fs');
try {
  fs.unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}
    二、回调
    说明：
        1、回调方式调用方法时，将完成后的回调函数作为其最后一个参数，并异步调用该函数，不会阻塞node.js的事件循环和函数后面的JavaScript代码执行
        2、完成后的回调函数接收到的参数个数和参数数据取决于方法，但第一个参数始终是代表异常情况的数据，如果第一个参数为null或未定义则代表操作执行成功，否则代表操作执行异常。
示例代码：
const fs = require('fs');
fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
    三、promise
    说明：基于promise的操作，在文件操作完成后返回一个包含完成情况的promise对象，包括异常信息或文件操作返回的数据等，具体返回数据是由对应方法决定的。这种形式不会阻塞node.js事件循环和后续JavaScript执行
示例代码：
const fs = require('fs/promises');

(async function(path) {
  try {
    await fs.unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})('/tmp/hello');



fs.Dir


参考资料：
[File system](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_stat_path_options_callback)
 */
import fs from "fs";
import {resolve, dirname, extname} from "path";

