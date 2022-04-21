import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

interface NavbarProps {
  theme?: 'light' | 'dark'
}

export const Navbar: React.FC<NavbarProps> = ({ theme = 'dark' }) => {
  const initialNavStyle = [
    'top-0 py-4 shadow-none navbar navbar-expand-lg position-fixed z-index-3 w-100 fixed-top navbar-transparent'
  ]

  const textColor = theme === 'dark' ? '#344767' : '#fff'
  const [navStyle, setNavStyle] = useState(initialNavStyle)
  const { y } = useWindowScroll()

  useEffect(() => {
    if (y > 0) {
      setNavStyle(initialNavStyle.concat('nav-scroll'))
    } else {
      setNavStyle(initialNavStyle)
    }
  }, [y])

  return (
    <nav id="MAIN_HEADER" className={classNames(navStyle)}>
      <div className="container">
        <a
          className="text-white navbar-brand d-none d-md-block"
          href="./home.html"
          rel="tooltip"
          title=""
          data-placement="bottom"
          target="_blank">
          <Image alt="" src="/static/img/logo-light.png" width={130} height={40} />
        </a>
        <a
          className="text-white navbar-brand d-block d-md-none"
          href="./home.html"
          rel="tooltip"
          title=""
          data-placement="bottom"
          target="_blank">
          <Image alt="" src="/static/img/logo-light.png" width={130} height={40} />
        </a>
        <button
          className="shadow-none navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="mt-2 navbar-toggler-icon">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0" id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <li className="mx-2 nav-item dropdown dropdown-hover">
              <a
                className="cursor-pointer nav-link ps-2 d-flex align-items-center"
                role="button"
                id="dropdownMenuPages10"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: textColor }}>
                Products
                <span className="material-icons">expand_more</span>
              </a>
              <div
                className="p-3 mt-0 dropdown-menu ms-n3 dropdown-menu-animation dropdown-xl border-radius-xl mt-lg-3"
                aria-labelledby="dropdownMenuPages10">
                <div className="row d-none d-lg-block">
                  <div className="px-4 py-2 col-12">
                    <div className="row">
                      <div className="col-4 position-relative">
                        <div className="px-1 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                          Microsoft Azure
                        </div>
                        <a href="../pages/coworking.html" className="dropdown-item border-radius-md">
                          <span>Ubuntu 20.04 LTS</span>
                        </a>
                        <a href="../pages/rental.html" className="dropdown-item border-radius-md">
                          <span>Amazon Linux 2</span>
                        </a>
                        <a href="../pages/case-study.html" className="dropdown-item border-radius-md">
                          <span>Oracle 8.5</span>
                        </a>
                        <div className="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                          AWS Marketplace
                        </div>
                        <a href="../pages/about-us.html" className="dropdown-item border-radius-md">
                          <span>Red Hat Linux 8</span>
                        </a>
                        <a href="../pages/pricing.html" className="dropdown-item border-radius-md">
                          <span>CentOS 8</span>
                        </a>
                        <a href="../pages/career.html" className="dropdown-item border-radius-md">
                          <span>Ubuntu 21.10</span>
                        </a>
                        <hr className="vertical dark" />
                      </div>
                      <div className="col-4 position-relative">
                        <div className="px-1 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                          Support
                        </div>
                        <a href="../pages/help-center.html" className="dropdown-item border-radius-md">
                          <span>Help Center</span>
                        </a>
                        <a href="../pages/help-center-basic.html" className="dropdown-item border-radius-md">
                          <span>Help Center Basic</span>
                        </a>
                        <a href="../pages/contact-us.html" className="dropdown-item border-radius-md">
                          <span>Contact Us</span>
                        </a>
                        <a href="../pages/contact-us-simple.html" className="dropdown-item border-radius-md">
                          <span>Contact Us Basic</span>
                        </a>
                        <a href="../pages/faq.html" className="dropdown-item border-radius-md">
                          <span>FAQ</span>
                        </a>
                        <a href="../pages/privacy.html" className="dropdown-item border-radius-md">
                          <span>Privacy</span>
                        </a>
                        <div className="px-1 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                          Apps
                        </div>
                        <a href="../pages/mobile-app.html" className="dropdown-item border-radius-md">
                          <span>Mobile App</span>
                        </a>
                        <a href="../pages/desktop-app.html" className="dropdown-item border-radius-md">
                          <span>Desktop App</span>
                        </a>
                        <hr className="vertical dark" />
                      </div>
                      <div className="col-4">
                        <div className="px-1 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                          Blogs
                        </div>
                        <a href="../pages/blog/single-article.html" className="dropdown-item border-radius-md">
                          <span>Single Article</span>
                        </a>
                        <a href="../pages/blog/blog-posts.html" className="dropdown-item border-radius-md">
                          <span>Blog Posts</span>
                        </a>
                        <a href="../pages/blog/categories.html" className="dropdown-item border-radius-md">
                          <span>Categories</span>
                        </a>
                        <a href="../pages/blog/author.html" className="dropdown-item border-radius-md">
                          <span>Author</span>
                        </a>
                        <div className="px-1 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                          Extra
                        </div>
                        <a href="../pages/automotive.html" className="dropdown-item border-radius-md">
                          <span>Automotive</span>
                        </a>
                        <a href="../pages/virtual-reality.html" className="dropdown-item border-radius-md">
                          <span>Virtual Reality</span>
                        </a>
                        <a href="../pages/smart-home.html" className="dropdown-item border-radius-md">
                          <span>Smart Home</span>
                        </a>
                        <a href="../pages/chat.html" className="dropdown-item border-radius-md">
                          <span>Chat</span>
                        </a>
                        <a href="../pages/product-page.html" className="dropdown-item border-radius-md">
                          <span>Product Page</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-lg-none">
                  <div className="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                    Landing Pages
                  </div>
                  <a href="../pages/coworking.html" className="dropdown-item border-radius-md">
                    Coworking
                  </a>
                  <a href="../pages/rental.html" className="dropdown-item border-radius-md">
                    Rental
                  </a>
                  <a href="../pages/case-study.html" className="dropdown-item border-radius-md">
                    Case Study
                  </a>
                  <div className="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                    Company
                  </div>
                  <a href="../pages/about-us.html" className="dropdown-item border-radius-md">
                    About Us
                  </a>
                  <a href="../pages/pricing.html" className="dropdown-item border-radius-md">
                    Pricing
                  </a>
                  <a href="../pages/career.html" className="dropdown-item border-radius-md">
                    Career
                  </a>
                  <a href="../pages/work-with-us.html" className="dropdown-item border-radius-md">
                    Work with us
                  </a>
                  <a href="../pages/terms.html" className="dropdown-item border-radius-md">
                    Terms & Conditions
                  </a>
                  <div className="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                    Support
                  </div>
                  <a href="../pages/help-center.html" className="dropdown-item border-radius-md">
                    Help Center
                  </a>
                  <a href="../pages/help-center-basic.html" className="dropdown-item border-radius-md">
                    Help Center Basic
                  </a>
                  <a href="../pages/contact-us.html" className="dropdown-item border-radius-md">
                    Contact Us
                  </a>
                  <a href="../pages/contact-us-simple.html" className="dropdown-item border-radius-md">
                    Contact Us Basic
                  </a>
                  <a href="../pages/faq.html" className="dropdown-item border-radius-md">
                    FAQ
                  </a>
                  <a href="../pages/privacy.html" className="dropdown-item border-radius-md">
                    Privacy
                  </a>
                  <div className="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                    Apps
                  </div>
                  <a href="../pages/mobile-app.html" className="dropdown-item border-radius-md">
                    Mobile App
                  </a>
                  <a href="../pages/desktop-app.html" className="dropdown-item border-radius-md">
                    Desktop App
                  </a>
                  <div className="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                    Blogs
                  </div>
                  <a href="../pages/blog/single-article.html" className="dropdown-item border-radius-md">
                    Single Article
                  </a>
                  <a href="../pages/blog/blog-posts.html" className="dropdown-item border-radius-md">
                    Blog Posts
                  </a>
                  <a href="../pages/blog/categories.html" className="dropdown-item border-radius-md">
                    Categories
                  </a>
                  <a href="../pages/blog/author.html" className="dropdown-item border-radius-md">
                    Author
                  </a>
                  <div className="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center">
                    Extra
                  </div>
                  <a href="../pages/automotive.html" className="dropdown-item border-radius-md">
                    Automotive
                  </a>
                  <a href="../pages/virtual-reality.html" className="dropdown-item border-radius-md">
                    Virtual Reality
                  </a>
                  <a href="../pages/smart-home.html" className="dropdown-item border-radius-md">
                    Smart Home
                  </a>
                  <a href="../pages/chat.html" className="dropdown-item border-radius-md">
                    Chat
                  </a>
                  <a href="../pages/product-page.html" className="dropdown-item border-radius-md">
                    Product Page
                  </a>
                </div>
              </div>
            </li>
            <li className="mx-2 nav-item dropdown dropdown-hover">
              <a
                className="cursor-pointer nav-link ps-2 d-flex align-items-center"
                role="button"
                id="dropdownMenuAccount"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: textColor }}>
                Services
                <span className="material-icons">expand_more</span>
              </a>
              <div
                className="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-md border-radius-xl mt-lg-3"
                aria-labelledby="dropdownMenuAccount">
                <div className="d-none d-lg-flex">
                  <ul className="list-group w-100">
                    <li className="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item">
                      <a
                        className="mb-1 dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center"
                        id="dropdownSignIn">
                        <span>Azure Consulting</span>
                        <img src="/static/img/down-arrow.svg" alt="down-arrow" className="arrow ms-auto" />
                      </a>
                      <div className="px-2 py-3 mt-0 dropdown-menu" aria-labelledby="dropdownSignIn">
                        <a className="mb-1 dropdown-item ps-3 border-radius-md" href="../pages/sign-in/sign-in-cover.html">
                          <span>Cover</span>
                        </a>
                        <a
                          className="mb-1 dropdown-item ps-3 border-radius-md"
                          href="../pages/sign-in/sign-in-illustration.html">
                          <span>Illustration</span>
                        </a>
                        <a className="mb-1 dropdown-item ps-3 border-radius-md" href="../pages/sign-in/sign-in-basic.html">
                          <span>Basic</span>
                        </a>
                        <a className="dropdown-item ps-3 border-radius-md" href="../pages/sign-in/sign-in-simple.html">
                          <span>Simple</span>
                        </a>
                      </div>
                    </li>
                    <li className="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item">
                      <a
                        className="mb-1 dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center"
                        id="dropdownSignUp">
                        <span>AWS Consulting</span>
                        <img src="/static/img/down-arrow.svg" alt="down-arrow" className="arrow ms-auto" />
                      </a>
                      <div className="px-2 py-3 mt-0 dropdown-menu" aria-labelledby="dropdownSignUp">
                        <a className="mb-1 dropdown-item ps-3 border-radius-md" href="../pages/sign-up/sign-up-cover.html">
                          <span>Cover</span>
                        </a>
                        <a
                          className="mb-1 dropdown-item ps-3 border-radius-md"
                          href="../pages/sign-up/sign-up-illustration.html">
                          <span>Illustration</span>
                        </a>
                        <a className="mb-1 dropdown-item ps-3 border-radius-md" href="../pages/sign-up/sign-up-basic.html">
                          <span>Basic</span>
                        </a>
                        <a className="mb-1 dropdown-item ps-3 border-radius-md" href="../pages/sign-up/sign-up-simple.html">
                          <span>Simple</span>
                        </a>
                      </div>
                    </li>
                    <li className="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item">
                      <a
                        className="mb-1 dropdown-item border-radius-md text-dark ps-3 d-flex align-items-center"
                        id="dropdownSignUp">
                        <span>Salesforce Consulting</span>
                        <img src="/static/img/down-arrow.svg" alt="down-arrow" className="arrow ms-auto" />
                      </a>
                      <div className="px-2 py-3 mt-0 dropdown-menu" aria-labelledby="dropdownSignUp">
                        <a className="mb-1 dropdown-item ps-3 border-radius-md" href="../pages/sign-up/sign-up-cover.html">
                          <span>Cover</span>
                        </a>
                        <a
                          className="mb-1 dropdown-item ps-3 border-radius-md"
                          href="../pages/sign-up/sign-up-illustration.html">
                          <span>Illustration</span>
                        </a>
                        <a className="mb-1 dropdown-item ps-3 border-radius-md" href="../pages/sign-up/sign-up-basic.html">
                          <span>Basic</span>
                        </a>
                        <a className="mb-1 dropdown-item ps-3 border-radius-md" href="../pages/sign-up/sign-up-simple.html">
                          <span>Simple</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mx-2 nav-item dropdown dropdown-hover">
              <a
                href="./insights.html"
                className="cursor-pointer nav-link ps-2 d-flex align-items-center"
                role="button"
                style={{ color: textColor }}>
                Insights
              </a>
            </li>
            <li className="mx-2 nav-item dropdown dropdown-hover">
              <a
                href="./about.html"
                className="cursor-pointer nav-link ps-2 d-flex align-items-center"
                role="button"
                style={{ color: textColor }}>
                About
              </a>
            </li>
            <li className="mx-2 nav-item dropdown dropdown-hover">
              <a
                href="./career-list.html"
                className="cursor-pointer nav-link ps-2 d-flex align-items-center"
                role="button"
                style={{ color: textColor }}>
                Careers
              </a>
            </li>
            <li className="mx-2 nav-item dropdown dropdown-hover">
              <a
                href="./contact-v2.html"
                className="cursor-pointer nav-link ps-2 d-flex align-items-center"
                role="button"
                style={{ color: textColor }}>
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
