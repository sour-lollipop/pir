import React from 'react';
import { PiPhone } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className='contacts'>
      <div className='p'> <PiPhone size={"20px"}/>+7 (708) 418-96-39</div>
      <div className='p'><IoMailOutline size={"20px"}/> pirkz@mail.ru</div>
      </div>
      <p className='grey'>© 2024 PIR-Kazakhstan. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
