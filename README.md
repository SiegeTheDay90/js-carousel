# JavaScript Image Carousel

## Created with Vanilla JS

###
Accepts attributes: data-index, data-width

### Front and Back Buttons handle clicks with this function
```javascript
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
```
