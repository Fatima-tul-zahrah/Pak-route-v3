async function loadDesti() {
    const destiContainer = document.querySelector('.desti-p');
    try{
      const response = await fetch('desti.json');
       const data = await response.json();
         data.forEach(desti => {
              const destiDiv = document.createElement('div');
              destiDiv.classList.add('desti-c');
              destiDiv.innerHTML = `
                <a href="destination.html?id=${desti.id}">
                    <img src="${desti.image}" alt="${desti.title}">
                    <div class="dest-cc">
                        <div class="desti-ccc">
                            <h3>${desti.title}</h3>
                            <p>${desti.description}</p>
                            <br>
                            <button class="buttontour">View Tour</button>
                        </div>
                    </div>
                </a>`;
              destiContainer.appendChild(destiDiv);
         })
    }
    catch(error) {
        console.error("Error loading destinations:", error);
    }
}
loadDesti();