
import * as images from "../assets";

export default function Instroduction() {
  return (
    <div className="text-center bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Overview</h1>
    <p className="mb-8">
    Tôi có kinh nghiệm làm việc với PHP và framework Laravel, đồng thời am hiểu về MySQL cũng như mô hình MVC. Bên cạnh đó, tôi cũng có kinh nghiệm phát triển website trên nền tảng WordPress. Trong quá trình làm việc, tôi đã áp dụng các nguyên tắc Lập trình Hướng đối tượng (OOP) để xây dựng các ứng dụng một cách tối ưu và linh hoạt. Ngoài ra, tôi còn có kinh nghiệm triển khai và làm việc với API, giúp tích hợp và kết nối hệ thống một cách hiệu quả.
    </p>
    <div className="flex justify-center space-x-4">
      {[
        { title: "Web Developer", img: images.web },
        { title: "React Native ", img: images.mobile },
        { title: "Backend Developer", img: images.backend },
        { title: "Content Creator", img: images.creator },
      ].map((item, index) => (
        <div
          key={index}
          className=" bg-gray-800 rounded-lg p-4 w-[200px] hover:scale-105 transition-transform flex flex-col items-center border-2 border-transparent hover:border-blue-500 shadow-lg shadow-white/5 hover:shadow-white/50"
        >
          <img src={item.img} alt="logo" className="w-20 mt-4 mx-auto" />
          <span className="text-center mt-4">{item.title}</span>
        </div>
      ))}
    </div>
  </div>
  
  );
}
