const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const done = document.getElementById('done-list')
const input = document.getElementById('todo-text')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
 count = 0
function newTodo() {
    count++
    li = document.createElement('li');
    li.className = `list-item`;
    p = document.createElement('p');
    p.innerHTML = input.value;
    const delButton = document.createElement('button');
    delButton.id = `todo-delete${count}`;
     delButton.innerHTML = 'Delete';
     const doneButton = document.createElement('button');
     doneButton.innerHTML = 'Done';
     doneButton.id = `todo-checkbox${count}`
     li.appendChild(p)
     li.appendChild(delButton)
     li.appendChild(doneButton)
     list.append(li)
     input.value = ''

     document.querySelector("#"+delButton.id).addEventListener('click',  () => {

     	document.querySelector("#"+delButton.id).parentNode.remove()
     
     })

     document.querySelector("#"+doneButton.id).addEventListener('click',  () => {

        	done.append(document.querySelector("#"+doneButton.id).parentNode)
        		document.querySelector("#"+doneButton.id).remove()
     
     })

}


	

