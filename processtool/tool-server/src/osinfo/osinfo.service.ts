import { Injectable } from '@nestjs/common';
const os = require('os');

@Injectable()
export class OSInfoService {
  getAll(): Object {
    return {
      // Returns the operating system CPU architecture for which the Node.js binary was compiled. 
      arch: os.arch(),
      homedir: os.homedir(),
      hostname: os.hostname(),
      platform: os.platform(),
      tmpdir: os.tmpdir(),
      totalmem: os.totalmem()/1024/1024/1024,
      type: os.type(),
      uptime: os.uptime(),
      version: os.version()
    }
  }
}
