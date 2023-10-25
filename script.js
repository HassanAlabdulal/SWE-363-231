// let services = [
//     {
//         "icon" : "fa-solid fa-code",
//         "header" : "HTML/CSS Development",
//         "description" : "Writing clean, semantic HTML and CSS code to structure and style web pages, ensuring properpresentation and responsiveness across different devices"
        
//     },

//     {
//         "icon" : "fa-brands fa-react",
//         "header" : "JavaScript Frameworks",
//         "description" : "Implementing interactive and dynamic elements on web pages  JavaScript frameworks and libraries such as React, Angular."
        
//     },

//     {
//         "icon" : "fa-brands fa-bootstrap",
//         "header" : "CSS Frameworks",
//         "description" : "Creating mobile-responsive layouts using CSS frameworks (e.g., Bootstrap, Foundation) or CSS Grid and Flexbox."
        
//     },
//     {
//         "icon" : "fa-solid fa-mobile-screen-button",
//         "header" : "Responsive Web Design",
//         "description" : "Ensuring that websites are optimized for various screen sizes and devices, providing a seamless user experience across desktops, tablets, and mobile devices."
        
//     },
//     {
//         "icon" : "fa-brands fa-figma",
//         "header" : "User Experience (UX)",
//         "description" : "Createing intuitive navigation and user workflows. Ensuring that interactive elements have appropriate feedback."
        
//     }
// ]

// let projects = [
//     {
//        "src" : "assets/To Do List.png",
//        "header" : "To Do List",
//        "description" : "This Web Application helps individuals stay organized and productive by providing a platform to manage their tasks efficiently.",
//        "link" : "https://frolicking-kheer-037a2b.netlify.app/"
//     },
//     {
//        "src" : "assets/background.png",
//        "header" : "KFUPM Gym",
//        "description" : " A complete software system helps KFUPM Gym manage and keep track of the trainee’s progress and organize the sessions for each trainer.",
//        "link" : "https://github.com/HassanAlabdulal/SWE206-Project"
//     },
//     {
//        "src" : "assets/ticTac-Image.png",
//        "header" : "Tic Tac Toe",
//        "description" : "It is a classic, two-player game where the goal is to complete a row, column, or diagonal with either three 'X's or 'O's on a 3x3 grid.",
//        "link" : "ticTacToe.html"
//     },

//     {
//        "src" : "assets/currencyExchange.png",
//        "header" : "Currency Exchange",
//        "description" : "A web application designed to deliver precise and instantaneous currency conversion.",
//        "link" : "currencyExchange.html"
//     }
// ]


// Create a class for the main objects
class WebsiteItem {
    constructor(icon, header, description, src, link) {
        this.icon = icon || "";
        this.header = header || "";
        this.description = description || "";
        this.src = src || "";
        this.link = link || "";
    }
}

// Create instances using the WebsiteItem class

// Services
let services = [
    new WebsiteItem("fa-solid fa-code", "HTML/CSS Development", "Writing clean, semantic HTML and CSS code to structure and style web pages, ensuring properpresentation and responsiveness across different devices"),
    new WebsiteItem("fa-brands fa-react", "JavaScript Frameworks", "Implementing interactive and dynamic elements on web pages  JavaScript frameworks and libraries such as React, Angular."),
    new WebsiteItem("fa-brands fa-bootstrap", "CSS Frameworks", "Creating mobile-responsive layouts using CSS frameworks (e.g., Bootstrap, Foundation) or CSS Grid and Flexbox."),
    new WebsiteItem("fa-solid fa-mobile-screen-button", "Responsive Web Design", "Ensuring that websites are optimized for various screen sizes and devices, providing a seamless user experience across desktops, tablets, and mobile devices."),
    new WebsiteItem("fa-brands fa-figma", "User Experience (UX)", "Createing intuitive navigation and user workflows. Ensuring that interactive elements have appropriate feedback."),
    
];

