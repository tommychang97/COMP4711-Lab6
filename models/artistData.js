let db = require('../util/database');

// Add a single individual to the database
function addArtist(data) {
    let sql = "Insert into artists (name, description, image) values ('" + data.name+ "','"+ data.description+ "','" + data.image + "')";
    return db.query(sql);
}

function deleteArtist(id) {
    let sql = 'Delete from artists where id = ' + id;
    return db.query(sql);
}
// Gets all the individuals in the database
function getAll() {
    let sql = 'Select * from artists';
    return db.query(sql);
}

// Gets a specific individual from the database
function search(searchedName) {
    let sql = "Select * from artists WHERE name LIKE ";
    let ending = "'%" + searchedName + "%'" 
    sql = sql + ending;
    return db.query(sql);
}

module.exports = {
    add : addArtist,
    getAll : getAll,
    delete: deleteArtist,
    search: search
}