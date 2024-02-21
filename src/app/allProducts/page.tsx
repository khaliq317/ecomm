import pic1 from "../../../public/female1.jpg"
import pic2 from "../../../public/female2.jpg"
import pic3 from "../../../public/male1.jpg"
import pic4 from "../../../public/male2.png"
import pic5 from "../../../public/kids.jpg"
import Image from "next/image"

import React from 'react'

const AllProducts = () => {
  return (
    <div>
      <div className="bg-gray-200 pt-4 rounded-2xl">
        <div className="flex justify-evenly">
        <Image
        src={pic1}
        height={250}
        width={250}
        alt="pic first"
        ></Image>
        <Image
        src={pic2}
        height={250}
        width={250}
        alt=""
        ></Image>
        <Image
        src={pic3}
        height={250}
        width={250}
        alt=""
        ></Image>
        

        </div>

        <div className="flex justify-evenly">
        <b>
          Brushed Bomber
        </b>
        <b>
          Flex Sweatshirt
        </b>
        <b>
          Cameryn Sash Tie Dress
        </b>

        </div>
        

        <div className="flex justify-evenly">
        <p>
          Sweatshirt
        </p>
        <p>
          T-Shirt
        </p>
        <p>
          Dress
        </p>
      
        </div>

        <div className="flex justify-evenly">
        <b>
          $150
        </b>
        <b>
          $180
        </b>
        <b>
          $200
        </b>
        
        </div>
        
        <div className="flex justify-evenly pt-4">
          <Image
          src={pic4}
          height={250}
          width={250}
          alt=""
          ></Image>
          <Image
          src={pic5}
          height={250}
          width={250}
          alt=""
          ></Image>
        </div>

        <div className="flex justify-evenly">
          <b>
            Muscle Tank
          </b>
          <b>
            Lite SweatPants
          </b>
        </div>

        <div className="flex justify-evenly">
          <p>
          T-Shirt
          </p>
          <p>
            T-Shirt
          </p>
        </div>

        <div className="flex justify-evenly">
          <b>
            $130
          </b>
          <b>
            $150
          </b>

        </div>
        </div>


    </div>
  )
}

export default AllProducts