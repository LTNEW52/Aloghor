import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DiscussionOverview = () => {
  const discussionPreviews = {
    0: {
      title: "বাংলা সায়েন্স ফিকশন কি সত্যিই বদলে যাচ্ছে?",
      snippet:
        "গত এক দশকে বাংলা সায়েন্স ফিকশন ধারায় কিছু উল্লেখযোগ্য পরিবর্তন দেখা গেছে। পাঠকেরা এই বিষয়ে নিজেদের মতামত দিচ্ছেন…",
      author: "সৈকত দে",
      comments: 12,
      date: "১ দিন আগে",
      slug: "bangla-sci-fi-change",
    },
    1: {
      title: "সাহিত্যে নারীর অবস্থান — আজকের দৃষ্টিকোণ",
      snippet:
        "আধুনিক বাংলা সাহিত্যে নারীর ভূমিকায় কী ধরনের পরিবর্তন এসেছে? এই আলোচনায় পাঠকেরা জানাচ্ছেন তাদের নিজস্ব বিশ্লেষণ…",
      author: "নাদিয়া রহমান",
      comments: 8,
      date: "৩ ঘণ্টা আগে",
      slug: "women-in-literature",
    },
    2: {
      title: "হুমায়ূন আহমেদের লেখার চরিত্র নির্মাণ নিয়ে বিতর্ক",
      snippet:
        "কিছু পাঠকের মতে হুমায়ূন আহমেদের চরিত্রগুলোর গভীরতা কমে গেছে তার শেষদিকের লেখাগুলোতে। অন্যদিকে অনেকেই তা মানতে নারাজ…",
      author: "রাফিদ হাসান",
      comments: 15,
      date: "আজ",
      slug: "humayun-character-debate",
    },
  };

  const [cardsNum, setCardsNum] = useState(0);
  const [animate, setAnimate] = useState(false);
  const previewLen = Object.keys(discussionPreviews).length;

  useEffect(() => {
    const cards = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setCardsNum((prev) => (prev + 1) % previewLen);
      }, 250);

      setTimeout(() => {
        setAnimate(false);
      }, 800);
    }, 6000);
    return () => {
      clearInterval(cards);
    };
  }, []);

  return (
    <div className="w-[60%] h-[430px] ml-auto mr-10 my-10">
      <h1 className="textGolden text-5xl font-bold italic underline mt-5 text-center animate-bounce textShadow">
        এই মুহূর্তের আলোচনায়
      </h1>
      <div
        className={`my-10 w-[100%] h-[82%] flex ${animate ? "flipUp" : ""} boxShadowleft backgroundGreen p-6 rounded-xl boxShadowleft`}
      >
        <div className="w-[100%] h-full textGolden p-8 textShadow">
          <h1 className="text-5xl mt-3 mb-10 text-center">{discussionPreviews[cardsNum].title}</h1>
          <h1 className="text-2xl mb-7">{discussionPreviews[cardsNum].snippet}</h1>
          <h1 className="text-[23px] text-left ml-[5%]">
            লিখেছেন {discussionPreviews[cardsNum].author} . {discussionPreviews[cardsNum].comments}{" "}
            মন্তব্য . {discussionPreviews[cardsNum].date}
          </h1>
          <h1 className="mt-2 text-[23px] text-right hover:text-3xl hover:underline">
            <Link to="/discussion">আলোচনায় যান &#8594;</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DiscussionOverview;

// This is actually close to Literature news, minus the Image part.

// Uses Link to go directly to discussion page. Its a placeholder for now but when database is up and running, it will go directly to the post. For that we have to use Slug.