// Projects
let projects = [
    new WebsiteItem(null, "To Do List", "This Web Application helps individuals stay organized and productive by providing a platform to manage their tasks efficiently.", "assets/To Do List.png", "https://frolicking-kheer-037a2b.netlify.app/"),
    new WebsiteItem(null, "KFUPM Gym", "A complete software system helps KFUPM Gym manage and keep track of the trainee’s progress and organize the sessions for each trainer.", "assets/background.png", "https://github.com/HassanAlabdulal/SWE206-Project"),
    new WebsiteItem(null, "Tic Tac Toe", "It is a classic, two-player game where the goal is to complete a row, column, or diagonal with either three 'X's or 'O's on a 3x3 grid.", "assets/ticTac-Image.png", "ticTacToe.html"),
    new WebsiteItem(null, "Currency Exchange", "A web application designed to deliver precise and instantaneous currency conversion.", "assets/currencyExchange.png", "currencyExchange.html"),

];

// function fillServicesInThePage() {
//     const servicesContent = services.map(service => `
//         <div class="services-card">
//             <div class="icon">
//                 <i class="${service.icon}"></i>
//             </div>
//             <div class="info">
//                 <h3>${service.header}</h3>
//                 <p>${service.description}</p>
//             </div>
//         </div>`).join('');

//     document.getElementById("services-content").innerHTML = servicesContent;
// }

// fillServicesInThePage();


class ServiceCard extends React.Component {
    render() {
        return (
            <div className="services-card">
                <div className="icon">
                    <i className={this.props.item.icon}></i>
                </div>
                <div className="info">
                    <h3>{this.props.item.header}</h3>
                    <p>{this.props.item.description}</p>
                </div>
            </div>
        );
    }
}

class ServicesList extends React.Component {
    render() {
        return (
            <section className="services-cards" id="services">
                <h2 className="title">Services</h2>
                <div className="content" id="services-content">
                    {services.map(service => <ServiceCard key={service.header} item={service} />)}
                </div>
            </section>
        );
    }
}

ReactDOM.render(<ServicesList />, document.getElementById('react-root'));


function fillProjectsInThePage() {
    const projectsContent = projects.map(project => `
        <div class="project-card">
            <div class="face face1">
                <div class="card-content">
                    <img src="${project.src}">
                </div>
            </div>
            <div class="face face2">
                <div class="card-content">
                    <h3>${project.header}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">More Details</a>
                </div>
            </div>
        </div>`).join('');

    document.getElementById("container").innerHTML = projectsContent;
}

fillProjectsInThePage();


// ========== Important comment ==========
// I used map to generate the individual HTML content for each service and project. 
// Then, the join('') method is used to concatenate all the individual contents into one string,
// which is then assigned to the innerHTML of their respective containers.

// Note: There isn't a clear use case for "reduce" or "filter" here.
// The map function seems to be the most relevant in this case.















// function fillServicesInThePage(){
//     document.getElementById("services-content").innerHTML = "";

//     for(let service of services){
//         let content = `
//             <div class="services-card">
//                 <div class="icon">
//                     <i class="${service.icon}"></i>
//                 </div>
//                 <div class="info">
//                     <h3>${service.header}</h3>
//                     <p>${service.description}</p>
//                 </div>
//             </div>`;

//         document.getElementById("services-content").innerHTML += content;
//     }
// }

// fillServicesInThePage();

// function fillProjectsInThePage(){
//     document.getElementById("container").innerHTML = "";

//     for(let project of projects){
//         let content = `
//             <div class="project-card">
//                 <div class="face face1">
//                     <div class="card-content">
//                         <img src="${project.src}" >
//                     </div>
//                 </div>
//                 <div class="face face2">
//                     <div class="card-content">
//                         <h3>${project.header}</h3>
//                         <p>
//                         ${project.description}
//                         </p>
//                         <a href="${project.link}" target="_blank">More Details</a>
//                     </div>
//                 </div>
//             </div>`;

//         document.getElementById("container").innerHTML += content;
//     }
// }

// fillProjectsInThePage();
