import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import dataf from '../data/dataf'
function Slide() {
    const [furnitureData, SetfurnitureData] = useState(dataf)
    const [index, setIndex] = React.useState(0)

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > furnitureData.length - 1) {
                index = 0
            }
            return index
        })
    }
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = furnitureData.length - 1
            }
            return index
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > furnitureData.length - 1) {
                    index = 0
                }
                return index
            })
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <section className='section'>
            <div className='section-center'>
                {furnitureData.map((furniture, furnitureIndex) => {
                    const { id, image, h1, h2, h3, h4, h5, name } = furniture

                    let position = 'nextSlide'
                    if (furnitureIndex === index) {
                        position = 'activeSlide'
                    }
                    if (
                        furnitureIndex === index - 1 ||
                        (index === 0 && furnitureIndex === furnitureData.length - 1)
                    ) {
                        position = 'lastSlide'
                    }

                    return (
                        <article className={position} key={id}>
                            <div className='container-slide'>
                                <div className='container-slide-img'>
                                    <img src={image} alt={name} className='furn-img' />
                                </div>
                                <div className='container-slide-title'>
                                    <h1 className='slideh1'>{h1}</h1>
                                    <h2 className='slideh2'>{h2}</h2>
                                    <h3 className='slideh3'>{h3}</h3>
                                    <h4 className='slideh4'>{h4}</h4>
                                    <p className='slideh5'>{h5}</p>
                                    <a href="products.html" className="hero-btn">
                                show now
                            </a>
                                </div>
                             
                            </div>
                           
                            
                        </article>
                    )
                })}
                <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={nextSlide}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Slide
