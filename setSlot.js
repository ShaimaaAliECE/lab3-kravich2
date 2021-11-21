export default function setSlot(isAdmin, times, name) {
    let conn = mysql.createConnection({
        host: '34.67.72.229',
        user: 'root',
        password: 'password',
        database: 'KeerthensDB',
    });
    
    conn.connect();
    if (isAdmin) {
        conn.query(
            'DELETE FROM TimesforAdmin',//deleting the available current times
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
            }
        )
        if (times.length > 0) {
            for (t in times) {//adding the NEW available times
                conn.query(
                    'INSERT INTO TimesforAdmin VALUES ("' + t + '")',
                    (err, rows, fields) => {
                        if (err) {
                            console.log(err);
                        }
                    }
                )
            }
        }
    } else {
        // allow guests to list their availability with their name
        // delete all previous available times
        conn.query(
            'DELETE FROM GuestAvailabilities WHERE GuestName=' + name,
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
            }
        )
        if (times.length > 0) {//new times adding
            conn.query(
                'INSERT INTO GuestAvailabilities VALUES ("' + name + '", ' + t + '")',
                (err, rows, fields) => {
                    if (err) {
                        console.log(err);
                    }
                }
            )
        }
    }
    conn.end();
};