

class Book{
    constructor(title, author, pages, isRead){
        this.title=title
        this.author=author
        this.pages=pages
        this.isRead=isRead
    }
    
}
let bookCollection = []

const addBookBtn = document.getElementById("addBook")
addBookBtn.onclick = () => addBook()

const bookCollectionContainer = document.getElementById("bookCollection")


function addBook(){
    let bookTitle = document.getElementById("bookName").value
    let bookAuthor = document.getElementById("authorName").value
    let bookPages = document.getElementById("pagesNumber").value
    let bookReadad = document.getElementById("isRead").checked
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookReadad)
    bookCollection.push(newBook) 
   //function to make and fill the cards

    let newBookCard = document.createElement("div")
    newBookCard.className="card text-center m-5"
    bookCollectionContainer.appendChild(newBookCard)
    //title
    let newBookTitle = document.createElement("h3")
    newBookTitle.className="card-title"
    newBookCard.appendChild(newBookTitle)
    newBookTitle.textContent=bookCollection[bookCollection.length-1].title
    //author
    let newBookAuthor = document.createElement("h5")
    newBookAuthor.className="card-text"
    newBookCard.appendChild(newBookAuthor)
    newBookAuthor.textContent=bookCollection[bookCollection.length-1].author
    //pages
    let newBookPages = document.createElement("p")
    newBookCard.appendChild(newBookPages)
    newBookPages.textContent=bookCollection[bookCollection.length-1].pages+" pages"
    //read/no read buttons
    let readBtn= document.createElement("a")
    newBookCard.appendChild(readBtn)
    if (bookCollection[bookCollection.length-1].isRead == true){
        readBtn.className="btn btn-success"
        readBtn.textContent="Readed"
    }else {
        readBtn.className="btn btn-secondary"
        readBtn.textContent="Not readed"
    }
    //modify read/not read status
    readBtn.onclick = () => {
        if(newBook.isRead==true){
            readBtn.className="btn btn-secondary"
            readBtn.textContent= "Not readed"
            newBook.isRead=false
        }else{
            newBook.isRead=true
            readBtn.className="btn btn-success"
            readBtn.textContent= "Readed"
        }
    }
    //delete button
    let newDeleteBtn = document.createElement("button")
    newBookCard.appendChild(newDeleteBtn)
    newDeleteBtn.className=("btn btn-danger m-3")
    newDeleteBtn.textContent="Remove Book"
    newDeleteBtn.onclick = () => {
            bookCollectionContainer.removeChild(newBookCard)
            bookCollection.splice(-1)
        }
}




