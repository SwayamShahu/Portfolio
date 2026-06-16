/**
 * links.ts — Research papers shown in the Research widget on the desktop.
 */

export interface LinkItem {
  title: string
  author: string
  url: string
  tag: string
}

export const links: LinkItem[] = [
  {
    title: "Low-Light Image Enhancement via SwinIR-Based Denoising and Attention U-Net with Laplacian Pyramid Decomposition",
    author: "IEEE AICARE 2025",
    url: "https://ieeexplore.ieee.org/document/11402795",
    tag: "IEEE · AI/ML",
  },
  {
    title: "A Study on Design and Development of Low-Light Image Enhancement",
    author: "I-Manager Journal",
    url: "https://openurl.ebsco.com/EPDB%3Agcd%3A12%3A13641244/detailv2?sid=ebsco%3Aplink%3Acrawler&id=ebsco%3Adoi%3A10.26634%2Fjfet.20.4.22209&crl=f&link_origin=com.google.android.googlequicksearchbox",
    tag: "Peer-Reviewed",
  },
]
