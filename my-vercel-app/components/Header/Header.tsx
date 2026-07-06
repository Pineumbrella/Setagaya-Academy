import Image from "next/image";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="世田谷アカデミー トップへ">
        <Image
          src="https://storage.googleapis.com/studio-design-asset-files/projects/V5a792MxOR/s-635x681_v-fs_webp_5669a11c-24b4-4a73-8e9c-b5cb0f48e929.jpg"
          alt=""
          width={42}
          height={42}
          priority
        />
        <span>世田谷アカデミー</span>
      </a>
      <a className={styles.contact} href="#contact">
        無料相談
      </a>
    </header>
  );
}
