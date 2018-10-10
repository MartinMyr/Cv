<!DOCTYPE html>
<html>
<head>
    <title>Martin.M</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
<div id="container">
    <div id="content">

            <div class="navbar" id="nav">
                <div class="logo"></div>
                <div class="linkWrapper">
                    <a href="#content">Hem</a>
                    <a href="#case">Case</a>
                    <a href="#about">Om</a>
                    <a href="#contact">Kontakt</a>
                </div>
                <div class="socialIconsStart">
                    <i class="fab fa-linkedin fa-2x"></i>
                    <i class="fab fa-github fa-2x"></i>
                </div>
            </div>

        <div id="start">
            <h1 class="start-text">Martin</h1>
            <h1 class="start-text">Myrmarker</h1>
            <p class="start-p">PROGRAMMING - BACKEND - FRONTEND</p>
        </div>
        <div id="case">
            <h1 class="caseHeader">CASE</h1>
            <div id="caseBoxWrapper">
                <div class="caseBox"></div>
                <div class="caseBox"></div>
                <div class="caseBox"></div>
            </div>
        </div>
        <div id="about">
            <div class="portrait">
                <div class="portraitImg"></div>
            </div>
            <div class="textAboutMe">
                <p>
                   text om mig....
                </p>
            </div>
            <div class="aboutHeader">
                <h1 class="aboutH">OM</h1>
            </div>
        </div>
        <div id="contact">
            <div class="socialIcons">
                <i class="fab fa-linkedin fa-2x"></i>
                <i class="fab fa-github fa-2x"></i>
            </div>
            <div class="contact-info">
                <p>Martin Myrmarker</p>
                <p>martin@myrmarker.se</p>
                <p>070-7945070</p>

                <p>eller:</p><br/>
            </div>
            <form class="emailForm" method="post">
                <label>Namn</label><br/>
                <input class="contactForm" type="text"/><br/>
                <label>Email</label><br/>
                <input class="contactForm" type="email"/><br/>
                <label>Meddelande</label><br/>
                <textarea class="contactForm"></textarea><br/>
                <button class="submitButton" type="submit" >Skicka</button>
            </form>
            <h1 class="contactHeader">KONTAKT </h1>
        </div>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>