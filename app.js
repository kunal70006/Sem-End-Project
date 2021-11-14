const trendingBooks = document.querySelector(".books");
const searchInput = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".searchBtn");
const searchedBook = document.querySelector(".searchedBook");
const notFound = document.querySelector(".searchedBook h1");
const booksRedirect = document.querySelector(".trendingBooks");
const booksDiv = document.querySelector(".booksDiv");

const sampleBookData = () => [
  {
    imgSrc: "./Assets/bookCovers/asAManThinketh.jpg",
    name: "As A Man Thinketh",
  },
  {
    imgSrc: "./Assets/bookCovers/richDadPoorDad.jpg",
    name: "Rich Dad Poor Dad",
  },
  {
    imgSrc: "./Assets/bookCovers/theBlueUmbrella.jpg",
    name: "The Blue Umbrella",
  },
  {
    imgSrc: "./Assets/bookCovers/thePsychologyOfMoney.jpg",
    name: "The Psychology of Money",
  },
  {
    imgSrc: "./Assets/bookCovers/theRudestBookEver.jpg",
    name: "The Rudest Book Ever",
  },
];

const randomize = () => {
  const bookData = sampleBookData();
  bookData.sort(() => Math.random() - 0.5);
  return bookData;
};

const bookGen = () => {
  const bookData = randomize();

  bookData.forEach((item) => {
    const book = document.createElement("div");
    const bookCover = document.createElement("img");
    const bookTitle = document.createElement("h2");

    book.classList = "book";
    bookCover.classList = "bookCover";
    bookTitle.classList = "bookTitle";

    bookCover.src = item.imgSrc;
    bookTitle.textContent = item.name;

    trendingBooks.appendChild(book);
    book.appendChild(bookCover);
    book.appendChild(bookTitle);
  });
};

const searchBook = () => {
  searchBtn.addEventListener("click", async () => {
    const isbn = searchInput.value;
    const response = await fetch(`https://openlibrary.org/books/${isbn}.json`);
    const result = await response.json();
    console.log(result);
    if (result.error === "notfound") {
      notFound.textContent = `Book with OLID ${
        isbn === "" ? null : isbn
      } Not Found`;

      searchBtn.style.pointerEvents = "none";
      searchedBook.style.display = "flex";
    } else {
      const searchedBookTitle = await result.title;

      const book = document.createElement("div");
      const bookCover = document.createElement("img");
      const bookTitle = document.createElement("h2");

      book.classList = "book";
      bookCover.classList = "bookCover";
      bookTitle.classList = "bookTitle";

      bookCover.src = `http://covers.openlibrary.org/b/olid/${isbn}-M.jpg`;
      bookTitle.textContent = searchedBookTitle;

      searchedBook.appendChild(book);
      book.appendChild(bookCover);
      book.appendChild(bookTitle);

      searchBtn.style.pointerEvents = "none";
      searchedBook.style.display = "flex";
    }
  });
};

const app = () => {
  bookGen();
  searchBook();
  booksRedirect.addEventListener("click", () => {
    window.location.href = "./Pages/books.html";
  });
};

app();
