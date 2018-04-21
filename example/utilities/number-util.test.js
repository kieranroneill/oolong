const { it, test } = require('../../bin/oolong');

// Module.
const { isPrime } = require('./number-util');

test('isPrime()', () => {
    it('should pass with flying colours', () => {});

    it('should fail miserably', () => {
        let someObject;

        someObject.unknownProperty = 'will break!';
    });
});
