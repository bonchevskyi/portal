const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();

const saltRounds = 10;
const PORT = 3001;
const hostname = 'localhost';
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
const oneDay = 1000 * 60 * 60 * 24; //in ms
// SESSION
app.use(
  session({
    key: 'SID',
    secret: 'myownsecret',
    resave: false,
    httpOnly: true,
    saveUninitialized: false,
    cookie: {
      maxAge: oneDay,
    },
  })
);
// DB CONNECTION
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'adm',
  database: 'mydb',
  multipleStatements: true,
});
// TEST CONNECTION
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.listen(PORT, hostname, () => {
  console.log(`Running server at http://${hostname} on port ${PORT}`);
});

//INFO
app.get('/', (res) => {
  res.send('Server is running here!');
});

//=== SERVER ROUTES ===

//GET all cities
app.get('/get-cities', (req, res) => {
  db.query('SELECT * FROM city', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//GET city default
app.post('/get-city-label', (req, res) => {
  const city_id = req.body.city_id;
  db.query('SELECT name FROM city WHERE id = ?', city_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//GET universities for specific city
app.post('/get-universities', (req, res) => {
  const city_id = req.body.city_id;
  db.query(
    'SELECT * FROM university WHERE city_id = ?',
    city_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//GET university default
app.post('/get-university-label', (req, res) => {
  const university_id = req.body.university_id;
  db.query(
    'SELECT name FROM university WHERE id = ?',
    university_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//GET departments
app.post('/get-departments', (req, res) => {
  const university_id = req.body.university_id;
  db.query(
    'SELECT * FROM department WHERE university_id = ?',
    university_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//GET department default
app.post('/get-department-label', (req, res) => {
  const department_id = req.body.department_id;
  db.query(
    'SELECT name FROM department WHERE id = ?',
    department_id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// SEARCH POSTS
app.post('/search', (req, res) => {
  const city_id = req.query?.city_id;
  const university_id = req.query?.university_id;
  const department_id = req.query?.department_id;

  console.log('SERVER GOT SEARCH', [city_id, university_id, department_id]);

  var params = [];
  var sqlQuery = '';

  const sqlQC =
    'SELECT p.id, p.user_id, us.username, p.title, p.text, p.created, p.updated, p.city_id, ct.name AS city_name, p.university_id, uni.name AS university_name, p.department_id, dep.name AS department_name FROM posts AS p INNER JOIN user AS us ON p.user_id = us.id INNER JOIN city AS ct ON p.city_id = ct.id INNER JOIN university AS uni ON p.university_id = uni.id INNER JOIN department AS dep ON p.department_id = dep.id WHERE p.city_id = ?';
  const sqlQU =
    'SELECT p.id, p.user_id, us.username, p.title, p.text, p.created, p.updated, p.city_id, ct.name AS city_name, p.university_id, uni.name AS university_name, p.department_id, dep.name AS department_name FROM posts AS p INNER JOIN user AS us ON p.user_id = us.id INNER JOIN city AS ct ON p.city_id = ct.id INNER JOIN university AS uni ON p.university_id = uni.id INNER JOIN department AS dep ON p.department_id = dep.id WHERE p.university_id = ?';
  const sqlQD =
    'SELECT p.id, p.user_id, us.username, p.title, p.text, p.created, p.updated, p.city_id, ct.name AS city_name, p.university_id, uni.name AS university_name, p.department_id, dep.name AS department_name FROM posts AS p INNER JOIN user AS us ON p.user_id = us.id INNER JOIN city AS ct ON p.city_id = ct.id INNER JOIN university AS uni ON p.university_id = uni.id INNER JOIN department AS dep ON p.department_id = dep.id WHERE p.department_id = ?';

  if (city_id != null && university_id == null && department_id == null) {
    sqlQuery = sqlQC;
    params = [city_id];
  } else if (university_id != null && department_id == null) {
    sqlQuery = sqlQU;
    params = [university_id];
  } else if (department_id != null) {
    sqlQuery = sqlQD;
    params = [department_id];
  }

  db.query(sqlQuery, params, (err, result) => {
    if (err) {
      console.log('Search error: ', err);
    } else if (result.length > 0) {
      res.send(result);
    } else {
      res.send('');
    }
  });
});

// GET POST DATA

app.get('/post/get', (req, res) => {
  const post_id = req.query.postID;

  const sqlQuery =
    'SELECT p.id, p.user_id, us.username, p.title, p.text, p.created, p.updated, p.city_id, ct.name AS city_name, p.university_id, uni.name AS university_name, p.department_id, dep.name AS department_name FROM posts AS p INNER JOIN user AS us ON p.user_id = us.id INNER JOIN city AS ct ON p.city_id = ct.id INNER JOIN university AS uni ON p.university_id = uni.id INNER JOIN department AS dep ON p.department_id = dep.id WHERE p.id = ?';

  db.query(sqlQuery, post_id, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
});

// POST NEW REPLY

app.post('/reply/new', (req, res) => {
  const post_id = req.body.post_id;
  const user_id = req.body.user_id;
  const text = req.body.text;

  const sqlQuery =
    'INSERT INTO replies (post_id, user_id, text) VALUES (?,?,?)';

  db.query(sqlQuery, [post_id, user_id, text], (err, result) => {
    if (err) {
      console.log(err);
      res.send(err.sqlMessage);
    } else {
      res.send('Inserted reply successfully!');
    }
  });
});

// POST GET REPLIES FOR POST

app.get('/reply/get', (req, res) => {
  const post_id = req.query.postID;

  const sqlQuery =
    'SELECT r.id, r.post_id, r.user_id, us.username, r.text, r.created, r.updated  FROM replies AS r  INNER JOIN user AS us ON r.user_id = us.id WHERE post_id = ?';

  db.query(sqlQuery, post_id, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
});

// CREATE POST

app.post('/post/new', (req, res) => {
  const user_id = req.body.user_id;
  const title = req.body.title;
  const text = req.body.text;
  const city_id = req.body.city_id;
  const university_id = req.body.university_id;
  const department_id = req.body.department_id;

  db.query(
    'INSERT INTO posts (user_id, title, text, city_id, university_id, department_id) VALUES (?,?,?,?,?,?) ',
    [user_id, title, text, city_id, university_id, department_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Post has been created!');
      }
    }
  );
});

//Register USER
app.post('/register', (req, res) => {
  const role_id = 3;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const city_id = req.body.city_id;
  const firstname = req.body.fname;
  const lastname = req.body.lname;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      'INSERT INTO user (role_id, username, password, email, city_id, firstname, lastname) VALUES (?,?,?,?,?,?,?) ',
      [role_id, username, hash, email, city_id, firstname, lastname],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.sqlMessage);
        } else {
          res.send('Values inserted!');
        }
      }
    );
  });
});

//CHANGE PASSWORD

app.post('/change-pass', (req, res) => {
  const password = req.body.passwordPass;
  const user_id = req.body.user_idPass;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      'UPDATE user SET password = ? WHERE id = ?',
      [hash, user_id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.sqlMessage);
        } else {
          res.clearCookie('SID').send('COOKIE CLEARED!');
          //res.redirect('/logout');
        }
      }
    );
  });
});

//Change EDIT DATA
app.post('/change-data', (req, res) => {
  const user_id = req.body.user_idData;
  const data = req.body.dataObj;
  const email = data?.email;
  const city_id = data?.city_id;
  const firstname = data?.firstname;
  const lastname = data?.lastname;
  const about = data?.about;

  if (email) {
    db.query(
      'UPDATE user SET email = ? WHERE id = ?',
      [email, user_id],
      (err, result) => {
        console.log('UPDATING ONLY email');
        if (err) {
          console.log(err);
        }
      }
    );
  }

  if (city_id) {
    db.query(
      'UPDATE user SET city_id = ? WHERE id = ?',
      [city_id, user_id],
      (err, result) => {
        console.log('UPDATING ONLY city_id');
        if (err) {
          console.log(err);
        }
      }
    );
  }

  if (lastname) {
    db.query(
      'UPDATE user SET lastname = ? WHERE id = ?',
      [lastname, user_id],
      (err, result) => {
        console.log('UPDATING ONLY lastname');
        if (err) {
          console.log(err);
        }
      }
    );
  }
  if (firstname) {
    db.query(
      'UPDATE user SET firstname = ? WHERE id = ?',
      [firstname, user_id],
      (err, result) => {
        console.log('UPDATING ONLY FIRSTNAME');
        if (err) {
          console.log(err);
        }
      }
    );
  }

  if (about) {
    db.query(
      'UPDATE user SET about = ? WHERE id = ?',
      [about, user_id],
      (err, result) => {
        console.log('UPDATING ONLY about');
        if (err) {
          console.log(err);
        }
      }
    );
  }
});

//LOGOUT

app.get('/logout', (req, res) => {
  res.clearCookie('SID').send('COOKIE CLEARED!');
});

// UNIQUE USER / EMAIL CHECK
app.post('/unique', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;

  var params = [];
  var sqlQuery = '';

  const sqlQueryUser =
    'SELECT IF (COUNT(*) > 0, 1, 2) as uniqueInfo FROM user  WHERE username = ?;';
  const sqlQueryEmail =
    'SELECT IF (COUNT(*) > 0, 3, 4) as uniqueInfo FROM user  WHERE email = ?;';

  if (email == null && username != null) {
    sqlQuery = sqlQueryUser;
    params = [username];
  } else if (username == null && email != null) {
    sqlQuery = sqlQueryEmail;
    params = [email];
  } else {
    //console.log('WHAT is going on?');
    if (err) throw err;
  }

  db.query(sqlQuery, params, (err, result) => {
    if (err) {
      console.log('Unique user error: ', err);
    } else if (result.length > 0) {
      //console.log('Result: ', result);
      res.send(result);
    } else {
      console.log('else');
    }
  });
});

//Profile LOAD
app.post(`/profile`, (req, res) => {
  const userProfile = req.body.userProfile;
  if (userProfile != req.session.username) {
    res.send({ invalidUser: true });
  } else {
    const sqlQuery =
      'SELECT role.role_name, username, email, city.name as city,  firstname, lastname, about, created, updated FROM user INNER JOIN role ON user.role_id = role.id INNER JOIN city ON user.city_id = city.id WHERE username = ?;';

    db.query(sqlQuery, userProfile, (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  }
});

//Check LOGIN when refresh
app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({
      loggedIn: true,
      username: req.session.user[0].username,
      role_id: req.session.user[0].role_id,
      user_id: req.session.user[0].id,
      user: req.session.user,
      auth: req.session.auth,
    });
    //console.log('SESSION:', req.session);
  } else {
    res.send({ loggedIn: false });
  }
});

//Login USER
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query('SELECT * FROM user WHERE username = ?', username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.username = result[0].username;
          req.session.user = result;
          req.session.loggedIn = true;
          req.session.auth = {
            username: result[0].username,
            role_id: result[0].role_id,
            user_id: result[0].id,
          };
          res.send(result);
        } else {
          res.send('Niewłaściwa kombinacja nazwy użytkownika/hasła!');
        }
      });
    } else {
      res.send('Użytkownik nie istnieje w systemie!');
    }
  });
});
