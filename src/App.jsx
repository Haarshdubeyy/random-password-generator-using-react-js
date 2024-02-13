import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

      const [Length,setLength]=useState(8);
      const [numberAllowed,setNumberAllowed]=useState(false);
      const [charAllowed, setCharAllowed] = useState(false);
      const [Password, setPassword] = useState("")

      //Useref Hook


      const passwordRef = useRef(null)


     const passwordGenerator = useCallback(() =>{
                        let pass = ""
                        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                        if (numberAllowed) str += "0123456789"
                        if (charAllowed) str += "!@#$%^&*()"

                        for(let i=1;i<=Length;i++){
                          let char = Math.floor(Math.random() * str.length + 1)

                          pass += str.charAt(char)
                        }

                        setPassword(pass)
     },[Length, numberAllowed, charAllowed, setPassword]);

         const copyPasswordToClipboard = useCallback(() => {
          passwordRef.current?.select();
           window.navigator.clipboard.writeText(Password)
         },[Password])

         useEffect(() =>{
          // passwordGenerator()
         }, [Length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <div className='w-full max-w-md mx-auto
     shadow-md rounded-lg px-4 my-8 text-orange-500 text-center
     bg-[#000000] py-8 scroll-px-10'>

      <h1 className='text-2xl font-bold'>Password Generator</h1>
      <p className='text-sm text-gray-300 my-2 font-mono text-[#87666]'>Generate a secure password</p>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={Password}
          className='w-full px-3 py-2 text-gray-600 focus:outline-none font-mono font-bold'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
           hover:bg-cyan-600 font-mono'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={0}
            max={100}
            value={Length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {Length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            checked={numberAllowed}
            className='cursor-pointer'
            onChange={() =>{
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Number</label>  
        </div>
        <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() =>{
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="charInput">Character</label>
        </div>
      </div>
      <button
      onClick={passwordGenerator}
       className='bg-[#5b2ecc] w-[200px] rounded-md 
       font-medium my-6 mx-auto py-3
        text-white hover:bg-[#073d56]'>Generate</button>


<div class="text-gray-300 rounded-lg text-sm w-[350px] bg-[#161b22] border border-[#3f3f46] mx-auto py-2">
	<div class="w-full flex flex-row space-x-3 p-4">
		<img
        class="rounded-2xl border-zinc-700 w-20 h-20"
        alt="Harsh Dubey"
        src="https://avatars.githubusercontent.com/u/65394410?v=4"
      />
		<div class="w-full text-gray-500">
			<p class="w-[200px] text-lg space-x-1 inline-block overflow-hidden whitespace-nowrap text-ellipsis">
				<span class="text-gray-100 font-mono">Harsh Dubey</span>
			</p>
			<p className="text-sm font-serif">Front-end Developer</p>
		</div>
	</div>
	<div class="w-full border-b border-[#3f3f46]"></div>
	<div class="w-full flex flex-row space-x-4 p-4 text-gray-500 text-sm">
		<p class="flex items-center space-x-1">
			<a class="hover:text-blue-500 flex items-center space-x-1"
				href="#"><svg text="muted" aria-hidden="true" height="16"
					viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" fill="currentColor">
					<path
						d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z">
					</path>
				</svg><span>1</span><span> follower </span></a><span class="text-gray-100"> · </span><a
				class="hover:text-blue-500" href="#">5
				following</a>
		</p>
	</div>
	<div class="w-full border-b border-[#3f3f46]"></div>
	<div class="w-full flex-col space-y-1 p-4 text-gray-500 text-sm">
		<div class="flex items-center space-x-1">
			<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" fill="currentColor" aria-hidden="true">
				<path
					d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z">
				</path>
			</svg>
			<p class="text-gray-100">India</p>
		</div>
		<div v-if="infos.blog" class="flex items-center space-x-1">
			<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"
				fill="currentColor">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
			</svg>
			<a class="text-gray-100 hover:text-blue-500" href="#">haarshdubeyy</a>
		</div>
		<div v-if="infos.twitter_username" class="flex items-center space-x-1">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" width="16" height="16">
				<path
					d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
					fill="currentColor"></path>
			</svg>
			<a class="text-gray-100 hover:text-blue-500" href="#">@harsh_retwt</a>
		</div>
	</div>
</div>


    </div>

    
    
  )
}

export default App


