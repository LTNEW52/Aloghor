import { useState } from "react";
import UserReview from "./UserReview";

const SpecificBook = () => {
  const rating = 4;

  const nightfallReviews = [
    {
      reviewer: "নাসরিন হোসেন",
      rating: "৪.৮",
      comment:
        "অসাধারণ কল্পবিজ্ঞান গল্প। প্লটটা এত ইউনিক যে মনে হচ্ছিল আমি নিজেই সেই গ্রহে আছি। ছয় সূর্যের আলোতে যাদের রাতের ধারণা নেই — সেই জাতির অন্ধকার দেখার ভয়কে লেখক দারুণভাবে তুলে ধরেছেন।",
    },
    {
      reviewer: "মাহির খান",
      rating: "৩.৫",
      comment:
        "ভালো, কিন্তু মাঝে মাঝে টান হারিয়ে ফেলে। শুরুর দিকটা দারুণ, তবে মাঝখানে একটু ধীরগতির লাগছিল। শেষের অংশটা আবার শক্তিশালী। যারা গভীর কনসেপ্ট নিয়ে ভাবতে ভালোবাসেন, তাদের জন্য।",
    },
    {
      reviewer: "সাদিয়া আফরিন",
      rating: "৫.০",
      comment:
        "এটা শুধু একটি বই নয় — একটি অভিজ্ঞতা। 'নাইটফল' আমাকে কাঁপিয়ে দিয়েছে। অন্ধকার নিয়ে আমাদের ভয় ও মনস্তত্ত্বের উপর এমন গভীর পর্যবেক্ষণ আগে কখনো পড়িনি। ১০/১০!",
    },
    {
      reviewer: "তানভীর আহমেদ",
      rating: "৪.২",
      comment:
        "বইটি পড়ে বারবার মনে পড়েছে — অন্ধকার মানেই শুধু আলোহীনতা নয়। এটি একটি সমাজের, একটি বিশ্বাসের ভাঙনের গল্প। গল্পের মাঝে বিজ্ঞান, ধর্ম এবং মানুষের ভয় চমৎকারভাবে গাঁথা হয়েছে।",
    },
  ];

  const [starClicked, setStarClicked] = useState(0);

  return (
    <div className="w-[100%] h-[2000px] textGolden my-10 flex flex-col justify-evenly">
      <div className="w-[100%] h-[30%] mb-5 flex flex-row justify-evenly">
        <div className="w-[40%] h-[100%]">
          <img
            src="https://m.media-amazon.com/images/I/51Nlsi8yzGL.jpg"
            alt="Nightfall"
            className="w-fit h-[100%] m-auto"
          />
        </div>

        <div className="w-[50%] h-[100%] backgroundGolden rounded-2xl textGreen flex flex-col justify-evenly px-20">
          <h1 className="text-8xl font-extrabold">নাইটফল</h1>
          <h1 className="text-4xl font-bold">আইজ্যাক আসিমভ , রবার্ট সিলভারবার্গ</h1>
          <h1 className="text-4xl font-bold">৳ ৭৫০</h1>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${star <= rating ? "text-yellow-400" : "text-gray-400"} text-4xl`}
              >
                ★
              </span>
            ))}
          </div>
          <button className="block w-[250px] h-[80px] border-none backgroundGreen textGolden text-4xl rounded-lg cursor-pointer hover:bg-[hsl(92,30%,27%)]">
            বইটি কিনুন
          </button>
        </div>
      </div>

      <div className="w-[95%] h-[70%] backgroundGreen m-auto rounded-2xl flex flex-col justify-evenly">
        <div className="w-[100%] h-[30%] text-2xl px-20 my-5 font-semibold">
          <h1 className="text-6xl mb-5 font-bold underline">বই সম্পর্কে</h1>
          <h1>
            নাইটফল (Nightfall) হল বিশ্ববিখ্যাত বিজ্ঞান কথাসাহিত্যিক আইজ্যাক আসিমভ ও রবার্ট
            সিলভারবার্গ এর এক যুগান্তকারী কল্পবিজ্ঞান উপন্যাস। এই গল্পের পটভূমি এমন এক গ্রহ, যেখানে
            ছয়টি সূর্যের আলোয় কখনো রাত নামে না। এই গ্রহের বাসিন্দারা "অন্ধকার" শব্দটিকেও চেনে না।
            <br />
            তবে প্রতি ২০৪৯ বছরে একবার, সব সূর্য একসাথে অস্ত যায় — নেমে আসে প্রথমবারের মতো পূর্ণ
            অন্ধকার।
            <br />
            এই অন্ধকারে কী ঘটে?
            <br />
            মানুষ কীভাবে প্রতিক্রিয়া জানায়?
            <br />
            ধর্ম, বিজ্ঞান ও মনস্তত্ত্ব কীভাবে সংঘর্ষে জড়ায়?
            <br />
            নাইটফল একটি চমৎকার থ্রিলিং যাত্রা, যেখানে মানুষের ভয়, বিশ্বাস, ও বেঁচে থাকার লড়াই এক
            হয়ে এক ভয়াবহ বাস্তবতার সৃষ্টি করে। এটা কেবল একটি কল্পবিজ্ঞান উপন্যাস নয় — এটি একটি
            দার্শনিক অন্বেষণও।
          </h1>
        </div>

        <div className="w-[100%] h-[30%] px-20 py-5 overflow-auto">
          <h1 className="text-6xl mb-8 font-bold underline">পাঠকের মতামত</h1>
          {nightfallReviews.map((index) => (
            <UserReview userReview={index}></UserReview>
          ))}
        </div>

        <div className="w-[100%] h-[30%] px-20 py-5 overflow-auto">
          <h1 className="text-6xl mb-5 font-bold underline">আপনার মতামত</h1>
          <textarea
            className="backgroundGolden w-[100%] h-[44.5%] textGreen text-3xl p-3 mb-2 font-semibold rounded-2xl"
            placeholder="বইটি সম্পর্কে আপনার মতামত লিখুন"
          ></textarea>
          <span className="text-3xl font-semibold mr-2">রেটিং দিন: </span>
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
              className={`cursor-pointer ${star <= starClicked ? "text-yellow-400" : "text-gray-400"} text-3xl`}
            >
              ★
            </button>
          ))}
          <button className="w-[200px] h-[80px] backgroundGolden textGreen text-2xl font-semibold rounded-full hover:bg-[hsl(37,100%,80%)] hover:text-[1.7rem] cursor-pointer ml-[88%]">
            মতামত জমা দিন
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecificBook;
