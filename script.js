'use strict';

const bookList = [
{
    id: 1,
    author: 'Charles Dickens',
    title: 'Oliver Twist'
},
{
    id: 2,
    author: 'Wiliam Shakespeare',
    title: 'Hamlet'
},
{
    id: 3,
    author: 'None',
    title: 'Test book 3'
}
];

const searchInput = null;

function handleKeyPress(input) {
    searchBooks(input);
}


function searchBooks(searchTerm) {
    let filteredList = []
    for(let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        if(title.indexOf(searchTerm.toLowerCase()) >= 0) {
            filteredList.push(bookList[i]);
        }
    }
    renderBookList(filteredList);
}

searchBooks("Oliver")


function renderBookList(list) {
    console.log(list);
}

handleKeyPress("e");