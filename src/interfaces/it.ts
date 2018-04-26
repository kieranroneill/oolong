import chalk from 'chalk';

const { black, green, red } = chalk;

export default function(title: string, callback: () => void): void {
    try {
        callback();

        console.log(`\u0009${black.bgGreen(' OK ')} ${green(title)}`);
    } catch (error) {
        console.log(`\u0009${black.bgRed(' FAIL ')} ${red(title)}`);
        console.log(`\u0009${red(error)}`);
    }
}
