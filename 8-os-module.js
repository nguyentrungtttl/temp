const os = require('os')

//info about curren user
console.log(os.userInfo());
//system uptime in seconds
console.log(os.uptime());

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOs);