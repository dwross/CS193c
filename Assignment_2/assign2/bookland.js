var books = [];

books[0] = {Author:"Thomas Mann", Title:"Death in Venice", Description:"One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self."};
books[1] = {Author:"James Joyce", Title:"A portrait of the artist as a young man", Description: "This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character."};
books[2] = {Author:"E. M. Forster", Title:"A room with a view", Description:"This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson."};
books[3] = {Author:"Isabel Allende", Title:"The house of spirits", Description:"Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship."};
books[4] = {Author:"Isabel Allende", Title:"Of love and shadows", Description:"The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship."};

var arrayLength = books.length;

function findBook() {

  var authorName = document.getElementById('author').value;
  var bookTitle = document.getElementById('title').value;

  if (!authorName && !bookTitle){
    document.getElementById('out').value += "You MUST at least enter an Author name or a Book title";
  }

  if (authorName && !bookTitle){
    var foundAuthorFlag = false;
    for (var i=0; i<arrayLength; i++) {
      if (authorName === books[i].Author && !foundAuthorFlag) {
        document.getElementById('out').value += books[i].Description;
        foundAuthorFlag = true;
      }
    }
    if (!foundAuthorFlag) {
      document.getElementById('out').value += "I can't find that author.";
    }
  }

  if (!authorName && bookTitle){
    var foundTitleFlag = false;
    for (var i=0; i<arrayLength; i++) {
      if (bookTitle === books[i].Title && !foundTitleFlag) {
        document.getElementById('out').value += books[i].Description;
        foundTitleFlag = true;
      }
    }
    if (!foundTitleFlag) {
      document.getElementById('out').value += "I can't find that title.";
    }
  }

  if (authorName && bookTitle){
    var foundAuthor = '';
    var foundAuthFlag = false;
    var foundTitlFlag = false;
    for (var i=0; i<arrayLength; i++) {
      if (authorName === books[i].Author && !foundAuthFlag) {
        foundAuthFlag = true;
        foundAuthor = books[i].Author;
      }
    }
    for (var i=0; i<arrayLength; i++) {
      if (bookTitle === books[i].Title  && foundAuthor === books[i].Author && foundAuthFlag && !foundTitlFlag) {
        document.getElementById('out').value += books[i].Description;
        foundTitlFlag = true;
      }
    }
    if (!foundAuthFlag || !foundTitlFlag) {
      document.getElementById('out').value += "I can't find a book with that author or title.";
    }    
  }
}

document.getElementById("find").addEventListener("click",findBook,false);

function clearInput() {
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('out').value = '';
}

document.getElementById("clear").addEventListener("click",clearInput,false);