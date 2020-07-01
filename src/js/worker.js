$(document).ready(() => {
  // $("#title").addClass('col-md-2 col-md-offset-5',250,function(){
  //     $("#stats").show(500);
  // });

  let focused = false;

  $(".picture").addClass("expand");

  $("#icon-education").click(e => {
    e.stopPropagation();
    focused = true;

    $("#panel-item-skills").hide();
    $("#panel-item-projects").hide();
    $("#panel-item-education").show(() => {
      $("#details-wrapper").show(250);
    });
  });

  $("#icon-skills").click(e => {
    e.stopPropagation();
    focused = true;
    $("#panel-item-education").hide();
    $("#panel-item-projects").hide();
    $("#panel-item-skills").show(() => {
      $("#details-wrapper").show(250);
    });
  });

  $("#icon-projects").click(e => {
    e.stopPropagation();
    focused = true;
    $("#panel-item-education").hide();
    $("#panel-item-skills").hide();
    $("#panel-item-projects").show(() => {
      $("#details-wrapper").show(250);
    });
  });

  $(document).click(() => {
    focused = !focused;
    if (!focused) {
      $("#details-wrapper").hide(250);
    }
  });
});
