import Catagory from "@/components/home/LeftSidebar"
import News from "@/components/home/News"
import RightSideBar from "@/components/shared/RightSideBar"

const NewsPage = async ({ params }) => {
    const { id } = await params
    return (
        <div className="max-w-6xl mx-auto my-5 grid grid-cols-5 gap-2 w-full">
            <div className="col-span-1  px-2 py-4"><Catagory activeID={id} /></div>
            <div className="col-span-3  px-2 py-4"><News category={id} /></div>
            <div className="col-span-1 px-2 py-4"><RightSideBar /></div>
        </div>
    )
}

export default NewsPage
