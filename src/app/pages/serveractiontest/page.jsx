import React from 'react'
import { addPost} from '../../../lib/action'

const ServerActiionTest = () => {
  return (
    <main className="flex min-h-screen pt-12 flex-col items-center justify-between p-0 overflow-scroll">
    <div>ServerActionTest
  <form action={addPost} className='flex flex-col gap-8 mt-10'>

<input className=' border-x-2 text-black border-y-2 border-red-800 p-2' type="text"placeholder="title" name="title" id="" />
<input className=' border-x-2 text-black border-y-2 border-red-800 p-2' type="text"placeholder="pre" name="pre" id="" />
<input className=' border-x-2 text-black border-y-2 border-red-800 p-2' type="text"placeholder="body" name="body" id="" />
<input className=' border-x-2 text-black border-y-2 border-red-800 p-2' type="text"placeholder="userId" name="userId" id="" />
        <button className=' border-x-2 border-y-2 border-red-800 p-2 bg-slate-300 text-black font-extrabold'>Create Post</button>
  </form>
    </div>
    </main>
  )
}

export default ServerActiionTest