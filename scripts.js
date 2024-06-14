// JavaScript for mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', function () {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
