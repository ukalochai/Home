document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });

    const subDropdowns = document.querySelectorAll('.sub-dropdown');

    subDropdowns.forEach(subDropdown => {
        subDropdown.addEventListener('mouseenter', () => {
            subDropdown.querySelector('.sub-dropdown-content').style.display = 'block';
        });

        subDropdown.addEventListener('mouseleave', () => {
            subDropdown.querySelector('.sub-dropdown-content').style.display = 'none';
        });
    });
});


