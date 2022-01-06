import React from "react";
import Lottie from "react-lottie";

import './loader.scss'

import * as animationData from './animation'

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }

      return(
          <div className="loader">
              <Lottie
              options={defaultOptions}
              width={400}
              height={400}
              />
          </div>
      )
}

export default Loader