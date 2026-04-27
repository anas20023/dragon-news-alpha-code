import RightSideBar from "@/components/shared/RightSideBar"

const NewsDetailsLayout = ({ children }) => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-4">
            <div className="col-span-3">
                {children}
            </div>
            <div className="col-span-1 px-2 py-4"><RightSideBar /></div>
        </div>
    )
}

export default NewsDetailsLayout
