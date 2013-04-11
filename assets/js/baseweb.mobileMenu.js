////////////////////////////////////////////////////////////////////////////////
// BaseWeb's Mobile Menu Plugin
////////////////////////////////////////////////////////////////////////////////

(function($) {

$.fn.mobileMenu = function(options) {
    
    ////
    // Extend our default options with those provided.
    var opts = $.extend({}, $.fn.mobileMenu.defaults, options);
    ////
    // Iteration 
    return this.each(function () {
        ////
        // Save our object
        var $this = $(this);
        ////
        // Build element specific options
        // This lets me access options with this syntax: o.optionName
        var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
        
        ////
        // Variables
        var cancel_list_view_btn = $this.find('#cancel-list-view')
        ,   list_view_btn = $this.find('#list-view')
        ;
        
        
        ////
        // Build Mobile Menu
        var panels = $('.mobile-menu-vert .mm-panel');
        var panels_data = panels.attr('data-index');
                
        $this.addClass('mm-vert-active');
        
        cancel_list_view_btn.click(function() {
            $this.removeClass('mm-vert-active');
            $this.addClass('mm-hori-active');
        });
        
        list_view_btn.click(function() {
            $this.removeClass('mm-hori-active');
            $this.addClass('mm-vert-active');
        });
        
        var btn_subnav = $this.find('.mm-body .subnav-btn');
        var btn_previous = $this.find('.mm-header .previous');
        
        var menu_title = $this.find('.mm-header h3');
        var menu_current = 1;
        var menu_next = 1;
        var menu_prev = 1;
        
        btn_subnav.click(function() {
            menu_next = $(this).attr('data-target');
            menu_prev = menu_current;
            menu_current = menu_next;
            
            if(menu_current != 1) {
                console.log('Turn on subnav header');
            } else {
                console.log('Turn on root page header');
            }
            
            panels.removeClass('mm-panel-active');
            $('.mobile-menu-vert .mm-panel[data-index="'+menu_current+'"]').addClass('mm-panel-active');

        });
        
        btn_previous.click(function() {
            menu_current = menu_prev;
            
            panels.removeClass('mm-panel-active');
            $('.mobile-menu-vert .mm-panel[data-index="'+menu_current+'"]').addClass('mm-panel-active');
        });
        
    });

};

$.fn.mobileMenu.defaults = {
    pauseOnHover : true
};
    
})(jQuery);
