import React from 'react';
import { socialData } from '../data/socials';

const Social = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ติดตามเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เชื่อมต่อกับเราเพื่อรับข่าวสาร กิจกรรม และโปรโมชั่นสุดพิเศษ<br />
            ผ่านช่องทางโซเชียลมีเดียที่คุณสะดวกที่สุด
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6" style={{ gap: '2rem' }}>
          {socialData.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="flex flex-col items-center"
              >
                <div className="social-container">
                  <IconComponent className={`social-icon ${social.colorClass}`} />
                </div>
                <span
                  className="mt-2 text-sm font-medium"
                  style={{
                    color: '#2563eb', // Tailwind blue-600
                    textDecoration: 'none',
                    cursor: 'default'
                  }}
                >
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-base font-semibold">
            คลิกที่โลโก้เพื่อเข้าสู่ช่องทางโซเชียลมีเดียของเรา<br />
            แล้วอย่าลืมกดติดตามเพื่อไม่พลาดทุกความเคลื่อนไหว!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Social;