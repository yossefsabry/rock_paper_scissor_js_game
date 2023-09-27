let items = document.querySelectorAll('.item img'),
    itemPar = document.querySelectorAll('.item p'),
    userImage = document.querySelector(".user-images img"),
    title = document.querySelector(".results"),
    cpuImage = document.querySelector(".cpu-images img");


// loop for every item
items.forEach((item) => {
    item.addEventListener('click', function () {
        /**
         * call the main function 
         * @param {item} : rock paper scissors
         */

        checkGame(item)
    })
})

// the  main function
function checkGame(el) {
    title.textContent = "wait .."
    userImage.style.cssText = "  animation: userShake 0.7s ease infinite;"
    cpuImage.style.cssText = "  animation: cpuShake 0.7s ease infinite;"
    userImage.src = "images/rock.png"
    cpuImage.src = "images/rock.png"

    let time = setTimeout(() => {
        userImage.style.cssText = "  animation: none;"
        cpuImage.style.cssText = "  animation: none;"
        // user option
        let userOption = el.src;
        userImage.src = userOption;

        // cpu option
        let images = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        let randomNumber = Math.floor(Math.random() * 3);
        let cpuOption = images[randomNumber];
        cpuImage.src = cpuOption;
        if (userOption.slice(22,) === cpuOption) {
            title.textContent = "It's a Draw!";
        } else if (
            (userOption.slice(22,) === images[0] && cpuOption === images[2]) ||
            (userOption.slice(22,) === images[1] && cpuOption === images[0]) ||
            (userOption.slice(22,) === images[2] && cpuOption === images[1])
        ) {
            title.innerHTML = "Player Win!";
        } else {
            title.innerHTML = "Player lose!";
        }
    }, 2000)

}

