import { useState } from "react"

function BackgroundChanger2() {

    const [color, setColor] = useState("olive")
    const colors=[
         "red", "green", "blue", "orange", "purple", "pink",
            "teal", "cyan", "yellow", "gray", "black"
    ]


    return (
        <div
            className=" w-full h-screen duration-200 "
            style={{ backgroundColor: color }}
        >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                {colors.map((clr)=>(
                     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                        style={{ backgroundColor: clr }}
                        onClick={() => setColor(clr)}
                    >{clr}</button>
                ))}
                </div>
            </div>
        </div>
    )
}
export default BackgroundChanger2