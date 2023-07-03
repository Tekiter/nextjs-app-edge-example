import "server-only";

import { sleep } from "./sleep";

interface Article {
  url: string;
  title: string;
  content: string;
}
const sampleArticles: Article[] = [
  {
    url: "mastering-responsive-design",
    title: "Mastering Responsive Design",
    content:
      "Responsive design is a crucial aspect of modern web development. It enables websites to adapt and provide optimal user experiences across various devices and screen sizes. By employing fluid grids, flexible images, and media queries, developers can create designs that seamlessly scale and rearrange content. Mastering responsive design requires a solid understanding of CSS techniques and frameworks, as well as a thorough testing approach to ensure compatibility across browsers and devices.",
  },
  {
    url: "best-practices-for-accessible-web-frontends",
    title: "Best Practices for Accessible Web Frontends",
    content:
      "Creating accessible web frontends is essential to ensure equal access and usability for all users, including those with disabilities. Developers must follow established accessibility guidelines, such as using semantic HTML markup, providing alternative text for images, implementing keyboard navigation, and handling color contrast appropriately. By incorporating these best practices, web frontends can become more inclusive and offer a better user experience for everyone.",
  },
  {
    url: "optimizing-web-performance",
    title: "Optimizing Web Performance",
    content:
      "Web performance plays a crucial role in user engagement and conversion rates. Slow-loading websites can lead to higher bounce rates and frustrated users. To optimize web performance, developers should focus on minimizing file sizes, leveraging caching techniques, and reducing the number of HTTP requests. Additionally, techniques like lazy loading, code minification, and utilizing content delivery networks (CDNs) can further enhance the speed and responsiveness of web frontends.",
  },
  {
    url: "responsive-images-for-web-frontends",
    title: "Responsive Images for Web Frontends",
    content:
      "In the era of high-resolution displays and varying screen sizes, responsive images are a must for modern web frontends. Developers can employ techniques such as srcset and sizes attributes, as well as CSS media queries, to deliver the most appropriate image assets based on the user's device capabilities. By optimizing and serving the right images for each context, web frontends can provide visually appealing experiences while minimizing bandwidth usage and page load times.",
  },
  {
    url: "introduction-to-progressive-web-apps",
    title: "Introduction to Progressive Web Apps",
    content:
      "Progressive Web Apps (PWAs) combine the best of web and native applications, providing users with app-like experiences directly in their browsers. PWAs utilize modern web technologies, such as service workers and caching, to enable offline functionality and faster loading times. With capabilities like push notifications, home screen installation, and access to device features, PWAs offer a seamless and engaging experience across platforms, bridging the gap between websites and native mobile apps.",
  },
  {
    url: "design-systems-for-consistent-web-interfaces",
    title: "Design Systems for Consistent Web Interfaces",
    content:
      "Design systems play a vital role in maintaining consistency and efficiency in web frontend development. They provide a centralized library of reusable components, UI patterns, and style guidelines, ensuring a cohesive and visually appealing user interface. By using design systems, development teams can streamline their workflows, promote collaboration, and reduce duplication of efforts. Design systems also facilitate scalability and allow for easier maintenance and updates of web interfaces.",
  },
];

export async function getArticleList() {
  await sleep(1000);
  return sampleArticles.map((article) => ({
    url: article.url,
    title: article.title,
    preview: article.content.replaceAll("\n", " ").substring(0, 40),
  }));
}

export async function getArticle(url: string) {
  await sleep(1000);
  return sampleArticles.find((article) => article.url === url) ?? null;
}
