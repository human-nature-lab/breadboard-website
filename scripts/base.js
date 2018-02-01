$(function () {
    // keeps track of which platform we've clicked instructions for, if any
    var platform_flag = 'undefined';
    // var platform_map = {
    //     'undefined': 0,
    //     'mac': 1,
    //     'linux': 2,
    //     'windows': 3
    // };
    
    function modal_open($modal) {
        $('body').addClass('unscrollable');
        $modal.show();
    }
    
    function modal_close($modal) {
        $('body').removeClass('unscrollable');
        $modal.hide();
    }
    
    $('.play').on('click', function () {
        mixpanel.track('Video Play');
        // ga('send', 'event', 'Video', 'Play');
        if ($('.modal .iframe iframe').length == 0) {
            $('.modal .iframe').append('<iframe width="100%" height="100%" frameborder="0" src="https://www.youtube.com/embed/FQgb9F_jngg?autoplay=1">');
        }
        modal_open($('.modal'));
    });
    // http://stackoverflow.com/questions/6246939/start-play-embedded-iframe-youtube-video-on-click-of-an-image

    // TODO move these concerns into the right places, triggered by events?
    $('.modal .control.close, .modal_install .control.close, .modal_download .control.close').on('click', function () {
        var $modal = $(this).parent();
        modal_close($modal);
        $modal.find('.iframe iframe').remove(); // TODO pause video instead
        var $email = $modal.find('input[name=email]');
        $email.val('');
        $modal.find('.error').hide();
    });
    
    $('.modal_download .button').on('click', function () {
        var $modal = $('.modal_download');
        var $email = $modal.find('input[name=email]');
        if ($(this).hasClass('accept')) {
            var email = $email.val() || 'undefined';
            var simple_edu_email = /[a-zA-Z0-9+.]+@[a-zA-Z0-9-]+\.(edu|gov|org)/
            var match = email.match(simple_edu_email);
            if (true) {
                mixpanel.track(
                    'Downloads Accept',
                    {
                        'Platform': platform_flag,
                        'Email': email
                        // add screen height width superproperty
                    }
                );
                // var platform_code = platform_map[platform_flag];
                // ga('send', 'event', 'Downloads', 'Accept Terms', platform_code);
                var location_new = window.location.href
                    .split('/')
                    .slice(0, -1)
                    .join('/')
                    .concat('/downloads/breadboard-v2.3.0.zip')
                window.location = location_new;
                modal_close($modal);
                $email.val('');
            } else {
                $modal.find('.error').show();
                'Downloads Invalid Email',
                {
                    'Platform': platform_flag,
                    'Email': email
                }
            }
        }
        if ($(this).hasClass('reject')) {
            mixpanel.track(
                'Downloads Reject',
                {
                    'Platform': platform_flag
                }
            );
            // ga('send', 'event', 'Download', 'Reject Terms');
            modal_close($modal);
            $email.val('');
            $modal.find('.error').hide();
        }
    });
    
    $('.button.install').on('click', function (ev) {
        ev.preventDefault();
        var $this = $(this);
        var platform = $this.data('platform');
        platform_flag = platform;
        var $modal = $('.modal_install[data-platform='+platform+']');
        modal_open($modal);
    });
    
    $('.button.download').on('click', function (ev) {
        ev.preventDefault();
        var $modal = $('.modal_download');
        modal_open($modal);
    });
    
    $('form.contact').on('submit', function (ev) {
        ev.preventDefault();
        var $form = $(this);
        var slide_time = 400; // speed of UI change
        // disable form
        $form.find('input[type=submit]').prop('disabled', true);
        // clear all result UI
        $form.find('.result').slideUp(slide_time / 2);
        // serialize form values
        // send data
        $.ajax({
            type: 'POST',
            url: 'email_sender.php',
            data: {
                field_name: $('form.contact [name=name]').val(),
                field_email: $('form.contact [name=email]').val(),
                field_phone: $('form.contact [name=phone]').val() || 'N/A',
                field_message: $('form.contact [name=message]').val()
            },
            success: function () {
                // send analytics event
                mixpanel.track('Contact Success');
                // ga('send', 'event', 'Contact Form', 'Submit Success');
                // display request status in UI
                $form.find('.success')
                    .slideDown(slide_time)
                    .delay(slide_time * 15)
                    .slideUp(slide_time);
            },
            error: function () {
                // send analytics event
                mixpanel.track('Contact Error');
                // ga('send', 'event', 'Contact Form', 'Submit Error');
                // display request status in UI
                $form.find('.error')
                    .slideDown(slide_time)
                    .delay(slide_time * 15)
                    .slideUp(slide_time);
            },
            complete: function () {
                // reset form
                $form[0].reset();
                // reenable form
                $form.find('input[type=submit]').prop('disabled', false);
            }
        });
    });
    
    $('.navigation ul a').on('click', function (ev) {
        ev.preventDefault();
        var target = $(this).attr('href');
        // console.log(target);
        var $target = $(target);
        var height = $('#navigation').outerHeight();
        var position = $target.position().top + 1 + 'px';
        // console.log(height);
        // console.log($target.position().top);
        // console.log(position)
        $('html, body').animate({ scrollTop: position }, 400);
    });
    
    var adjust_margin = function () {
        var height = $('#navigation').outerHeight();
        // console.log(height);
        $('.window').css({'margin-top': height + 'px'});
    }
    
    $(window).on('resize', function () {
        adjust_margin();
    });
    
    adjust_margin();
});