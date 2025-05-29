import { useEffect, useState } from "react"

const LiteratureNews = () => {

    const newsStore = {
        0:{
            title:"কথাসাহিত্যিক মানিক বন্দ্যোপাধ্যায়ের জন্মদিন আজ",
            summary:"বিংশ শতাব্দীর বাংলা সাহিত্যের অন্যতম শ্রেষ্ঠ কথাসাহিত্যিক মানিক বন্দ্যোপাধ্যায়ের জন্মদিন আজ। ১৯০৮ সালের ১৯ মে (আজকের দিনে) ভারতের বিহারের সাঁওতাল পরগনা, বর্তমান ঝাড়খণ্ড রাজ্যের দুমকা শহরে প্রখ্যাত এ লেখকের জন্ম।",
            image:"https://asset.kalerkantho.com/public/news_images/2025/05/19/1747632090-c272ffa290a15f4ca1949bea975b1157.jpg",
            src:"https://www.kalerkantho.com/online/sahitya/2025/05/19/1519588"
        },
        1:{
            title:"সবচেয়ে বেশি বই পড়েন মার্কিনরা, বাংলাদেশিদের অবস্থান কততম",
            summary:"বিশ্ব বই দিবস আজ বুধবার (২৩ এপ্রিল)। জাতিসংঘের শিক্ষা, বৈজ্ঞানিক ও সাংস্কৃতিক সংগঠন ইউনেসকো ১৯৯৫ সালের ২৩ এপ্রিলকে প্রথমবারের মতো বিশ্ব বই দিবস হিসেবে উপযাপন করে। এ উপলক্ষ্যে দেখে নেওয়া যাক বিশ্বের কোন দেশের মানুষ বেশি বা কম বই পড়েন।",
            image:"https://cdn.ittefaqbd.com/contents/cache/images/1100x618x1/uploads/media/2025/04/23/cfcbf3793d505d04def5660bbd6c5557-6808d4d370b8a.jpg?jadewits_media_id=222057",
            src:"https://www.ittefaq.com.bd/728681/%E0%A6%B8%E0%A6%AC%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A7%87-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%AC%E0%A6%87-%E0%A6%AA%E0%A7%9C%E0%A7%87%E0%A6%A8-%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%A8%E0%A6%B0%E0%A6%BE-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A6%BF%E0%A6%A6%E0%A7%87%E0%A6%B0"
        },
        2:{
            title:"বাংলা একাডেমি সাহিত্য পুরস্কার নিলেন ৭ লেখক",
            summary:"আগেই জানানো হয়েছিল পুরস্কার প্রাপকদের নাম, সেই তালিকা নিয়ে ওঠে বিতর্কও। পুরস্কার ঘোষণা, স্থগিতের পর নতুন তালিকা প্রকাশ আলোচনার জন্ম দিয়েছিল। আলেচিত সেই ‘বাংলা একাডেমি সাহিত্য পুরস্কার ২০২৪’ নিলেন সাত লেখক।",
            image:"https://cdn.ittefaqbd.com/contents/cache/images/1100x618x1/uploads/media/2025/02/01/77d4972593fa2b305b81d53dc814236e-679e0c36321ea.jpg?jadewits_media_id=208936",
            src:"https://www.ittefaq.com.bd/717678/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A1%E0%A7%87%E0%A6%AE%E0%A6%BF-%E0%A6%B8%E0%A6%BE%E0%A6%B9%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%AF-%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%A8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%A8-%E0%A7%AD-%E0%A6%B2%E0%A7%87%E0%A6%96%E0%A6%95"
        },
        3:{
            title:"শার্লক হোমস স্রষ্টা আর্থার কোনান ডয়েলের জগৎ",
            summary:"স্যার আর্থার কোনান ডয়েল জগৎ বিখ্যাত কিশোর উপন্যাস ‘পিটার প্যান’ স্রষ্টা জেমস ব্যারির সাথে ক্রিকেট খেলছেন, ‘প্রিজনার অফ জেন্ডা’র লেখক অ্যান্থনি হোপ তার সহ-খেলোয়াড় অথবা ‘দ্যা জঙ্গল বুক’ লেখক রুডিয়ার্ড কিপলিং এবং তিনি ভারমন্টের মাঠে গলফ খেলছেন ...",
            image:"https://media.prothomalo.com/prothomalo-bangla%2F2025-05-21%2Fhzsru4h3%2FOnnoalo-.jpg?rect=0%2C0%2C1400%2C933&w=622&auto=format%2Ccompress&fmt=avif",
            src:"https://www.prothomalo.com/onnoalo/treatise/g1ce4rzbaw"
        },
        4:{
            title:"বাংলাদেশের সমকালীন সাহিত্য নিয়ে আগ্রহ আছে",
            summary:"চীনা ভাষায় রবীন্দ্র–রচনাবলীর অনুবাদক দং ইউ ছেন। বেইজিং ফরেন ইউনির্ভাসিটির সেন্টার ফর সাউথ এশিয়া স্টাডিজের সাবেক অধ্যাপক তিনি। এখন কাজ করছেন বিদ্রোহী কবি কাজী নজরুল ইসলামের জীবনী নিয়ে। সাক্ষাৎকার নিয়েছেন সাদিয়া মাহ্জাবীন ইমাম।",
            image:"https://media.prothomalo.com/prothomalo-bangla%2F2025-03-14%2F34pctssz%2FDong-u.JPG?rect=0%2C0%2C5028%2C3352&w=300&auto=format%2Ccompress&fmt=avif",
            src:"https://www.kalerkantho.com/online/sahitya/2025/05/19/1519588"
        },
        5:{
            title:"বাংলাদেশে ব্যক্তিতান্ত্রিক স্বৈরতন্ত্রের লক্ষণসমূহ",
            summary:"ব্যক্তিতান্ত্রিক স্বৈরতান্ত্রিক শাসনের যেসব বৈশিষ্ট্য বিশ্বের অন্যত্র সহজেই দেখা যায়, বাংলাদেশে ২০১১ সাল থেকেই তার কিছু লক্ষণ শেখ হাসিনার বক্তব্য এবং আচরণের মধ্যে দৃশ্যমান হয়ে উঠতে থাকে। ২০১৪ সাল নাগাদ এগুলো কার্যত রাখঢাক ছাড়াই স্পষ্ট হয়ে ওঠে।",
            image:"https://media.prothomalo.com/prothomalo-bangla%2F2025-01-31%2Fznnrpw5z%2FAmi-Rastro3-archive-copy.jpg?rect=0%2C0%2C2990%2C1993&w=622&auto=format%2Ccompress&fmt=avif",
            src:"https://www.prothomalo.com/onnoalo/others/xy4s6022kc"
        }
    }

    const [cardsNum , setCardsNum] = useState(0)
    const [animate , setAnimate] = useState(false)
    const newsLength = Object.keys(newsStore).length

    useEffect (() => {
        const cards = setInterval(() => {
            setAnimate(true)

            setTimeout(() => {
                setCardsNum((prev) => (prev + 1) % newsLength)
            } , 250)

            setTimeout (() => {
                setAnimate(false)
            } , 800)
        } , 5000)
        return () => {
            clearInterval(cards)
        }
    } , [])

    return (
        <>
            <h1 className="textGolden text-5xl font-bold italic underline mt-5 text-center animate-bounce textShadow">সাহিত্যিক হালচাল</h1>
            <div className={`my-10 w-[100%] h-[82%] flex ${animate ? "flip" : ""} boxShadowleft backgroundGolden p-6 rounded-xl`} >
                <div className="w-[40%] h-inherit">
                    <img src={newsStore[cardsNum].image} alt={newsStore[cardsNum].title} className="h-full w-full" />
                </div>

                <div className="w-[60%] h-full textGreen ml-auto p-8">
                    <h1 className="text-5xl my-7 text-center">{newsStore[cardsNum].title}</h1>
                    <h1 className="text-2xl mb-7">{newsStore[cardsNum].summary}</h1>
                    <a href={newsStore[cardsNum].src} target="blank"><p className="text-[23px] text-right hover:underline hover:text-[30px]">বিস্তারিত দেখুন</p></a>
                </div>
            </div>
        </>
    )
}

export default LiteratureNews

// For literature news, there are 2 parts. First assigning news and then setting the news. News assigning or collection is done by object. Object.length is not valid, it is Object.keys(objectName).length. It gave pain in the part of variable changing.

// Second part is setting the news. As this is a single card, values are getting replaced. So we need a counter for our news Store. Again with useState and useEffect. Set Interval calls the function to change the value every 5 second. Initially went with i = 0, i > length == i = 0 but mod is much better. Because 6 % 5 is 0.

// Bonus is animation. To make it look like this is multiple cards, rotation is used. But the rotation flips the card at first or infinitely. So again, useState. First the animation if false. Then when called in setInterval, animation is True and showed. While the animation is showing, first TimeOut updates the value midpoint. Then the second timeOut or end of animation, it becomes false, so when another value comes, the rotation shows. Also backface visibility is hidden, so we dont see the backface. It feels like snap and changed!