'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newPurchase;

describe('Purchase API:', function () {

  describe('GET /api/purchases', function () {
    var purchases;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/purchases').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        purchases = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      purchases.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/purchases', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/purchases').send({
        name: 'New Purchase',
        info: 'This is the brand new purchase!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newPurchase = res.body;
        done();
      });
    });

    it('should respond with the newly created purchase', function () {
      newPurchase.name.should.equal('New Purchase');
      newPurchase.info.should.equal('This is the brand new purchase!!!');
    });
  });

  describe('GET /api/purchases/:id', function () {
    var purchase;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/purchases/' + newPurchase._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        purchase = res.body;
        done();
      });
    });

    afterEach(function () {
      purchase = {};
    });

    it('should respond with the requested purchase', function () {
      purchase.name.should.equal('New Purchase');
      purchase.info.should.equal('This is the brand new purchase!!!');
    });
  });

  describe('PUT /api/purchases/:id', function () {
    var updatedPurchase;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/purchases/' + newPurchase._id).send({
        name: 'Updated Purchase',
        info: 'This is the updated purchase!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedPurchase = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedPurchase = {};
    });

    it('should respond with the updated purchase', function () {
      updatedPurchase.name.should.equal('Updated Purchase');
      updatedPurchase.info.should.equal('This is the updated purchase!!!');
    });
  });

  describe('DELETE /api/purchases/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/purchases/' + newPurchase._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when purchase does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/purchases/' + newPurchase._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=purchase.integration.js.map
