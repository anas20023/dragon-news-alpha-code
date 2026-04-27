import { redirect } from "next/navigation";
const default_page='08'
export default async function Home() {
  redirect(`/category/${default_page}`)
}
