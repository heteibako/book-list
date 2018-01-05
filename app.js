class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }

}

class UI {};

UI.prototype.clearFields = function () {
  document.getElementById('book-id').value = '';
  document.getElementById('book-title').value = '';
  document.getElementById('book-author').value = '';
  document.getElementById('book-year').value = '';
}

UI.prototype.createAlert = function () {
  const warning = document.createElement('div');
  const alerting = document.getElementById('alert');
  warning.className = 'alert alert-danger';
  const alertText = document.createTextNode('Please fill out all fields');
  warning.appendChild(alertText);
  alerting.appendChild(warning);

  setTimeout(function () {
    warning.style.display = 'none';
  }, 3000);

}

UI.prototype.createSuccessMessage = function () {
  const successFeedback = document.getElementById('success');
  const success = document.createElement('div');
  success.className = 'alert alert-success';
  const successText = document.createTextNode('Book Added');
  success.appendChild(successText);
  successFeedback.appendChild(success);

  setTimeout(function () {
    successFeedback.style.display = 'none';
  }, 3000);
}

UI.prototype.addBookToList = function (book) {
    //create Table elements
  const tableBody = document.getElementById('table-body');
  const row = document.createElement('tr');

  //create table structure
  row.innerHTML = `
<th scope="row">${book.id}</th>
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.year}</td>
`;

  //append table to the DOM

  tableBody.appendChild(row);
}


document.getElementById('book-form').addEventListener('submit', function (e) {
  //contructor values
  const id = document.getElementById('book-id').value;
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const year = document.getElementById('book-year').value;

  //create new book from Book constructor
  const book = new Book(id, title, author, year);
  const ui = new UI;



  // create alerts if no detaiuls are given
  if (!id || !title || !author || !year) {
    ui.createAlert();

  } else {
    ui.createSuccessMessage();
    ui.addBookToList(book);

  }
  ui.clearFields();
  e.preventDefault();
});