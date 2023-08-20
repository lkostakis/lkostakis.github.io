const homeSection = document.querySelector("#home h2");
const originalHomeText = "Welcome to my personal web page! " +
                        "Here you can learn more about me, my interests, and my work. " +
                        "Feel free to explore and get in touch if you have any questions or just want to say hello!<br> Thank you for visiting!";

const skipIntroSection = document.querySelector('#skip-intro');
skipIntroSection.innerHTML = "&lt;Tap anywhere to skip intro&gt;"

let indexHome = 0;
let skipAnimation = 0

function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark mode is enabled
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        // Light mode is enabled
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}
  
detectSystemTheme();

document.addEventListener("click", function() {
    skipAnimation = 1;
    clearInterval(delayThreeSeconds);
    homeSection.innerHTML = originalHomeText
    skipIntroSection.style.display = 'none';
    displaySections();
});

const delayThreeSeconds =  setInterval(() => {
    const displayWelcomeText = setInterval(() => {
        homeSection.innerHTML = originalHomeText.substring(0, indexHome++);
        if (indexHome > originalHomeText.length || skipAnimation ==1) {
            clearInterval(displayWelcomeText);
            homeSection.innerHTML = originalHomeText
        }
    }, 30);
    clearInterval(delayThreeSeconds);
}, 3000);

function displaySections() {
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(element => {
        element.style.display = 'block';
    });
}

(() => {
    const delaySections = setInterval(() => {
        if (skipAnimation !=1) {
            skipIntroSection.style.display = 'none';
            displaySections();
            clearInterval(delaySections)
        }
        clearInterval(delaySections)
    }, 9500)
})();

const menuLinks = document.querySelectorAll('.hidden a');
const contentDiv = document.querySelector('#content');
const aboutMe = '<p>I am a highly motivated software engineer with a passion for iOS Engineering, operating systems, and computer vision.' +
' I have a Master of Engineering degree (EQF level 7) from the <a href="https://engineering.uoi.gr/en/department-of-computer-science-and-engineering/" target="_blank">' +
' Department of Computer Science & Engineering, School of Engineering, University of Ioannina.</a></p>' +
'<p> During my studies, I have gained extensive knowledge in computer networks, algorithms, databases, and software architecture.' +
' I have also developed a keen interest in iOS app development, which led me to specialize in this field.</p>' +
' <p>After completing my degree, I served my mandatory military service.' +
' During my military service, I was honored by the Hellenic Air Force (HAF) for developing software for the management of the warehouse and ' + 
' making a monthly prediction of the costs of supplies and consumables. </p>' +
' <p>Apart from iOS engineering, I am also interested in operating systems and artificial intelligence.' +
' I am constantly looking for ways to expand my knowledge and stay up-to-date with the latest technologies and trends in these fields.' +
' By continuously learning and improving my skills, I am confident that I can make valuable contributions to any team or organization that I work with.</p>' +
' <p>In my free time, I enjoy reading books on computer science and technology, watching sports, and going to gym.' +
' <p>You can find me at: <a href="https://www.github.com/lkostakis" target="_blank"><img src="Assets/github.png" alt="Github"></a>' +
' or <a href="https://www.linkedin.com/in/eleftherios-kostakis/" target="_blank"><img src="Assets/linkedin.png" alt="LinkedIn"></a>' +
'</p> <p>Email Account: lp.kostakis@gmail.com</p>';

const education = '<p>I hold a Master of Engineering degree (EQF level 7) from the <a href="https://engineering.uoi.gr/en/department-of-computer-science-and-engineering/" target="_blank">' +
'Department of Computer Science & Engineering, School of Engineering, University of Ioannina.</a></p>' +
'<p>Thesis title: Image inpainting using generative adversarial networks (GANs).</p>' +
'<p>In this thesis, a modified method of the inversion approach was proposed to apply well-trained GANs' +
'as an effective prior to image inpainting tasks. Two different types of attention modules were applied to the original work ' +
'of multi-code GAN prior (mGANprior), including Self-Attention with scaled-dot product as well as dot product scoring functions, ' +
' and Convolutional Block Attention Module (CBAM). To evaluate the proposed multi-code GAN prior with attention layers, three LSUN datasets were used.</p>' +
'<p>Technologies used: PyTorch, Secure Shell (SSH).</p>' +
'<p>You can find my thesis online at: <a href="/Documents/kostakis_thesis.pdf" target="_blank">kostakis_thesis.pdf</a>.</p>';
contentDiv.innerHTML = aboutMe;

const experience = '<h2 class="experience-title"> Junior iOS Engineer at <a class="experience-content" href="https://www.afse.eu/" target="_blank">Advantage FSE</a></h2>' +
'<h3>January 2023 - Current</h3>' +
'<ul class="experience-content">' +
'<li>Modelling, developing and maintaining company’s iOS app banking solution.</li>' +
'<li>Collaborating with designers, product managers, and QA engineers.</li>' +
'<li>Codebase transition from Objective-C to Swift.</li>' +
'<li>Shipping banking apps to production.</li>' +
'<li>Working in Agile environment.</li>' +
'</ul>' +
'<h2 class="experience-title"> Software Engineer Trainee at <a class="experience-content" href="https://www.afse.eu/" target="_blank">Advantage FSE</a></h2>' +
'<h3>October 2022 - December 2022</h3>' +
'<ul class="experience-content">' +
'<li>Basic principles of Object-Oriented Programming (OOP).</li>' +
'<li>Solid understanding of RESTful APIs and JSON.</li>' +
'<li>Developed end-to-end web application.</li>' +
'</ul>' + 
'<h2 class="experience-title"> Information Technology Support Assistant at <a class="experience-content" href="https://www.haf.gr/" target="_blank">Hellenic Air Force</a></h2>' +
'<h3>November 2021 - August 2022</h3>' +
'<p>During my military service, I was honored by the Hellenic Air Force (HAF) for developing software for the ' +
'management of the warehouse and making a monthly prediction of the costs of supplies and consumables.</p>' +
'<p>Technologies used: Java, javafx, PostgreSQL and Log4j2.</p>';

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const href = link.getAttribute('href');
        switch (href) {
            case '#about-me':
                contentDiv.innerHTML = aboutMe;
            break;
          case '#education':
              contentDiv.innerHTML = education;
              break;
          case '#experience':
              contentDiv.innerHTML = experience;
              break;
        default:
              contentDiv.innerHTML = 'Default text';
    }
  });
});

$("#links a").click(function () {
    $("#links a").removeClass("active");
    $(this).addClass("active");
    var sectionId = $(this).attr("href");
    $("#content div").hide();
    $(sectionId).show();
});