module.exports = {
    capitalizeFirstLetter: string => (string ? string.charAt(0).toUpperCase() + string.slice(1) : ''),

    isBlank: string => (string.trim().length === 0),

    startsWith: (string, substring) => (string.indexOf(substring) === 0)
};
