import React, { useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar';
import Slider from './components/Slider';


function Home() {

    const [password, setPassword] = useState("")
    const [copy, setCopy] = useState("Copy")
    const [showCopytip, setShowCopytip] = useState(false);
    const [showGeneratetip, setShowGeneratetip] = useState(false);
    const [options, setOptions] = useState(['ABC','abc','123','$?#'])
    const [value, setValue] = useState(5);
    const [image, setImage]= useState({'Very Weak':'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2047868-eb3f-45a9-84ac-a12510bfedd9/df1pqxm-9f96fac4-bc92-4c6a-924d-fd77bb5e0fd5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyMDQ3ODY4LWViM2YtNDVhOS04NGFjLWExMjUxMGJmZWRkOVwvZGYxcHF4bS05Zjk2ZmFjNC1iYzkyLTRjNmEtOTI0ZC1mZDc3YmI1ZTBmZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EAweI9JPfefgJovQI4xtfinJQr-xmXqCBkmMkg4-hJw'})
    const [checkedItems, setCheckedItems] = useState({0:true, 1:true, 2:true, 3:true});

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = ".,><?:;!@#$%^&*()-_+=[]{}/"


    const handleCheckboxChange = (index) => {
        const checkcount=Object.values(checkedItems).filter((value)=>value===true).length

        if (checkcount<=1 && checkedItems[index]){
            return
        } 
        setCheckedItems((prevState) => ({
          ...prevState,
          [index]: !prevState[index], 
        }));
        
      };

    const selectedOptions = Object.keys(checkedItems).filter((key) => checkedItems[key]===true);

    const handleRangeChange = (newValue) => {
        setValue(newValue);
      };


    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(password)
            setCopy("Copied")
            const timer = setTimeout(() => {
                setCopy("Copy");
              }, 1000);
            return () => clearTimeout(timer);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{GeneratePassword()},[checkedItems])

    useEffect(()=>{
        
        if(value>4 && value<=7){
            setImage({'Weak':'https://i.pinimg.com/564x/1b/42/da/1b42da1af2e7c610be3d0a3abfccd2de.jpg'})
        }
        else if(value>7 && value<=11){
            setImage({'Good':'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73e7e895-ebb4-4062-bc47-cd0f3505b1ae/dfeayj2-a10a7314-51af-4739-91de-3dbc46348986.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczZTdlODk1LWViYjQtNDA2Mi1iYzQ3LWNkMGYzNTA1YjFhZVwvZGZlYXlqMi1hMTBhNzMxNC01MWFmLTQ3MzktOTFkZS0zZGJjNDYzNDg5ODYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WMLkecgWXf18Myo8Db85xcWSiCu5Cma05p0nA_0WcBs'})
        }
        else if(value>11){
            setImage({'Strong':'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/631e9029-5f0a-4e29-b36a-d5084ce15b39/de3iqur-3e088629-fb43-43b8-b9d0-8b62100723e5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzMWU5MDI5LTVmMGEtNGUyOS1iMzZhLWQ1MDg0Y2UxNWIzOVwvZGUzaXF1ci0zZTA4ODYyOS1mYjQzLTQzYjgtYjlkMC04YjYyMTAwNzIzZTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xZWzREZep74PENkXPhVMWK8q8cnjr2dP25KIyx5nZME'})
        }
        else {
            setImage({'Very Weak':'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2047868-eb3f-45a9-84ac-a12510bfedd9/df1pqxm-9f96fac4-bc92-4c6a-924d-fd77bb5e0fd5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyMDQ3ODY4LWViM2YtNDVhOS04NGFjLWExMjUxMGJmZWRkOVwvZGYxcHF4bS05Zjk2ZmFjNC1iYzkyLTRjNmEtOTI0ZC1mZDc3YmI1ZTBmZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EAweI9JPfefgJovQI4xtfinJQr-xmXqCBkmMkg4-hJw'})
        }
        setPassword("")
        GeneratePassword()
    },[value])

    const GeneratePassword = () => {
        setPassword("")
        var sequence=""
        var temppass=""
        if (selectedOptions.includes("0")) {
            sequence = sequence+uppercase
        }
        if (selectedOptions.includes("1")) {
            sequence = sequence+lowercase
        }
        if(selectedOptions.includes("2")){
            sequence = sequence + numbers
        }
        if (selectedOptions.includes("3")){
            sequence = sequence + symbols
        }
        
        for (let index = 0; index < value; index++) {
            const character = Math.floor(Math.random() * sequence.length)
            temppass= temppass+sequence[character]            
        }

        setPassword(temppass)
    }

    return (
        <>
        <div className='h-screen bg-seashell flex flex-col items-center justify-center'>
        <h1 className="text-center text-3xl my-2 font-sans font-medium ">Random Password Generator</h1>
        {/* Contenedor donde se muestra la clave y el boton de generar nueva clase */}
        <div className='flex flex-row space-x-2 mt-10 md:space-x-6 lg:space-x-6'>
            <div id="password-container" className='shadow-xl bg-white w-64 h-12 border rounded-lg flex items-center relative border-current md:w-96 lg:w-96 md:h-14'>
                <div className='w-10/12 overflow-x-auto relative'>
                <input readOnly value={password} spellCheck="false" type="text" id="generate-password" className="w-full text-xl font-normal leading-none text-gray-800 font-montserrat pl-6 focus:outline-none">
                    
                </input>
                </div>
                <button className='pl-6 absolute right-4 md:right-5 lg:right-5' onClick={onCopy} onMouseEnter={()=>setShowCopytip(true)} onMouseLeave={()=>setShowCopytip(false)}>
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
            <div className='bg-red-400 w-12 h-12 border rounded-md flex items-center justify-center md:w-14 md:h-14'>
                <button className='relative' onMouseEnter={()=>setShowGeneratetip(true)} onMouseLeave={()=>setShowGeneratetip(false)} onClick={GeneratePassword}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Synchronize-Refresh-Arrow--Streamline-Ultimate" height="27" width="27">
                        <desc>Synchronize Refresh Arrow Streamline Icon: https://streamlinehq.com</desc>
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M5.278 17.49c1.26157 1.9797 3.19489 3.4378 5.445 4.1068 2.2501 0.6689 4.666 0.5037 6.8042 -0.4652 2.1382 -0.9689 3.8551 -2.6766 4.8355 -4.8095 0.9804 -2.1329 1.1586 -4.5479 0.5018 -6.80158 -0.6568 -2.25369 -2.1045 -4.19484 -4.0773 -5.46706 -1.9728 -1.27222 -4.3384 -1.79013 -6.6623 -1.45865C9.80098 2.9263 7.6746 4.08493 6.13617 5.858S3.7505 9.89957 3.75 12.247V14.5" strokeWidth="1.5"></path>
                        <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="m0.75 11.4969 3 3 3 -3" strokeWidth="1.5"></path>
                    </svg>
                    {showGeneratetip && (
                        <div className="right-0 absolute bottom-full mb-2 w-20 p-1 text-center text-xs text-white bg-black rounded-md md:left-0 lg:left-0">
                        Generate
                        </div>
                    )
                    }
                </button>
            </div>
        </div>
        {/* Barra de progreso */}
        <ProgressBar value={value}/>

        {/* div que tiene la imagen y la config */}
        <div className='flex flex-col w-fit items-center md:flex-row lg:flex-row md:space-x-20 lg:space-x-20 md:items-start lg:items-start'>
            <img alt={Object.keys(image)} src={image[Object.keys(image)]} className='w-48 h-44 justify-start border rounded-md mb-4'></img>
            <div id='config-container' className='space-y-4 flex flex-col items-center justify-center'>
                <div className='flex flex-row space-x-4'>
                    <h1 className='font-sans text-lg'>Password length</h1>
                    <div className='bg-white w-9 flex justify-center border  border-slate-500 shadow-xl'>
                        <h1>{value}</h1>
                    </div>
                </div>

                    <Slider value={value} onValueChange={handleRangeChange}/>
                
                <div id='checkboxs' className='flex flex-row space-x-6 md:ml-5 lg:ml-5'>
                {options.map((item,index) => 
                <div key={index}>
                    <label className='flex items-center font-sans text-lg'>
                        <input type="checkbox" className='mr-1.5 h-5 w-5 bg-white custom-checkbox' checked={!!checkedItems[index]} onChange={() => {handleCheckboxChange(index)}}/>
                        {item}
                    </label>

                </div>
                ) 
                }
                </div>

            </div>
        </div>

        </div>


        <footer className='bg-tiffany-blue flex flex-row space-x-20 justify-center items-center h-20'>
            <h1 className=''>Contact: narsrivas@gmail.com</h1>
            <a href='https://github.com/Nakami19' className='h-10 w-10' target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
            </a>
        </footer>
        </>
    )
} 

export default Home