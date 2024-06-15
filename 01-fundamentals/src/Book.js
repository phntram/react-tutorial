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
const Book = (props) => {
    const { image, title, author, number } = props;

    return (
        <article className='book'>
            <img src={image} alt={title} />
            <h2>{title}</h2>

            <h4>{author}</h4>
            <span className='number'>{`# ${number + 1}`}</span>
        </article>
    );
};

export default Book;