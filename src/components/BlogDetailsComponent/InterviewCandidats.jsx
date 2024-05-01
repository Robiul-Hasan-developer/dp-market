import React from 'react';
import BlogDetailsThumb2 from '../../../public/assets/images/thumbs/blog-details-thumb2.jpg';
import BlogDetailsThumb3 from '../../../public/assets/images/thumbs/blog-details-thumb3.jpg';


const InterviewCandidats = () => {
    return (
        <>
            <h4 className="blog-details-content__title mb-24">Interview multiple candidates</h4>
            <p className="blog-details-content__desc mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa.</p>

            <div className="blog-details-content__thumbs mb-40">
                <div className="row gy-4">
                    <div className="col-sm-5 col-6">
                        <div className="blog-details-content__thumb">
                            <img src={BlogDetailsThumb2} alt=""/>
                        </div>
                    </div>
                    <div className="col-sm-7 col-6">
                        <div className="blog-details-content__thumb">
                            <img src={BlogDetailsThumb3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <h5 className="blog-details-content__title mb-3">Search for the right experience</h5>
            <p className="blog-details-content__desc mb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio. we'll explore the importance of design in the software development process and how it can lead to more successful projects.</p>
            <p className="blog-details-content__desc mb-24">Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam iaculis ullamcorper id posuere. Leo congue nulla quam pharetra. Pellentesque morbi dictumst congue risus luctus.</p>


            <ul className="product-list mb-40">
                <li className="product-list__item font-18 fw-500 text-heading">Morbi dictumst congue risus luctus</li>
                <li className="product-list__item font-18 fw-500 text-heading">Porttitor nibh est vulputate vitae sem vitae.</li>
                <li className="product-list__item font-18 fw-500 text-heading">Amet tellus nisl risus lorem vulputate velit eget.</li>
                <li className="product-list__item font-18 fw-500 text-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
        </>
    );
};

export default InterviewCandidats;