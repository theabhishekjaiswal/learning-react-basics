import { useCallback, useEffect, useRef, useState } from "react"

function PasswordGenerator(){

    const[length, setLength]= useState(8)
    const[numberAllowed, setNumberAllowed]= useState(false)
    const[charAllowed, setCharAllowed]= useState(false)
    const[password, setPassword]= useState("")

    const passRef= useRef(null)

    const passGene= useCallback(() => {

        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str+="0123456789"
        if(charAllowed) str+="~!@#$%^&*"

        for(let i=1; i<=length; i++){
            let char= Math.floor(Math.random()*str.length +1)
            pass+=str.charAt(char)
        }

        setPassword(pass)

    },[length,numberAllowed,charAllowed,setPassword])

    useEffect(() =>{
        passGene()
    },[length,numberAllowed,charAllowed,setPassword, passGene])

    const copyPassword= useCallback(()=>{
        passRef.current?.select()
        window.navigator.clipboard.writeText(password)
    },[password])

    return(
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
                <h1 className="text-white text-center my-3">
                    Password Generator
                </h1>
                <div className="flex shadow rounded-lg overflow-hiden mb-4 bg-white">
                    <input 
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        ref={passRef}
                    />
                    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>
                        Copy
                    </button>
                </div>

                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input 
                            type="range" 
                            min={6}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e)=>{setLength(e.target.value)}}
                        />
                        <label > Length: {length}</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input 
                            type="checkbox"
                            defaultChecked={numberAllowed} 
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev)=>!prev);
                            }}
                        />
                        <label htmlFor="numberInput">Number</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input 
                            type="checkbox"
                            defaultChecked={charAllowed} 
                            id="charInput"
                            onChange={() => {
                                setCharAllowed((prev)=>!prev);
                            }}
                        />
                        <label htmlFor="charInput">Character</label>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PasswordGenerator