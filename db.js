const db = require('mongoose');
db.Promise = global.Promise;
//mongodb+srv://db_greko:IJlABLJ8WMCJc6fM@cluster0.2qxj1.mongodb.net/<dbname>?retryWrites=true&w=majority

async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
     });
     console.log('[db] conectada con exito');
}

module.exports = connect;