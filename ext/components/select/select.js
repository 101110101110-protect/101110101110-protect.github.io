$(function() {
    // Set
    var main = $('div.mm-dropdown .textfirst')
    var li;

    $(window).click(function(e) {
            console.log();
            if(e.target.className !== 'textfirst') {
                main.parent().find('ul').hide();
            }

        }
    )

    // Animation
    main.click(function() {
        // main.html(default_text);

        console.log( main);

        $(this).parent().find('ul').show();
        $(this).parent().find('li.input-option').click(function() {

            var livalue = $(this).data('value');
            var lihtml = $(this).html();
            $(this).parent().parent().find('.textfirst').html(lihtml);
            $(this).parent().parent().find('.option').val(livalue);

            $(this).parent().hide();
        });
    });


});