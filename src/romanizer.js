import _ from 'romanize';

const transform = (numbers) => {
    var romanize = require('romanize');
    return romanize(numbers);
};

export {
    transform
};