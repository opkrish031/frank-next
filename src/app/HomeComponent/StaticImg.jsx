import React from "react";

export default function StaticImg() {
  return (
    <div className="w-[100%] my-20">
      <div className="w-[95%] mx-auto flex justify-evenly ">
        <div className="w-[23%]">
          <img
            src={
              "https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_62cfa167-5bb7-49b4-a364-9b03a57e597f_900x.jpg?v=1725904243"
            }
          />
          Womens Sweaters
        </div>

        <div className="w-[23%]">
          <img
            src={
              "https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-1_9ed9aaaf-5f7d-46fd-b724-7bad1b87915a_900x.jpg?v=1725904257"
            }
          />
          Womens Jackets{" "}
        </div>

        <div className="w-[23%]">
          <img
            src={
              "https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_807de894-9db1-4f43-bbc3-b3e03027f224_900x.jpg?v=1725904281"
            }
          />
          Mens Sweaters{" "}
        </div>

        <div className="w-[23%]">
          <img
            src={
              "https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-3_59bf8ff6-1792-42de-ad08-f396e3be53d4_900x.jpg?v=1725904307"
            }
          />
          Mens Jackets{" "}
        </div>
      </div>
    </div>
  );
}
