import Chalk from 'chalk';

const { yellow } = Chalk;

export default function(title: string, callback: () => void): void {
    console.log(yellow(`=> ${title}`));

    callback();
}
