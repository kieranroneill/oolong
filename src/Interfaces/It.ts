import Chalk from 'chalk';

// Utilities.
import Suite from '../Utilities/Suite';

const { black, green, red } = Chalk;

export default function(description: string, callback: () => void): void {
    const suite: Suite = Suite.getInstance();

    try {
        callback();

        console.log(`${black.bgGreen(' OK ')} ${green(description)}`);

        suite.success++;
    } catch (error) {
        console.log(`${black.bgRed(' FAIL ')} ${red(description)}`);
        console.log(`${red(error.stack)}`);

        suite.fail++;
    }
}
