document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против...'
        ],
    };
    
    const   list = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addFilm = addForm.querySelector('.adding__input'),
            chekbox = addForm.querySelector('[type="checkbox"]');
    
    document.querySelector('.promo__adv').remove();
    
    const makeChanges =  () => {
        document.querySelector('.promo__genre').textContent = 'Драма';
        document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg) center center / cover no-repeat';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const inputFilm = addFilm.value;
        const checked = chekbox.checked;

        if(inputFilm) {
            
            if (checked) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(inputFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, list);
        }     

        event.target.reset();
    
    });

    function createMovieList (films, parent) {
        parent.innerHTML = '';
        sortArr(films);
    
        films.forEach((item, i) => {
            if (item.length >= 21) {
                parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${item.slice(0, 21)}...
                    <div class="delete"></div>
                </li>
            `;
            } else {
                parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
            }
            
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });

    }

    makeChanges();
    createMovieList(movieDB.movies, list);
    

});

