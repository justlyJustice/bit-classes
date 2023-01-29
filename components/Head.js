import PropTypes from "prop-types";
import Head from "next/head";

const CustomHead = ({ description, title, image }) => {
  let currentUrl = "";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="url" content={currentUrl} />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* Facebook Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:width" content={300} />
      <meta property="og:height" content={300} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

CustomHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default CustomHead;
