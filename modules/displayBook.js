/* eslint-disable linebreak-style */
import Book from "./book.js";
const docRange = document.createRange();

const loadList = () => {
    const books = new Book();
    let template = '<ul class="book-list">';
    books.booksArray.forEach((book, i) => {
      template += `<li class="list-item ${i % 2 !== 0 ? 'light' : 'dark'}">
            <div class="book-list-items">
              <h4>"${book.title}" by ${book.author}</h4>
              <button id="btn-${i}" data-book-index="${i}" type="button" class="removeBtn">
                Remove
              </button>
            </div>
          </li>`;
    });
  
    if (books.booksArray.length === 0) {
      template += `
        <li class="list-item light">
          <div class="book-list-items book-list-items-empty">
            <div class="book-items book-title">Book List is Empty</div>
          </div>
        </li>
      `;
    }
  
    template += '</ul>';
    return docRange.createContextualFragment(template);
}

export default  loadList;