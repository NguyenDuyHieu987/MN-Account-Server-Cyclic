const bankAccountRouter = require('./bankaccount');
const authRouter = require('./auth');

function route(app) {
  app.use('/account', bankAccountRouter);
  app.use('/auth', authRouter);
}

module.exports = route;
