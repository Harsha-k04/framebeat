import { Helmet } from "react-helmet-async"

export default function SEO({
  title,
  description,
  keywords,
  url,
  image = "https://www.framebeatlabs.com/og-image.jpg",
  type = "website",
}) {
  const siteName = "Framebeat Labs"
  const fullTitle = title.includes(siteName)
    ? title
    : `${title} | ${siteName}`

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Framebeat Labs",
    url: "https://www.framebeatlabs.com",
    logo: "https://www.framebeatlabs.com/logo.png",
    sameAs: [
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.youtube.com/",
    ],
    description,
  }

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary SEO */}
      <title>{fullTitle}</title>

      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Framebeat Labs" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Theme */}
      <meta name="theme-color" content="#000000" />

      {/* Mobile */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}
