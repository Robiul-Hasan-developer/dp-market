import React, { useEffect } from 'react';

const CircleTextTwo = ({circleClass, rotateText}) => {

    useEffect(() => {
        const rotateText = () => {
            const text = document.querySelector(".circle__desc ");

            if(text) {
              text.innerHTML = text.innerText
              .split("")
              .map(
                (char, i) => `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
                )
              .join("");
            }
        };

        rotateText(); 
    }, []);
    
    return (
        <div className={`circle static-circle ${circleClass}`}>
            <div className="circle__badge">
                <img src="assets/images/icons/featured-badge.png" alt=""/>
            </div>
            <div className="circle__text circle__desc ">
                <p> {rotateText} </p>
            </div>
        </div>
    );
};

export default CircleTextTwo;