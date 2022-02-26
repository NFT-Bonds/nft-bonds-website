import React, {useEffect, useState} from 'react';
import {BiTimeFive} from "react-icons/bi";
import {ImCheckmark} from "react-icons/im";
import {IoMdPricetags} from "react-icons/io";
import Slider from "./slider/Slider";
import "../../styles.css"
import NewSmallLoader from "./loader/NewSmallLoader";
import {Link} from "react-router-dom";

const EventItem = ({item}) => {
    const [images, setImages] = useState([])

    const getImages = async () => {
        const urls = []
        // for (const nft of item.nfts){
        //     const resp = await getNFT(nft)
        //     urls.push(resp.image)
        // }
        return urls
    }

    const handler = () => {
        window.location.assign(`/event/${item.authority.toString()}`);
    };

    useEffect(() => {
        getImages().then(r => setImages(r))
    }, [])

    const time = item.duration
    const all = item.totalNfts.toString()
    const collected = item.collectedNfts.toString()

    return (
        <div className="border-gradient w-60 h-100 m-5 transition-shadow bg-gray-900">
            <div className="border-gradient-pic h-40 mx-5 mt-5 mb-2">
                {(all === collected) &&
                    <ImCheckmark
                        className="z-10 p-2 bg-blend-overlay text-2xl justify-center flex absolute w-10 h-10 bg-sol-sea text-white rounded-tr-md rounded-bl-md ml-158px">
                    </ImCheckmark>
                }
                {images.length === 0
                    ?
                    <div className="object-center w-full h-40">
                        <NewSmallLoader/>
                    </div>
                    :
                    <Slider className="z-0" itemsUrls={images}/>
                }
            </div>
            <div className="text-white text-xl font-bold truncate hover:text-clip px-5 text-center font-archivo">
                {item.title}
            </div>
            <div className="text-sol-white justify-center flex px-1 font-archivo">
                <IoMdPricetags className="mt-1 mr-1"/>
                <div>
                    Sale for tokens: {item.percent}%
                </div>
            </div>
            <div className="text-sol-white justify-center flex px-1 font-archivo">
                <BiTimeFive className="mt-1 mr-1"/>
                <div>
                    Duration: {time} day(s)
                </div>
            </div>
            <div className="text-sol-white justify-center flex px-1 font-archivo">
                <ImCheckmark className="mt-1 mr-1"/>
                <div>
                    Collected: {collected}/{all}
                </div>
            </div>
            <div className="justify-center flex h-30  mb-5 mt-2">
                <Link to={`/event/${item.authority.toString()}`}
                      className="px-7 py-1 bg-gradient-to-br from-sol-green text-sm to-blue-500 text-white rounded-xl"
                >
                    Learn more
                </Link>
            </div>
        </div>
    );
};

export default EventItem;