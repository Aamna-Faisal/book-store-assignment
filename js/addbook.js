// function submitForm() {
//     const authorName = document.getElementById('authorName').value;
//     const bookTitle = document.getElementById('bookTitle').value;
//     const bookPrice = document.getElementById('bookPrice').value;
//     const bookImage = document.getElementById('bookImage').files[0];
//     const booksContainer = document.getElementById('booksContainer');

//     if(authorName===""||bookTitle===""||bookPrice===""||bookImage===""){
//       alert("fill the full form to add the book")
//     }
//     else{
      
//       const bookDiv = document.createElement('div');
//       bookDiv.classList.add('book');
//       bookDiv.innerHTML = `
//       <img src="${URL.createObjectURL(bookImage)}" alt="${bookTitle} cover">
//       <h3>${bookTitle}</h3>
//       <p>Author: ${authorName}</p>
//       <p>Price: ${bookPrice}</p>
//       <hr>
//       `;
//       booksContainer.appendChild(bookDiv);
      
//     }
//   }

  

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
