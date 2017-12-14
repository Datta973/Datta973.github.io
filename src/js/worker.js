$("#stats").hide();
$(document).ready(()=>{
    $("#title").addClass('col-md-2 col-md-offset-5',250,function(){
        $("#stats").show(500);
    });
    $("#stats").children().each(function(){
        $(this).addClass('hbar');
    })
})