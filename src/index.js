import './styles.css';
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
    form.appendChild(label);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "subject");
    input.setAttribute("name", "subject");
    form.appendChild(input);
    const label2 = document.createElement("label");
    label2.setAttribute("for", "subjectText");
    label2.textContent = "Text";
    form.appendChild(label2);
    const textarea = document.createElement("textarea");
    textarea.setAttribute("rows", "20");
    textarea.setAttribute("columns", "60");
    form.appendChild(textarea);
    const create = document.createElement("button");
    create.classList.add("create");
    create.textContent = "Create";
    form.appendChild(create);
    const close = document.createElement("button");
    close.classList.add("close");
    close.textContent = "Close";
    form.appendChild(close);
    popup.appendChild(form);

    contentRight.appendChild(popup);

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
        contentRight.appendChild(result);

        deleteButton.addEventListener("click", function(){
            contentRight.removeChild(result);
        })
    })

    close.addEventListener("click", function(event){
        event.preventDefault();
        popup.style.transform = "scale(0)";
    })
}

const dropmenu = document.querySelector(".dropmenu");
dropmenu.addEventListener("click", function(){
    createList();
})