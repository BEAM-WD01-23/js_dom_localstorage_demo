//i
    //
    const myForm = document.getElementById('form');
    const headingTitle = document.querySelector('h3');

    const storedItems = localStorage.getItem('items');
    const items = storedItems ? JSON.parse(storedItems) : [];

    //headingTitle.innerHTML = items;//not nicely displayed ...
    headingTitle.innerHTML = items.map(item => `<li>${item}</li>`).join('');//avoid the space and commas ...

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        //console.log('submitted');
        const input = document.getElementById('input');
        const newItem = input.value.trim();
        //console.log(newItem);
        if(newItem !== ''){
            items.push(newItem);
            localStorage.setItem('items', JSON.stringify(items));
            location.reload();
        }
       
    })
     