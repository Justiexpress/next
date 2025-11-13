'use client';

import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="Footer" className={styles.footer}>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              {`Justiexpress ® ${year} - Una marca de Justiexpress S.A.S.`}
              <br />
              <Link href="/tyc" className={styles.link}>
                Términos y condiciones
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;
              <Link href="/privacidad" className={styles.link}>
                Aviso de Privacidad
              </Link>
            </div>
            <div className="col-sm-5">
              <a
                href="https://www.facebook.com/justiexpress"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <i
                  className="bi bi-facebook"
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://twitter.com/justiexpress"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="#fff"
                  className="bi bi-twitter-x"
                  viewBox="0 -2 16 16"
                  style={{ color: "#fff", fontSize: "35px" }}
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.linkedin.com/company/justiexpress"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <i
                  className="bi bi-linkedin"
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.instagram.com/justiexpress.legal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <i
                  className="bi bi-instagram"
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.youtube.com/channel/UCSQYCc0FrL8CrdIAySmNX0w"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <i
                  className="bi bi-youtube"
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.tiktok.com/@tucasolegal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <i
                  className="bi bi-tiktok"
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};