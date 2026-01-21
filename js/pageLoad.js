async function loadPage() {
    const params = new URLSearchParams(window.location.search);
    const destiId = params.get('id'); 

    if (!destiId) {
        window.location.href = 'index.html'; 
        return;
    }

    try {
        const response = await fetch('desti.json');
        const data = await response.json();

        const myDest = data.find(item => item.id == destiId);

        if (myDest) {
            document.getElementById('desti-title').innerText = myDest.title;
            document.getElementById('desti-image').src = myDest.image;
            document.getElementById('desti-description').innerText = myDest.description;
            document.getElementById('desti-duration').innerText = "Duration: " + myDest.duration + " days";
            document.getElementById('desti-price').innerText = "Price: PKR " + myDest.price;
            
            document.title = "Pak Route | " + myDest.title;
        } else {
            document.querySelector('main').innerHTML = "<h1>Destination Not Found!</h1>";
        }

    } catch (error) {
        console.error("Error loading detail:", error);
    }
}
loadPage();