import Link from "next/link";
import { Icons } from "@aristobyte-ui/utils";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__panel">
        <span className="not-found__icon">
          <Icons.AristoBadges size={70} />
        </span>
        <h1>
          <span>
            <Icons.Warning size={32} />
          </span>
          {"404"}
        </h1>
        <p>{"This page doesn't exist. The URL may be wrong or moved."}</p>
        <Link className="not-found__link" href="/en-gb">
          {"Back"}
          <Icons.ArrowRight size={20} />
        </Link>
      </div>
    </main>
  );
}
