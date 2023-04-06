//new list button
import './styles.css';
import { deleteTasks } from './delete';
const contentRight = document.querySelector(".content-right");
let deleteButton = document.createElement("button");

function createList() {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    const form = document.createElement("form");
    form.classList.add("xform");
    const label = document.createElement("label");
    label.setAttribute("for", "subject");
    label.textContent = "Subject";
    label.style.marginBottom = "1rem";
    form.appendChild(label);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "subject");
    input.setAttribute("name", "subject");
    form.appendChild(input);
    const label2 = document.createElement("label");
    label2.setAttribute("for", "subjectText");
    label2.textContent = "Text";
    label2.style.marginTop = "1rem";
    label2.style.marginBottom = "1rem";
    form.appendChild(label2);
    const textarea = document.createElement("textarea");
    textarea.setAttribute("rows", "20");
    textarea.setAttribute("columns", "60");
    form.appendChild(textarea);
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");
    const create = document.createElement("button");
    create.classList.add("create");
    create.setAttribute("type", "submit");
    create.textContent = "Create";
    btnContainer.appendChild(create);
    const close = document.createElement("button");
    close.classList.add("close");
    close.setAttribute("type", "button");
    close.textContent = "Close";
    btnContainer.appendChild(close);
    form.appendChild(btnContainer);
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Priority:";
    fieldset.appendChild(legend);
    const div = document.createElement("div");
    const inputF = document.createElement("input");
    inputF.setAttribute("type", "checkbox");
    inputF.setAttribute("class", "high");
    inputF.setAttribute("name", "high");
    inputF.style.margin = "0.5rem";
    div.appendChild(inputF);
    const labelF = document.createElement("label");
    labelF.setAttribute("for", "high");
    labelF.textContent = "High priority";
    div.appendChild(labelF);
    fieldset.appendChild(div);
    const div2 = document.createElement("div");
    const inputF2 = document.createElement("input");
    inputF2.setAttribute("type", "checkbox");
    inputF2.setAttribute("class", "medium");
    inputF2.setAttribute("name", "medium");
    inputF2.style.margin = "0.5rem";
    div2.appendChild(inputF2);
    const labelF2 = document.createElement("label");
    labelF2.setAttribute("for", "medium");
    labelF2.textContent = "Medium priority";
    div2.appendChild(labelF2);
    fieldset.appendChild(div2);

    const div3 = document.createElement("div");
    const inputF3 = document.createElement("input");
    inputF3.setAttribute("type", "checkbox");
    inputF3.setAttribute("class", "low");
    inputF3.setAttribute("name", "low");
    inputF3.style.margin = "0.5rem";
    div3.appendChild(inputF3);
    const labelF3 = document.createElement("label");
    labelF3.setAttribute("for", "low");
    labelF3.textContent = "Low priority";
    div3.appendChild(labelF3);
    fieldset.appendChild(div3);
    form.appendChild(fieldset);

    popup.appendChild(form);
    //append popup form to contentRight
    contentRight.appendChild(popup);
    //create button
    create.addEventListener("click", function(event){
        event.preventDefault();
        const result = document.createElement("div");
        result.classList.add("result");
        const item = document.createElement("div");
        item.classList.add("list-item");
        item.textContent = input.value;
        result.appendChild(item);
        const hr = document.createElement("hr");
        result.appendChild(hr);
        const item2 = document.createElement("div");
        item2.classList.add("list-item");
        item2.textContent = textarea.value;
        result.appendChild(item2);
        deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteBtn");
        deleteButton.textContent = "Delete";
        result.appendChild(deleteButton);
        //append result (task) to contentRight
        contentRight.appendChild(result);

        const highPrio = form.querySelector(".high");
        const midPrio = form.querySelector(".medium");
        const lowPrio = form.querySelector(".low");
        if(highPrio.checked && !midPrio.checked && !lowPrio.checked) {
            result.style.borderLeft = "5px solid red";
        } else if(midPrio.checked && !highPrio.checked && !lowPrio.checked) {
            result.style.borderLeft = "5px solid yellow";
        } else if(lowPrio.checked && !highPrio.checked && !midPrio.checked) {
            result.style.borderLeft = "5px solid green";
        } else if(highPrio.checked && midPrio.checked){
            handleDelete(result);
        } else if(highPrio.checked && lowPrio.checked) {
            handleDelete(result);
        } else if(midPrio.checked && lowPrio.checked) {
            handleDelete(result);
        } else if(highPrio.checked && midPrio.checked && lowPrio.checked) {
            handleDelete(result);
        } else {
            handleDelete(result);
        }
        //delete button function called
        handleDelete(result);
        const deleteAll = document.querySelector(".delete-all");
        deleteAll.addEventListener("click", function(){
        deleteTasks(contentRight, result);
    })
    })
    //close button
    close.addEventListener("click", function(event){
        event.preventDefault();
        popup.style.transform = "scale(0)";
    })
}

//new task function
const dropmenu = document.querySelector(".new-task");
dropmenu.addEventListener("click", function(){
    createList();
})
//delete button function
function handleDelete(result) {
    deleteButton.addEventListener("click", function(){
        contentRight.removeChild(result);
    })
}