"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const client_id = "mgVKeIcqEtlNSTUA_SWmq9vLw5vyYLxb8IpgHgH4lhs";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();

/*const quotes = [
    {
        quote: "Remorseless Labor Conquers All",
        author: "Virgil",
    },

    {
        quote: "I can do all things through Christ who strengthens me.",
        author: "Philippians 4:13",
    },

    {
        quote: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
    }
]
function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}
setTimeout(loopThroughQuotes, 3000);*/