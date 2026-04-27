import NewsCard from "@/components/home/NewsCard"
import { getNewsByCategory } from "@/lib/data"

const News = async({category='08'}) => {
    const res = await getNewsByCategory(category)
    const CategoryNews = res.data
  return (
    <div className="p-2">
        <p className="text-xl font-semibold my-2">Dragon News Home</p>
      <div className="flex flex-col justify-between gap-6 4 items-start">
        {CategoryNews.map((news,index)=><NewsCard key={index} news={news}/>)}
      </div>
    </div>
  )
}

export default News
