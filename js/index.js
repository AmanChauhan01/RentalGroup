$(document).ready(function(){
    $(".about-wrap4 .row .col-md-4 a").click(function(e){
        e.preventDefault();
        var x=$(this).attr("href");
        $("body,html").animate({
            "scrollTop":$(x).offset().top
        })
    })
})