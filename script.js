$( document ).ready(function() {
    $(".fa-times").hide();
    $(".text-aboutme>p").hide();

    $( ".fa-linkedin" ).click(function() {
        window.open(' https://www.linkedin.com/in/martin-myrmarker-26b072150', '_blank');
    });
    $( ".fa-github" ).click(function() {
        window.open('https://github.com/MartinMyr', '_blank');
    });


  /*  $( ".about-button" ).click(function() {
        var textAboutMe = "<p>\n" +
            "Hej!<br/><br/>\n" +
            "Martin heter jag, 25år och bosatt i Göteborg.<br/>\n" +
            "Pluggar just nu webbutveckling inom e-handel på Medieinstitutet och extrajobbar som webbutvecklare på Direktonline.<br/>\n" +
            "Brinner för teknik och utveckling\n" +
            "</p>"

        $(".popup-aboutme").css("background-color", "rgba(255, 255, 255, 0.31)");
        //$(".popup-aboutme").css("border", "1px white solid");
        $(".popup-aboutme>i").show();
        $(".popup-aboutme>.text").html(textAboutMe);

    });

    $( ".contact-button" ).click(function() {
        var textContact = "<p>Martin Myrmarker<br/><br/>"+
            "martin@myrmarker.se<br/><br/>"+
            "070 7945070"
        $(".popup-contact").css("background-color", "rgba(255, 255, 255, 0.31)");
        //$(".popup-contact").css("border", "1px white solid");
        $(".popup-contact>i").show();
        $(".popup-contact>.text").html(textContact);


    });

    $(".fa-times").click(function(){
        $(this).parents('.pop').css("background-color", "rgba(255, 255, 255, 0.00)");
        $(this).hide();
        $(this).next().children().remove();

    });*/



});