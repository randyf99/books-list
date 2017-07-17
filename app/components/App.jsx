import React from 'react';
import Parser from 'html-react-parser';
import data from '../../data.json';

function App() {
  return (
    <div className="row">
      <h1>Book List</h1>
      {data.items.map(book =>
        <div key={book.id}>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
          <h3>
            {book.volumeInfo.title} :&nbsp;
            <span>{book.volumeInfo.subtitle}</span>
          </h3>
          <ul>
            {book.volumeInfo.authors.map(author =>
              <li key={author}>
                {author}
              </li>
            )}
          </ul>
          <p>
            {Parser(book.searchInfo.textSnippet)}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
