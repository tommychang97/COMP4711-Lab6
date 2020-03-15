const Pool = require('pg').Pool;

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    database:'artists',
    password:'rupture8989',
    port: 5432,
    ssl: false
    });
    
module.exports = pool;