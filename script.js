const toggleButton = document.getElementById("navToggleButton");
const navigationMenu = document.getElementById("navMenu");
const menuIcon = document.getElementById("hamburgerIcon");

toggleButton.addEventListener('click', ()=> {
        navigationMenu.classList.toggle("reveal");

    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.replace("fa-bars","fa-xmark");
    }else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
    
});

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    const navigationMenu = document.getElementById("navMenu");
    sections.forEach(section => {
        section.style.display = "none";
    });

    const selectedSection = document.getElementById(sectionId)
    if (selectedSection) {
        selectedSection.style.display = "block";
        navigationMenu.classList.remove("reveal");  // HIDES THE NAVBAR WHEN A SECTION IS SELECTED
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    } else {
        console.error(`Section for "${sectionId}" does not exist!`);
        return;
    }


    switch(sectionId) {
        case 'home':
            document.title = "Home | SnapCaps";
            break;
        case 'gallery':
            document.title = "Gallery | SnapCaps";
            break;
        case 'about':
            document.title = "About | SnapCaps";
            break;
        case 'contact':
            document.title = "Contact | SnapCaps";
            break;
        default:
            document.title = "SnapCaps";
    }
}



const contactModal = document.getElementById("contactModal");
const openContactModal = document.getElementById("helpModal");
const closeContactModal = document.getElementsByClassName("exit")[0];

openContactModal.onclick = function() {
    contactModal.style.display = "block";
}

closeContactModal.onclick = function() {
    contactModal.style.display = "none";
}

window.onclick = function(close) {
    if (close.target == contactModal) {
        contactModal.style.display = "none";
    }
}





