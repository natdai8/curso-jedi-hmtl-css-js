var db = [
    {id: 1, name: "anakin"},
    {id: 2, name: "obi"}
]; 

var getUser = (id, callback) => {
    var result = db.find( user => user.id === id );

    /* Find */
    // for (let index = 0; index < db.length; index++) {
    //     if(callback(db[index])) return db[index];
    // }

    //if(id === 1 || id === 2) callback(null, user);
    if (result) {
        callback(null, result);
    } else {
        callback(`Sorry, user with id: ${id} does not exist.`);
    }
};


getUser(20, (err, user) => {
    if(err) {
        return  console.log(err);
    }

    console.log('This is the requested user: ', user);
})