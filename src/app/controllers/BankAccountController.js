const db = require('../../config/db');

class BankAccountController {
  getAllAccount(req, res, next) {
    try {
      const sql = `SELECT * FROM bank_account LIMIT ${
        req.query.showentries
      } OFFSET ${req.query.page * req.query.showentries}`;
      db.query(sql, (err, response) => {
        if (err) next(err);
        else res.json(response);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }

  getDetailAccount(req, res, next) {
    try {
      const sql = `SELECT * FROM bank_account WHERE id = ${req.query.id}`;
      db.query(sql, (err, response) => {
        if (err) next(err);
        else res.json(response[0]);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }

  searchAccount(req, res, next) {
    try {
      const sql = `SELECT * FROM bank_account WHERE
        id LIKE '%${req.query.query}%' OR
        name LIKE '%${req.query.query}%' OR
        phone LIKE '%${req.query.query}%' OR
        iban LIKE '%${req.query.query}%' OR
        pin LIKE '%${req.query.query}%' OR
        address LIKE '%${req.query.query}%' OR
        balance LIKE '%${req.query.query}%' OR
        email LIKE '%${req.query.query}%' OR
        date LIKE '%${req.query.query}%'
        LIMIT ${req.query.showentries} OFFSET ${
        req.query.page * req.query.showentries
      };`;
      db.query(sql, (err, response) => {
        if (err) next(err);
        else res.json(response);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }

  getNumberOfAccounts(req, res, next) {
    try {
      const sql = 'SELECT COUNT(*) AS result FROM bank_account';
      db.query(sql, (err, response) => {
        if (err) next(err);
        else res.json(response[0]);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }

  addAccount(req, res, next) {
    try {
      const sql =
        req.body.id.length == 0
          ? `INSERT INTO bank_account (name, phone, iban, pin, address, balance, email, date) VALUES ('${req.body.name}', '${req.body.phone}', '${req.body.iban}', '${req.body.pin}', '${req.body.address}', ${req.body.balance}, '${req.body.email}', '${req.body.date}');`
          : `INSERT INTO bank_account (id, name, phone, iban, pin, address, balance, email, date) VALUES (${req.body.id}, '${req.body.name}', '${req.body.phone}', '${req.body.iban}', '${req.body.pin}', '${req.body.address}', ${req.body.balance}, '${req.body.email}', '${req.body.date}');`;

      db.query(sql, (err, response) => {
        if (err) res.json({ success: false });
        else res.json({ success: true });
      });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  updateAccount(req, res, next) {
    try {
      const sql = `UPDATE bank_account SET name = '${req.body.name}', phone = '${req.body.phone}', iban = '${req.body.iban}', pin = '${req.body.pin}', address = '${req.body.address}', balance = ${req.body.balance}, email = '${req.body.email}', date = '${req.body.date}' WHERE id = ${req.body.id}`;
      db.query(sql, (err, response) => {
        if (err) res.json({ success: false });
        else res.json({ success: true });
      });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  removeAccount(req, res, next) {
    try {
      const sql = `DELETE FROM bank_account WHERE id = ${req.body.id}`;
      db.query(sql, (err, response) => {
        if (err) res.json({ success: false });
        else res.json({ success: true });
      });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }
}

module.exports = new BankAccountController();
