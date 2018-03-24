var meAnimal = 'dog'
var youAnimal = "cat"

function myAnimal() {
  return meAnimal
}

function yourAnimal() {
  return youAnimal
}

function add2(n) {
  return n + 2;
}

  describe('add2(n)', function() {
    it('adds two to n', function() {
      const n = Math.floor(Math.random() * 1000)
      expect(window.add2(n)).toEqual(n + 2)
    })
  })







var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
