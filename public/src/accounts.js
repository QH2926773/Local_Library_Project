function findAccountById(accounts, id) {
  return accounts.find(account=>account.id===id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1,account2)=>account1.name.last.toLowerCase()>account2.name.last.toLowerCase()?1:-1)
}

function getTotalNumberOfBorrows(account, books) {
//   let total=0
//   const totalBorrowsByAccount=books.forEach((book)=>{
//     if(book.borrows){
//       book.borrows.forEach((accounts)=>{
//       if(accounts.id===account.id){
//       total++
//     }
//   })
//     }}) 
//   return total
//                                            }
    const total = books.reduce((total, book) => {
    if (book.borrows) {
      book.borrows.forEach((accounts) => {
        if (accounts.id === account.id) total += 1;
      });
    }
    return total;
  }, 0);
  return total;
}
  
function getBooksPossessedByAccount(account, books, authors) {

  const borrowedBooks=[]
  books.forEach((book)=>{
    let bookBorrows=book.borrows
    bookBorrows.forEach((borrow)=>{
      if(borrow.id===account.id&&(!borrow.returned)){
         borrowedBooks.push(book)
         }})
    
  })
  let result=borrowedBooks.map((book)=>{
    return {...book,author:getAuthors(book,authors)}
  }
                              )
  return result
}

//helper function:
function getAuthors(book, authors){
  const author=authors.find((author)=>author.id===book.authorId)
  return author
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
