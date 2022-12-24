import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container">
        <div data-aos="fade-in" className="component-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            loading="lazy"
            data-aos="fade-in-up"
            data-plx=".15"
            data-micron="groove"
            className="component-image"
          />
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            loading="lazy"
            data-aos="fade-in-up"
            data-plx=".15"
            data-micron="bounce"
            className="component-image1"
          />
        </div>
        <div className="component-container2">
          <h1 data-aos="fade-in" className="component-text">
            {props.heading}
          </h1>
          <span data-aos="fade-in" className="component-text01">
            {props.text}
          </span>
          <span data-aos="fade-in" className="component-text02">
            {props.text1}
          </span>
          <span data-aos="fade-in" className="component-text03">
            {props.text2}
          </span>
          <span data-aos="fade-in" className="component-text04">
            {props.text3}
          </span>
          <span data-aos="fade-in" className="component-text05">
            {props.text4}
          </span>
          <span data-aos="fade-in" className="component-text06">
            {props.text5}
          </span>
          <span data-aos="fade-in" className="component-text07">
            {props.text6}
          </span>
          <span data-aos="fade-in" className="component-text08">
            {props.text7}
          </span>
          <span data-aos="fade-in" className="component-text09">
            {props.text8}
          </span>
          <span data-aos="fade-in" className="component-text10">
            {props.text9}
          </span>
          <span data-aos="fade-in" className="component-text11">
            {props.text10}
          </span>
          <span data-aos="fade-in" className="component-text12">
            {props.text11}
          </span>
          <span data-aos="fade-in" className="component-text13">
            {props.text12}
          </span>
          <span data-aos="fade-in" className="component-text14">
            {props.text13}
          </span>
          <span data-aos="fade-in" className="component-text15">
            {props.text14}
          </span>
          <span data-aos="fade-in" className="component-text16">
            {props.text15}
          </span>
          <span data-aos="fade-in" className="component-text17">
            {props.text16}
          </span>
          <span data-aos="fade-in" className="component-text18">
            {props.text17}
          </span>
          <span data-aos="fade-in" className="component-text19">
            {props.text18}
          </span>
          <span data-aos="fade-in" className="component-text20">
            {props.text19}
          </span>
          <span data-aos="fade-in" className="component-text21">
            {props.text20}
          </span>
          <span data-aos="fade-in" className="component-text22">
            {props.text21}
          </span>
          <span data-aos="fade-in" className="component-text23">
            {props.text22}
          </span>
          <span data-aos="fade-in" className="component-text24">
            {props.text23}
          </span>
          <span data-aos="fade-in" className="component-text25">
            {props.text24}
          </span>
          <span data-aos="fade-in" className="component-text26">
            {props.text25}
          </span>
          <span data-aos="fade-in" className="component-text27">
            {props.text26}
          </span>
          <span data-aos="fade-in" className="component-text28">
            {props.text27}
          </span>
          <span data-aos="fade-in" className="component-text29">
            {props.text28}
          </span>
          <span data-aos="fade-in" className="component-text30">
            {props.text29}
          </span>
          <span data-aos="fade-in" className="component-text31">
            {props.text30}
          </span>
          <span data-aos="fade-in" className="component-text32">
            {props.text31}
          </span>
          <span data-aos="fade-in" className="component-text33">
            {props.text32}
          </span>
          <span data-aos="fade-in" className="component-text34">
            {props.text33}
          </span>
          <span data-aos="fade-in" className="component-text35">
            {props.text34}
          </span>
          <span data-aos="fade-in" className="component-text36">
            {props.text35}
          </span>
          <span data-aos="fade-in" className="component-text37">
            {props.text36}
          </span>
          <span data-aos="fade-in" className="component-text38">
            {props.text37}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .component-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            background-color: #111;
          }
          .component-container1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component-image {
            width: 500px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .component-image1 {
            width: 500px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-radius: 10px;
          }
          .component-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .component-text {
            color: var(--dl-color-gray-white);
            font-size: 150px;
            font-family: Khand;
          }
          .component-text01 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text02 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text03 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text04 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text05 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text06 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text07 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text08 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text09 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text10 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text11 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text12 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text13 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text14 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text15 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text16 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text17 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text18 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text19 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text20 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text21 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text22 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text23 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text24 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text25 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text26 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text27 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text28 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text29 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text30 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text31 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text32 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text33 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text34 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text35 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text36 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text37 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          .component-text38 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 40px;
            font-family: Khand;
          }
          @media (max-width: 1600px) {
            .component-text01 {
              width: 100%;
              font-size: 30px;
            }
            .component-text02 {
              width: 100%;
              font-size: 30px;
            }
            .component-text03 {
              width: 100%;
              font-size: 30px;
            }
            .component-text04 {
              width: 100%;
              font-size: 30px;
            }
            .component-text05 {
              width: 100%;
              font-size: 30px;
            }
            .component-text06 {
              width: 100%;
              font-size: 30px;
            }
            .component-text07 {
              width: 100%;
              font-size: 30px;
            }
            .component-text08 {
              width: 100%;
              font-size: 30px;
            }
            .component-text09 {
              width: 100%;
              font-size: 30px;
            }
            .component-text10 {
              width: 100%;
              font-size: 30px;
            }
            .component-text11 {
              width: 100%;
              font-size: 30px;
            }
            .component-text12 {
              width: 100%;
              font-size: 30px;
            }
            .component-text13 {
              width: 100%;
              font-size: 30px;
            }
            .component-text14 {
              width: 100%;
              font-size: 30px;
            }
            .component-text15 {
              width: 100%;
              font-size: 30px;
            }
            .component-text16 {
              width: 100%;
              font-size: 30px;
            }
            .component-text17 {
              width: 100%;
              font-size: 30px;
            }
            .component-text18 {
              width: 100%;
              font-size: 30px;
            }
            .component-text19 {
              width: 100%;
              font-size: 30px;
            }
            .component-text20 {
              width: 100%;
              font-size: 30px;
            }
            .component-text21 {
              width: 100%;
              font-size: 30px;
            }
            .component-text22 {
              width: 100%;
              font-size: 30px;
            }
            .component-text23 {
              width: 100%;
              font-size: 30px;
            }
            .component-text24 {
              width: 100%;
              font-size: 30px;
            }
            .component-text25 {
              width: 100%;
              font-size: 30px;
            }
            .component-text26 {
              width: 100%;
              font-size: 30px;
            }
            .component-text27 {
              width: 100%;
              font-size: 30px;
            }
            .component-text28 {
              width: 100%;
              font-size: 30px;
            }
            .component-text29 {
              width: 100%;
              font-size: 30px;
            }
            .component-text30 {
              width: 100%;
              font-size: 30px;
            }
            .component-text31 {
              width: 100%;
              font-size: 30px;
            }
            .component-text32 {
              width: 100%;
              font-size: 30px;
            }
            .component-text33 {
              width: 100%;
              font-size: 30px;
            }
            .component-text34 {
              width: 100%;
              font-size: 30px;
            }
            .component-text35 {
              width: 100%;
              font-size: 30px;
            }
            .component-text36 {
              width: 100%;
              font-size: 30px;
            }
            .component-text37 {
              width: 100%;
              font-size: 30px;
            }
            .component-text38 {
              width: 100%;
              font-size: 30px;
            }
          }
          @media (max-width: 1200px) {
            .component-container2 {
              align-self: center;
              align-items: flex-start;
            }
            .component-text {
              font-size: 120px;
              text-align: left;
            }
            .component-text01 {
              width: 100%;
              font-size: 28px;
            }
            .component-text02 {
              width: 100%;
              font-size: 28px;
            }
            .component-text03 {
              width: 100%;
              font-size: 28px;
            }
            .component-text04 {
              width: 100%;
              font-size: 28px;
            }
            .component-text05 {
              width: 100%;
              font-size: 28px;
            }
            .component-text06 {
              width: 100%;
              font-size: 28px;
            }
            .component-text07 {
              width: 100%;
              font-size: 28px;
            }
            .component-text08 {
              width: 100%;
              font-size: 28px;
            }
            .component-text09 {
              width: 100%;
              font-size: 28px;
            }
            .component-text10 {
              width: 100%;
              font-size: 28px;
            }
            .component-text11 {
              width: 100%;
              font-size: 28px;
            }
            .component-text12 {
              width: 100%;
              font-size: 28px;
            }
            .component-text13 {
              width: 100%;
              font-size: 28px;
            }
            .component-text14 {
              width: 100%;
              font-size: 28px;
            }
            .component-text15 {
              width: 100%;
              font-size: 28px;
            }
            .component-text16 {
              width: 100%;
              font-size: 28px;
            }
            .component-text17 {
              width: 100%;
              font-size: 28px;
            }
            .component-text18 {
              width: 100%;
              font-size: 28px;
            }
            .component-text19 {
              width: 100%;
              font-size: 28px;
            }
            .component-text20 {
              width: 100%;
              font-size: 28px;
            }
            .component-text21 {
              width: 100%;
              font-size: 28px;
            }
            .component-text22 {
              width: 100%;
              font-size: 28px;
            }
            .component-text23 {
              width: 100%;
              font-size: 28px;
            }
            .component-text24 {
              width: 100%;
              font-size: 28px;
            }
            .component-text25 {
              width: 100%;
              font-size: 28px;
            }
            .component-text26 {
              width: 100%;
              font-size: 28px;
            }
            .component-text27 {
              width: 100%;
              font-size: 28px;
            }
            .component-text28 {
              width: 100%;
              font-size: 28px;
            }
            .component-text29 {
              width: 100%;
              font-size: 28px;
            }
            .component-text30 {
              width: 100%;
              font-size: 28px;
            }
            .component-text31 {
              width: 100%;
              font-size: 28px;
            }
            .component-text32 {
              width: 100%;
              font-size: 28px;
            }
            .component-text33 {
              width: 100%;
              font-size: 28px;
            }
            .component-text34 {
              width: 100%;
              font-size: 28px;
            }
            .component-text35 {
              width: 100%;
              font-size: 28px;
            }
            .component-text36 {
              width: 100%;
              font-size: 28px;
            }
            .component-text37 {
              width: 100%;
              font-size: 28px;
            }
            .component-text38 {
              width: 100%;
              font-size: 28px;
            }
          }
          @media (max-width: 991px) {
            .component-container {
              flex-direction: column;
            }
            .component-container1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-self: center;
              align-items: flex-start;
            }
            .component-image {
              width: 100%;
            }
            .component-image1 {
              width: 100%;
            }
            .component-container2 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .component-text {
              width: 100%;
            }
            .component-text01 {
              width: 100%;
              font-size: 34px;
            }
            .component-text02 {
              width: 100%;
              font-size: 34px;
            }
            .component-text03 {
              width: 100%;
              font-size: 34px;
            }
            .component-text04 {
              width: 100%;
              font-size: 34px;
            }
            .component-text05 {
              width: 100%;
              font-size: 34px;
            }
            .component-text06 {
              width: 100%;
              font-size: 34px;
            }
            .component-text07 {
              width: 100%;
              font-size: 34px;
            }
            .component-text08 {
              width: 100%;
              font-size: 34px;
            }
            .component-text09 {
              width: 100%;
              font-size: 34px;
            }
            .component-text10 {
              width: 100%;
              font-size: 34px;
            }
            .component-text11 {
              width: 100%;
              font-size: 34px;
            }
            .component-text12 {
              width: 100%;
              font-size: 34px;
            }
            .component-text13 {
              width: 100%;
              font-size: 34px;
            }
            .component-text14 {
              width: 100%;
              font-size: 34px;
            }
            .component-text15 {
              width: 100%;
              font-size: 34px;
            }
            .component-text16 {
              width: 100%;
              font-size: 34px;
            }
            .component-text17 {
              width: 100%;
              font-size: 34px;
            }
            .component-text18 {
              width: 100%;
              font-size: 34px;
            }
            .component-text19 {
              width: 100%;
              font-size: 34px;
            }
            .component-text20 {
              width: 100%;
              font-size: 34px;
            }
            .component-text21 {
              width: 100%;
              font-size: 34px;
            }
            .component-text22 {
              width: 100%;
              font-size: 34px;
            }
            .component-text23 {
              width: 100%;
              font-size: 34px;
            }
            .component-text24 {
              width: 100%;
              font-size: 34px;
            }
            .component-text25 {
              width: 100%;
              font-size: 34px;
            }
            .component-text26 {
              width: 100%;
              font-size: 34px;
            }
            .component-text27 {
              width: 100%;
              font-size: 34px;
            }
            .component-text28 {
              width: 100%;
              font-size: 34px;
            }
            .component-text29 {
              width: 100%;
              font-size: 34px;
            }
            .component-text30 {
              width: 100%;
              font-size: 34px;
            }
            .component-text31 {
              width: 100%;
              font-size: 34px;
            }
            .component-text32 {
              width: 100%;
              font-size: 34px;
            }
            .component-text33 {
              width: 100%;
              font-size: 34px;
            }
            .component-text34 {
              width: 100%;
              font-size: 34px;
            }
            .component-text35 {
              width: 100%;
              font-size: 34px;
            }
            .component-text36 {
              width: 100%;
              font-size: 34px;
            }
            .component-text37 {
              width: 100%;
              font-size: 34px;
            }
            .component-text38 {
              width: 100%;
              font-size: 34px;
            }
          }
          @media (max-width: 767px) {
            .component-image {
              width: 100%;
            }
            .component-image1 {
              width: 100%;
            }
            .component-text01 {
              width: 100%;
              font-size: 32px;
            }
            .component-text02 {
              width: 100%;
              font-size: 32px;
            }
            .component-text03 {
              width: 100%;
              font-size: 32px;
            }
            .component-text04 {
              width: 100%;
              font-size: 32px;
            }
            .component-text05 {
              width: 100%;
              font-size: 32px;
            }
            .component-text06 {
              width: 100%;
              font-size: 32px;
            }
            .component-text07 {
              width: 100%;
              font-size: 32px;
            }
            .component-text08 {
              width: 100%;
              font-size: 32px;
            }
            .component-text09 {
              width: 100%;
              font-size: 32px;
            }
            .component-text10 {
              width: 100%;
              font-size: 32px;
            }
            .component-text11 {
              width: 100%;
              font-size: 32px;
            }
            .component-text12 {
              width: 100%;
              font-size: 32px;
            }
            .component-text13 {
              width: 100%;
              font-size: 32px;
            }
            .component-text14 {
              width: 100%;
              font-size: 32px;
            }
            .component-text15 {
              width: 100%;
              font-size: 32px;
            }
            .component-text16 {
              width: 100%;
              font-size: 32px;
            }
            .component-text17 {
              width: 100%;
              font-size: 32px;
            }
            .component-text18 {
              width: 100%;
              font-size: 32px;
            }
            .component-text19 {
              width: 100%;
              font-size: 32px;
            }
            .component-text20 {
              width: 100%;
              font-size: 32px;
            }
            .component-text21 {
              width: 100%;
              font-size: 32px;
            }
            .component-text22 {
              width: 100%;
              font-size: 32px;
            }
            .component-text23 {
              width: 100%;
              font-size: 32px;
            }
            .component-text24 {
              width: 100%;
              font-size: 32px;
            }
            .component-text25 {
              width: 100%;
              font-size: 32px;
            }
            .component-text26 {
              width: 100%;
              font-size: 32px;
            }
            .component-text27 {
              width: 100%;
              font-size: 32px;
            }
            .component-text28 {
              width: 100%;
              font-size: 32px;
            }
            .component-text29 {
              width: 100%;
              font-size: 32px;
            }
            .component-text30 {
              width: 100%;
              font-size: 32px;
            }
            .component-text31 {
              width: 100%;
              font-size: 32px;
            }
            .component-text32 {
              width: 100%;
              font-size: 32px;
            }
            .component-text33 {
              width: 100%;
              font-size: 32px;
            }
            .component-text34 {
              width: 100%;
              font-size: 32px;
            }
            .component-text35 {
              width: 100%;
              font-size: 32px;
            }
            .component-text36 {
              width: 100%;
              font-size: 32px;
            }
            .component-text37 {
              width: 100%;
              font-size: 32px;
            }
            .component-text38 {
              width: 100%;
              font-size: 32px;
            }
          }
          @media (max-width: 479px) {
            .component-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
              background-color: #111;
            }
            .component-image {
              width: 100%;
            }
            .component-image1 {
              width: 100%;
            }
            .component-text {
              font-size: 100px;
            }
            .component-text01 {
              font-size: 18px;
            }
            .component-text02 {
              font-size: 18px;
            }
            .component-text03 {
              font-size: 18px;
            }
            .component-text04 {
              font-size: 18px;
            }
            .component-text05 {
              font-size: 18px;
            }
            .component-text06 {
              font-size: 18px;
            }
            .component-text07 {
              font-size: 18px;
            }
            .component-text08 {
              font-size: 18px;
            }
            .component-text09 {
              font-size: 18px;
            }
            .component-text10 {
              font-size: 18px;
            }
            .component-text11 {
              font-size: 18px;
            }
            .component-text12 {
              font-size: 18px;
            }
            .component-text13 {
              font-size: 18px;
            }
            .component-text14 {
              font-size: 18px;
            }
            .component-text15 {
              font-size: 18px;
            }
            .component-text16 {
              font-size: 18px;
            }
            .component-text17 {
              font-size: 18px;
            }
            .component-text18 {
              font-size: 18px;
            }
            .component-text19 {
              font-size: 18px;
            }
            .component-text20 {
              font-size: 18px;
            }
            .component-text21 {
              font-size: 18px;
            }
            .component-text22 {
              font-size: 18px;
            }
            .component-text23 {
              font-size: 18px;
            }
            .component-text24 {
              font-size: 18px;
            }
            .component-text25 {
              font-size: 18px;
            }
            .component-text26 {
              font-size: 18px;
            }
            .component-text27 {
              font-size: 18px;
            }
            .component-text28 {
              font-size: 18px;
            }
            .component-text29 {
              font-size: 18px;
            }
            .component-text30 {
              font-size: 18px;
            }
            .component-text31 {
              font-size: 18px;
            }
            .component-text32 {
              font-size: 18px;
            }
            .component-text33 {
              font-size: 18px;
            }
            .component-text34 {
              font-size: 18px;
            }
            .component-text35 {
              font-size: 18px;
            }
            .component-text36 {
              font-size: 18px;
            }
            .component-text37 {
              font-size: 18px;
            }
            .component-text38 {
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM2fHx3ZWIlMjBwYWdlfGVufDB8fHx8MTY3MTg4ODg3MA&ixlib=rb-4.0.3&w=1500',
  image_alt: 'image',
  image_src1:
    'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU3fHx3ZWIlMjBwYWdlfGVufDB8fHx8MTY3MTg4ODkwMA&ixlib=rb-4.0.3&w=1500',
  image_alt1: 'image',
  heading: 'Human Page Generator',
  text: 'we have the best human page generators in the market',
  text1: 'we have the best human page generators in the market',
  text2: 'we have the best human page generators in the market',
  text3: 'we have the best human page generators in the market',
  text4: 'we have the best human page generators in the market',
  text5: 'we have the best human page generators in the market',
  text6: 'we have the best human page generators in the market',
  text7: 'we have the best human page generators in the market',
  text8: 'we have the best human page generators in the market',
  text9: 'we have the best human page generators in the market',
  text10: 'we have the best human page generators in the market',
  text11: 'we have the best human page generators in the market',
  text12: 'we have the best human page generators in the market',
  text13: 'we have the best human page generators in the market',
  text14: 'we have the best human page generators in the market',
  text15: 'we have the best human page generators in the market',
  text16: 'we have the best human page generators in the market',
  text17: 'we have the best human page generators in the market',
  text18: 'we have the best human page generators in the market',
  text19: 'we have the best human page generators in the market',
  text20: 'we have the best human page generators in the market',
  text21: 'we have the best human page generators in the market',
  text22: 'we have the best human page generators in the market',
  text23: 'we have the best human page generators in the market',
  text24: 'we have the best human page generators in the market',
  text25: 'we have the best human page generators in the market',
  text26: 'we have the best human page generators in the market',
  text27: 'we have the best human page generators in the market',
  text28: 'we have the best human page generators in the market',
  text29: 'we have the best human page generators in the market',
  text30: 'we have the best human page generators in the market',
  text31: 'we have the best human page generators in the market',
  text32: 'we have the best human page generators in the market',
  text33: 'we have the best human page generators in the market',
  text34: 'we have the best human page generators in the market',
  text35: 'we have the best human page generators in the market',
  text36: 'we have the best human page generators in the market',
  text37: 'we have the best human page generators in the market',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
  text16: PropTypes.string,
  text17: PropTypes.string,
  text18: PropTypes.string,
  text19: PropTypes.string,
  text20: PropTypes.string,
  text21: PropTypes.string,
  text22: PropTypes.string,
  text23: PropTypes.string,
  text24: PropTypes.string,
  text25: PropTypes.string,
  text26: PropTypes.string,
  text27: PropTypes.string,
  text28: PropTypes.string,
  text29: PropTypes.string,
  text30: PropTypes.string,
  text31: PropTypes.string,
  text32: PropTypes.string,
  text33: PropTypes.string,
  text34: PropTypes.string,
  text35: PropTypes.string,
  text36: PropTypes.string,
  text37: PropTypes.string,
}

export default AppComponent
