'use client'

import React from "react";
import Image from "next/image";
import Logo from '../../public/logo.png';

const Footer = () => {
    return (
        <>
            <div className='border-none h-[2px] bg-gray-200 w-full'></div>
            <div className="p-10">
                <div className="">
                    <Image src={Logo} alt="logo" width={200} height={200} />
                </div>
                <div className="flex justify-center p-16 w-full">
                    <div className="flex flex-col w-full gap-6">
                        <h1 className="text-black font-bold text-2xl">Head 1</h1>
                        <ul className="w-full">
                            <li className="mt-2 text-xl "><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum&gt;</a></li>
                            <li className="mt-2 text-xl "><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                            <li className="mt-2 text-xl "><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-full gap-6">
                        <h1 className="text-black font-bold text-2xl">Head 2</h1>
                        <ul className="w-full">
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                        </ul>
                    </div>
                    <div className="w-full flex flex-col">
                        <h1 className="text-black text-xl pb-5 font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                        <p className="text-black text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quod placeat sit ipsa sint? Mollitia suscipit omnis aperiam nihil consectetur, beatae, adipisci fugit aliquid reprehenderit ab dolorum asperiores! Dolores, at?</p>
                        <form className="flex justify-center p-3">
                            <input className="bg-slate-200 w-[70%] p-3" placeholder="Email Address" />
                            <button className="bg-[#0000ff] font-bold text-white w-[30%]">Send</button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center p-16 w-full">
                    <div className="flex flex-col w-full gap-6">
                        <h1 className="text-black font-bold text-2xl">Head 2</h1>
                        <ul className="w-full">
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-full gap-6">
                        <h1 className="text-black font-bold text-2xl">Head 2</h1>
                        <ul className="w-full">
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                            <li className="mt-2 text-xl"><a href="#" className=" text-black mt-2 transition-all duration-150 hover:text-sky-600">Lorem ipsum &gt;</a></li>
                        </ul>
                    </div>
                    <div className="w-full flex flex-col">
                        <h1 className="text-black font-bold text-xl">Language</h1>
                        <form>
                            <select className="w-1/2 mt-5 p-2">
                                <option>Español</option>
                                <option>English</option>
                                <option>Deutsch</option>
                                <option>Français</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="flex gap-5 pl-16 w-full">
                    <a href='#' className="text-xs text-black">Lorem ipsum</a>
                    <a href='#' className="text-xs text-black">Lorem ipsum</a>
                    <a href='#' className="text-xs text-black">Lorem ipsum</a>
                    <a href='#' className="text-xs text-black">Lorem ipsum</a>
                    <a href='#' className="text-xs text-black">Lorem ipsum</a>
                </div>
                <div className="flex justify-end items-center">
                    <p className="text-xs text-black">Made in Chile</p>
                    <Image src={Logo} alt="logo" width={50} height={50} />
                </div>
                <div className="flex justify-center items-center mb-5 mt-10">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="mt-5" fill="darkblue">
                            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="mt-5 ml-5">
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" fill="#00acee" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" role="img" focusable="false" className="mt-5 ml-5 bg-[#ff001d]">
                            <path d="M32.776 13.601a3.351 3.351 0 00-2.358-2.373C28.339 10.667 20 10.667 20 10.667s-8.339 0-10.418.561a3.351 3.351 0 00-2.358 2.373 35.146 35.146 0 00-.557 6.46 35.146 35.146 0 00.557 6.46 3.351 3.351 0 002.358 2.373c2.08.561 10.418.561 10.418.561s8.339 0 10.418-.561a3.351 3.351 0 002.358-2.373 35.146 35.146 0 00.557-6.46 35.146 35.146 0 00-.557-6.46z" fill="#fff" />
                            <path d="M17.273 24.025l6.97-3.961-6.97-3.969z" fill="#ff001d" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="mt-5 ml-5 bg-[#F77737]">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" fill="white" />
                            <circle cx="16.806" cy="7.207" r="1.078" fill="white"></circle>
                            <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;