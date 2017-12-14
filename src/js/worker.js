$("#stats").hide();
$(document).ready(()=>{
    $("#title").addClass('col-md-2 col-md-offset-5',250,function(){
        $("#stats").show(250);
    });
    console.log($("#stats").children().addClass('hbar'));
    
})