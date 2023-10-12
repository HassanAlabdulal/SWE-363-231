let services = [
    {
        "icon" : "fa-solid fa-code",
        "header" : "HTML/CSS Development",
        "description" : "Writing clean, semantic HTML and CSS code to structure and style web pages, ensuring properpresentation and responsiveness across different devices"
        
    },

    {
        "icon" : "fa-brands fa-react",
        "header" : "JavaScript Frameworks",
        "description" : "Implementing interactive and dynamic elements on web pages  JavaScript frameworks and libraries such as React, Angular."
        
    },

    {
        "icon" : "fa-brands fa-bootstrap",
        "header" : "CSS Frameworks",
        "description" : "Creating mobile-responsive layouts using CSS frameworks (e.g., Bootstrap, Foundation) or CSS Grid and Flexbox."
        
    },
    {
        "icon" : "fa-solid fa-mobile-screen-button",
        "header" : "Responsive Web Design",
        "description" : "Ensuring that websites are optimized for various screen sizes and devices, providing a seamless user experience across desktops, tablets, and mobile devices."
        
    },
    {
        "icon" : "fa-brands fa-figma",
        "header" : "User Experience (UX)",
        "description" : "Createing intuitive navigation and user workflows. Ensuring that interactive elements have appropriate feedback."
        
    }
]

let projects = [
    {
       "src" : "assets/To Do List.png",
       "header" : "To Do List",
       "description" : "This Web Application helps individuals stay organized and productive by providing a platform to manage their tasks efficiently.",
       "link" : "https://frolicking-kheer-037a2b.netlify.app/"
    },
    {
       "src" : "assets/background.png",
       "header" : "KFUPM Gym",
       "description" : " A complete software system helps KFUPM Gym manage and keep track of the trainee’s progress and organize the sessions for each trainer.",
       "link" : "https://github.com/HassanAlabdulal/SWE206-Project"
    },
    {
       "src" : "assets/ticTac-Image.png",
       "header" : "Tic Tac Toe",
       "description" : "It is a classic, two-player game where the goal is to complete a row, column, or diagonal with either three 'X's or 'O's on a 3x3 grid.",
       "link" : "ticTacToe.html"
    },

    {
       "src" : "assets/currencyExchange.png",
       "header" : "Currency Exchange",
       "description" : "A web application designed to deliver precise and instantaneous currency conversion.",
       "link" : "CurrencyExchange/index.html"
    }
]

function fillServicesInThePage(){
    document.getElementById("services-content").innerHTML = ""

    for(let service of services){
        let content = `
            <div class="services-card">
                <div class="icon">
                    <i class="${service.icon}"></i>
                </div>
                <div class="info">
                    <h3>${service.header}</h3>
                    <p>${service.description}</p>
                </div>
            </div>`

        document.getElementById("services-content").innerHTML += content

    }
}

fillServicesInThePage()

function fillProjectsInThePage(){
    document.getElementById("container").innerHTML = ""

    for(let project of projects){
        let content = `
            <div class="project-card">
                <div class="face face1">
                    <div class="card-content">
                        <img src="${project.src}" >
                    </div>
                </div>

                <div class="face face2">
                    <div class="card-content">
                        <h3>${project.header}</h3>
                        <p>
                        ${project.description}
                        </p>
                        <a href="${project.link}" target="_blank">More Details</a>
                    </div>
                </div>
            </div>`

        document.getElementById("container").innerHTML += content

    }
}

fillProjectsInThePage()