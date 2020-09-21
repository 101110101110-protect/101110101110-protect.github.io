$(function() {

    function readyHandler() {
        $('.input-wrapper').each(function(  ) {
            if(!$(this).find(':input').val()) {
                $(this).find('label').removeClass('active');
            }
        })
    }
    readyHandler();

    $('.input-wrapper').find(':input').on('focusin', function () {
            $(this).parent().find('label').addClass('active');
    });

    $('.input-wrapper').find(':input').on('focusout', function () {
        if(! $(this).val()) {
            $(this).parent().find('label').removeClass('active');
        }
    });

    $('.input-wrapper').find('textarea').on('focusin', function () {
        $(this).parent().find('label').addClass('active');
    });

    $('.input-wrapper').find('textarea').on('focusout', function () {
        if(! $(this).val()) {
            $(this).parent().find('label').removeClass('active');
        }
    });

    $('label').on('click', function () {
        $(this).parent().find('input').focus();
    })
});