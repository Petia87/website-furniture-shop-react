/*import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import furniture from './dataf'

function Slide() {
    const [furniture, setfurniture] = useState(dataf)
    const [index, setIndex] = React.useState(0)

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index >furniture.length - 1) {
                index = 0
            }
            return index
        })
    }
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index =furniture.length - 1
            }
            return index
        })
    }
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index >furniture.length - 1) {
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
                console.log(furniture);
                {furniture.map((furnit, furnitIndex) => {
                    const { id, image, h1, h2, h3 } = furnit

                    let position = 'nextSlide'
                    if (furnitIndex === index) {
                        position = 'activeSlide'
                    }
                    if (
                        furnitIndex === index - 1 ||
                        (index === 0 && furnitIndex ===furniture.length - 1)
                    ) {
                        position = 'lastSlide'
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image}  className='person-img' />
                            <h1 className='slideh1'>{h1}</h1>
                            <h2 className='slideh2'>{h2}</h2>
                            <p className='slideh3'>{h3}</p>
                         <FaQuoteRight className='icon' />
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


export default Slide;*/