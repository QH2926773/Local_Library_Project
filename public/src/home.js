function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
   let borrowedCount=books.filter((book)=>
                                 book.borrows.filter((borrow)=>borrow.returned===false).length>0
                                  );
  return borrowedCount.length
}

function getMostCommonGenres(books) {
  let bookPile={}
  //go through each book
  books.forEach((book,i)=>{
    if(!bookPile[book.genre]){
      bookPile[book.genre]=1
    }else {
      bookPile[book.genre]+=1
    }
  })
  
  const sortedPile=Object.entries(bookPile).sort((a,b)=>{
    return b[1]-a[1]
  }).slice(0,5)
  const result= sortedPile.map((pile)=>{
    return {name:pile[0],count:pile[1]}
  })
 
  return result
  //put the book in the right pile
  //find out which pile has the most books
  //compare each pile to the last and keep the bigger one
//   let theLastGenre
//   let theBiggestGenre
//   const genreNames=Object.keys(bookPile)
//   genreNames.forEach((genreName)=>{
//     if(!theLastGenre){
//       theLastGenre=genreName
//       theBiggestGenre=genreName
//     }else{
//       if(bookPile[genreName]>bookPile[theLastGenre]){
//         theBiggestGenre=genreName
//       } 
//       theLastGenre=genreName
//     }
//   })
//   return books.filter((book)=>{
    
//   })
}

function getMostPopularBooks(books) {
  return books.map((book)=>{
    return {name:book.title, count:book.borrows.length}
  }).sort((book1,book2)=>book1.count>book2.count?-1:1)
.slice(0,5)
}
function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
