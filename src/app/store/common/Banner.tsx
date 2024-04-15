import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import banner from "../../asset/banner.svg";
import Carousel from "../../../components/common/Carousel";
const Banner = () => {
  return (
    <Box className="w-full px-6 pb-6">
      {/* <Image
        src={banner.src}
        alt="banner"
        width={500}
        height={300}
        className="rounded-lg w-full"
      /> */}
      <Carousel
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
      >
        <img
          src={banner.src}
          alt="banner"
          //   width={1100}
          //   height={300}
          className="rounded-lg w-full"
        />
        <img
          src={banner.src}
          alt="banner"
          //   width={1100}
          //   height={300}
          className="rounded-lg w-full"
        />
      </Carousel>
    </Box>
  );
};

export default Banner;
