// let post = document.getElementById('post')

//  post.addEventListener('click',()=>{
//     let div = document.getElementsByClassName('postBox');
//     postBox.classList.remove('postBox');


//  })


let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', () => {
    let input = document.getElementById('userName').value
    let description = document.getElementById('descrip').value
    let file = document.getElementById('getImg').value

    let container = document.getElementById('main-content')


    container.innerHTML += 
       `<div class="card">
           <div>
                <img class="type" src="https://orig00.deviantart.net/e197/f/2016/082/6/2/random_character_by_tabanei-d9w51au.png"alt="Image is Loading">
                <h2>${input}</h2>
            </div>
            <p>${description}</p>
        </div>`;
    input.value = "";
    description = "";
    file = "";
})











