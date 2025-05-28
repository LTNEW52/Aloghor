const LiteratureNews = () => {

    const newsStore = {
        0:{
            title:"কথাসাহিত্যিক মানিক বন্দ্যোপাধ্যায়ের জন্মদিন আজ",
            summary:"বিংশ শতাব্দীর বাংলা সাহিত্যের অন্যতম শ্রেষ্ঠ কথাসাহিত্যিক মানিক বন্দ্যোপাধ্যায়ের জন্মদিন আজ। ১৯০৮ সালের ১৯ মে (আজকের দিনে) ভারতের বিহারের সাঁওতাল পরগনা, বর্তমান ঝাড়খণ্ড রাজ্যের দুমকা শহরে প্রখ্যাত এ লেখকের জন্ম।",
            image:"https://asset.kalerkantho.com/public/news_images/2025/05/19/1747632090-c272ffa290a15f4ca1949bea975b1157.jpg",
            src:"https://www.kalerkantho.com/online/sahitya/2025/05/19/1519588"
        }
    }

    return (
        <>
            <h1 className="textGreen text-5xl text-center font-bold italic underline mt-5">সাহিত্যিক হালচাল</h1>
            <div className="my-10 w-[100%] h-[calc(100%-6.5rem)] text-red-500 flex">
                <div className="w-[40%] h-full">
                    <img src={newsStore[0].image} alt={newsStore[0].title} className="h-full" />
                </div>

                <div className="w-[60%] h-full textGreen ml-auto p-8">
                    <h1 className="text-5xl my-8 text-center">{newsStore[0].title}</h1>
                    <h1 className="text-2xl mb-8">{newsStore[0].summary}</h1>
                    <a href={newsStore[0].src} target="blank"><p className="text-[23px] text-right hover:underline hover:text-[30px]">বিস্তারিত দেখুন</p></a>
                </div>
            </div>
        </>
    )
}

export default LiteratureNews