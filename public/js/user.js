

class DB {
    constructor(connection) {
        this.connection = connection;
    }
findUser() {
    return this.connection.promise().query(
        "SELECT name FROM user"
    );
}}

findUser()