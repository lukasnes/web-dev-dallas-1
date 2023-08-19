// ========================

describe('Context', function () {
  describe('Problem 1', function () {
    describe('productCopy', function () {
      it('exists', function () {
        expect(productCopy).not.toBeNull();
      });
      it('should be a copy of, and not a reference to, the product object ', function () {
        let result = productCopy !== product;
        expect(result).toEqual(true);
      });
    });
  });

  describe('Problem 2', function () {
    describe('colorsCopy', function () {
      it('exists', function () {
        expect(colorsCopy).not.toBeNull();
      });
      it('should be a copy of, and not a reference to, the product object ', function () {
        let result = colorsCopy !== colors;
        expect(result).toEqual(true);
      });
    });
  });

  describe('Problem 3', function () {
    describe('result', function () {
      it('should exist', function () {
        expect(result).not.toBeNull();
      });
      it('should equal 20', function () {
        expect(result).toEqual(20);
      });
    });
  });

  describe('Problem 4', function () {
    describe('combinedArrays', function () {
      it('should exist', function () {
        expect(combinedArrays).not.toBeNull();
      });
      it('should return the two arrays combined into one', function () {
        let result = true;
        combinedArrays.forEach((animal) => {
          if (arr1.indexOf(animal) === -1 && arr2.indexOf(animal) === -1) {
            result = false;
          }
        });

        expect(result).toEqual(true);
      });
    });
  });
});
