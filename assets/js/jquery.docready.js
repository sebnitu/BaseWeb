/* ==========================================================
 * BaseWeb - jQuery Document & Image Ready Scripts
 * https://github.com/sebnitu/BaseWeb
 * ==========================================================
 * Copyright 2012 Sebastian Nitu.
 * ========================================================== */

/* ==========================================================
    When Document is Ready
============================================================= */
$(document).ready(function() {
    
    // Mobile Orientation and Scale Fix
    mobileOrientationScale();

    // Desktop, Tablet, Phone classes
    responsiveClasses();
    resizeTrigger(responsiveClasses);
    
    ////
    // Forms
    ////
    // Focus Detection
    // Checks if anything inside of a form has focus
    // and adds the focus class to parent .group
    $('form *').focus(function() {
        $(this).parents('.group').addClass('focus');  
    }).blur(function(){
        $(this).parents('.group').removeClass('focus');  
    });
    
});
/* ==========================================================
    When Images are Loaded
============================================================= */
$(window).load(function() {
    
    
    
});
/* ==========================================================
    End of Document & Image Ready Scripts
============================================================= */