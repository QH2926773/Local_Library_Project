function findAccountById(accounts, id) {
  return accounts.find(account=>account.id===id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1,account2)=>account1.name.last.toLowerCase()>account2.name.last.toLowerCase()?1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  let total=0
  const totalBorrowsByAccount=books.forEach((book)=>{
    if(book.borrows){
      book.borrows.forEach((accounts)=>{
      if(accounts.id===account.id){
      total++
    }
  })
    }}) 
  return total
                                           }
function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
