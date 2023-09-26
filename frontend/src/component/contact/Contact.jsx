import React from "react";

function Contact() {
  return (
    <div class=" h-screen bg-gray-100 p-10">
      <section class="bg-gray-100">
        <div class="flex flex-wrap">
          <div class=" w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <h2 class="mb-6 text-3xl font-bold">Contact us</h2>
            <p class="mb-6 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, modi accusantium ipsum corporis quia asperiores
              dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
              autem omnis fugiat perspiciatis? Ad, veritatis.
            </p>
            <p class="mb-2 text-neutral-500 dark:text-neutral-700">
              Kinniya, Trincomalee
            </p>
            <p class="mb-2 text-neutral-500 dark:text-neutral-700">
              075 688 2698
            </p>
            <p class="mb-2 text-neutral-500 dark:text-neutral-700">
              akmohammedihsa@gmail.com
            </p>
          </div>
          <div class="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 border border-gray-200">
            <form>
              <div class="relative my-6" data-te-input-wrapper-init>
                <label
                  class="block text-gray-500 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                ></input>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                  class="block text-gray-500 text-sm font-bold mb-2"
                  for="email"
                >
                  Email address
                </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                ></input>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                  for="exampleFormControlTextarea"
                  class="block text-gray-500 text-sm font-bold mb-2"
                >
                  Message
                </label>

                <textarea
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="mb-6 inline-block w-full rounded bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
