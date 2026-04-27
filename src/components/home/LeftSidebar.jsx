import { getCatagories } from "@/lib/data"
import Link from "next/link"

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
                        return (<Link className={`block px-4 py-2 rounded ${item.category_id === activeID ? 'bg-red-200':'bg-slate-200'}`} key={index} href={`/category/${item.category_id}`}>
                            <button className="cursor-pointer">{item.category_name}</button>
                        </Link>)
                    })
                }
            </div>
        </div>
    )
}

export default Catagory
