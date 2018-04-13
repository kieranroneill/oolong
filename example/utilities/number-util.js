module.exports = {
    isPrime: from => {
        for (let i = 2; i < from; i++) {
            if (from % i === 0) {
                return false;
            }
        }

        return from > 1;
    },

    createRange: (from, to) => {
        const range = [];

        for (let i = from; i <= to; i++) {
            range.push(i);
        }

        return range;
    }
};
