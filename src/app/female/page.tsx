import female1 from "../../../public/female1.jpg"
import female2 from "../../../public/female2.jpg"
import Image from "next/image"
import React from 'react'

const Female = () => {
  return (
    <div>
      <div className="bg-gray-100">
    <div className="flex justify-around">
        <Image
        src={female2}
        height={250}
        width={250}
        alt="Female Pic2"
        ></Image>
        <Image
        src={female1}
        height={250}
        width={250}
        alt="Female Pic1"
        ></Image>
        <Image
        src={female2}
        height={250}
        width={250}
        alt="Female Pic2"
        ></Image>

        </div>

        <div className="flex justify-around">
        <b>
          Brushed Raglan Sweatshirt
        </b>
        <b>
        Cameryn Sash Tie Dress
        </b>
        <b>
          Brushed Raglan Sweatshirt
        </b>
        </div>

        <div className="flex justify-around">
        <p>
          Sweatshirt
        </p>
        <p>
          Dress
        </p>
        <p>
          Sweatshirt
        </p>
        </div>
        
        <div className="flex justify-around">
        <b>
          $190
        </b>
        <b>
          $200
        </b>
        <b>
          $190
        </b>

        </div>
        </div>
      
    </div>
  )
}

export default Female