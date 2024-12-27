document.querySelector('button').addEventListener('click', 
    function() { 
    const add = document.querySelector('.add-task'); 
    if (add.style.display === 'none' || add.style.display === '') { 
        add.style.display = 'flex'; 
    } else { add.style.display = 'none'; } 
});

