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
  const handleLogoClick = () => {
    if (item.youtubeUrl) {
      window.open(item.youtubeUrl, '_blank');
    }
  };

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
          <span className="watch-text">รับชมได้ทางช่องทาง</span>
        
        </div>

        {/* Logo - คลิกได้ */}
        <div 
          className="logo-section clickable" 
          onClick={handleLogoClick}
          title="ดูรายการใน YouTube"
        >
          {/* ส่วนสำหรับรูปโลโก้ */}
          <div className="logo-image">
            {item.logoImage ? (
              <img 
                src={item.logoImage} 
                alt={item.logo}
                onError={(e) => {
                  // ถ้าโหลดรูปไม่ได้จะแสดง fallback icon
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
            ) : (
              // Fallback icons ถ้าไม่มีรูป
              <>
                {item.logo === "THE Nasihat" && (
                  <span className="logo-icon">📖</span>
                )}
                {item.logo === "THE issue" && (
                  <span className="logo-icon">💡</span>
                )}
                {!item.logo.includes("THE") && (
                  <span className="logo-icon">🎬</span>
                )}
              </>
            )}
            {/* Hidden fallback icon */}
            <span className="logo-icon fallback" style={{display: 'none'}}>
              {item.logo === "THE Nasihat" && "📖"}
              {item.logo === "THE issue" && "💡"}
              {!item.logo.includes("THE") && "🎬"}
            </span>
          </div>
          
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