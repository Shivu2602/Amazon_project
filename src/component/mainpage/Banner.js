import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css'


const data = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/1500-X-300-School.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/1500-X-300-Exam-Preparations.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/1500-X-300-University.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/1500-X-300--Books-homeapage-Children-revised.jpg"
]

const Banner = () => {
    return (
        <Carousel 
            className='carasousel'
            autoPlay={true} 
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    backgroundColor: "#fff",
                    color: "#494949",
                    borderRadius: 0,
                    marginTop: -22,
                    height: "104px"
                }
            }}
        >
            {
                data.map((imag, i) => {
                    return (
                        <>
                            <img src={imag} className='banner_img' />
                        </>
                    )
                })
            }
        </Carousel>
    )
}

export default Banner