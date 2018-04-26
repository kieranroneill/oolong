import chalk from 'chalk';

const { cyan } = chalk;

export default function(title: string, callback: () => void): void {
    console.log(cyan(`=> ${title}`));

    callback();
}
