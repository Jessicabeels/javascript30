const todoList = document.getElementById("container")

const postForm = document.formStuff 

////GET///////////
//use axios to get list
function getStuff () { 
    axios.get("https://vschool-cors.herokuapp.com?url=https://api.vschool.io/dino/todo").then(function (response) {
        const todos = response.data
        listTodos(todos)
    }).catch(error => console.log(error))
}

function listTodos(todosArr) {
    for (let i = 0; i < todosArr.length; i++){
        //show up on the DOM, create elements
        const container = document.createElement('div')
        const title = document.createElement('h3')
        const age = document.createElement('h6')
        const description = document.createElement('h5')
        const pic = document.createElement('img')
        const delBtn = document.createElement('button')
        const checkbox = document.createElement('input')


        //edit the element / give it content
        container.classList.add("todo-container")
        title.textContent = todosArr[i].title
        pic.setAttribute("src", todosArr[i].imgUrl)
        pic.setAttribute("class", "api-img" )
        age.textContent = "$" + todosArr[i].age
        description.textContent=todosArr[i].description

        //second edits //why?
        container["data-todoID"] = todosArr[i]._id
        checkbox.type = 'checkbox'
        checkbox.className = 'my-checkboxes'
        console.log(checkbox)
        checkbox.checked = todosArr[i].completed 
        delBtn.textContent = 'Delete'
        delBtn.className ='my-delBtn'

        ////Checkbox PUT request for updating UI and DB
        checkbox.addEventListener("change", function(e){
            const ID = e.target.parentNode["data-todoID"]
            const updates = {
                completed: e.target.checked
            }
            //put request to mark it true/false completed/not completed
            axios.put(`httmps://api.vschool.io/dino/todo/${ID}`, updates).then(response => {
                todoList.innerHTML = ""
                getStuff()
            })
        })

        //Delete button DELETE request
        delBtn.addEventListener("click", function(e){
            const ID = e.targer.parentNode["data-todoID"]
            axios.delete(`https://api.vschool.io/dino/todo/${ID}`).then(response => {
                window.location.reload();
                e.target.parentNode.remove()
            })
        })

        container.appendChild(pic)
        container.appendChild(title)
        container.appendChild(description)
        // container.appendChild(age)

        todoList.appendChild(container)
        //adding to the container

     
    }
}
//form ///////// POST
///select form element

postForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        title: postForm.todoTitle.value,
        description: postForm.todoDescription.value,
        age: postForm.age.value,
        imgUrl: postForm.imgUrl.value
    }
    console.log(newTodo)
    postForm.title.value = ""

    axios.post("https://api.vschool.io/dino/todo/", newTodo).then(response => {
        window.location.reload();
    console.log(response);
        todoList.innerHTML = ""
        // getStuff()
    }).catch(err => console.log(err))
})


getStuff()

