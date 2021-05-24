//selectors 
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const ISBNInput = document.querySelector('#ISBN')
const listItems = document.querySelector('.list-items')
const submitBtn = document.querySelector('.submit-btn')

//eventListeners
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    //create table elements
    const divEl = document.createElement('div')
    divEl.className = 'div-el'
    const titleLi = document.createElement('li')
    titleLi.className = 'title-li';
    const authorLi = document.createElement('li')
    authorLi.className = 'author-li';
    const ISBNLi = document.createElement('li')
    ISBNLi.className = 'ISBN-li';
    const xBtn = document.createElement('button')
    xBtn.className = 'x-btn';

    listItems.appendChild(divEl);
    divEl.appendChild(titleLi);
    divEl.appendChild(authorLi);
    divEl.appendChild(ISBNLi);
    divEl.appendChild(xBtn);

    xBtn.innerHTML = '<i class="far fa-times-circle"></i>'
    // showing inputs to the table areas
    titleLi.textContent = titleInput.value;
    authorLi.textContent = authorInput.value;
    ISBNLi.textContent = ISBNInput.value;

    xBtn.addEventListener('click', ()=>{
        divEl.classList.add('remove');
        divEl.addEventListener('transitionend', ()=>{
            divEl.style.display = 'none'
        })
    })
})
