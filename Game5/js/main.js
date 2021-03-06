/* global Scrambler */
/* eslint-disable import/prefer-default-export, no-console */
/* eslint-env jquery */

$(document).ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    Scrambler({
        target: '.scramble',
        random: [750, 2000],
        speed: 100,
        afterAll: function () {
            $('.scramble').removeClass('scramble')
        }
    });

    $('.menu-return').click(function () {
        $('body').css('background-image', 'url(../Game5/img/bg.jpg)');
        $('body').css('animation', 'pan 30s infinite');
        $('header, #body').removeClass('hidden');
        $('#code1').addClass('hidden');
        $('#code2').addClass('hidden');
        $('#code3').addClass('hidden');

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    $('#link1').click(function () {
        $('body').css('background-image', 'url(../Game5/img/bg-overlay.jpg)');
        $('body').css('animation', 'none');
        $('header, #body').addClass('hidden');
        $('#code1').removeClass('hidden');
        $('#code2').addClass('hidden');
        $('#code3').addClass('hidden');

        setTimeout(
            function () {
                Scrambler({
                    target: '.scramble1',
                    random: [60000, 3000000],
                    speed: 500,
                });
            }, 500);
    });

    $('#link2').click(function () {
        $('body').css('background-image', 'url(../Game5/img/bg-overlay.jpg)');
        $('body').css('animation', 'none');
        $('header, #body').addClass('hidden');
        $('#code1').addClass('hidden');
        $('#code2').removeClass('hidden');
        $('#code3').addClass('hidden');

        setTimeout(
            function () {
                Scrambler({
                    target: '.scramble2',
                    random: [60000, 3000000],
                    speed: 500,
                });
            }, 500);
    });

    $('#link3').click(function () {
        $('body').css('background-image', 'url(../Game5/img/bg-overlay.jpg)');
        $('body').css('animation', 'none');
        $('header, #body').addClass('hidden');
        $('#code1').addClass('hidden');
        $('#code2').addClass('hidden');
        $('#code3').removeClass('hidden');

        setTimeout(
            function () {
                Scrambler({
                    target: '.scramble3',
                    random: [60000, 3000000],
                    speed: 500,
                });
            }, 500);
    });

    if (getUrlParameter('unlock') == 'all') {
        $('#link1').removeClass('locked');
        $('#link2').removeClass('locked');
        $('#link3').removeClass('locked');
    } else if (getUrlParameter('unlock') !== undefined) {
        $('#' + getUrlParameter('unlock')).removeClass('locked');
    }

    var currentDate = new Date();

    if (currentDate >= new Date('7 August 2020 21:00:00 GMT-04:00')) {
        $('#link1').removeClass('locked');
    }

    if (currentDate >= new Date('8 August 2020 21:00:00 GMT-04:00')) {
        $('#link2').removeClass('locked');
    }

    if (currentDate >= new Date('9 August 2020 21:00:00 GMT-04:00')) {
        $('#link3').removeClass('locked');
    }
});
