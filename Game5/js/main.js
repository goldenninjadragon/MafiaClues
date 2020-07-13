/* global Scrambler */
/* eslint-disable import/prefer-default-export, no-console */
/* eslint-env jquery */

$(document).ready(function () {
    Scrambler({
        target: '.scramble',
        random: [200, 1000],
        speed: 75,
        afterAll: function () {
            $('.scramble').removeClass('scramble')
        }
    });
});
