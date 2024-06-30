import React from 'react';
import { PiPhone } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className="footer"  id="contact">
      <div className='contacts'>
      <div className='p'> <PiPhone size={"20px"}/><a href='https://wa.me/87084189639'>+7 (708) 418-96-39</a></div>
      <div className='p'><IoMailOutline size={"20px"}/> <a href='mailto:pirkz@mail.ru'>pirkz@mail.ru</a></div>
      </div>
      <p className='grey'>© 2024 PIR-Kazakhstan. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
