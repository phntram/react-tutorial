import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import books from './books.js';
import { books } from './books.js';
import Book from './Book.js';

// const Greeting = () => {
//     return <h2>My First Component</h2>;
// };

// const Greeting = () => {
//     return React.createElement('h2', {}, 'Hello world');
// };

// const Greeting = () => {
// return <React.Fragment>....react fragment to group all element without extra node </React.Fragment>;
// return <>.... react fragment short way.</>
// };

// const title = 'Arcanus';
// const author = 'Ali Eke';
// const image = './images/book-1.jpg';

// const firstBook = {
//     title: 'Arcanus',
//     author: 'Ali Eke',
//     image: './images/book-1.jpg'
// };

// const secondBook = {
//     title: 'Trust (Pulitzer Prize Winner)',
//     author: 'Hernan Diaz',
//     image: 'https://m.media-amazon.com/images/I/41EYVxQ9e1L._SY445_SX342_.jpg'
// };

// const books = [
//     {
//         title: 'Arcanus',
//         author: 'Ali Eke',
//         image: './images/book-1.jpg',
//         id: 1
//     },
//     {
//         title: 'Trust (Pulitzer Prize Winner)',
//         author: 'Hernan Diaz',
//         image: 'https://m.media-amazon.com/images/I/41EYVxQ9e1L._SY445_SX342_.jpg',
//         id: 2
//     }
// ];

const BookList = () => {
    // return <section className='bookList'>
    //     {books.map((book) => {
    //         const { title, author, image } = book;
    //         return (
    //             // <div>
    //             //     <img src={book.image} alt={book.title} />
    //             //     <h2>{book.title}</h2>
    //             //     <h4>{book.author}</h4>
    //             // </div>
    //             <Book title={title} author={author} image={image} />
    //         );
    //     })}
    // </section>;

    // // pass prop to function from another component
    // const getBook = (id) => {
    //     const book = books.find((book) => book.id === id);
    //     console.log(book);
    // };
    // // getBook(2);

    // return (
    //     <section className='bookList'>
    //         {books.map((book) => {
    //             return <Book {...book} key={book.id} getBook={getBook} />;
    //         })}
    //     </section>
    // );
    return (
        <>
            <h1>amazon best sellers</h1>
            <section className='bookList'>
                {books.map((book) => {
                    return <Book {...book} key={book.id} />;
                })}
            </section>
        </>
    );
};

// const Book = (props) => {
//     console.log(props);
//     const { image, title, author, getBook, id } = props;
//     const getSingleBook = () => {
//         getBook(id);
//     };
//     return <article className='book'>
//         {/* <Image />
//         <Title />
//         <Author /> */}
//         <img src={image} alt={title} ></img>
//         <button onClick={getSingleBook}>display title</button>
//         <h2>{title}</h2>
//         <h4>{author}</h4>
//     </article>;
// };

// const Image = () => <img src='./images/book-1.jpg' alt='Arcanus' ></img>;
// const Title = () => <h2>Arcanus</h2>;
// const Author = () => {
//     const inlineHeadingStyle = { color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' };
//     return <h4 style={inlineHeadingStyle}>
//         Ali EkeAli Eke</h4>;
//     // inline style
//     // return ;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList></BookList>);
