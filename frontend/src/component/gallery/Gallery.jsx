import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div>
        <div class="  px-5 lg:px-32 lg:pt-10 bg-gray-100">
          <div class="-m-1 flex flex-wrap md:-m-2 ">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div class="flex justify-center items-center bg-gray-100 pt-8">
          <button
            class="hover:bg-gray-200 flex justify-center items-center bg-white  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="button"
            onClick={() => setOpen(true)}
          >
            See More
          </button>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            {
              src: "https://picsum.photos/3840/1365",
              alt: "image 1",
              width: 3840,
              height: 2560,
              srcSet: [
                {
                  src: "https://picsum.photos/3840/1365",
                  width: 3840,
                  height: 1365,
                },
                {
                  src: "https://picsum.photos/3840/1365",
                  width: 3840,
                  height: 1365,
                },
                {
                  src: "https://picsum.photos/3840/1365",
                  width: 3840,
                  height: 1365,
                },
                {
                  src: "https://picsum.photos/3840/1365",
                  width: 3840,
                  height: 1365,
                },
                {
                  src: "https://picsum.photos/3840/1365",
                  width: 3840,
                  height: 2560,
                },
              ],
            },
            // ...
          ]}
        />
      </>
    </div>
  );
}
