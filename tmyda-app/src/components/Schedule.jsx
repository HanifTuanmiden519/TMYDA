import React from 'react';
import { scheduleData } from '../data/schedule';
import './Schedule.css'; // ต้องสร้างไฟล์ CSS นี้ด้วย

const SocialIcon = ({ platform }) => {
  const icons = {
    facebook: 'f',
    youtube: '▶',
    instagram: '📷', 
    tiktok: '🎵'
  };
  
  return (
    <span className="social-icon">
      {icons[platform] || '📱'}
    </span>
  );
};

const ScheduleCard = ({ item }) => {
  return (
    <div className="schedule-card">
      {/* ส่วนซ้าย - เวลา */}
      <div className="card-left">
        <div className="time-section">
          <div className="day">{item.time}</div>
          <div className="time">{item.timeDetail}</div>
          {item.subtitle2 && (
            <div className="subtitle2">{item.subtitle2}</div>
          )}
        </div>
        
        {/* เส้นแบ่ง */}
        <div className="divider"></div>
        
        {/* ชื่อรายการ */}
        <div className="program-title">
          <h3>
            {item.title}
            {item.subtitle && (
              <span className="subtitle">{item.subtitle}</span>
            )}
          </h3>
        </div>
      </div>

      {/* ส่วนขวา - ช่องทางและโลโก้ */}
      <div className="card-right">
        {/* Social Media */}
        <div className="social-section">
          <span className="watch-text">รับชมได้ในช่องทาง</span>
          <div className="social-icons">
            <SocialIcon platform="facebook" />
            <SocialIcon platform="youtube" />
            {item.channels && item.channels.length > 2 && (
              <>
                <SocialIcon platform="instagram" />
                <SocialIcon platform="tiktok" />
              </>
            )}
          </div>
          <span className="channel-names">
            {item.channels ? item.channels.slice(0, 2).join(' ') : ''}
          </span>
        </div>

        {/* Logo */}
        <div className="logo-section">
          {item.logo === "THE Nasihat" && (
            <span className="logo-icon">📖</span>
          )}
          {item.logo === "THE issue" && (
            <span className="logo-icon">💡</span>
          )}
          <div className="logo-text">
            {item.logo}
          </div>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <section className="schedule-section">
      <div className="container">
        <div className="header">
          <h2 className="main-title">
            ผังรายการ ประจำสัปดาห์ TMYDA
          </h2>
          <p className="description">
            ติดตามรายการและเนื้อหาคุณภาพจากทีม TMYDA
          </p>
        </div>
        
        <div className="schedule-grid">
          {scheduleData && scheduleData.map((item) => (
            <ScheduleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;