import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Phạm Nguyễn Nam Anh | Luxury Real Estate & Interior Design</title>
        <meta
          name="description"
          content="Landing page cao cấp giới thiệu dự án bất động sản hạng sang Việt Nam, dịch vụ nội thất Hhome Design & Hhome Care với 15 năm kinh nghiệm."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Phạm Nguyễn Nam Anh | Luxury Real Estate & Interior Design" />
        <meta property="og:description" content="Trang đích chuyên nghiệp dành cho lĩnh vực bất động sản cao cấp và thiết kế nội thất hạng sang tại Việt Nam." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="https://hhomedesign.vn/favicon-hhome.png" />
      </Head>

      <main style={{ fontFamily: 'Poppins, sans-serif', color: '#111', margin: 0, padding: 0 }}>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '8rem 2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>Phạm Nguyễn Nam Anh</h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '400' }}>Luxury Real Estate & Interior Design Expert</h2>
            <p style={{ maxWidth: '700px', margin: '1rem auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Chuyên viên tư vấn Bất động sản cao cấp Vinhomes & MasteriseHome.<br />Đồng sáng lập Hhome Design & Hhome Care — 15 năm kinh nghiệm trong thiết kế, decor, và chăm sóc nội thất.
            </p>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#e6b800',
                padding: '0.8rem 2rem',
                borderRadius: '30px',
                color: '#111',
                fontWeight: '600',
                textDecoration: 'none',
                marginTop: '2rem',
                display: 'inline-block',
                cursor: 'pointer'
              }}
            >
              Khám phá thêm
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f9f9f9' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Về Hhome Design & Hhome Care</h3>
          <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Hhome Design & Hhome Care là hai thương hiệu được thành lập hơn 15 năm, chuyên thiết kế – decor – chăm sóc nội thất cho các dự án cao cấp tại Việt Nam. Chúng tôi hướng đến trải nghiệm sống tinh tế, sang trọng và bền vững cho từng khách hàng.
          </p>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ backgroundColor: '#111', color: 'white', textAlign: 'center', padding: '2rem 1rem' }}
        >
          <p>
            Hotline: <strong>0865.967.565</strong> | Email: <strong>Namanhphamnguyen120697@gmail.com</strong>
          </p>
          <p>© {new Date().getFullYear()} Phạm Nguyễn Nam Anh - All rights reserved.</p>
        </motion.footer>
      </main>
    </>
  );
}
