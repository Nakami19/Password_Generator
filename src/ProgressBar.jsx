import { useEffect, useState } from "react"


function ProgressBar() {
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

    const subir = ()=>{
        if(progress==='Very Weak'){
            setProgress('Weak')
        }
        else if(progress==='Weak'){
            setProgress('Good')
        }
        else if(progress==='Good'){
            setProgress('Strong')
        }
        else {
            setProgress('Very Weak')
        }
    }
    return (
    <div id="container" className='flex flex-row space-x-16 w-3/4 justify-center'>
        <div id="progress-bar" className="w-96 h-4 border rounded-md bg-gray-300">
            <div id="progress-bar-fill" className={`h-full border rounded-md transition ease-out ${color} ${barwidth}`}>

            </div>
            <h1 className="pl-6">{progress}</h1>
            <button onClick={subir}>
                Progreso
            </button>
        </div>

        <div className="pl-6"></div>

    </div>

    )
}

export default ProgressBar

// justify-start justify-items-start	justify-self-start	content-start	items-start	 self-start	 place-content-start	place-items-start	place-self-start	