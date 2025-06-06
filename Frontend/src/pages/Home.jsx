import BanglaClock from "../components/Home/BanglaClock"
import LiteratureNews from "../components/Home/LiteratureNews"
import RecentAdded from "../components/Home/RecentAdded"
import DiscussionOverview from "../components/Home/DiscussionOverview"

const Home = () => {

    return (
        <>
            <div className="textGolden w-1/2 px-8 ml-10 mt-10 mb-15 ">
                <h1 className="text-7xl font-bold textShadow mb-10">স্বাগতম, নতুন অতিথি!</h1>
                <BanglaClock></BanglaClock>
                <h3 className="text-[23px] w-fit mt-10 textShadow text-justify">আলোঘরের যাত্রা শুরু হয়েছিল বাংলা ভাষাভাষী বইপড়ুয়াদের একত্র করা ও তাদের চাহিদা মেটানোর অদম্য ইচ্ছা নিয়ে। বাংলাতে অনেক  অনলাইন বই ক্রয়-বিক্রয় এর ওয়েবসাইট থাকলেও, বইপড়ুয়াদের আড্ডার ব্যবস্থা নেই। আলোঘরের মাধ্যমে ব্যবহারকারীরা শুধু বই সংগ্রহ নয়, পরস্পরের সাথে যাতে সাহিত্য আলোচনায় মেতে উঠতে পারে তার ব্যবস্থা করাও আমাদের প্রধান লক্ষ্য।</h3>
            </div>

            <RecentAdded></RecentAdded>

            <LiteratureNews></LiteratureNews>

            <DiscussionOverview></DiscussionOverview>

            <div className="w-[50%] h-[730px] ml-auto overflow-hidden relative">
                <img src="../public/image/homePeopleReading.jpg" alt="" className="h-[920px] object-cover rounded-full translate-x-[10%] absolute"/>
            </div>
        </>
    )
}

export default Home

// React Components are better to use rather than traditional HTML CSS, because it gets bigger in no time. Different files are better to manage and change. Although not all are reused, it somewhat gave a structurd look.

// With this home page is finished!