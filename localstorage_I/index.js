//i
    //without localstorage
    // const myForm = document.getElementById('form');
    // myForm.addEventListener('submit', displayFunction);

    // function displayFunction(e){
    //     e.preventDefault();
    //     //console.log('clicked');
    //     const input = document.getElementById('input');
    //     const headingTitle = document.querySelector('h3');
    //     headingTitle.innerHTML = input.value;
    // }
    //
//ii with localstorage
    //
    const myForm = document.getElementById('form');
    myForm.addEventListener('submit', displayFunction);
    const input = document.getElementById('input');
    const headingTitle = document.querySelector('h3');
    headingTitle.innerHTML = localStorage.getItem('db_one');

    function displayFunction(e){
        e.preventDefault();
        //console.log('clicked');
        //headingTitle.innerHTML = input.value;
        localStorage.setItem('db_one', input.value);
        location.reload();
    }
    // localStorage.setItem();
    // localStorage.getItem();
    //
//iii
    //delete item
    function removeItem(){
        localStorage.setItem('db_one', input.value);
        headingTitle.innerHTML = localStorage.getItem('db_one');
        localStorage.removeItem('db_one', 1);
        //localStorage.clear();
    }