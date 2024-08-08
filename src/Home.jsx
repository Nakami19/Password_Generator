import React, { useState } from 'react'
import ProgressBar from './ProgressBar';


function Home() {

    const [password, setPassword] = useState("PAAAA")
    const [copy, setCopy] = useState("Copy")
    const [showCopytip, setShowCopytip] = useState(false);
    const [showGeneratetip, setShowGeneratetip] = useState(false);



    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(password)
            setCopy("Copied")
            const timer = setTimeout(() => {
                setCopy("Copy");
              }, 2000);
            return () => clearTimeout(timer);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
        <div className='h-screen w-screen bg-seashell flex flex-col items-center justify-center'>
        <h1 className="text-center text-3xl my-2 font-sans font-medium ">Random Password Generator</h1>
        {/* Contenedor donde se muestra la clave y el boton de generar nueva clase */}
        <div className='flex flex-row space-x-7 mt-10'>
            <div id="password-container" className='shadow-xl bg-white w-96 h-14 border rounded-lg flex items-center relative border-current'>
                <label id="generate-password" className="text-xl font-normal leading-none text-gray-800 font-montserrat pl-6">
                    {password}
                </label>
                <button className='absolute right-7' onClick={onCopy} onMouseEnter={()=>setShowCopytip(true)} onMouseLeave={()=>setShowCopytip(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Common-File-Stack--Streamline-Ultimate" height="24" width="24">
                        <desc>Common File Stack Streamline Icon: https://streamlinehq.com</desc>
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M17.25 23.25H3.75c-0.39782 0 -0.77936 -0.158 -1.06066 -0.4393 -0.2813 -0.2813 -0.43934 -0.6629 -0.43934 -1.0607V5.25" strokeWidth="1.5"></path>
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M20.25 20.25H6.75c-0.39782 0 -0.77936 -0.158 -1.06066 -0.4393 -0.2813 -0.2813 -0.43934 -0.6629 -0.43934 -1.0607V2.25" strokeWidth="1.5"></path>
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M21.75 15.75c0 0.3978 -0.158 0.7794 -0.4393 1.0607s-0.6629 0.4393 -1.0607 0.4393H9.75c-0.39782 0 -0.77936 -0.158 -1.06066 -0.4393 -0.2813 -0.2813 -0.43934 -0.6629 -0.43934 -1.0607V2.25c0 -0.39782 0.15804 -0.77936 0.43934 -1.06066C8.97064 0.908035 9.35218 0.75 9.75 0.75h7.629c0.3975 0.000085 0.7788 0.157982 1.06 0.439l2.872 2.872c0.281 0.2812 0.4389 0.66245 0.439 1.06V15.75Z" strokeWidth="1.5"></path>
                    </svg>                    
                    {showCopytip && (
                        <div className="absolute bottom-full mb-2 w-16 p-1 text-center text-xs text-white bg-black rounded-md">
                        {copy}
                        </div>
                    )
                    }
                </button>                            
            </div>
            <div className='bg-red-400 w-16 h-14 border rounded-md flex items-center justify-center'>
                <button className='relative' onMouseEnter={()=>setShowGeneratetip(true)} onMouseLeave={()=>setShowGeneratetip(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Synchronize-Refresh-Arrow--Streamline-Ultimate" height="27" width="27">
                        <desc>Synchronize Refresh Arrow Streamline Icon: https://streamlinehq.com</desc>
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M5.278 17.49c1.26157 1.9797 3.19489 3.4378 5.445 4.1068 2.2501 0.6689 4.666 0.5037 6.8042 -0.4652 2.1382 -0.9689 3.8551 -2.6766 4.8355 -4.8095 0.9804 -2.1329 1.1586 -4.5479 0.5018 -6.80158 -0.6568 -2.25369 -2.1045 -4.19484 -4.0773 -5.46706 -1.9728 -1.27222 -4.3384 -1.79013 -6.6623 -1.45865C9.80098 2.9263 7.6746 4.08493 6.13617 5.858S3.7505 9.89957 3.75 12.247V14.5" strokeWidth="1.5"></path>
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="m0.75 11.4969 3 3 3 -3" strokeWidth="1.5"></path>
                    </svg>
                    {showGeneratetip && (
                        <div className="absolute bottom-full mb-2 w-20 p-1 text-center text-xs text-white bg-black rounded-md">
                        Generate
                        </div>
                    )
                    }
                </button>
            </div>
        </div>

        {/* Barra de progreso */}
        <ProgressBar/>
        </div>

        <footer className='bg-tiffany-blue'>
            <h1>Hola</h1>

        </footer>
        </>
    )
} 

export default Home