function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  if (this.book.length -1 > this.currentPage) {
    this.currentPage++;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.previousPage = function() {
  if (this.currentPage > 0) {
    this.currentPage--;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.pagesLeft = function() {
  return (this.book.length -1)  - this.currentPage;
};

BookReader.prototype.encouragement = function() {
  // your code here
};

// DO NOT MODIFY BELOW THIS COMMENT
module.exports = BookReader;
