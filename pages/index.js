import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import AppComponent from '../components/component'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Landing Page</title>
          <meta property="og:title" content="Landing Page" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <Link href="/">
            <a className="home-link">
              <img
                alt="logo"
                src="/playground_assets/humantime.svg"
                data-aos="fade-in"
                className="home-logo"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <span className="home-text">About</span>
              <span className="home-text01">Features</span>
              <span className="home-text02">Pricing</span>
              <span className="home-text03">Team</span>
              <span className="home-text04">Blog</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <button className="home-login button">Login</button>
            <button className="home-register button">Register</button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <Link href="/">
                  <a className="home-link1">
                    <img
                      alt="image"
                      src="/playground_assets/humantime.svg"
                      className="home-image"
                    />
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg
                    viewBox="0 0 1024 1024"
                    dasta-aos="fade-in"
                    className="home-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span data-aos="fade-in" className="home-text05">
                  About
                </span>
                <span data-aos="fade-in" className="home-text06">
                  Features
                </span>
                <span data-aos="fade-in" className="home-text07">
                  Pricing
                </span>
                <span data-aos="fade-in" className="home-text08">
                  Team
                </span>
                <span data-aos="fade-in" className="home-text09">
                  Blog
                </span>
              </nav>
              <div className="home-container2">
                <button data-aos="fade-in" className="home-login1 button">
                  Login
                </button>
                <button data-aos="fade-in" className="home-register1 button">
                  Register
                </button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-container3">
          <span data-plx="-2" className="home-text10 parallax-x">
            <span>
              we have the best human page generators in the market we have the
              best human page generators in the market we have the best human
              page generators in the market 
            </span>
            <br></br>
          </span>
        </div>
        <AppComponent></AppComponent>
        <AppComponent
          image_src="https://images.unsplash.com/photo-1671734310533-7ad84cff94e4?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3MTkwMzUzNQ&amp;ixlib=rb-4.0.3&amp;w=1500"
          image_src1="https://images.unsplash.com/photo-1671831817096-7e635d113260?ixid=Mnw5MTMyMXwwfDF8YWxsfDN8fHx8fHwyfHwxNjcxOTAzNTM1&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></AppComponent>
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
            background-color: #111;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #111;
          }
          .home-link {
            display: contents;
          }
          .home-logo {
            height: 4rem;
            text-decoration: none;
          }
          .home-desktop-menu {
            display: none;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-text {
            color: #fff;
            font-family: Khand;
          }
          .home-text01 {
            color: #fff;
            font-family: Khand;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text02 {
            color: #fff;
            font-family: Khand;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text03 {
            color: #fff;
            font-family: Khand;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text04 {
            color: #fff;
            font-family: Khand;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .home-register {
            border-color: #ffffff;
            background-color: var(--dl-color-gray-white);
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            fill: #fff;
            width: 50px;
            height: 50px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #111111;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-link1 {
            display: contents;
          }
          .home-image {
            height: 4rem;
            margin-left: 15px;
            text-decoration: none;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            fill: #fff;
            width: 50px;
            height: 50px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text05 {
            color: #fff;
            font-size: 80px;
            font-family: Khand;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            color: #fff;
            font-size: 80px;
            font-family: Khand;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            color: #fff;
            font-size: 80px;
            font-family: Khand;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text08 {
            color: #fff;
            font-size: 80px;
            font-family: Khand;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            color: #fff;
            font-size: 80px;
            font-family: Khand;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login1 {
            font-size: 50px;
            font-family: Khand;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-register1 {
            font-size: 50px;
            font-family: Khand;
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            fill: var(--dl-color-gray-white);
            width: 100px;
            height: 100px;
            margin-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon06 {
            fill: var(--dl-color-gray-white);
            width: 100px;
            height: 100px;
            margin-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon08 {
            fill: var(--dl-color-gray-white);
            width: 100px;
            height: 100px;
            margin-top: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
          }
          .home-text10 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            text-align: left;
            font-family: Khand;
          }
          @media (max-width: 1920px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1600px) {
            .home-container3 {
              position: relative;
            }
            .home-text10 {
              font-size: 26px;
            }
          }
          @media (max-width: 1200px) {
            .home-text10 {
              font-size: 20px;
            }
          }
          @media (max-width: 991px) {
            .home-text10 {
              font-size: 16px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text01 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text02 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text03 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text04 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-icon {
              fill: #fff;
              width: 30px;
              height: 30px;
            }
            .home-mobile-menu {
              background-color: #111;
            }
            .home-icon02 {
              fill: #fff;
              width: 30px;
              height: 30px;
            }
            .home-text05 {
              color: #ffffff;
              font-family: Khand;
            }
            .home-text06 {
              color: #ffffff;
              font-family: Khand;
            }
            .home-text07 {
              color: #ffffff;
              font-family: Khand;
            }
            .home-text08 {
              color: #ffffff;
              font-family: Khand;
            }
            .home-text09 {
              color: #ffffff;
              font-family: Khand;
            }
            .home-login1 {
              font-family: Khand;
            }
            .home-register1 {
              font-family: Khand;
            }
            .home-icon04 {
              width: 80px;
              height: 80px;
            }
            .home-icon06 {
              width: 80px;
              height: 80px;
            }
            .home-icon08 {
              width: 80px;
              height: 80px;
            }
            .home-text10 {
              font-size: 12px;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
              align-self: center;
              padding-right: var(--dl-space-space-unit);
              background-color: #111;
            }
            .home-icon {
              fill: #fff;
              width: 30px;
              height: 30px;
            }
            .home-mobile-menu {
              padding: 16px;
              background-color: #111111;
            }
            .home-icon02 {
              fill: #fff;
              width: 30px;
              height: 30px;
            }
            .home-text05 {
              color: #fff;
              font-family: Khand;
            }
            .home-text06 {
              color: #fff;
              font-family: Khand;
            }
            .home-text07 {
              color: #fff;
              font-family: Khand;
            }
            .home-text08 {
              color: #fff;
              font-family: Khand;
            }
            .home-text09 {
              color: #fff;
              font-family: Khand;
            }
            .home-login1 {
              color: #ffffff;
              font-family: Khand;
              border-color: #fff;
              background-color: #000000;
            }
            .home-register1 {
              color: #fff;
              font-family: Khand;
              border-color: #fff;
              background-color: #000;
            }
            .home-icon04 {
              width: 80px;
              height: 80px;
            }
            .home-icon06 {
              width: 80px;
              height: 80px;
            }
            .home-icon08 {
              width: 80px;
              height: 80px;
            }
            .home-text10 {
              font-size: 8px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
