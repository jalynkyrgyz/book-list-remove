/* Book Constructor */
function Book(title, author, isbn) {    
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

/* UI Constructor  */
function UI() {}

/* UI Prototype Methods */
UI.prototype.addBookToList = function (book) {
  // Find the table
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
 // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete">X</a></td>
  `;
 
  // Append to table
  list.appendChild(row);

};
// ShowAlert
UI.prototype.showAlert = function(msg, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));
  const container =  document.querySelector(".container");
  const form =  document.querySelector("#book-form");

  container.insertBefore(div,form);

  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
}

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
// Instance of book
};

// delete books
UI.prototype.deleteBooks = function (e) {
  if (e.classList.contains("delete")) {
    const ui = new UI();
    e.parentElement.parentElement.remove();
  }
};

document.querySelector("#book-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteBooks(e.target);
})

/* Event Listeners */
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Get form values
  const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;
  // Instance of book
  const book = new Book(title, author, isbn);
  // Instance of UI
  const ui = new UI();
  // validation
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields!", "error");
  } else {
    if (!isNaN(parseFloat(isbn)) && isFinite(isbn)) {
      // Add book to list
    ui.addBookToList(book);
    ui.showAlert("Book added", "success");
    ui.clearFields();
    } else {
      ui.showAlert("Please insert ISBN with numbers", "error")
      }
    }
    
  

  e.preventDefault();

  // Clear fields


});