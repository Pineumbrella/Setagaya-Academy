import styles from "./MapSection.module.css";

export function MapSection() {
  return (
    <section id="access" className={styles.mapSection} aria-labelledby="map-title">
      <p className={styles.kicker}>Access</p>
      <h2 id="map-title">教室の場所</h2>
      <div className={styles.map}>
        <iframe
          title="世田谷アカデミー周辺地図"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0415540816475!2d139.6522410746176!3d35.656062372595336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3740d9d2589%3A0x99e32bdd223c01d5!2z44CSMTU0LTAwMjIg5p2x5Lqs6YO95LiW55Sw6LC35Yy65qKF5LiY77yR5LiB55uu77yS77yW4oiS77yX!5e1!3m2!1sja!2sjp!4v1780627343976!5m2!1sja!2sjp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <address>
        東京都世田谷区梅丘1丁目26-7
        <br />
        中島ビル201号室
        <br />
        小田急線 梅ヶ丘駅から徒歩2分
      </address>
    </section>
  );
}
