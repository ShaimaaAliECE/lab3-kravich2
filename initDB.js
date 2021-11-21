const mysql = require('mysql')

let conn = mysql.createConnection({
    host: '34.67.72.229',
    user: 'root',
    password: 'password',
    database: 'KeerthensDB',
    port: 80,
});

conn.connect();

conn.query(
    'CREATE TABLE TimesforAdmin (AvailableTime varchar(10))',//creating the table
    (err, rows, fields) => {if (err) {console.log(err);} else { console.log('AdminTimes Created')}
    }
)

conn.query(
    'CREATE TABLE GuestAvailabilities (GuestName varchar(30), AvailableTime varchar(10))',
    (err, rows, fields) => { if (err) {console.log(err); } else {console.log('GuestAvailabilities Created') }
    }
)

conn.end();