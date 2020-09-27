$(window).scroll(function () {
  $('#vkid-video').each(function () {
    if ($(this).visible(true)) {
      // inside video section
    } else {
      $('#vkid-video').contents().find('video').each(function () {
        this.pause();
      });
    }
  })

  $('#vschool-video').each(function () {
    if ($(this).visible(true)) {
      // inside video section
    } else {
      $('#vschool-video').contents().find('video').each(function () {
        this.pause();
      });
    }
  })
});