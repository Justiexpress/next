import React from "react";
import CountUp from "react-countup";
import styles from "./Contador.module.scss";

interface ContadorProps {
  title: string;
  end: number;
  duration: number;
  prefix: string;
  icon: string;
  cardColor: React.CSSProperties;
  style: React.CSSProperties;
  iconStyle: React.CSSProperties;
}

export const Contador: React.FC<ContadorProps> = ({
  title,
  end,
  duration,
  prefix,
  style,
  icon,
  iconStyle,
  cardColor,
}) => {
  return (
    <div id="contador" className={`${styles.contador} col text-center`}>
      <div className="container">
        <div className={`${styles.card} card border-0`} style={cardColor}>
          <div className="card-body">
            <div className="col-sm-12">
              <i className={`${icon} ${styles.icon}`} style={iconStyle}></i>
              <div className="container">
                <div className="row no-gutters">
                  <h4 className={`${styles["card-title"]} card-title text-center`} style={style}>
                    <CountUp end={end} duration={duration} prefix={prefix} />{" "}
                    {title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};