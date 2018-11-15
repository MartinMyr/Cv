$( document ).ready(function() {
    $(".fa-times").hide();
    $(".popup").hide();

    $( ".fa-linkedin" ).click(function() {
        window.open(' https://www.linkedin.com/in/martin-myrmarker-26b072150', '_blank');
    });
    $( ".fa-github" ).click(function() {
        window.open('https://github.com/MartinMyr', '_blank');
    });


    $( ".about-button" ).click(function() {
        var textAboutMe = "<p>" +
            "Hej!<br/><br/>" +
            "Martin heter jag, 25år och bosatt i Göteborg.<br/>" +
            "Pluggar just nu webbutveckling inom e-handel på Medieinstitutet och extrajobbar som webbutvecklare på Direktonline.<br/>" +
            "Brinner för teknik och utveckling\n" +
            "</p>";
        $(".popup>i").show();
        $(".popup>.text").html(textAboutMe);
        $(".popup").slideDown(1000);
    });

    $( ".contact-button" ).click(function() {
        var textContact = "<p>" +
            "<br/>Martin Myrmarker<br/><br/>" +
            "<a href='mailto:martin@myrmarker.se'>martin@myrmarker.se</a><br/><br/>" +
            "070 7945070" +
            "</p>";
        $(".popup>i").show();
        $(".popup>.text").html(textContact);
        $(".popup").slideDown(1000);
    });

    $(".fa-times").click(function(){
        $(this).parents('.popup').css("background-color", "rgba(255, 255, 255, 0.00)");
        $(".popup").hide(1000);
        $(this).hide();

        $(this).next().children().remove();

    });



});