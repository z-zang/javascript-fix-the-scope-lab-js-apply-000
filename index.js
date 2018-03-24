var meAnimal = 'dog'
var youAnimal = "cat"

function myAnimal() {
  return meAnimal;
}

function yourAnimal() {
  return youAnimal;
}

function add2(n) {
  return n + 2;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()


  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe('theFunk', function() {
    it('is "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })