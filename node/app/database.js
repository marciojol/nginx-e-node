var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'db',        // Replace with your host name or IP
  user: 'root',      // Replace with your database username
  password: 'root',      // Replace with your database password
  database: 'nodedb' // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database conectado com sucesso!');
});
module.exports = conn;
