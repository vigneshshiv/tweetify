/**
 * Title and Meta Tags
 */
 import Head from 'next/head';

const TitleAndMetaTags = (): JSX.Element => {
  const meta = {
    title: 'Tweetify',
    description: `Beautify your tweets with nice background and share it.`,
    type: 'website',
    url: 'https://github.com/vigneshshiv',
    image: '/site.png'
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width" />
      <meta content={meta.description} name="description" />
      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={meta.url} />
      <link rel="canonical" href={meta.url} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image ?? '/site.png'} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta name="twitter:site" content="vikyshiv" />
      <meta name="twitter:creator" content="vikyshiv" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image ?? '/site.png'} />
      <meta
        name="keywords"
        content="Tweetify, Beautify your tweets, Tweets with nice background, Vignesh Shiv, Creative Projects"
      />
    </Head>
  );
}

export default TitleAndMetaTags;