import BanglaClock from "../components/BanglaClock"
import LiteratureNews from "../components/LiteratureNews"
import RecentAdded from "../components/RecentAdded"

const Home = () => {

    return (
        <>
            <div className="textGolden w-1/2 px-8 ml-10 2xl:mt-10 2xl:mb-15 xl:my-7">
                <h1 className="2xl:text-7xl xl:text-5xl font-bold textShadow mb-10 italic underline">স্বাগতম, নতুন অতিথি!</h1>
                <BanglaClock></BanglaClock>
                <h3 className="2xl:text-[23px] xl:text-[18px] w-fit 2xl:mt-10 xl:mt-8 textShadow text-justify">আলোঘরের যাত্রা শুরু হয়েছিল বাংলা ভাষাভাষী বইপড়ুয়াদের একত্র করা ও তাদের চাহিদা মেটানোর অদম্য ইচ্ছা নিয়ে। বাংলাতে অনেক  অনলাইন বই ক্রয়-বিক্রয় এর ওয়েবসাইট থাকলেও, বইপড়ুয়াদের আড্ডার ব্যবস্থা নেই। আলোঘরের মাধ্যমে ব্যবহারকারীরা শুধু বই সংগ্রহ নয়, পরস্পরের সাথে যাতে সাহিত্য আলোচনায় মেতে উঠতে পারে তার ব্যবস্থা করাও আমাদের প্রধান লক্ষ্য।</h3>
            </div>

            <RecentAdded></RecentAdded>

            <div className="w-[65%] h-[580px] ml-10">
                <LiteratureNews></LiteratureNews>
            </div>

            
        </>
    )
}

export default Home