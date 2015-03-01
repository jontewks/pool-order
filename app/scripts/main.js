'use strict';

$('[data-action="shuffle"]').click(function() {
  var names = [];
  $('input:checked').each(function(index, el) {
    names.push($(el).val());
  });

  $('.jumbotron').text(_.shuffle(names));
});