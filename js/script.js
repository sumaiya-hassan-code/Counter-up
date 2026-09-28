let counterup = document.querySelectorAll(".counterup")

let arr = Array.from(counterup)

arr.map((item)=>{
    let count = 0

    function counterup() {
        count++

        item.innerHTML=count

        if(count == item.dataset.number){
            clearInterval(stop)
        }

    }

    let stop = setInterval(function(){
        counterup()
    }, 10000/item.dataset.number)
})