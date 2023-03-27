/** @jsx jsx */
import { jsx, Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import BannerBG from 'assets/bannerBg.png';
import BannerThumb from 'assets/banner-thumb.png';

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';

const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: client2,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: client3,
    title: 'dropbox',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

//   Welcome to our small startup company, where we offer a wide range of web services designed to help your business thrive in the digital world. Our team of experts has years of experience in web design, development, and digital marketing, and we are committed to providing high-quality solutions that meet your unique business needs.

// We understand that as a small business, you may have limited resources and budget constraints. That's why we offer affordable website packages that are tailored to your specific needs and budget. Our packages range from basic website design to full-scale e-commerce solutions, so you can choose the package that works best for your business.

// In addition to website design and development, we also offer a variety of digital marketing services, including search engine optimization, social media marketing, and email marketing. Our team of experts will work with you to develop a comprehensive digital marketing strategy that helps you reach your target audience and achieve your business goals.

// At our company, we pride ourselves on providing personalized support and exceptional customer service. Our team of experts is always available to answer your questions, provide support, and ensure that your website is running smoothly. We understand that your website is a critical part of your business, and we are committed to ensuring that it delivers results.

// Whether you're just starting out or looking to take your business to the next level, our team is here to help. Contact us today to learn more about our web services and how we can help your business succeed in the digital world.


// Welcome to [Company Name], your trusted partner for affordable and high-quality web services. We understand that as a small startup, you need a strong online presence to attract customers and establish credibility in the marketplace. That's why we offer a range of web services designed to help you grow your business.

// Our team of experienced web designers and developers will work with you to create a custom website that reflects your brand and meets your business needs. Whether you need a simple brochure website or a complex e-commerce platform, we have the expertise to deliver a solution that works for you.

// In addition to website design and development, we also offer a range of other web services, including search engine optimization, social media integration, content creation, and website maintenance. We believe that a website is not a one-time investment, but an ongoing asset that requires regular updates and maintenance. That's why we offer ongoing support to ensure your website stays up-to-date and continues to meet your business needs.

// At [Company Name], we pride ourselves on delivering exceptional customer service. We understand that every business is unique, and we take the time to understand your goals and objectives. We'll work with you every step of the way to ensure your website is delivered on time and on budget.

// If you're ready to take your business to the next level, contact us today to learn more about how we can help. We look forward to partnering with you to create a website that helps you achieve your business goals.

  return (
    <section style={{background:'#3273bc'}} sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
          {/* Software Application Development */}
          Host Your Business
          </Heading>
          <Text as="p" variant="heroSecondary">
          {/* Advancements in technology and changes in the business environment constantly create opportunities for the development of new software solutions that can benefit your company. The journey from concept to finish comes with its own challenges, often taking up resources and escalating costs, and a great idea could be compromised as a result. */}
          VimUnity can help small startup businesses like yours establish a strong online presence and grow their customer base. design and deploy just such a web application for small startup social computing, web portals, e-commerce (including shopping carts and payment gateways), Our team of qualified software professionals is well-versed with the latest web technologies
          </Text>
          <Flex>
            <Button variant="whiteButton" aria-label="Get Started">
              Readme More
            </Button>
            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="ZNA9rmDsYVE"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button>
            </>
          </Flex>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Sponsored by:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
