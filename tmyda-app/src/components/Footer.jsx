import React from 'react';
import { FaHeart, FaHandHoldingHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaHandHoldingHeart className="text-3xl text-red-400" />
            <h3 className="text-3xl font-bold">
              สนับสนุนกิจกรรม
            </h3>
          </div>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            ร่วมสนับสนุนกิจกรรมเพื่อพัฒนาเยาวชนและสังคมไทย
          </p>
        </div>

        <div className="bg-gray-700 rounded-xl p-8 max-w-2xl mx-auto mb-8">
          <h4 className="text-xl font-bold mb-4 text-center">
            บัญชีสำหรับรับบริจาค
          </h4>
          <div className="text-center">
            <div className="donation-account">
              <p className="font-semibold text-yellow-400">ธนาคารกรุงไทย</p>
              <p className="account-number">905-3-29013-1</p>
              <p className="text-sm text-gray-300">ชื่อบัญ : สมาคมพัฒนาเยาวชนมุสลิมไทย</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center" style={{ fontSize: '0.75rem' }}>
            * โปรดแจ้งการโอนเงินผ่านช่องทางโซเชียลมีเดียของเรา *
          </p>
        </div>

        <div className="border-top">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © 2024 TMYDA. สงวนลิขสิทธิ์.
            </p>
            <div className="flex items-center justify-center gap-1 text-red-400">
              <span className="text-gray-400">Made with</span>
              <FaHeart className="text-sm" />
              <span className="text-gray-400">for Thai Muslim Youth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;