// let arr = ['tse3.mm.bing.net/th?id=OIP.dR3G3gPqecoR-F2B9qqteAHaNK&pid=Api&P=0&h=220 ', 
//     'images.unsplash.com/photo-1507580433829-a0989f4d4469?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' ,
//     'orig00.deviantart.net/e197/f/2016/082/6/2/random_character_by_tabanei-d9w51au.png']

let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', () => {
    let input = document.getElementById('userName').value
    let description = document.getElementById('descrip').value
    let file = document.getElementById('getImg').value

    let container = document.getElementById('main-content')


    container.innerHTML += 
       `<div class="card">
           <div>
                <img class="type" src="https://${arr[0]}"alt="Image is Loading">
                <h2>${input}</h2>
            </div>
            <p>${description}</p>
        </div>`;
    input.value = "";
    description = "";
    file = "";
});