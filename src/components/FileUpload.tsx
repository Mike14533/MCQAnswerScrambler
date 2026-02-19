import { useState } from "react";
import './FileUpload.css'

function FileUpload (){
    const [inputs, setInputs] = useState('');


    const handleChange= (e:any) => {
        const value = e.target.value
        setInputs(value)
        Scramble(inputs)
    }
    function shuffleArray(array: any){
        for(var i = array.length - 1; i > 0; i--){
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    function Scramble(e:any){
        console.log(  e);
        console.log("Scrambling...");
        console.log(inputs)
        let text = inputs
        let A = text.substring(text.search(/A/) +2,  text.search(/B/))
        let B = text.substring(text.search(/B/) +2,  text.search(/C/))
        let C = text.substring(text.search(/C/) +2,  text.search(/D/))
        let D = text.substring(text.search(/D/) +2,  text.search(/E/))
        let E = text.substring(text.search(/E/) +2,  text.length)
        const answers = [A, B, C, D, E]
       shuffleArray(answers)
        return(
            <div>
                <p>A. {answers[0]}</p>
                <p>B. {answers[1]}</p>
                <p>C. {answers[2]}</p>
                <p>D. {answers[3]}</p>
                <p>E. {answers[4]}</p>
            </div>
        )



    };
        return (
            <>
                <div>
            <input  type="text" name = 'value' onChange={handleChange}/>
      
            
          </div>
          <div>
            <Scramble/>
          </div>
            </>
          
          
        )
}

export default FileUpload