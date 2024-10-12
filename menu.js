//
let isToggleClick = false;
document.querySelectorAll('.btn-dropdown').forEach(button => {
    const lineFirst = document.getElementById("line-first")
    const lineSecond = document.getElementById("line-second")
    const lineThird = document.getElementById("line-third")
    const menuDropdown = document.querySelector(".menu-dropdown")
    button.addEventListener('click', function() {
        if(isToggleClick){
            lineFirst.classList.add('d-block', 'rotate-45');
            lineFirst.classList.remove('mb-2');

            lineSecond.classList.add('opacity-0');
            lineSecond.classList.remove('opacity-100');

            lineThird.classList.add('d-block', 'rotate--45');
            lineThird.classList.remove('d-hidden', 'mb-2');

            menuDropdown.classList.add('opacity-100');
            menuDropdown.classList.remove('opacity-0');

        }
        else {
            lineFirst.classList.remove('rotate-45');
            lineFirst.classList.add('mb-2');

            lineSecond.classList.remove('opacity-0');
            lineSecond.classList.add('opacity-100');

            lineThird.classList.remove('d-block', 'rotate--45');
            lineThird.classList.add('mb-2', 'd-hidden');

            menuDropdown.classList.add('opacity-0');
            menuDropdown.classList.remove('opacity-100');

        }
        isToggleClick = !isToggleClick;
    })
});


let isToggleClickDropdownChild = false;
document.querySelectorAll('#btn-dropdown-child').forEach(button => {
    const dropdownChild = document.getElementById("dropdownChild")
    
    button.addEventListener('click', function() {
        if(isToggleClickDropdownChild){
            dropdownChild.classList.add('d-block');
            dropdownChild.classList.remove('d-none');
            button.classList.add('active-link');
        }
        else {
            dropdownChild.classList.remove('d-block');
            dropdownChild.classList.add('d-none');
            button.classList.remove('active-link');
        }
        isToggleClickDropdownChild = !isToggleClickDropdownChild;
    })
});