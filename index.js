//task 1
const API_URL = "https://jsonplaceholder.typicode.com/todos";
const btn = document.querySelector(".vote");

async function voteClickHandle() {
  const data = await fetch(API_URL)
    .then((res) => res.json().then((res) => res))
    .catch((err) => console.error(err));
  console.log(data);
  if (!data) return;
  btn.innerHTML = `Your vote is accepted ${new Date()}`;
}
btn.addEventListener("click", voteClickHandle);

//task 2

const API_BOOKS = "https://jsonplaceholder.typicode.com/albums";
const bookButton = document.querySelector(".book");
const ul = document.querySelector("ul");

async function loadBooks() {
  const books = await fetch(API_BOOKS).then((res) =>
    res.json().then((res) => res)
  );
  let li;
  books.map((book) => {
    li = document.createElement("li");
    li.innerText = book.title;
    return ul.append(li);
  });
}
bookButton.addEventListener("click", loadBooks);
