import { useState } from "react";
import GenreAuthorCheckBox from "../components/Book/GenreAuthorCheckBox";
import Slider from "rc-slider";
import BookCard from "../components/Book/BookCard";

const Book = () => {
  const allAuthors = {
    "humayun ahmed": "হুমায়ূন আহমেদ",
    "sunil gangopadhyay": "সুনীল গঙ্গোপাধ্যায়",
    "bibhutibhushan bandyopadhyay": "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
    "sharat chandra": "শরৎচন্দ্র চট্টোপাধ্যায়",
    "humayun azad": "হুমায়ুন আজাদ",
    "ahmad shafa": "আহমদ ছফা",
    "jibanananda dash": "জীবনানন্দ দাশ",
    "zafar iqbal": "জাফর ইকবাল",
    "selina hossain": "সেলিনা হোসেন",
    "muhammed zafar iqbal": "মুহম্মদ জাফর ইকবাল",
    "saifur rahman": "সাইফুর রহমান",
    "anisul haque": "আনিসুল হক",
    "michael madhusudan dutta": "মাইকেল মধুসূদন দত্ত",
    "kazi nazrul islam": "কাজী নজরুল ইসলাম",
    "rabindranath tagore": "রবীন্দ্রনাথ ঠাকুর",
    "sadat hossain": "সাদাত হোসাইন",
    "abdullah abu sayeed": "আব্দুল্লাহ আবু সায়ীদ",
    "imdadul haq milon": "ইমদাদুল হক মিলন",
  };

  const bookImage = {
    NightFall: "https://m.media-amazon.com/images/I/51Nlsi8yzGL.jpg",
    "The Six Sacred Stone":
      "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Six_Sacred_Stones_cover.jpg",
    "মিসির আলি সমগ্র": "https://m.media-amazon.com/images/I/41O2iwXeUBL._SY466_.jpg",
    ফেলুদা: "https://m.media-amazon.com/images/I/31E8GUfBdiL.jpg",
    প্যাপিলন: "https://sebaprokashoni.com/wp-content/uploads/2020/10/papilon.jpg",
    "The Da Vinci Code": "https://images-eu.ssl-images-amazon.com/images/I/513WB5gwT9L.jpg",
    "শার্লক হোমস সমগ্র":
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiyKd0DzQtUkIypxcDmGqcJ_ksdUOz9P7UiEiJKAakrK_J4T3SI3EYtm2E0HMBtcWtmWeBGYoau9Q8Ev1W5ion0VcpWr8e2WKQgMNp1Z48_01rA36eLl8IkpwRCu24k4IHTJ5Az_5mNcVv/s1600/SherlockHolmesSamagra1AdrishBardhantranslated-cover_zps8465c1e5.jpg",
    "হিমু সমগ্র":
      "https://allbanglaboi.com/wp-content/uploads/2016/09/Himu-Somogro-PDF-01-201x300.jpg",
    "Digital Fortress": "https://upload.wikimedia.org/wikipedia/en/c/c9/DigitalFortress.jpg",
    "Queen Sheba's Ring":
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Queen_Sheba%27s_Ring.jpg/250px-Queen_Sheba%27s_Ring.jpg",
    "ভৌতিক গল্পসমগ্র - শীর্ষেন্দু মুখোপাধ্যায়":
      "https://cdn.ebanglalibrary.com/wp-content/uploads/2024/08/Bhoutik-Galpasamagra-Shirshendu-Mukhopadhyay.jpg.webp",
    "সেরা ভূতের গল্প - ব্রাম স্টোকার":
      "https://cdn.ebanglalibrary.com/wp-content/uploads/2023/05/Anish-Sera-Burter-Galpa.jpg.webp",
  };

  const minValue = 0;
  const maxValue = 10000;

  const [minRange, setMinRange] = useState(minValue);
  const [maxRange, setMaxRange] = useState(maxValue / 2);

  const [matchedAuthors, setMatchedAuthors] = useState(Object.values(allAuthors));
  const [showAuthorDiv, setShowAuthorDiv] = useState(false);

  const [starClicked, setStarClicked] = useState(0);

  return (
    <div className="w-[100%] h-[1400px] my-10 flex flex-row">
      <div className="w-[20%] h-[100%] textGreen flex flex-col justify-evenly items-center">
        <div className="w-[95%] h-fit backgroundGolden rounded-2xl">
          <h1 className="text-4xl p-5 font-semibold">ঘরানা</h1>
          <hr className="border-[1.5px]" />
          <div className="w-[100%] h-[180px] text-2xl py-5 px-10 textGreen font-medium overflow-auto">
            <GenreAuthorCheckBox labelName="প্রেম"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="রম্য"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="কল্পবিজ্ঞান"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="ইতিহাস"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="দর্শন"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="ধর্মীয়"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="কবিতা"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="অনুবাদ"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="ভ্রমণ"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="প্রবন্ধ"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="শিশু সাহিত্য"></GenreAuthorCheckBox>
          </div>
        </div>

        <div className="w-[95%] h-fit backgroundGolden rounded-2xl">
          <h1 className="text-[2rem] p-5 font-semibold">বাজেট নির্বাচন করুন</h1>
          <hr className="border-[1.5px]" />
          <div className="w-[100%] h-[180px] text-2xl textGreen font-medium flex flex-col justify-evenly m-auto">
            <Slider
              range
              min={minValue}
              max={maxValue}
              step={100}
              value={[minRange, maxRange]}
              onChange={(e) => {
                setMinRange(e[0]);
                setMaxRange(e[1]);
              }}
            />
            <div>
              <label htmlFor="text" className="ml-2 mr-20">
                ৳
                <input
                  type="text"
                  className="ml-2 w-[30%] border-2 bg-white text-center"
                  value={minRange}
                  onChange={(e) => {
                    if (e.target.value >= minValue && e.target.value <= maxValue) {
                      setMinRange(Number(e.target.value));
                    }
                  }}
                />
              </label>
              <label htmlFor="number">
                ৳
                <input
                  type="text"
                  className="ml-2 w-[30%] border-2 bg-white text-center"
                  value={maxRange}
                  onChange={(e) => {
                    if (e.target.value >= minValue && e.target.value <= maxValue)
                      setMaxRange(Number(e.target.value));
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="w-[95%] h-fit backgroundGolden rounded-2xl">
          <h1 className="text-4xl p-5 font-semibold">লেখক</h1>
          <hr className="border-[1.5px]" />
          <div className="w-[100%] h-[180px] text-2xl py-5 px-10 textGreen font-medium overflow-auto">
            <input
              type="text"
              placeholder="লেখকের নাম লিখুন"
              className="w-[100%] my-2 bg-white pl-2 rounded-2xl"
              onChange={(e) => {
                setMatchedAuthors(
                  Object.keys(allAuthors)
                    .filter((authors) => authors.includes(e.target.value.toLowerCase()))
                    .map((authors) => allAuthors[authors])
                );
                if (e.target.value.length != 0) {
                  setShowAuthorDiv(true);
                } else {
                  setShowAuthorDiv(false);
                }
              }}
            />
            <div
              className={`w-[100%] rounded-2xl py-3 font-semibold ${showAuthorDiv ? "" : "hidden"}`}
            >
              {matchedAuthors.map((author, index) => (
                <button key={index} className="mb-1 hover:underline cursor-pointer">
                  {author}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[95%] h-fit backgroundGolden rounded-2xl">
          <h1 className="text-4xl p-5 font-semibold">প্রকাশনার বছর</h1>
          <hr className="border-[1.5px]" />
          <div className="w-[100%] h-[180px] text-2xl py-5 px-10 textGreen font-medium overflow-auto">
            <GenreAuthorCheckBox labelName="২০২৫-২০২১"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="২০১৬-২০২০"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="২০১১-২০১৫"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="২০০৬-২০১০"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="২০০১-২০০৫"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="১৯৯৬-২০০০"></GenreAuthorCheckBox>
            <GenreAuthorCheckBox labelName="১৯৯৫ এবং এর আগে"></GenreAuthorCheckBox>
          </div>
        </div>

        <div className="w-[95%] h-fit backgroundGolden rounded-2xl">
          <h1 className="text-4xl p-5 font-semibold">স্টার রেটিং</h1>
          <hr className="border-[1.5px]" />
          <div className="w-[100%] h-[100px] text-4xl font-medium text-center flex flex-row justify-evenly items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => {
                  if (starClicked == star) {
                    setStarClicked(0);
                  } else {
                    setStarClicked(star);
                  }
                }}
                className={`cursor-pointer ${star <= starClicked ? "text-yellow-400" : "text-gray-400"}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[80%] h-[100%]">
        <div className="w-[100%] h-[10%]  flex flex-row justify-evenly items-center text-3xl textGolden font-semibold">
          <button className="w-fit h-fit p-5 backgroundGreen rounded-full cursor-pointer hover:bg-[hsl(92,30%,27%)]">
            উপন্যাস
          </button>
          <button className="w-fit h-fit p-5 backgroundGreen rounded-full cursor-pointer hover:bg-[hsl(92,30%,27%)]">
            ভৌতিক
          </button>
          <button className="w-fit h-fit p-5 backgroundGreen rounded-full cursor-pointer hover:bg-[hsl(92,30%,27%)]">
            গোয়েন্দা
          </button>
          <button className="w-fit h-fit p-5 backgroundGreen rounded-full cursor-pointer hover:bg-[hsl(92,30%,27%)]">
            নতুন প্রকাশ
          </button>
          <button className="w-fit h-fit p-5 backgroundGreen rounded-full cursor-pointer hover:bg-[hsl(92,30%,27%)]">
            আলোঘরে সদ্য যুক্ত
          </button>
          <button className="w-fit h-fit p-5 backgroundGreen rounded-full cursor-pointer hover:bg-[hsl(92,30%,27%)]">
            বেস্টসেলার
          </button>
          <button className="w-fit h-fit p-5 backgroundGreen rounded-full cursor-pointer hover:bg-[hsl(92,30%,27%)]">
            আলোঘর বেস্টসেলার
          </button>
        </div>

        <div className="w-[100%] h-[90%] overflow-auto">
          {Object.keys(bookImage).map((bookIndex) => (
            <BookCard
              imgSrc={bookImage[bookIndex]}
              tailCss="w-[15%] h-[30%] hover:border-5 text-red-500 my-15 mx-18 inline-block"
            ></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;

// This page have mainly 2 parts, book showing page and specific book information part.

// First with book showing, it have tags in upper part and filter in left part. The tag part is simple.

// In the filter part we first have checkboxes. It is made as component so we can add more genre.

// Price filter is more complex. We needed rc-filter for double slider, with range included. Changing its css and connecting the slider with value, using useState. Also we have 2 boxes for min and maxvalue, which is also interactive. Slight Problem, it seems like max Range can pass min Range, need to work on that.

// Then comes the author filter. Which comes with autoComplete. Here author names are as a object, their english name as key and bangla name as value. First we are finding all the keys of the object, which is an array. Then we are filtering the array using inputed value. This filtered array is then mapped to their key-value pairs value.
