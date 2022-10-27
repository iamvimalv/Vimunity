/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Partner from 'assets/partner.png';

const data = {
  subTitle: 'Core features',
  title: 'Web Application Development',
  description:'VimUnity can design and deploy just such a web application for your business. social computing, web portals, e-commerce (including shopping carts and payment gateways),Our team of qualified software professionals is well-versed with the latest web technologies, including IOT, Micro Controller, Raspberry pi, MEAN, MERN, VUEJS, NextJS, NODEJS, Django, Flask, Golang, ChartJS, .NET, PHP, CMS,SEO, CRM, Java, Springboot, Kotlin, C, Python, HTML5, CSS3, WordPress, MySQL, NoSQL, MongoDB, MS SQL and Oracle. We make it a point to clearly understand your requirement at the outset, so that the final product is in line with the results your business wants to achieve.',
  btnName: 'Get Started',
  btnURL: '#',
};

export default function PartnerSection() {
  return (
    <section sx={{ variant: 'section.partner' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
          <Image src={Partner} alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
