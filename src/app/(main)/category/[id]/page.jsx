import Catagory from "@/components/home/LeftSidebar"
import News from "@/components/home/News"

const NewsPage = async ({ params }) => {
    const { id } = await params
    return (
        <div className="max-w-6xl mx-auto my-5 grid grid-cols-12 gap-5 w-full">
            <div className="col-span-3  px-2 py-4"><Catagory activeID={id} /></div>
            <div className="col-span-6  px-2 py-4"><News category={id}/></div>
            <div className="col-span-3 px-2 py-4">Login</div>
        </div>
    )
}

export default NewsPage
