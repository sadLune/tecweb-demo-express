const db = require("../config/mysql");

exports.insert = async (req, res, next) => {

  if (!req.body.username) { // || !req.body.email) {
    return res.status(400).json({
      message: "Campos obrigatórios não preenchidos.",
      fields: ["username", "email"],
    });
  }

  req.body.email = req.body.email ? req.body.email : null;

  try {
      
    db.query(
      "INSERT INTO `usuario`(`username`,`email`) VALUES(?, ?)",
      [req.body.username, req.body.email],
      (error, results, fields) => {
        if(error) throw error;
        res.status(201).json({
          message: "Usuário inserido com sucesso.",
          data: results,
        });
    });
  } catch (err) {
    next(err);
  }
  
};

exports.selectAllUsers = async (req, res, next) => {
  try {
    db.query("SELECT * FROM `usuario`", (error, results, fields) => {
      if(error) throw error;
      res.status(200).json(results);
    });
  } catch (err) {
    next(err);
  }

};
