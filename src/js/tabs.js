// require utility.js

$('.tabs-nav').each(function() {

  // Save this
  var $this = $(this);

  // Save our tabs content
  var tabs_content = $this.parents('.tabs').find('.tabs-content');
  var has_content = tabs_content.length;

  // Check our other tabs content method if one wasn't found yet
  if (!has_content) {
    // Check if we have a linked content data attribute
    tabs_content = $this.attr('data-content');
    if (tabs_content) {
      // Save our tabs content
      tabs_content = $('#' + tabs_content);
      // Set has_content to true
      if (tabs_content.length) {
        has_content = 1;
      }
    } else {
      console.log('Tabs content does not exist!');
    }
  }

  // Add click event to tab links
  $this.find('a').click(function() {
    // Check if item is already active or not
    var is_active = $(this).parents('li').hasClass('active');

    if (!is_active) {
      // Remove active class from all children nav items
      $this.find('li').removeClass('active');
      // Add active class to currently selected item
      $(this).parents('li').addClass('active');

      // Check if tabs-nav has an associated content block
      if (has_content) {
        // Hide current active content
        tabs_content.find('.tabs-panel').removeClass('active');
        // Show new active content
        var target = $(this).attr('href');
        $(target).addClass('active');
      } else {
        console.log('Tabs content does not exist!');
      }
    }

    // Stop the default behavior
    return false;
  });

});
