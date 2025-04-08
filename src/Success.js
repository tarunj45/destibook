import React from "react";

export const Success = () => {
  return (
    <div>
      {/* <img
        className=""
        src="http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld auszulesen:"
        alt=""
        srcset=""
      /> */}
      <section class="text-gray-300 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class=" mb-10 object-cover object-center rounded"
            alt="hero"
            src="http://api.qrserver.com/v1/create-qr-code/?data=https://kirtanchandak.live/"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Congratulations🎉 your tickit has been booked!!
            </h1>
            <p class="mb-8 leading-relaxed">
              This tickit is valid for 24 hours and can be used anytime in this
              time period
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
