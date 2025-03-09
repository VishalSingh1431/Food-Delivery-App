import React from 'react';

const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 m-15 md:p-10">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold">Welcome To Our Restaurant</h1>
        <h2 className="text-2xl sm:text-3xl mt-2">Hungry To Eat</h2>
        <p className="p-3 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique non quia quidem dicta blanditiis corporis!
          Unde nihil neque, molestias totam cumque placeat fugiat consequatur vel nostrum ea eius odio?
        </p>
        <button className="text-xl sm:text-2xl shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white p-3 rounded-3xl hover:bg-white transition duration-300">
          Order Now
        </button>
      </div>
     
      {/* Right Image */}
      <div className="mt-5 md:mt-0 md:w-1/3 flex justify-center">
        <img
          className="rounded-t-full w-50 sm:w-70 md:w-80 lg:w-106 shadow-lg"
          src="https://images.ctfassets.net/trvmqu12jq2l/6FV4Opt7wUyR91t2FXyOIr/f32972fce10fc87585e831b334ea17ef/header.jpg?q=70&w=1208&h=1080&f=faces&fit=fill"
          alt="Restaurant"
        />
      </div>
    </div>
  );
};

export default Landing;
