function getTimes() {
    let conn = mysql.createConnection({
        host: '34.72.236.12',
        user: 'root',
        password: 'password',
        database: 'MyStoreDB',
    });
    
    conn.connect();

    var adminTimes = '';
    adminTimes += "<h1>Times Selected By Admin</h1>";
    adminTimes += "<br />";
    adminTimes += "<br />";

    conn.query(
        'SELECT * FROM AdminTimes',
        (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            for (r in rows) {
                adminTimes += "<h4>" + r.AvailableTime + "</h4>";
                adminTimes += "<br />";
            }
        }
    );

    var guestTimes = '';
    guestTimes += "<br />"
    guestTimes += "<h1>Times Selected By Guests</h1>";
    guestTimes += "<br />";
    guestTimes += "<br />";

    conn.query(
        'SELECT * FROM GuestAvailabilities',
        (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            for (r in rows) {
                guestTimes += "<h4>" + r.GuestName + ": " + r.AvailableTime + "</h4>";
                guestTimes += "<br />"
            }
        }
    );

    guestTimes += "<br />"

    return adminTimes + guestTimes;
}
module.exports = getTimes;