import chalk from 'chalk';

const { yellow } = chalk;

export default function(title: string, callback: () => void): void {
    console.log(yellow(`=> ${title}`));

    callback();
}
