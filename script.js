const homeSection = document.querySelector("#home h2");
const originalHomeText = "Welcome to my personal web page! " +
                        "Here you can learn more about me, my interests, and my work. " +
                        "Feel free to explore and get in touch if you have any questions or just want to say hello!<br> Thank you for visiting!";
let indexHome = 0;
let skipAnimation = 0

document.addEventListener("click", function() {
    skipAnimation = 1;
    clearInterval(delayThreeSeconds);
    homeSection.innerHTML = originalHomeText
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
            displaySections();
            clearInterval(delaySections)
        }
        clearInterval(delaySections)
    }, 9500)
})();



const menuLinks = document.querySelectorAll('.hidden a');
const contentDiv = document.querySelector('#content');
const aboutMe = '<p>I am a highly motivated software engineer with a passion for iOS Engineering, operating systems, and artificial intelligence.' +
' I have a Master of Engineering degree (EQF level 7) from the Department of Computer Science & Engineering, School of Engineering, University of Ioannina.</p>' +
'<p> My academic background and work experience have provided me with a strong foundation in programming languages, software development, and engineering principles.' +
' During my studies, I have gained extensive knowledge in computer networks, algorithms, databases, and software architecture.' +
' I have also developed a keen interest in iOS app development, which led me to specialize in this field.</p>' +
' <p>After completing my degree, I started working as an iOS engineer in a company named Advantage.' +
' My role involves developing, testing, and implementing high-quality iOS applications for our clients.' +
' I am responsible for designing and implementing features, fixing bugs, and maintaining the codebase.' +
' I work closely with the design team to ensure that the applications are user-friendly and visually appealing.</p>' +
' <p>Apart from iOS engineering, I am also interested in operating systems and artificial intelligence.' +
' I am constantly looking for ways to expand my knowledge and stay up-to-date with the latest technologies and trends in these fields.' +
' I believe that by continuously learning and improving my skills, I can become a more effective and valuable software engineer.</p>' +
' <p>In my free time, I enjoy reading books on computer science and technology.' +
' I also like to experiment with new programming languages and frameworks to broaden my knowledge and skillset.' +
' Additionally, I like to attend tech conferences and events to network with other professionals in the field and learn about new developments in the industry.</p>' +
'<p>Overall, my passion for software engineering, iOS development, operating systems, and artificial intelligence has driven me to pursue a career in this exciting field.'+
' With my skills and experience, I am confident that I can make valuable contributions to any team or organization that I work with.</p>' +
' <p>You can find me at: <a href="https://www.github.com/terrys48" target="_blank"><img src="Assets/github.png" alt="Github"></a>' +
' or <a href="https://www.linkedin.com/in/eleftherios-kostakis/" target="_blank"><img src="Assets/linkedin.png" alt="LinkedIn"></a>' +
'</p> <p>Email Account: lp.kostakis@gmail.com</p>';

 contentDiv.innerHTML = aboutMe;

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const href = link.getAttribute('href');
        switch (href) {
            case '#about-me':
                contentDiv.innerHTML = aboutMe;
            break;
          case '#education':
              contentDiv.innerHTML = '<p>I hold a Master of Engineering degree (EQF level 7) from the Department ' +
              'of Computer Science & Engineering, School of Engineering, University of Ioannina.</p>'+'<p>I hold a Master of Engineering degree (EQF level 7) from the Department ' +
              'of Computer Science & Engineering, School of Engineering, University of Ioannina.</p>'+'<p>I hold a Master of Engineering degree (EQF level 7) from the Department ' +
              'of Computer Science & Engineering, School of Engineering, University of Ioannina.</p>'+'<p>I hold a Master of Engineering degree (EQF level 7) from the Department ' +
              'of Computer Science & Engineering, School of Engineering, University of Ioannina.</p>';
              break;
          case '#skills':
              contentDiv.innerHTML = '<p>Here are my skills and abilities.</p>';
              break;
        default:
              contentDiv.innerHTML = 'diuadiawhduiauwduhiwaahuidhuaw';
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