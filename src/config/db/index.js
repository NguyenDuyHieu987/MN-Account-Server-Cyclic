const mysql = require('mysql2');

// async function connect() {
//   try {
//     mysql.createConnection({
//       host: process.env.DB_HOST || 'localhost',
//       user: process.env.DB_USER || 'root',
//       password: process.env.DB_PASS || '',
//       database: process.env.DB_NAME || 'nodejs_api',
//     });

//     console.log('Connected to MySQL');
//   } catch (e) {
//     console.log('Connected failed', e.message);
//   }
// }

// module.exports = { connect };

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || '',
  port: process.env.DB_PORT || 3306,
});

module.exports = db;
