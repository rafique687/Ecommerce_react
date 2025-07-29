import { useState } from "react";
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';

function Image()
{
    const image=[pic1,pic2,pic3];
    let [next,setnext]=useState(0)
    const [currntpic,setpic]=useState(image[next]);
    function handelNext()
    {  //alert(image.length);
        if(next<image.length-1)
        {  
            setnext(next++);
            //console.log(next);
        }
        else
        {
        setnext(next--);
        }
        setpic(image[next])
    }
    return(
      <>
        <img 
        src={currntpic} 
       style={{ width: '300px', height: '300px' }} 
      />
      <br />
      <button onClick={handelNext}>Next</button>
      </>
    )
}

export default Image;