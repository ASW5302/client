import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-15 px-4">
      <h3 className="text-orange-500 text-2xl text-center">
        배달앱을 다운 받으시면
        <span className="font-bold">배달비가 무료</span>
      </h3>
      <div className="max-w-[1240px] max-auto grid md:grid-cols-2">
        <img src="imgs/Delivery logo.jpg" className="w-[500px] mx-auto my-4" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">GET a app</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            매주 다른 레시비 요리 제공
          </h1>
          <p className="py-2">
            끓는 위하여, 별과 부패뿐이다. 얼음과 튼튼하며, 크고 이 피가 피다.
            피고 곧 사랑의 밥을 충분히 예수는 얼마나 투명하되 그들에게 때문이다.
            뛰노는 주는 꽃이 위하여, 위하여서, 일월과 미인을 오아이스도 영락과
            이것이다.
          </p>
          <p className="py-2">
            사랑의 있는 별과 가슴이 모래뿐일 할지니, 듣는다. 같은 이것을 보내는
            동산에는 것이다. 보내는 이상이 되는 싹이 피에 할지니, 든 무엇을
            위하여서.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
