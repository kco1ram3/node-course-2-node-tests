const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two number', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two number', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(9);

    expect(res).toBe(81).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBe(9).toBeA('number');
      done();
    });
  });
});

// should verify first and last names are set
it('should set firstName and lastnames', () => {
  var user = {
    age: 30,
    location: 'Bangkok'
  };
  var res = utils.setName(user, 'Puvanate Pappanont');

  expect(res).toInclude({
    firstName: 'Puvanate',
    lastName: 'Pappanont'
  }).toBeA('object');
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'pooh'}).toNotEqual({name: 'Pooh'});
//   // expect([2, 3, 4]).toExclude([1]);
//   expect({
//     name: 'Pooh',
//     age: 30,
//     location: 'Bangkok'
//   }).toInclude({
//     age: 30
//   });
// });
