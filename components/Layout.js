import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  Footer,
  Navbar,
  Dropdown,
  Avatar,
} from "flowbite-react";
import {
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Layout({ children, title = "umanoc" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title} - umanoc</title>
      </Head>
      <header className="w-screen">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              umanoc
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="umanoc" img="profile.jpg" rounded={true} />}
            >
              <Dropdown.Header>
                <span className="block text-sm">yuma nanjo</span>
                <span className="block truncate text-sm font-medium">
                  南條 友馬
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Portfolio</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/">Home</Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/services">Services</Navbar.Link>
            <Navbar.Link href="/blog">Blog</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand href="/" name="umanoc" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">umanoc</Footer.Link>
                  <Footer.Link href="#">南條 友馬</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Twitter</Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                  <Footer.Link href="#">YouTube</Footer.Link>
                  <Footer.Link href="#">Github</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by=" umanoc" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsYoutube} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
