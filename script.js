let root = document.getElementById("root");


class todoList{
    constructor(place, title = ""){

        this.place = place;
        this.title = title;
        this.cardArray = [];

        this.render();
    }

    addToDo(){
        let text = this.input.value;
        this.cardArray.push(new Card(text, this.div, this));
    }

    render(){
        this.createToDoListElement();
        this.place.append(this.todoListElement);
    }

    createToDoListElement(){

        
        this.deleteButton = document.createElement('button');
        this.deleteButton.innerText = "X";
        
        this.deleteButton.classList.add("btn-save");
        this.h2 = document.createElement('h2');
        this.h2.innerText = this.title;
        this.input = document.createElement('input');
        
        this.button = document.createElement('button');
        this.button.innerText = 'Add';
        this.button.classList.add("btn-save");
        this.button.id = "to-do-list-button";
        this.div = document.createElement('div');
        this.todoListElement = document.createElement('div');


        this.button.addEventListener('click', ()=>{
            if(this.input.value != ""){
                this.addToDo.call(this);
                this.input.value = "";
            }
        });
        this.deleteButton.addEventListener('click', ()=>{
            this.deleteCard.call(this);
        });

    

        
        this.todoListElement.append(this.deleteButton);
        this.todoListElement.append(this.h2);
        
        this.todoListElement.append(this.input);
        this.todoListElement.append(this.button);
        
        this.todoListElement.append(this.div);
        this.todoListElement.classList.add("todoList");
    }
    

    
    deleteCard(){
        this.todoListElement.remove();
        let i = this.todoList.todoListElement.indexOf(this);
        this.todoList.todoListElement.splice(i,1);
}
}

class Card{
    constructor(text, place, todoList){

        this.place = place;
        this.todoList = todoList;
        this.state = {
            text: text,
        }
        this.render();
    }

    render(){
        this.card = document.createElement('div');
        this.card.classList.add("card");
       

        this.p = document.createElement('p');
        this.p.innerText = this.state.text;

        this.deleteButton = document.createElement('button');
        this.deleteButton.innerText = "X";
        this.deleteButton.addEventListener('click', ()=>{
            this.deleteCard.call(this);
        });

        this.card.append(this.p);
        this.card.append(this.deleteButton);
        
        this.place.append(this.card);
    }

    deleteCard(){
        this.card.remove();
        let i = this.todoList.cardArray.indexOf(this);
        this.todoList.cardArray.splice(i,1);
    }
}


let addTodoListInput = document.getElementById("addTodoListInput");
let addTodoListButton = document.getElementById("addTodoListButton");

addTodoListButton.addEventListener('click',()=>{
   if ( addTodoListInput.value.trim() != ""){
    new todoList(root, addTodoListInput.value);
    addTodoListInput.value = "";
   }
});
