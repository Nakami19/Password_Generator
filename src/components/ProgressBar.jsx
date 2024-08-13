import { useEffect, useState } from "react"


function ProgressBar({value}) {
    const [progress, setProgress]=useState("Very Weak")
    const [color, setColor]=useState('bg-green-300')
    const [barwidth, setWidth]=useState('w-1/4')
    

    useEffect(() => {
        if (progress === 'Very Weak') {
            setColor('bg-red-500');
            setWidth('w-1/4');
        } else if (progress === 'Weak') {
            setColor('bg-red-300');
            setWidth('w-2/4');
        } else if (progress === 'Good') {
            setColor('bg-green-300');
            setWidth('w-3/4');
        } else if (progress === 'Strong') {
            setColor('bg-green-500');
            setWidth('w-full');
        } else {
            setColor('bg-gray-300');
            setWidth('w-0');
        }
    }, [progress]);

    useEffect (()=>{
        if(value>4 && value<=7){
            setProgress('Weak')
        }
        else if(value>7 && value<=11){
            setProgress('Good')
        }
        else if(value>11){
            setProgress('Strong')
        }
        else {
            setProgress('Very Weak')
        }
    },[value])

    return (
    <div id="container" className='flex flex-row space-x-16 w-80 ml-6 md:ml-0 lg:ml-0 md:w-3/4 lg:w-3/4 justify-center h-20'>
        <div id="progress-bar" className="w-96 h-4 border rounded-md bg-gray-300">
            <div id="progress-bar-fill" className={`h-full border rounded-md transition ease-out ${color} ${barwidth}`}>

            </div>
            <div className={`${color} bg-opacity-50 w-24 flex justify-center mt-1 border rounded-md`}>
              <h1 className={''}>{progress}</h1>  
            </div>
 
        </div>
        <div className="pl-3"></div>

    </div>

    )
}

export default ProgressBar
