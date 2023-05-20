import React from 'react';
import AwesomeTestimonial from 'react-awesome-testimonials';
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className="mt-20">
            <h2 className="text-center font-bold text-3xl ">
                <span className="text-2xl block mb-3 font-normal text-orange-500">Testimonials</span> About Our Toys
            </h2>

            <AwesomeTestimonial
                testimonials={[
                    {
                        name: "Eva",
                        company: "Amazon",
                        img_src: "https://i.ibb.co/84h8svL/eight.png",
                        review:
                            "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
                    },
                    {
                        name: "Evelyn",
                        company: "Netflix",
                        img_src: "https://i.ibb.co/k8Jnx61/five.png",
                        review:
                            "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
                    },
                    {
                        name: "Jack",
                        company: "Google",
                        img_src: "https://i.ibb.co/Yj8pMF8/four.png",
                        review:
                            "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
                    },
                ]}
            />
        </div>
    );
};

export default Testimonials;