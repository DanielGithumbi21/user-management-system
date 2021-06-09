const mysql = require ("mysql");


const con = mysql.createConnection ({
    host : "localhost",
    user : "root",
    password : "Daniel01",
    database : "user_management"
  })
  

exports.view = (req,res) => {
    con.connect(function(err) {
        
        con.query("SELECT * FROM user", function (err, rows) {
            if (!err) {
                res.render ("index", {rows})
            } else {
                console.log (err)
            }
          console.log("The data from user table: \n", rows);
        });
      });
}
exports.find = (req,res) => {
    con.connect(function(err) {

        let searchTerm = req.body.search;
        
        con.query("SELECT * FROM user WHERE firstName LIKE ? OR lastName LIKE ?",['%' + searchTerm + '%','%' + searchTerm + '%'], function (err, rows) {
            if (!err) {
                res.render ("index", {rows})
            } else {
                console.log (err)
            }
          console.log("The data from user table: \n", rows);
        });
      });
}
exports.form = (req,res) => {
    res.render ("add-user")
}

exports.create = (req,res) => {
    con.connect(function(err) {

       const {firstName,lastName,Email,phone,comments} = req.body;
        
        con.query("INSERT INTO user SET firstName = ?, lastName = ?,Email= ? ,phone = ?, comments = ?",[firstName,lastName,Email,phone,comments], function (err, rows) {
            if (!err) {
                res.render ("add-user",{alert:"User added successfully."})
            } else {
                console.log (err)
            }
        });
      });
}

exports.edit = (req,res) => {
    res.render ("edit-user")
}

