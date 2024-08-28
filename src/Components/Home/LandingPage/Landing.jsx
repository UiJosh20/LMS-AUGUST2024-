import React from 'react'
import imageLand from "../../../assets/Sally_Rose_Dolak_Tropical_Trendil_Treasure.jpg"
const Landing = () => {
  return (
    <>
    <section className='landingBG flex justify-between items-center px-14' >
        <div>
        <h1 className='text-xl font-bold '>Building Responsive Product For the Community</h1>
        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae est ullam assumenda molestias inventore rem tenetur qui nulla at ipsum.</p>
        </div>
        <div className='border  border-black rounded-lg'>
            <img src={imageLand} alt="" width={400} />
        </div>
    </section>
    </>
  )
}

export default Landing