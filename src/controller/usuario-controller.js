const db = require("../config/mysql").promise();

exports.insert = async (req, res, next) => {

  if (!req.body.nome || !req.body.email) {
    return res.status(400).json({
      message: "Campos obrigatórios não preenchidos.",
      fields: ["nome", "email"],
    });
  }

  try {
      
    const [rows] = await db.execute(
      "INSERT INTO `usuario`(`nome`,`email`) VALUES(?, ?)",
      [req.body.nome, req.body.email]
    );

    if (rows.affectedRows === 1) {
      return res.status(201).json({
        message: "Usuário inserido com sucesso.",
        userID: rows.insertId,
      });
    }

  } catch (err) {
    next(err);
  }
  
};

exports.selectAllUsers = async (req, res, next) => {
  try {

    const [rows] = await db.execute("SELECT * FROM `usuario`");
    res.status(200).json(rows);

  } catch (err) {
    next(err);
  }

};
