/* global Scrambler */
/* eslint-disable import/prefer-default-export, no-console */
/* eslint-env jquery */

$(document).ready(function () {
    Scrambler({
        target: '.scramble',
        random: [750, 1500],
        speed: 75,
        afterAll: function () {
            $('.scramble').removeClass('scramble')
        }
    });
});
