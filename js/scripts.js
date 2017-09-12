$(document).ready(function() {
  $("button#dark-background").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });

  $("button#light-background").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
    })
  });
