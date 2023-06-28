import React from 'react'

const Home = () => {
  return (
    <>
        <div className="">

            <section className="flex flex-col items-center">
                <h3 className="text-4xl font-bold my-10">Realtime tracking <br /> your entire <span className="text-violet-700">business</span> </h3>

                <div className="">
                    <button className="px-7 py-2 bg-blue-600 rounded-lg text-white mr-4">Start tracking</button>
                    <button className="px-7 py-2 outline outline-1 text-blue-600 rounded-lg">Try demo account</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Home