import React from 'react';
import * as images from "../assets";
 
const projects = [
    {
        title: "Car Rent",
        description: "Một trang web thương mại điện tử hiện đại, tích hợp các tính năng tiên tiến, cho phép người dùng duyệt sản phẩm theo danh mục, thanh toán trực tuyến qua VNPay và MoMo, nhận hỗ trợ khách hàng từ AI và quản lý giỏ hàng một cách hiệu quả để có trải nghiệm mua sắm mượt mà.",
        technologies: ["#Laravel", "#ReactJs"],
        image: images.project,
    },
    {
        title: "Job IT",
        description: "Landing page trúng thưởng Trúng Xe Vision được xây dựng bằng WordPress, tối ưu tốc độ, giao diện thân thiện, hiển thị danh sách trúng thưởng. Sử dụng HTML, CSS, JavaScript, plugin Spectra, Visual, Photoshop/Figma. Hoàn thành đúng tiến độ, nhận phản hồi tích cực",
        technologies: ["#Wordpress", "#restapi", "#css"],
        image: images.project1,
    },
    {
        title: "Job IT",
        description: "Landing page trúng thưởng Trúng Xe Vision được xây dựng bằng WordPress, tối ưu tốc độ, giao diện thân thiện, hiển thị danh sách trúng thưởng. Sử dụng HTML, CSS, JavaScript, plugin Spectra, Visual, Photoshop/Figma. Hoàn thành đúng tiến độ, nhận phản hồi tích cực",
        technologies: ["#Wordpress", "#restapi", "#css"],
        image: images.project1,
    },
   
];

const Projects = () => {
    return (
        <div className="py-10 px-4">
            {/* <h2 className="text-3xl font-bold text-center mb-8">Projects.</h2> */}
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="flex flex-wrap justify-center gap-4 ">
                {projects.map((project, index) => (
                    <div key={index} className="max-w-sm w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden p-2">
                        <img className="w-full h-60 object-cover p-4" src={project.image} alt={project.title} />
                        <div className="p-4">
                            <h2 className="text-xl text-left font-semibold">{project.title}</h2>
                            <p className=" text-left text-white mt-2 line-clamp-3">{project.description}</p>
                            <div className="mt-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;