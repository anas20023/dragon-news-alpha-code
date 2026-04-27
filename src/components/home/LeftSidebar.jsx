import Link from "next/link"

const getCatagories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    return await res.json()
}
const Catagory = async ({ activeID=null }) => {
    const res = await getCatagories()
    const catagories = res.data.news_category.sort((a,b)=>a.category_name.localeCompare(b.category_name))
    console.log(catagories)
    return (
        <div className="p-2">
            <p className="text-xl font-semibold my-2">All Caterogy</p>
            <div className="flex flex-col justify-between gap-2">
                {
                    catagories.map((item, index) => {
                        return (<Link className={`block px-4 py-2 ${item.category_id === activeID ? 'bg-blue-600':'bg-slate-200'}`} key={index} href={`/category/${item.category_id}`}>
                            <button className="cursor-pointer">{item.category_name}</button>
                        </Link>)
                    })
                }
            </div>
        </div>
    )
}

export default Catagory
