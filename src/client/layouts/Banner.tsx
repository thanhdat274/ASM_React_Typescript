import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto">
                <div className="w-[1440px] h-auto">
                    <div className="container">
                        <div className="mySlides">
                            <img src="../../../src/public/image/banner-black-shark-4s-mc.jpg" className="image1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner