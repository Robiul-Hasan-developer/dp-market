import React from 'react';
import Button from './Button';

const SectionHeading = (props) => {
    return (

        <>
            <div className={`section-heading ${props.headingClass}`}>
                <div className="section-heading__inner">
                    <h3 className="section-heading__title"> {props.title} </h3>
                    {
                        props.renderDesc && (
                            <p className={`section-heading__desc${props.descClass}`}>{props.desc}</p>
                        )
                    }
                </div>

                {
                    props.renderButton && (
                        <Button
                            btnLink={props.buttonLink}
                            btnClass="btn-main btn-lg pill fw-300"
                            btnText={props.buttonText}
                        />
                    )
                }
            </div>
        </>
    );
};

export default SectionHeading;  


