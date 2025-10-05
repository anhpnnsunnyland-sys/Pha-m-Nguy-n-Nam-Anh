import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="title" content="Phạm Nguyễn Nam Anh | Luxury Real Estate & Interior Design" />
          <meta name="description" content="Landing page chuyên nghiệp giới thiệu dự án BĐS hạng sang Việt Nam, dịch vụ nội thất Hhome Design & Hhome Care (15 năm kinh nghiệm)." />
          <meta name="keywords" content="Bất động sản cao cấp, Hhome Design, Hhome Care, Vinhomes, MasteriseHome, Nội thất sang trọng, Luxury Real Estate Vietnam" />
          <meta name="author" content="Phạm Nguyễn Nam Anh" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://hhomedesign.vn/" />

          {/* Open Graph & Twitter Meta */}
          <meta property="og:title" content="Phạm Nguyễn Nam Anh | Luxury Real Estate & Interior Design" />
          <meta property="og:description" content="Landing page chuyên nghiệp giới thiệu dự án BĐS hạng sang Việt Nam, dịch vụ nội thất Hhome Design & Hhome Care (15 năm kinh nghiệm)." />
          <meta property="og:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" />
          <meta property="og:site_name" content="Hhome Design & Hhome Care" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hhomedesign.vn/" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Phạm Nguyễn Nam Anh | Luxury Real Estate & Interior Design" />
          <meta name="twitter:description" content="Landing page chuyên nghiệp giới thiệu dự án BĐS hạng sang Việt Nam, dịch vụ nội thất Hhome Design & Hhome Care (15 năm kinh nghiệm)." />
          <meta name="twitter:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" />

          <meta name="theme-color" content="#111827" />

          {/* Favicon for Hhome Brand */}
          <link rel="icon" type="image/png" href="https://hhomedesign.vn/favicon-hhome.png" />
          <link rel="apple-touch-icon" href="https://hhomedesign.vn/favicon-hhome.png" />

          {/* Deployment Instructions */}
          <meta name="vercel-deploy-step" content="Bước 3: Trong Vercel → nhấn 'New Project' → chọn repo bạn vừa upload → chọn framework là Next.js (Vercel sẽ tự nhận diện)." />

          <title>Phạm Nguyễn Nam Anh | Luxury Real Estate & Interior Design</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
