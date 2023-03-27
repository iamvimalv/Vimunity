import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = `Vimunity Welcome to VimUnity, your trusted partner for affordable and high-quality web services. We understand that as a small startup, you need a strong online presence to attract customers and establish credibility in the marketplace. That's why we offer a range of web services designed to help you grow your business.

  Our team of experienced web designers and developers will work with you to create a custom website that reflects your brand and meets your business needs. Whether you need a simple brochure website or a complex e-commerce platform, we have the expertise to deliver a solution that works for you.
  
  In addition to website design and development, we also offer a range of other web services, including search engine optimization, social media integration, content creation, and website maintenance. We believe that a website is not a one-time investment, but an ongoing asset that requires regular updates and maintenance. That's why we offer ongoing support to ensure your website stays up-to-date and continues to meet your business needs.
  
  At [Company Name], we pride ourselves on delivering exceptional customer service. We understand that every business is unique, and we take the time to understand your goals and objectives. We'll work with you every step of the way to ensure your website is delivered on time and on budget.
  
  If you're ready to take your business to the next level, contact us today to learn more about how we can help. We look forward to partnering with you to create a website that helps you achieve your business goals.'`,
  author = 'Vimal',
  meta,
  title = 'vimunity helps website for small startup business',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
