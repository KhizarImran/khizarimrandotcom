import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../nav";

const description =
  "Why I switched from Windows to Omarchy (Arch Linux with Hyprland) — the tiling workflow that makes computing fun again, the Omarchy 4.0 (Quattro) release, and building an AI-made FX Desk plugin with a Tokyo Night theme.";

export const metadata: Metadata = {
  title: "Omarchy is beautiful | Khizar Imran",
  description,
  openGraph: {
    title: "Omarchy is beautiful",
    description,
    url: "https://khizarimran.com/articles/omarchy-is-beautiful",
    siteName: "Khizar Imran",
    type: "article",
    publishedTime: "2026-09-09T00:00:00.000Z",
    authors: ["Khizar Imran"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omarchy is beautiful",
    description,
    creator: "@khzrimrn",
  },
};

export default function OmarchyIsBeautiful() {
  return (
    <div className="wrap">
      <Nav />

      <main>
        <Link href="/articles" className="article-back">
          ← All articles
        </Link>

        <div className="article-head">
          <h1>Omarchy is beautiful</h1>
          <div className="article-dateline">
            <span className="cat-pill">Programming</span>
            September 9, 2026
          </div>
        </div>

        <div className="article-body">
          <p>
            I have been using Omarchy for some time now, I shifted onto Linux from Windows back in
            October of 2025. I was facing some performance problems with the Windows system and as
            my day to day being a programmer it just didn&apos;t suit me that well. For normal
            browsing it does the job but nothing more. My main attraction to switching to Omarchy
            was Hyprland; specifically the way it handles the tiles. The flow is beautiful and cool
            it makes using technology fun again. No longer are the times where you had to lift your
            hand towards the mouse and move it to the top of a window, click and hold and then move
            it to the corner of the screen until half of the window you can&apos;t see anymore, just
            to then get the Windows 11 graphic for snapping it to half the screen. This is so quick
            and smooth on Arch Linux.
          </p>

          <figure className="img-wrap">
            <a href="/images/omarchy-hyprland-tiling-windows.png" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/omarchy-hyprland-tiling-windows.png"
                alt="Omarchy desktop running the Hyprland tiling window manager on Arch Linux with Neovim editing Rust code and an AI coding agent terminal side by side"
                width={2521}
                height={1360}
              />
            </a>
            <figcaption>Hyprland tiling windows on Omarchy</figcaption>
          </figure>

          <p>
            One thing I did not expect was how quickly the Omarchy team would improve the whole OS.
            Omarchy 4.0 (Quattro) has been released and it has fixed pretty much everything that
            might have held someone back from switching to Omarchy full time. Now there&apos;s a
            very easy to use Wi-Fi plugin and monitor configuration panel on the top right of the
            screen. This used to be a pain before as you had to edit a config file according to the
            system you are running i.e. ultrawide monitor etc. Now I can have my laptop with the lid
            shut in clamshell mode running Omarchy on my monitor.
          </p>

          <p>It truly is the year of Linux.</p>

          <p>
            Another very cool feature that I am enjoying is the whole Omarchy Plugin marketplace (
            <a href="https://plugins.omarchy.org/" target="_blank" rel="noopener noreferrer">
              plugins.omarchy.org
            </a>
            ). This includes all the user made plugins for Omarchy to which I have also contributed
            to by making an FX Desk plugin. Instead of flicking between different tabs on my browser
            to look at the economic calendar I have made it a built-in plugin for Omarchy. Now at a
            glance I know what&apos;s going on in the markets and when I can expect volatility for
            my algos.
          </p>

          <figure className="img-wrap">
            <a href="/images/omarchy-fx-desk-plugin-tokyo-night.png" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/omarchy-fx-desk-plugin-tokyo-night.png"
                alt="Custom FX Desk plugin for Omarchy showing forex trading sessions for Sydney, Tokyo, London and New York on a world map with an economic calendar, styled with the Tokyo Night theme"
                width={898}
                height={503}
              />
            </a>
            <figcaption>The FX Desk plugin in the Tokyo Night theme</figcaption>
          </figure>

          <p>Also to add it looks amazing with the Tokyo Night theme.</p>

          <p>
            All of this is AI native and AI made. I have not written a single line of QML Quickshell
            code that allows this to work. It was all instructed via a coding agent. This is where
            the future is going. Everything seems to be customisable and solvable through these
            smart clunkers. The only limit is your imagination now. Lines of code and in association
            the time needed to write those lines of code are out of the equation in my opinion. I am
            truly excited to see where this goes.
          </p>
        </div>

        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
          <Link href="/articles" className="article-back">
            ← All articles
          </Link>
        </div>
      </main>

      <footer className="site-footer">
        <p>© 2026 Khizar Imran</p>
      </footer>
    </div>
  );
}
