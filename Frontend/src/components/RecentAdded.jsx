import { useEffect, useState } from "react"
import BookCard from "./BookCard"

const RecentAdded = () => {

    const bookImage = {
        0:"https://m.media-amazon.com/images/I/51Nlsi8yzGL.jpg",
        1:"https://upload.wikimedia.org/wikipedia/en/f/ff/The_Six_Sacred_Stones_cover.jpg",
        2:"https://m.media-amazon.com/images/I/41O2iwXeUBL._SY466_.jpg",
        3:"https://m.media-amazon.com/images/I/31E8GUfBdiL.jpg",
        4:"https://sebaprokashoni.com/wp-content/uploads/2020/10/papilon.jpg",
        5:"https://images-eu.ssl-images-amazon.com/images/I/513WB5gwT9L.jpg"
    }

    const [bookAdded , setbookAdded] = useState(0)
    const [animate , setAnimate] = useState(false)
    const bookImageLen = Object.keys(bookImage).length
    let booksAdded

    useEffect (() => {
        
        booksAdded = setInterval(() => {
            setAnimate(true)
            
            setTimeout(() => {
                setbookAdded((prev) => (prev + 3) % bookImageLen)
            } , 400)

            setTimeout(() => {
                setAnimate(false)
            } , 800)
        } , 5000)

        return () => {
            clearInterval(booksAdded)
        }

    } , [])

    return (
        <div className="textGolden w-[65%] h-[580px] mb-15 pt-2 ml-auto mr-10">
            <h1 className="text-center text-5xl font-bold italic mt-5 underline textShadow animate-bounce">নতুন সংযোজন</h1>
            <div className={`my-10 h-[81%] flex flex-row justify-evenly ${animate ? "fade" : ""}`}>
                <BookCard imgSrc={bookImage[bookAdded]} tailCss = "w-fit h-full hover:border-5 text-red-500"></BookCard>
                <BookCard imgSrc={bookImage[bookAdded+1]} tailCss = "w-fit h-full hover:border-5 text-red-500"></BookCard>
                <BookCard imgSrc={bookImage[bookAdded+2]} tailCss = "w-fit h-full hover:border-5 text-red-500"></BookCard>
            </div>
        </div>
    )
}

export default RecentAdded

// We are using single card component to show 3 card at a time. Props help with this.

// For animation we are using fade to disappear the books and reappear them. So it feels like old book disappears and new books appear.