$(document).ready(function() {
  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    envelope[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
