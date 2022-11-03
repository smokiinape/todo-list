let url = "people.json"
let list = document.createElement("dontDieForNyash")

async function getSomething() {
    let response = await fetch(url);
    if(response.ok) {
        let data = await response.json();
        console.log(data);

        data.tasks.forEach(element => {
            let josef = document.createElement("li");
            josef.innerHTML = element.namn;
            todo.appendChild(josef);

           
            

            
        });


        
        






    } else {
        console.log("HTTP-Error" + response.status);
    }
}

 getSomething();
