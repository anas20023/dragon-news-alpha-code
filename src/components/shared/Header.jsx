import headerimg from '@/assets/logo.png'
import { format } from 'date-fns'
import Image from 'next/image'
const Header = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto w-full  items-center justify-center mt-6">
      <Image src={headerimg} alt='header' height={100} width={300} />
      <p className='text-slate-700 mt-2 text-sm'>Journalism Without Fear or Favour</p>
      <p className='text-slate-700 mt-2'>{format(new Date(), "eeee , dd MMMM yyy")}</p>
     
    </div>
  )
}

export default Header
