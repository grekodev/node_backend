const moment = require('moment');
let date = moment.unix('3760560000').format("DD/MM/YYYY");
console.log(date);
let humanDate = moment("31/12/2089", "DD/MM/YYYY").unix();
console.log(humanDate);
