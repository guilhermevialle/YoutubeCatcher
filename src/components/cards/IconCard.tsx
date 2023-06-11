type Props = {
  title: string | React.ReactNode
  p: string | React.ReactNode
  icon: React.ReactNode
}

export default function IconCard({ title, p, icon }: Props) {
  return (
    <div className='w-[80%] h-[310px] border-[1px] border-neutral-900 rounded-md flex flex-col items-center justify-center'>
      <div className='h-[30%] flex items-center justify-center '>
        <i className='border-[1px] px-3 border-neutral-800 p-2 bg-neutral-900 shadow-sm text-neutral-400 rounded'>
          {icon}
        </i>
      </div>
      <h1 className='text-lg h-[5%] flex items-center justify-center px-3 text-neutral-200'>
        {title}
      </h1>
      <p className=' h-[65%] flex items-center justify-center px-3 text-sm text-neutral-400 text-center'>
        {p}
      </p>
    </div>
  )
}
