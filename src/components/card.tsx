import Image from "next/image";

interface cardDetails {
    name: string,
    role: string,
    image: string,
    desc: string,
}
export default function Card({ name, role, image, desc }: cardDetails) {
    return (
        <div className="bg-[conic-gradient(at_top_left,_#fceabb,_#e8d9f1,_#d5f5e3,_#e0eafc)] 
        border border-gray-200 rounded-[10px] 
        w-[250px] h-[220px] mb-[10px] mr-[10px] p-[10px] 
        shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex ">
                <img src={image} alt={name} className="flex justify-center items-center w-[72px] h-[72px]  rounded-[10px] overflow-hidden"/>
                <div className="p-[10px]  w-[16opx] h-[90px] items-center">
                    <h4 className="font-bold text-[18px]">{name}</h4>
                    <p className="text-gray-600 text-[11px] pt-[10px]">{role}</p>
                </div>
            </div>
            <p className="mt-[10px] mb-[20px]  h-[50px] text-gray-600 text-[12px]">{desc}</p>
            <div className="text-right">
                <button className="text-4xl w-[24px] h-[24px] mr-[10px] cursor-pointer">→</button>
                {/* <span className="text-4xl">→</span> */}
            </div>
        </div>
    )
}