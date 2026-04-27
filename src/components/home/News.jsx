import NewsCard from "@/components/home/NewsCard"

const getNewsByCategory= async(category_id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data=res.json()
    return data
}
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
