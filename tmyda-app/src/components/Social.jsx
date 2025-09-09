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
            อัพเดทข่าวสารและกิจกรรมใหม่ๆ จากช่องทางโซเชียลมีเดียของเรา
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
              >
                <div className="social-container">
                  <IconComponent className={`social-icon ${social.colorClass}`} />
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            คลิกไอคอนเพื่อเข้าสู่ช่องทางโซเชียลมีเดียที่ต้องการ
          </p>
        </div>
      </div>
    </section>
  );
};

export default Social;