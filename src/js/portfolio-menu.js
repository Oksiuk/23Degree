(function() {
    let portfolio = document.querySelector('.portfolio-menu');

    portfolio.addEventListener('click', (e) => {
        let parent = e.target.parentNode;

        if (parent !== parent.parentNode.lastElementChild) {
            let nextLink = parent.nextElementSibling.firstElementChild;

            if(nextLink) {
                nextLink.style.border = 'none';
            }
        }
    });
})();