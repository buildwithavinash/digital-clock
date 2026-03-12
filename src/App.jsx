import { useEffect } from "react"
import { useState } from "react"

const App = () => {

  const [now, setNow] = useState(()=> new Date())

  useEffect(()=>{
    let timerId = setInterval(() => {
      setNow(new Date()); 
    }, 1000);

    return ()=> clearInterval(timerId)
  }, [])

  let dateOptions = {
    day : "numeric",
    month : "long",
    year : "numeric"
  }
  return (
    <div className="h-screen w-full bg-slate-100 flex items-center justify-center p-24px">
      <div className="max-w-[550px] border border-slate-500 p-4 text-center rounded-xl">
        <h1 className="text-4xl mb-4">Digital Clock</h1>

        <div>
          <p className="text-8xl mb-2">{now.getHours()} : {now.getMinutes()} : {String(now.getSeconds()).padStart(2, "0")}</p>
          <p className="text-4xl text-gray-700">{now.toLocaleDateString("en-GB", dateOptions)}</p>
        </div>
      </div>
    </div>
  )
}

export default App