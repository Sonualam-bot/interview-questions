import { useState } from "react"
import { AiOutlineStar } from "react-icons/ai"

import "./Rating.css"
import { Header } from "../../Header/Header"

export const Rating = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleRatingClick = (index) => {
        // if (rating === index) {
        //     setRating(0);
        // } else {
        //     setRating(index);
        // }

        setRating(index);
    };

    return (
        <>
            <Header />
            <div className="star-rating" >
                {[...Array(5)].map((star, index) => {
                    index += 1
                    return (
                        <div
                            key={index}
                            // type="button"
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => handleRatingClick(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)

                            }
                        >
                            <span className="star" > <AiOutlineStar /> </span>
                        </div>

                    )
                })}

            </div >
        </>
    )
}