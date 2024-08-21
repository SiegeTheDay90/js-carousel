
document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll("carousel");

    for(const carousel of carousels){
        const images = carousel.querySelectorAll("img"); // All images inside the carousel
        carousel.dataset.index ||= 0; // Starts index at 0 if not otherwise set
        carousel.dataset.width ||= 400; // Sets width to 400 if not otherwise set
        


        for(let i = 0; i < images.length; i++){ // Hide images after the first iamge
            const image = images[i];

            image.width = carousel.dataset.width;

            if(i != carousel.dataset.index){
                image.style.display = "none";
            }
        }

        carousel.appendChild(document.createElement("br"))

    

        const forwardButton = document.createElement("button"); // Create forward and back buttons
        forwardButton.innerText = "Next";
        forwardButton.dataset.direction = "forward"
        forwardButton.classList.add("control-button");
        forwardButton.addEventListener('click', handleClick);
        carousel.appendChild(forwardButton);
        
        
        const backButton = document.createElement("button");
        backButton.innerText = "Back";
        backButton.dataset.direction = "back"
        backButton.addEventListener('click', handleClick);
        backButton.classList.add("control-button");
        carousel.appendChild(backButton);


        function handleClick(e){ // Handles clicks of both the forward and back buttons
            e.preventDefault();
            let idx = carousel.dataset.index;
            const direction = e.target.dataset.direction;

            if(idx < images.length-1 && direction === "forward"){ 
                images[idx].style.display = "none";
                idx = carousel.dataset.index -= -1;
                images[idx].style.display="block";
            } else if(idx > 0 && direction === "back") {
                images[idx].style.display = "none";
                idx = carousel.dataset.index -= 1;
                images[idx].style.display="block";
            } else {
                console.error("Can't do that.")
                return undefined;
            }

        }

    }

    console.log("Found", carousels.length, "carousels.");
})