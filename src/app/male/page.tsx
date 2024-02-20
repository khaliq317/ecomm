
import { Bold } from "lucide-react"
import image1 from "../../../public/male1.jpg"
import image2 from "../../../public/male2.png"
import Image from "next/image"
import React from 'react'

const male = () => {
  return (
    <main>
      <div className="flex justify-around">
        
        <Image
        src={image1}
        width={250}
        height={250}
        alt={"$50"}
        ></Image>
        <Image
        src={image2}
        width={250}
        height={250}
        alt=""
        ></Image>

        </div>
        
<div className="flex justify-around">
        <b>
          Flex Push Button Boomber
        </b>
      
          <b>
          Raglan SweatShirt  
          </b>
          </div>

          <div className="flex justify-around">
            <p>
            Jacket
            </p>
            <p>
            SweatShirt
           </p>
          </div>
          <div className="flex justify-around">
          <b>
            $200
          </b>
          <b>
            $225
          </b>
        </div>
      
        
        </main>
    
  )
}

export default male