////////////////////////////////////////////////////////////////////////////////
// BaseWeb's Mobile Menu Plugin
////////////////////////////////////////////////////////////////////////////////

(function($) {

$.fn.mobilemenu = function (options) {
    
    ////
    // Extend our default options with those provided.
    var opts = $.extend({}, $.fn.mobilemenu.defaults, options);
    ////
    // Iteration 
    return this.each(function () {
        
        ////
        // Save our object
        var $this = $(this);
        
        ////
        // Build element specific options
        // This lets me access options with this syntax: o.optionName
        var o = $.meta ? $.extend({}, opts, menu.data()) : opts;
        
        ////
        // Build Mobile Menu Structure
        $this.wrap('<div class="mobile-menu" />')
             .after('<div class="mobile-menu-vert" />')
             .wrap('<div class="mobile-menu-hori" />');
        
        // Elements
        var menu = $this.parents('.mobile-menu');
        var menu_hori = menu.find('.mobile-menu-hori');
        var menu_vert = menu.find('.mobile-menu-vert');
        var menu_title = menu.find('.mm-header h3');
        
        var panels = $('.mobile-menu-vert .mm-panel');
        
        // Location
        var menu_current = 1;
        var menu_next = 1;
        var menu_prev = 1;
        
        // Header Text
        var menu_title_text = 'Menu';
        var menu_title_current_text = '';
        var menu_title_current_link = '';
        
        menu_hori.find('> ul').prepend('<li><button class="vert-view"><i class="icon-list"></i></button></li>');
        
        // Buttons
        var btn_toggle_vert = menu.find('.mobile-menu-vert .hori-view');
        var btn_toggle_hori = menu.find('.mobile-menu-hori .vert-view');
        var btn_next = menu.find('.mm-body .next');
        var btn_prev = menu.find('.mm-header .prev');
        
        // Init Classes
        menu.addClass('mm-hori-active');
        menu_vert.addClass('mm-state-root mm-state-index-' + menu_current);
        
        ////
        // Buttons
        btn_toggle_vert.click(function() {
            menu.removeClass('mm-vert-active');
            menu.addClass('mm-hori-active');
        });
        
        btn_toggle_hori.click(function() {
            menu.removeClass('mm-hori-active');
            menu.addClass('mm-vert-active');
        });
        
        btn_next.click(function() {
            menu_next = $(this).attr('data-target');
            menu_prev = menu_current;
            menu_current = menu_next;
            
            if(menu_current != 1) {
                menu_title_current_text = $(this).prev('a').text();
                menu_title_current_link = $(this).prev('a').attr('href');
                menu_title.html('<a href="' + menu_title_current_link + '">' + menu_title_current_text + '</a>');
                menu_vert.removeClass('mm-state-root mm-state-index-' + menu_prev);
                menu_vert.addClass('mm-state-sub mm-state-index-' + menu_current);
            }
            
            panels.removeClass('mm-panel-active');
            $('.mobile-menu-vert .mm-panel[data-index="'+menu_current+'"]').addClass('mm-panel-active');

        });
        
        btn_prev.click(function() {
            menu_next = menu_prev;
            menu_prev = menu_current;
            menu_current = menu_next;
            
            if(menu_current != 1) {
                menu_title_current_text = $(this).prev('a').text();
                menu_title_current_link = $(this).prev('a').attr('href');
                menu_title.html('<a href="' + menu_title_current_link + '">' + menu_title_current_text + '</a>');
                menu_vert.removeClass('mm-state-root mm-state-index-' + menu_prev);
                menu_vert.addClass('mm-state-sub mm-state-index-' + menu_current);
            } else {
                menu_title.html('<span>' + menu_title_text + '</span>');
                menu_vert.removeClass('mm-state-sub mm-state-index-' + menu_prev);
                menu_vert.addClass('mm-state-root mm-state-index-' + menu_current);
            }
            
            panels.removeClass('mm-panel-active');
            $('.mobile-menu-vert .mm-panel[data-index="'+menu_current+'"]').addClass('mm-panel-active');
        });
        
    });

};

$.fn.mobilemenu.defaults = {

};
    
})(jQuery);

/*

<div class="mobile-menu">
            
<div class="mobile-menu-hori">
    <ul>
        <li><a href="#">Home</a></li>
        ...
    </ul>
</div><!-- .mobile-menu-hori -->

<div class="mobile-menu-vert">
    
    <div class="mm-header">
        <button class="prev"><i class="icon-arrow-left"></i></button>
        <button class="hori-view"><i class="icon-close"></i></button>
        <button class="search"><i class="icon-search"></i></button>
        <h3><span>Menu</span></h3>
    </div>
    
    <div class="mm-body">
        <div data-index="1" class="mm-panel mm-panel-active">
            <ul>
                <li><a href="#">Item</a></li>
                ...
            </ul>
        </div><!-- .mm-panel -->
        <div data-index="2" class="mm-panel">
            <ul>
                <li><a href="#">Item</a></li>
                ...
            </ul>
        </div><!-- .mm-panel -->
        <div data-index="3" class="mm-panel">
            <ul>
                <li><a href="#">Item</a></li>
                ...
            </ul>
        </div><!-- .mm-panel -->
        <div data-index="4" class="mm-panel">
            <ul>
                <li><a href="#">Item</a></li>
                ...
            </ul>
        </div><!-- .mm-panel -->
    </div><!-- .mm-body -->
    
</div><!-- .mobile-menu-vert -->

</div><!-- .mobile-menu -->

*/