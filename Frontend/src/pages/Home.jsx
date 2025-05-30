import BanglaClock from "../components/BanglaClock"
import LiteratureNews from "../components/LiteratureNews"
import RecentAdded from "../components/RecentAdded"
import DiscussionOverview from "../components/DiscussionOverview"
import Footer from "../components/Footer"

const Home = () => {

    return (
        <>
            <div className="textGolden w-1/2 px-8 ml-10 2xl:mt-10 2xl:mb-15 xl:my-7">
                <h1 className="2xl:text-7xl xl:text-5xl font-bold textShadow mb-10">স্বাগতম, নতুন অতিথি!</h1>
                <BanglaClock></BanglaClock>
                <h3 className="2xl:text-[23px] xl:text-[18px] w-fit 2xl:mt-10 xl:mt-8 textShadow text-justify">আলোঘরের যাত্রা শুরু হয়েছিল বাংলা ভাষাভাষী বইপড়ুয়াদের একত্র করা ও তাদের চাহিদা মেটানোর অদম্য ইচ্ছা নিয়ে। বাংলাতে অনেক  অনলাইন বই ক্রয়-বিক্রয় এর ওয়েবসাইট থাকলেও, বইপড়ুয়াদের আড্ডার ব্যবস্থা নেই। আলোঘরের মাধ্যমে ব্যবহারকারীরা শুধু বই সংগ্রহ নয়, পরস্পরের সাথে যাতে সাহিত্য আলোচনায় মেতে উঠতে পারে তার ব্যবস্থা করাও আমাদের প্রধান লক্ষ্য।</h3>
            </div>

            <RecentAdded></RecentAdded>

            <LiteratureNews></LiteratureNews>

            <DiscussionOverview></DiscussionOverview>

            <div className="w-[100%] relative">
                <Footer></Footer>

                <div className="w-[50%] h-[730px] ml-auto overflow-hidden">
                    <img src="../public/image/homePeopleReading.jpg" alt="" className="h-[920px] object-cover rounded-full translate-x-[10%]"/>
                </div>
            </div>
        </>
    )
}

export default Home

// React Components are better to use rather than traditional HTML CSS, because it gets bigger in no time. Different files are better to manage and change. Although not all are reused, it somewhat gave a structurd look.

// With this home page is finished!