import News from "@/components/home/News";
import Catagory from "../../components/home/LeftSidebar";

export default async function Home() {
  return (
    <div className="max-w-6xl mx-auto my-5 grid grid-cols-12 gap-2 w-full">
      <div className="col-span-3  px-2 py-4"><Catagory /></div>
      <div className="col-span-6  px-2 py-4"><News /></div>
      <div className="col-span-3 px-2 py-4">Login</div>
    </div>
  );
}
