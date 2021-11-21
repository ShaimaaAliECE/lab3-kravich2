function getTimes() {
    let conn = mysql.createConnection({
        host: '34.67.72.229',
        user: 'root',
        password: 'password',
        database: 'KeerthensDB',
    });
    
    conn.connect();

    var TimesforAdmin = '';
    TimesforAdmin += "<h1>Admin Times Selected</h1>";
    TimesforAdmin += "<br />";
    TimesforAdmin += "<br />";

    conn.query( 'SELECT * FROM TimesforAdmin',
        (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            for (r in rows) {
                TimesforAdmin += "<h4>" + r.AvailableTime + "</h4>";
                TimesforAdmin += "<br />";
            }
        }
    );

    var TimesforGuest = '';
    TimesforGuest += "<br />"
    TimesforGuest += "<h1>Selected Times By Guests</h1>";
    TimesforGuest += "<br />";
    TimesforGuest += "<br />";

    conn.query(
        'SELECT * FROM GuestAvailabilities',
        (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            for (r in rows) {
                TimesforGuest += "<h4>" + r.GuestName + ": " + r.AvailableTime + "</h4>";
                TimesforGuest += "<br />"
            }
        }
    );

    TimesforGuest += "<br />"

    return TimesforAdmin + TimesforGuest;
}
module.exports = getSlot;