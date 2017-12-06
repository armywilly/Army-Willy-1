$(function() {
  
  mobilePagination();

  function mobilePagination() {

    var deskPag = $('.pagination');
    var active = deskPag.find('.active').index();
    var pages = $('.pagination .pages a');
    var numPages = pages.length;
    var next = deskPag.find('.next').attr('href');
        
    deskPag.after('<div class="mobile-pagination"><select name="paginator" id="paginator"></select><a href="' + next + '" class="next">Next</a></div>');
    
    var mobiPag = $('#paginator');

    for (var i = 0; i <= numPages - 1; i++) {
      var url = $(pages[i]).attr('href');
      var num = i + 1;

      mobiPag.append('<option value="' + url + '">Page ' + num + ' of ' + numPages + '</option>');
    }
    
    mobiPag.find('option:eq(' + active + ')').prop('selected', true);

    mobiPag.bind('change', function() {
      var url = $(this).val();
      
      if (url !== '') {
        window.location = url;
      }
      return false;
    });
  }
});