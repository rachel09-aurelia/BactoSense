const button = document.getElementById('exploreBtn');

button.addEventListener{'click', () => {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});