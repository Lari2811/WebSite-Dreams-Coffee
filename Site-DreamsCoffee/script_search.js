document.getElementById("search-icon").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value.trim().toLowerCase();

    // Eliminăm evidențierile anterioare
    removeHighlights();

    if (searchText === "") {
        alert("Introduceți un text pentru căutare!");
        return;
    }

    let found = false;

    // Căutăm în toate elementele din pagină, excluzând câmpul de căutare
    const elements = document.querySelectorAll("body *:not(#search-input):not(#search-icon)");

    elements.forEach((element) => {
        // 1. Procesăm textul vizibil din elemente
        if (element.children.length === 0) {
            const textContent = element.textContent.toLowerCase();
            if (textContent.includes(searchText)) {
                found = true;
                const regex = new RegExp(`(${searchText})`, "gi");
                element.innerHTML = element.innerHTML.replace(regex, `<mark class="highlight">$1</mark>`);
            }
        }

        // 2. Procesăm input-uri, textarea-uri sau alte elemente cu atribute `value` sau `placeholder`
        if (
            element.tagName === "INPUT" ||
            element.tagName === "TEXTAREA" ||
            element.tagName === "SELECT"
        ) {
            const value = (element.value || element.placeholder || "").toLowerCase();
            if (value.includes(searchText)) 
                {
                found = true;

                
                element.style.backgroundColor = "#ff0"; // Culoare galben deschis pentru light mode
                
            }   
        }

        // 3. Căutăm textul în interiorul elementelor <label> (inclusiv în cele ce conțin linkuri <a>)
        if (element.tagName === "LABEL") {
            const labelContent = element.textContent.toLowerCase();
            if (labelContent.includes(searchText)) {
                found = true;
                const regex = new RegExp(`(${searchText})`, "gi");
                element.innerHTML = element.innerHTML.replace(regex, `<mark class="highlight">$1</mark>`);
            }
        }
    });

    if (!found) {
        alert("Nu s-a găsit nicio potrivire pentru textul introdus.");
    }
});

function removeHighlights() {
    // Eliminăm toate evidențierile `mark`
    const highlights = document.querySelectorAll("mark.highlight");
    highlights.forEach((highlight) => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });

    // Eliminăm evidențierile din câmpurile input/textarea
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
        input.style.backgroundColor = ""; // Resetăm stilul de evidențiere
    });
}


//HELP// Deschide fereastra Help
function openHelpModal() {
    document.getElementById("helpModal").style.display = "block";
}

// Închide fereastra Help
function closeHelpModal() {
    document.getElementById("helpModal").style.display = "none";
}

// Deschide fereastra FAQ din Help
function openFAQ() {
    // Ascunde fereastra de ajutor
    document.getElementById("helpModal").style.display = "none";
    // Afișează fereastra FAQ
    document.getElementById("faqModal").style.display = "block";
}

// Închide fereastra FAQ
function closeFAQ() {
    document.getElementById("helpModal").style.display = "block";
    document.getElementById("faqModal").style.display = "none";
}

// Deschide fereastra de Live Chat
function openLiveChat() {
    // Ascunde fereastra de ajutor
    document.getElementById("helpModal").style.display = "none";

    document.getElementById("liveChatModal").style.display = "block";
}

// Închide fereastra de Live Chat
function closeLiveChatModal() {
    document.getElementById("helpModal").style.display = "block";
    document.getElementById("liveChatModal").style.display = "none";
}

// Simulează trimiterea unui mesaj și răspunsul automat
function sendMessage() {
    var userMessage = document.getElementById("userMessage").value;
    if (userMessage.trim() !== "") {
        // Adaugă mesajul utilizatorului în chat
        var userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("chat-message", "user-message");
        userMessageDiv.innerHTML = "<p>" + userMessage + "</p>";
        document.getElementById("chatBox").appendChild(userMessageDiv);
        
        // Golește zona de introducere a mesajului
        document.getElementById("userMessage").value = "";

        // Simulează un răspuns automat din partea botului
        setTimeout(function() {
            var botMessageDiv = document.createElement("div");
            botMessageDiv.classList.add("chat-message", "bot-message");
            botMessageDiv.innerHTML = "<p>Thank you for your message! We'll get back to you shortly.</p>";
            document.getElementById("chatBox").appendChild(botMessageDiv);
        }, 1000); // Așteaptă 1 secundă pentru răspuns automat
    }
}
