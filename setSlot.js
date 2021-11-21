export default function setTimes(isAdmin, times, name) {
    let conn = mysql.createConnection({
        host: '34.67.72.229',
        user: 'root',
        password: 'password',
        database: 'KeerthensDB',
    });
    
    conn.connect();
    // allow admin to change times in AdminTimes table
    if (isAdmin) {
        // delete all current available times
        conn.query(
            'DELETE FROM AdminTimes',
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
            }
        )
        if (times.length > 0) {
            // add all new available times
            for (t in times) {
                conn.query(
                    'INSERT INTO AdminTimes VALUES ("' + t + '")',
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
        if (times.length > 0) {//adding new times
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