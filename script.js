$( document ).ready(function() {
    $(".fa-times").hide();
    $(".popup-aboutme").hide();
    $(".popup-contact").hide();

    $( ".fa-linkedin" ).click(function() {
        window.open(' https://www.linkedin.com/in/martin-myrmarker-26b072150', '_blank');
    });
    $( ".fa-github" ).click(function() {
        window.open('https://github.com/MartinMyr', '_blank');
    });


    $( ".about-button" ).click(function() {
        var textAboutMe = "<p>\n" +
            "Hej!<br/><br/>\n" +
            "Martin heter jag, 25år och bosatt i Göteborg.<br/>\n" +
            "Pluggar just nu webbutveckling inom e-handel på Medieinstitutet och extrajobbar som webbutvecklare på Direktonline.<br/>\n" +
            "Brinner för teknik och utveckling\n" +
            "</p>"

        $(".popup").css("background-color", "rgba(255, 255, 255)");
        $(".popup>i").show();
        $(".popup").show();
        $(".popup>.text").html(textAboutMe);
    });

    $( ".contact-button" ).click(function() {
        var textContact = "<p>Martin Myrmarker<br/><br/>"+
            "<a href='mailto:martin@myrmarker.se'>martin@myrmarker.se</a><br/><br/>"+
            "070 7945070"
        $(".popup").css("background-color", "rgba(255, 255, 255)");

        $(".popup>i").show();
        $(".popup").show();
        $(".popup>.text").html(textContact);
    });

    $(".fa-times").click(function(){
        $(this).parents('.popup').css("background-color", "rgba(255, 255, 255, 0.00)");
        $(this).hide();
        $(this).next().children().remove();

    });



});