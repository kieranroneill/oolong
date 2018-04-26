import { expect } from 'chai';

// Utilities.
import Suite from './Suite';

describe('Utilities/Suite', () => {
    context('getInstance()', () => {
        it('should initialise with default values', () => {
            const suite: Suite = Suite.getInstance();

            expect(suite.fail).to.be.equal(0);
            expect(suite.success).to.be.equal(0);

            suite.reset();
        });
    });

    context('reset()', () => {
        it('should reset the values to the default values', () => {
            const suite: Suite = Suite.getInstance();

            suite.fail = 3;
            suite.success = 23;

            suite.reset();

            expect(suite.fail).to.be.equal(0);
            expect(suite.success).to.be.equal(0);
        });
    });
});
