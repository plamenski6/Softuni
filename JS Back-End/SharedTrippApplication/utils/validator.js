const { body } = require('express-validator');

module.exports = [
    body('directions')
        .custom((value) => {
            if (!value.includes(' - ')) {
                throw new Error('The input field should includes " - " between the start and end point');
            }

            return true;
        }),
    
    body('dateTime')
        .custom((value) => {
            if (!value.includes(' - ')) {
                throw new Error('The dateTime field should includes " - " between date and time');
            }

            return true;  
        })
];