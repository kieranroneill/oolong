import Chalk from 'chalk';

// Utilities.
import Suite from '../Utilities/Suite';

const { green, red, yellow, white } = Chalk;

export default function(title: string, callback: () => void): void {
    const suite: Suite = Suite.getInstance();
    const isOuterInterface: boolean = (suite.fail <= 0 && suite.success <= 0);
    let exitCode: number = 0;

    console.log(yellow(`${title}`));

    callback();

    if (isOuterInterface) {
        console.log(white(`\n.......\n`));
        console.log(white('Test summary:\n'));
        console.log(green(`  Success: ${suite.success}`));
        console.log(red(`  Fail: ${suite.fail}`));

        if (suite.fail > 0) {
            exitCode = 1;
        }

        suite.reset();

        return process.exit(exitCode);
    }
}
