const Pool = require('pg').Pool;

const pool = new Pool({
    host:'ec2-34-206-252-187.compute-1.amazonaws.com',
    user:'rtqycqhijwfqsp',
    database:'dfehpecmt4ptdd',
    password:'74160b72ffe634f65d1b8a5a97be174788c45b8fded5f20e38fc654033b77593',
    port: 5432,
    ssl: true
    });
    
module.exports = pool;