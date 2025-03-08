import React from 'react';

const testimonials = [
    {
        quote: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        position: "CFO of Acme Co",
    },
    {
        quote: "I’ve never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        position: "COO of DEF Corp",
    },
    {
        quote: "After Rick optimized our website, our traffic increased by 50%. We can’t thank them enough!",
        name: "Lisa Wang",
        position: "CTO of 456 Enterprises",
    },
];

const Testimonials = () => {
    return (
        <div className="py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">WHAT OTHERS SAY</h2>
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                        <p className="mt-4 font-semibold">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;