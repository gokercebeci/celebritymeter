function showModal() {
    $('body').addClass('dialogIsOpen');
    $('#modal section').hide();
    $('#modal #' + $(this).attr('class')).show();
}

function closeModal() {
    $('body').removeClass('dialogIsOpen');
}

$('nav a, .howto').on('click', showModal);

// ESC 
$(document).on('keydown', function(e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});

$('<a>').addClass('x').html('X').off('click').on('click', closeModal).appendTo('#modal section');
$('#modal section').append('<span class="close">press <b>esc</b> key or click <b>x</b> to close the window.</span>');

// =============================================================================
// CLASS GENERATOR
// =============================================================================
function Class(methods) {
    var c = function() {
        this.init.apply(this, arguments);
    };
    for (var property in methods) {
        c.prototype[property] = methods[property];
    }
    if (!c.prototype.init)
        c.prototype.init = function() {
        };
    return c;
}