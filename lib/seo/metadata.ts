import { Metadata } from 'next';
import { SITE_METADATA } from '../constants/links';

export function constructMetadata({
  title,
  description = SITE_METADATA.description,
  canonicalUrl,
  ogImage = '/og-image.png',
  noIndex = false,
}: {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | AskOnlineTutor Engineering`;
  const url = canonicalUrl ? `${SITE_METADATA.siteUrl}${canonicalUrl}` : SITE_METADATA.siteUrl;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'AskOnlineTutor',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: SITE_METADATA.twitterHandle,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
