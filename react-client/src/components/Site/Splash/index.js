import { Image, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
// import loaderAnimation from './load.json'
// import { TweenMax } from 'gsap'
// import Logo from './inno-fav.png'
  
export default function Splash() {

    const [secondEffect, setsecondEffect] = useState(false);
    const [thirdEffect, setthirdEffect] = useState(false);

    const newStylesTwo = {
        top: "0% !important",
    }
    const newStylesThree = {
        height: "0px !important",
    }

    useEffect(() => {
        window.onload = (() => {
            setTimeout(() => {
                setsecondEffect(true);
            }, 2500);
            setTimeout(() => {
                setthirdEffect(true);
            }, 4500);
        })()
    }, [])



    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: loaderAnimation,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };

    return (
        <Stack transition={'1.3s'} id="loader-wrapper" sx={thirdEffect ? newStylesThree : ''} >
            <Stack className="loading-bg-primary"></Stack>
            <Stack marginTop={'0px !important'} transition={'1.5s'} className="loading-orange" sx={secondEffect ? newStylesTwo : ""}></Stack>
        </Stack>
    )
}
