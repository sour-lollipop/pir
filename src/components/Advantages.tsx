import React, { useState } from "react";
import { PiStarFour } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { PiCircleBold } from "react-icons/pi";
import { PiCircleFill } from "react-icons/pi";
import { PiSealBold } from "react-icons/pi";
import { PiSealFill } from "react-icons/pi";
import { PiSquareBold } from "react-icons/pi";
import { PiSquareFill } from "react-icons/pi";

const Advantages: React.FC = () => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);
  const [fourthOpen, setFourthOpen] = useState(false);

  return (
    <section id="advantages" className="advantages">
      <h2>Наши преимущества</h2>
      <div className="boxes">
        {firstOpen ? (
          <div className="advantag black" onClick={() => setFirstOpen(false)}>
            <div className="image">
              <PiStarFourFill
                className="icon star"
                size={"2em"}
                color="#B78BF2"
              />
            </div>
            <p>Более 8 лет успешной работы</p>
          </div>
        ) : (
          <div className="advantag" onClick={() => setFirstOpen(true)}>
            <div className="image">
              <PiStarFour className="icon star" size={"2em"} />
            </div>
            <p>Опыт и профессионализм</p>
          </div>
        )}

        {secondOpen ? (
          <div className="advantag black" onClick={() => setSecondOpen(false)}>
            <div className="image">
              <PiSealFill
                className="icon seal"
                size={"2em"}
                color="#B78BF2"
              />
            </div>
            <p>Индивидуальный подход к каждому клиенту</p>
          </div>
        ) : (
          <div className="advantag" onClick={() => setSecondOpen(true)}>
            <div className="image">
              <PiSealBold className="icon seal" size={"2em"} />
            </div>
            <p>Индивидуальный подход</p>
          </div>
        )}

        {thirdOpen ? (
          <div className="advantag black" onClick={() => setThirdOpen(false)}>
            <div className="image">
              <PiSquareFill
                className="icon square"
                size={"2em"}
                color="#B78BF2"
              />
            </div>
            <p>Высокое качество услуг и продуктов</p>
          </div>
        ) : (
          <div className="advantag" onClick={() => setThirdOpen(true)}>
            <div className="image">
              <PiSquareBold className="icon square" size={"2em"} />
            </div>
            <p>Высокое качество</p>
          </div>
        )}

        {fourthOpen ? (
          <div className="advantag black" onClick={() => setFourthOpen(false)}>
            <div className="image">
              <PiCircleFill
                className="icon circle"
                size={"2em"}
                color="#B78BF2"
              />
            </div>
            <p>Постоянная поддержка на всех этапах</p>
          </div>
        ) : (
          <div className="advantag" onClick={() => setFourthOpen(true)}>
            <div className="image">
              <PiCircleBold className="icon circle" size={"2em"} />
            </div>
            <p>Постоянная поддержка</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Advantages;
