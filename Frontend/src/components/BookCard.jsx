const BookCard = (props) => {
    
    return (
        <div className={`${props.tailCss} cursor-pointer`}>
            <img src={props.imgSrc} alt="Book Image" className="w-fit h-full" />
        </div>
    )
}

export default BookCard

// changing variable uses Prop to use same component. Its like function, sending values to function and use them inside function.