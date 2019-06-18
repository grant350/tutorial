var http = require("http"),
  fs = require("fs"),
  express = require("express"),
  mysql = require("mysql"),
  //morgan = require('morgan'),
  bp = require("body-parser"),
  //cookieParser = require("cookie-parser"),
  connect = require("connect"),
  bcrypt = require("bcrypt"),
  md5 = require('md5')
  const saltRoundsHashes = 12;

// console.log(md5('message'));
// sql connection
// md5 checker
// require the  username and password
// express
// app useability
//EX:
//morgan('tiny')
//morgan(':method :url :status :res[content-length] - :response-time ms')

var saltRounds = "4"
var username = "not filled"
var password = "not filled"
var app = express();
var uep = bp.urlencoded({extended: false})
//app.use(app.router);
var jsonParser = bp.json()


app.use(express.static("static"))
// end of requires
//start of static files excluding server.js
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/static/index.html")
});

app.post("/peoples",jsonParser, function(req, res ) {
  var body = req.body
     console.log(body)
     password = body.data[0]
     console.log("Password:_" + password)
     username = body.data[1]
     console.log("Username:_" + username)

  res.send(body)
})

//posted to page peoples
app.get("/peoples", function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.write("<b>some data</b>" + "<script>console.log(\'hello\')</script>")
  res.end()

})



app.listen(2100, function() {
  console.log("server started on 3000 server static files from node, connection waiting......")
})

//goes inside the app
/*

function hash(){

bcrypt.genSalt(saltRoundsHashes,function (err,salt){


bcrypt.hash(password, salt, function(err, hash) {
console.log(hash)
        // Store hash in your password DB.
    });
    bcrypt.hash(username, salt, function(err, hash) {
    console.log(hash)
            // Store hash in your password DB.
        });
})
}hash()

var sqldata = `INSERT INTO passwords (Passcode, SaltRounds, Username) VALUES ('${password}','${username}','${saltRounds}')`
console.log(sqldata)

var sqlq = mysql.createConnection({
host: "35.192.88.120",
user: "jack",
password: "Popcorn!1",
database: "shit"
})

sqlq.connect(function(err) {
  console.log("Connected!");

  sqlq.query(sqldata, function (err, result) {
    console.log(result)

  });
});

*/
