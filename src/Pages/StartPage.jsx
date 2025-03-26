import { useState } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Layout from '../components/Layout'


export default function StartPage() {
  const [inputValue, setInputValue] = useState('');
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-[1150px] flex-grow flex items-center justify-between">
        <div className="flex flex-col items-start">

        <p className="text-white w-[249px] h-[24px] mb-[10px]">
          Welche Filme kommen weiter?
        </p>

        <h1 className="text-white text-6xl font-bold w-[467px] h-[156px]">
          Starte jetzt dein<br /> CineMatch!
        </h1>

        <div className={`relative  w-[488px] h-[56px] border ${inputValue ? 'border-[#EDB244]' : 'border-[#546172]'} rounded-2xl bg-transparent`}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Wie ist dein Name?"
          className="w-full h-full pl-4 bg-transparent text-white placeholder-gray-300 focus:outline-none"
        />
        <button 
          className={`absolute right-[7px] top-[7px] h-[40px] w-[132px] ${inputValue ? 'bg-[#EDB244]' : 'bg-[#546172]'} text-[#0D1927] rounded-lg font-medium flex items-center justify-center`}
        >
          Los geht's
        </button>
      </div>
        </div>

        <div className="ml-[176px] mb-[82px]">
          <img 
            src='/images/posters/Group-1.png'
            alt="Movie poster"
            className="w-[482px] h-[548px] object-cover "
          />

        </div>
      </div>
    </Layout>
  )
}