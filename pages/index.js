import React from 'react'
import Head from 'next/head'

import FeatureCard3 from '../components/feature-card3'
import FeatureCard4 from '../components/feature-card4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Landing Page</title>
          <meta property="og:title" content="Landing Page" />
        </Head>
        <div className="home-container01"></div>
        <div className="home-container02">
          <h1
            data-plx=".5"
            data-aos="fade-right"
            className="home-text parallax-x"
          >
            <span>
              Beautiful &amp; Effective
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Landing Pages</span>
          </h1>
        </div>
        <div className="home-container03">
          <div className="home-container04">
            <span data-plx="2" className="home-text04 parallax-x">
              Figure Out Easy What Is Your Ideal Page
            </span>
            <span data-plx="-2" className="home-text05 parallax-x">
              Figure Out Easy What Is Your Ideal Page
            </span>
            <span data-plx="2.5" className="home-text06 parallax-x">
              Figure Out Easy What Is Your Ideal Page
            </span>
            <span data-plx="-2.5" className="home-text07 parallax-x parallax-y">
              Figure Out Easy What Is Your Ideal Page
            </span>
            <span data-plx=".3" className="home-text08 parallax-x parallax-y">
              Figure Out Easy What Is Your Ideal Page
            </span>
            <span data-plx="-.3" className="home-text09 parallax-x">
              Figure Out Easy What Is Your Ideal Page
            </span>
            <span data-plx="3" className="home-text10 parallax-x">
              Figure Out Easy What Is Your Ideal Page
            </span>
            <span data-plx="-3" className="home-text11 parallax-x">
              Figure Out Easy What Is Your Ideal Page
            </span>
          </div>
          <div className="home-container05">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxpbnRlcm5ldHxlbnwwfHx8fDE2NzE3MTg5MDc&amp;ixlib=rb-4.0.3&amp;w=800"
              data-aos="fade-left"
              className="home-image"
            />
          </div>
        </div>
        <div className="home-container06">
          <div className="home-container07">
            <h1
              data-plx="-2"
              data-aos="fade-right"
              className="home-text12 parallax-x"
            >
              Smart Contact Forms
            </h1>
          </div>
        </div>
        <div data-aos="zoom-in" className="home-banner">
          <h1 className="home-text13">Our Mission</h1>
          <span className="home-text14">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum
                mi ut rhoncus. Integer in dignissim tortor. Sed non volutpat
                turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                ortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <button className="home-button button">Read More</button>
        </div>
        <div data-aos="zoom-in-left" className="home-features">
          <h1 className="home-text18">
            <span>Explore our services</span>
            <br></br>
            <span></span>
          </h1>
          <span className="home-text21">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
              lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
              pellentesque nulla leo, sagittis vehicula sem commodo nec.​
            </span>
            <span></span>
          </span>
          <div className="home-container08">
            <FeatureCard3 rootClassName="rootClassName"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName3"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName5"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName1"></FeatureCard3>
          </div>
        </div>
        <div className="home-features1">
          <h1 className="home-text24">
            <span>Discover our</span>
            <br></br>
            <span>unique features</span>
          </h1>
          <div className="home-separator"></div>
          <div className="home-container09">
            <div className="home-container10">
              <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName4"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName3"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName2"></FeatureCard4>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="home-image1"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
          }
          .home-text {
            top: 0;
            width: 100%;
            position: sticky;
            font-size: 200px;
            font-family: Khand;
          }
          .home-container03 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text04 {
            font-size: 65px;
            font-family: Khand;
          }
          .home-text05 {
            font-size: 65px;
            font-family: Khand;
          }
          .home-text06 {
            font-size: 65px;
            font-family: Khand;
          }
          .home-text07 {
            font-size: 65px;
            font-family: Khand;
          }
          .home-text08 {
            font-size: 65px;
            font-family: Khand;
          }
          .home-text09 {
            font-size: 65px;
            font-family: Khand;
          }
          .home-text10 {
            font-size: 65px;
            font-family: Khand;
          }
          .home-text11 {
            font-size: 65px;
            font-family: Khand;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            width: 100%;
            height: 600px;
            align-self: center;
            box-shadow: 11px 18px 20px #5a5a5a;
            object-fit: contain;
            border-radius: 10px;
            background-position: center;
            background-attachment: fixed;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text12 {
            width: 100%;
            font-size: 200px;
            font-family: Khand;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text13 {
            font-size: 130px;
            text-align: center;
            font-family: Khand;
          }
          .home-text14 {
            font-size: 22px;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            font-family: Khand;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-button {
            font-size: 22px;
            transition: 0.3s;
            font-family: Khand;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button:hover {
            transform: scale(1.02);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-text18 {
            font-size: 130px;
            font-family: Khand;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text21 {
            color: var(--dl-color-gray-700);
            width: 70%;
            font-size: 22px;
            text-align: center;
            font-family: Khand;
          }
          .home-container08 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-features1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-text24 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container10 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-image1 {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          @media (max-width: 1600px) {
            .home-text12 {
              font-size: 200px;
              font-family: Khand;
            }
          }

          @media (max-width: 991px) {
            .home-text14 {
              max-width: 100%;
            }
            .home-text18 {
              text-align: center;
            }
            .home-text21 {
              text-align: center;
            }
            .home-container08 {
              grid-template-columns: 1fr 1fr;
            }
            .home-features1 {
              align-items: center;
            }
            .home-container09 {
              flex-direction: column;
            }
            .home-image1 {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text14 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text18 {
              text-align: center;
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text24 {
              text-align: center;
            }
            .home-container09 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-text12 {
              font-size: 100px;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container08 {
              grid-template-columns: 1fr;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container10 {
              grid-template-columns: 1fr;
            }
            .home-image1 {
              width: 250px;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
