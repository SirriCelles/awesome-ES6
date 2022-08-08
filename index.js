/* eslint-disable linebreak-style */
import Book from './modules/book.js';
import loadList from './modules/displayBook.js';
import { DateTime } from './modules/luxon.js';

const timeDisplay = document.getElementById('date');

const refreshTime = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  timeDisplay.textContent = now;
};
setInterval(refreshTime, 1000);

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const alist = document.getElementById('list');
const anew = document.getElementById('add-new');
const acontact = document.getElementById('contact');

const bookForm = document.getElementById('bookForm');
const titleCheck = document.querySelector('.title-check');
const authorCheck = document.querySelector('.author-check');
const bookList = document.querySelector('.list-wrapper');

const refreshList = () => {
  bookList.textContent = '';
  bookList.append(loadList());
};

bookList.append(loadList());

alist.addEventListener('click', () => {
  addNew.classList.add('display-none');
  list.classList.remove('display-none');
  contact.classList.add('display-none');
  refreshList();
});

anew.addEventListener('click', () => {
  addNew.classList.remove('display-none');
  list.classList.add('display-none');
  contact.classList.add('display-none');
});

acontact.addEventListener('click', () => {
  addNew.classList.add('display-none');
  list.classList.add('display-none');
  contact.classList.remove('display-none');
});

const validateForm = (title, author) => {
  if (title === '' || title === undefined) {
    titleCheck.style.display = 'block';
  }
  if (author === '' || author === undefined) {
    authorCheck.style.display = 'block';
  }

  if (!title || !author || author === '' || title === '') {
    return false;
  }
  return true;
};

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = bookForm.elements.title.value;
  const author = bookForm.elements.author.value;
  const valid = validateForm(title, author);
  if (!valid) return;
  const nbook = {
    title,
    author,
  };
  const book = new Book();
  book.addBook(nbook);
  bookList.append(loadList());
  bookForm.reset();
});

document.querySelector('body').addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBtn')) {
    const index = event.target.getAttribute('data-book-index');
    const book = new Book();
    book.removeBook(index);
    setTimeout(() => {
      refreshList();
    }, 500);
  }
});