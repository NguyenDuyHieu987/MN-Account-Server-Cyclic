const db = require('../../config/db');

class UserController {
  login(req, res, next) {
    try {
      const sql = `SELECT fullname, role, usertoken FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`;
      db.query(sql, (err, response) => {
        if (err) throw next(err);
        res.json(response[0]);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }
  keepLogin(req, res, next) {
    try {
      const sql = `SELECT fullname, role FROM users WHERE usertoken = ${req.body.usertoken}`;

      db.query(sql, (err, response) => {
        if (err) throw next(err);
        res.json(response[0]);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }
}

module.exports = new UserController();
