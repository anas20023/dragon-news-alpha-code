export const getCatagories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    return await res.json()
}
export const getNewsByCategory= async(category_id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data=res.json()
    return data
}
// export const getNewsDetailsById=async(news_id)=>{
//     const res= await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
//     const result= await res.json()
//     // console.log(data)
//     return result.data
// }

export const getNewsDetailsById = async (news_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
    const { data } = await res.json()
    return data[0]  
}
