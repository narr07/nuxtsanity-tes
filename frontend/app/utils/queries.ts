export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  description,
  slug,
  pageBuilder[]{
    _type,
    _key,
    _type == "heroSection" => {
      title,
      subtitle,
      buttons,
      image
    },
    _type == "contentSection" => {
      heading,
      content
    },
    _type == "ctaSection" => {
      heading,
      text,
      buttonText,
      buttonUrl,
      variant
    },
    _type == "cardGrid" => {
      heading,
      cards,
      columns
    },
    _type == "featuresSection" => {
      heading,
      description,
      features
    }
  }
}`

// Query untuk settings - ambil yang pertama tanpa filter ID
export const settingsQuery = groq`*[_type == "settings"] | order(_updatedAt desc)[0]{
  _id,
  siteTitle: title,
  description,
  logo,
  navigation[]{
    title,
    linkType,
    "page": page->{slug},
    "post": post->{slug},
    externalUrl
  },
  footer
}`

export const pagesQuery = groq`*[_type == "page" && showInNav == true] | order(navOrder asc){
  _id,
  title,
  "slug": slug.current
}`
