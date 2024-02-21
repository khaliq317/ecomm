import kid from "../../../public/kids.jpg"
import Image from "next/image"
import React from 'react'

const Kids = () => {
  return (
    <div>
      <div className="bg-gray-100 pt-4">
      <div className="flex justify-evenly">
<Image
src={kid}
height={300}
width={300}
alt="kid picture"
></Image>
<Image
src={kid}
height={300}
width={300}
alt=""
></Image>

</div>

<div className="flex justify-evenly">
<b>
  Kids 1
</b>
<b>
  Kids 2
</b>
</div>

<div className="flex justify-evenly">
<p>
  Kids toys
</p>
<p>
  Kids toys 2
</p>
</div>

<div className="flex justify-evenly">
<b>
  $50
</b>
<b>
  $50
</b>

</div>
</div>

    </div>
  )
}

export default Kids