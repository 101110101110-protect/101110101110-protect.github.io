$(function() {
    $('.switch').parent().addClass('switcher-wrapper');

    $('.switcher-wrapper').on('click', function () {

        let input =  $(this).find('input');

        if(input.is(':checked')) {
            input.prop('checked', false);
        }else {
            input.prop('checked', true);
        }
    })
});