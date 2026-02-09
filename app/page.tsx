import BadgesBuilder from "./components/BadgesBuilder";
import QuickLinks from "./components/QuickLinks";
import SiteHeader from "./components/SiteHeader";
import styles from "./page.module.scss";

type CdnIconProps = {
  name: string;
  size?: number;
  className?: string;
  title?: string;
};

const BASE_URL = "https://api.iconify.design";

const CdnIcon = ({ name, size = 20, className, title }: CdnIconProps) => {
  const src = `${BASE_URL}/${name}.svg`;
  return (
    <img
      className={className}
      src={src}
      width={size}
      height={size}
      alt={title ?? name}
      loading="lazy"
      decoding="async"
    />
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SiteHeader
          className={styles.siteHeader}
          logoClassName={styles.siteLogo}
          brandClassName={styles.brand}
          taglineClassName={styles.tagline}
        />

        {/* <h2>Maintained by the Aristobyte UI team. Built for README badges.</h2> */}

        <section className={styles["links"]}>
          <a
            className={styles["link"]}
            href="https://github.com/aristobyte/www.aristobyte.com/blob/master/README.md"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="mdi:terminal-line" size={16} />
            <span>See in action</span>
          </a>
          <a
            className={styles["link"]}
            href="https://github.com/aristobyte/aristo-badges"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="mdi:github" size={16} />
            <span>Source code</span>
          </a>
          <a
            className={styles["link"]}
            href="http://instagram.com/aristo_byte"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="simple-icons:instagram" size={16} />
            <span>Instagram</span>
          </a>
          <a
            className={styles["link"]}
            href="https://www.linkedin.com/company/aristobyte"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="simple-icons:linkedin" size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            className={styles["link"]}
            href="https://www.facebook.com/aristobyte/"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="simple-icons:facebook" size={16} />
            <span>Facebook</span>
          </a>
        </section>

        <QuickLinks />
        <BadgesBuilder />

        <section className={styles.footer}>
          <p>
            Add <code>GITHUB_TOKEN</code> to your Netlify env for higher rate
            limits. All endpoints are CDN cached with stale-while-revalidate.
          </p>
        </section>
      </main>
    </div>
  );
}
