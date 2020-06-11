const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        window.location.href = `/recipes/${videoId}`
    })
}

const showHides = document.querySelectorAll('h4')

for (let showHide of showHides){

    // let selector = document.querySelector('.topic-content').classList.toggle('hide')

    showHide.addEventListener("click", function(){        

        if(showHide.getAttribute("id") ===  "1" && showHide.innerHTML === "MOSTRAR"){
            document.querySelector('.topic_content_ingredients').classList.toggle('hide')

            document.getElementById("1").innerHTML = "ESCONDER"

        } else if (showHide.getAttribute("id") ===  "1"  && showHide.innerHTML === "ESCONDER"){
            document.querySelector('.topic_content_ingredients').classList.toggle('hide')

            document.getElementById("1").innerHTML = "MOSTRAR"

        } else if(showHide.getAttribute("id") ===  "2" && showHide.innerHTML === "MOSTRAR"){
            document.querySelector('.topic_content_preparation').classList.toggle('hide')

            document.getElementById("2").innerHTML = "ESCONDER"
            
        } else if (showHide.getAttribute("id") ===  "2" && showHide.innerHTML === "ESCONDER"){
            document.querySelector('.topic_content_preparation').classList.toggle('hide')

            document.getElementById("2").innerHTML = "MOSTRAR"

        } else if(showHide.getAttribute("id") ===  "3" && showHide.innerHTML === "MOSTRAR"){
            document.querySelector('.topic_content_information').classList.toggle('hide')

            document.getElementById("3").innerHTML = "ESCONDER"
            
        } else if (showHide.getAttribute("id") ===  "3" && showHide.innerHTML === "ESCONDER"){
            document.querySelector('.topic_content_information').classList.toggle('hide')

            document.getElementById("3").innerHTML = "MOSTRAR"
        }
    })
}






