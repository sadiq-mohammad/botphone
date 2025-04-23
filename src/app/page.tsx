
import Image from 'next/image';
import sandlogicLogo from '@/static/images/sandlogicLogo.png';
import Card from '@/components/card';


export default function Home() {
  const agents=[
    {
      name: "Sam",
      role: "Banking Assistance Agent",
      image: '/images/sam.png',
      desc: "A banking bot manages finances by checking balances, transferring funds, and paying bills.",
    },
    {
      name: "Mary",
      role: "Lead Qualification Assistance Agent",
      image: '/images/mary.png',
      desc: "A lead qualification bot engages prospects, gathers data, and assesses sales potential.",
    },
    {
      name: "Vikram",
      role: "Vehicle Assistance Agent",
      image: '/images/vikram.jpg',
      desc: "A vehicle bot provides navigation, maintenance alerts, and roadside assistance.",
    },
    {
      name: "Ruby",
      role: "Foxtel Assistance Agent",
      image: "images/ruby.jpg",
      desc:
        "A Foxtell bot manages TV subscriptions, troubleshooting, and content discovery.",
    },
    {
      name: "Neha",
      role: "Atomberg Assistance Agent",
      image: "images/neha.jpg",
      desc:
        "An Atomberg bot offers product support, troubleshooting, and energy-saving tips.",
    },
    {
      name: "Sania",
      role: "Retail Assistance Agent",
      image: "images/sania.jpg",
      desc:
        "A retail bot assists with product inquiries, order tracking, and recommendations.",
    },
    {
      name: "Aria",
      role: "Healthcare Assistance Agent",
      image: "images/aria.jpg",
      desc:
        "A healthcare bot handles medical info, appointments, and symptom checks.",
    },
    {
      name: "Priya",
      role: "Customer Support Assistance Agent",
      image: "images/priya.jpg",
      desc:
        "A customer support agent resolves inquiries, troubleshoots, and provides product details.",
    },
    {
      name: "Aditi",
      role: "Customer Support English ",
      image: "images/aditi.jpg",
      desc:
        "Helps users make reservations, order food, check menus, and receive dining recommendations.",
    }
  ]
  return (
    <div className={`h-screen flex flex-col bg-[#E2EEFE] `}>  {/* ${person ? "blur-bg" : ""} */}
       <header className=" text-white flex items-center justify-centers fixed top-0 w-full z-10 h-20 p-2 md:px-16 lg:px-22" >
        <div className="text-[#473F4B]">
        <p className="font-semibold text-xl">Need Help?</p>
        <p className="font-bold text-xl md:text-2xl">
          Our AI Assistants Have the Answers!
        </p>
      </div>
    </header>
    <main className="flex-grow mt-[5rem] mb-[4rem] overflow-y-scroll bg-s-100 px-2 md:px-16 lg:px-22 scrollbar-hide w-full">
      <div className='flex flex-wrap gap-1 mt-[30px]'>
        {agents.map((agent, index)=>(
          <Card key={index} name={agent.name} role={agent.role} image={agent.image} desc={agent.desc}></Card>
        ))}
      </div>
    </main>


    <footer className=" text-white fixed bottom-0 w-full h-16 flex items-center justify-center z-10 px-8 md:px-24 l gap-4">
    <p className="text-[#8D8194]">Brought to you by</p>
    <div className="">
      <img src='/images/sandlogic.jpg' alt='logo' className='w-[150px] h-[50px]'></img>
    <Image
      src='/images/sandlogic.jpg'
      alt="Sandlogic Logo"
      width={150}
      height={50}
    />
    </div>
  </footer>

  </div>
  );
}
