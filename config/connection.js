var mysql = require('mysql');


var pool = mysql.createPool({
    host: 'localhost',
        user: 'root',
        password:'root',
        database: 'student'
});

this.releaseConnection = function(conn){
   conn.release();

  }
exports.pool = pool;
