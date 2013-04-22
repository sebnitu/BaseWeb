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
            
            if (!$this.is('ul')) { $this = $this.find('ul:first'); }
                        
            ////
            // Build element specific options
            // This lets me access options with this syntax: o.optionName
            var o = $.meta ? $.extend({}, opts, menu.data()) : opts;
            
            ////
            // Build Mobile Menu Structure
            $this.wrap('<div class="mobile-menu" />')
                 .after('<div class="mobile-menu-vert" />')
                 .wrap('<div class="mobile-menu-hori" />');
            
            
            // Structure Elements
            var menu = $this.parents('.mobile-menu');
            var menu_hori = menu.find('.mobile-menu-hori');
            var menu_vert = menu.find('.mobile-menu-vert');
            
            // Build vertical menu structure
            menu_vert.append('<div class="mm-header"></div>');
            menu_vert.append('<div class="mm-body"></div>');
            
            var mm_header = menu_vert.find('.mm-header');
            var mm_body = menu_vert.find('.mm-body');
            
            ////
            // Clone and build panels for vertical mobile navigation
            $this.clone().removeAttr('id').appendTo(menu_vert);
            
            // Flatten the `<ul>`s
            menu_vert.find('ul').each(function(index) {
                index++;
                var p = $(this).wrap('<div class="mm-panel" data-index="' + index + '" />').parent();
                if ( index > 1 ) {
                    var parent_id = p.parents('.mm-panel').attr('data-index');
                    p.before('<a data-target="' + index + '" class="mm-icon next">Sub Menu</a>');
                    p.attr('data-parent', parent_id);
                } else {
                    p.addClass('mm-panel-active');
                }
            });
                        
            var panels = menu_vert.find('.mm-panel').appendTo(mm_body);
                        
            ////
            // Build menu header
            mm_header.append('<h3><span>Menu</span></h3>')
                     .append('<a class="mm-icon prev">Previous</a>')
                     .append('<a class="mm-icon hori-view">Horizontal View</a>')
                     .append('<a class="mm-icon search">Search</a>');
            
            var menu_title = menu.find('.mm-header h3');
            
            // Panel Tracker Variables
            var menu_current = 1;
            var menu_next = 1;
            var menu_prev = 1;
            
            // Header Text
            var menu_title_text = 'Menu';
            var menu_title_current_text = '';
            var menu_title_current_link = '';
            
            menu_hori.find('> ul').prepend('<li class="mm-icon-wrap mm-icon-wrap-vert-view"><a class="mm-icon vert-view">Vertical View</a></li>');
            
            // Buttons
            var btn_toggle_vert = menu.find('.mobile-menu-vert .hori-view');
            var btn_toggle_hori = menu.find('.mobile-menu-hori .vert-view');
            var btn_prev = menu.find('.mm-header .prev');
            var btn_next = menu.find('.mm-body .next');
            
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
                $('.mobile-menu-vert .mm-panel[data-index="' + menu_current + '"]').addClass('mm-panel-active');
    
            });
                        
            btn_prev.click(function() {
                menu_next = panels.filter('.mm-panel-active').attr('data-parent');
                menu_prev = menu_current;
                menu_current = menu_next;
                
                if(menu_current != 1) {    
                    menu_title_current_text = menu_vert.find('.next[data-target="' + menu_next + '"]').prev('a').text();
                    menu_title_current_link = menu_vert.find('.next[data-target="' + menu_next + '"]').prev('a').attr('href');
                    menu_title.html('<a href="' + menu_title_current_link + '">' + menu_title_current_text + '</a>');
                    menu_vert.removeClass('mm-state-root mm-state-index-' + menu_prev);
                    menu_vert.addClass('mm-state-sub mm-state-index-' + menu_current);
                } else {
                    menu_title.html('<span>' + menu_title_text + '</span>');
                    menu_vert.removeClass('mm-state-sub mm-state-index-' + menu_prev);
                    menu_vert.addClass('mm-state-root mm-state-index-' + menu_current);
                }
                
                panels.removeClass('mm-panel-active');
                $('.mobile-menu-vert .mm-panel[data-index="' + menu_current + '"]').addClass('mm-panel-active');
            });
            
        });
    
    };
    
    $.fn.mobilemenu.defaults = {
    
    };
    
})(jQuery);