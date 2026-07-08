import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../nav";

export const metadata: Metadata = {
  title: "Im Learning Rust (btw) | Khizar Imran",
  description:
    "Why Rust feels like the right low-level language to learn now, and where it fits in modern software systems.",
  openGraph: {
    title: "Im Learning Rust (btw)",
    description:
      "Why Rust feels like the right low-level language to learn now, and where it fits in modern software systems.",
    url: "https://khizarimran.com/articles/im-learning-rust-btw",
    siteName: "Khizar Imran",
    type: "article",
    publishedTime: "2026-07-08T00:00:00.000Z",
    authors: ["Khizar Imran"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Im Learning Rust (btw)",
    description:
      "Why Rust feels like the right low-level language to learn now, and where it fits in modern software systems.",
    creator: "@khzrimrn",
  },
};

export default function ImLearningRustBtw() {
  return (
    <div className="wrap">
      <Nav />

      <main>
        <Link href="/articles" className="article-back">
          ← All articles
        </Link>

        <div className="article-head">
          <h1>Im Learning Rust (btw)</h1>
          <div className="article-dateline">
            <span className="cat-pill">Programming</span>
            July 8, 2026
          </div>
        </div>

        <div className="article-body">
          <p>
            I have always been interested in Rust. This has been due to the fact everyone talks
            about how good Rust is, how it is a memory safe language and a difficult language with
            a learning curve. All of this had intrigued me into learning a lot more about the
            language and where it is used.
          </p>

          <p>
            Recently I am seeing Rust being implemented everywhere, from parts of the Linux kernel
            to libraries like Polars, which acts as a replacement for pandas but is a lot faster in
            its processing, and even TUI based applications, which I absolutely love. A consistent
            piece of advice I have always gotten when learning programming and getting better at it
            has been that learning a low level language after starting off with Python is very
            important. Low level languages allow you to understand the level of abstraction that has
            happened on top, which allows for easy to write and read languages like Python.
          </p>

          <p>
            In the modern era of programming the obvious choice for me seemed to be Rust. A lot of
            patterns we are starting to see in the dev world are that in a lot of new applications
            the core of the logic, especially if it is computation heavy, is being written in Rust
            with a layer of another language on top. This pattern started emerging for me when the
            TypeScript compiler shifted to Go. We are also seeing OpenAI taking bets on Rust, which
            drives the Codex CLI tool. In the cloud platform space some of the services from AWS
            have been written in Rust too.
          </p>

          <p>
            This pattern of implementation will start to get more and more common, where we see Rust
            doing the heavy lifting of an application which has a TypeScript or Python layer on top.
          </p>

          <p>
            A library I am currently working on, backtestingfx, is also following this pattern. Rust
            core with Python on top allows you to use the library as a Python import. The
            backtesting logic and soon to implement optimisation logic will all be running in the
            Rust layer, allowing it to be a lot faster than other backtesting libraries I have come
            across in the quant space.
          </p>

          <p>
            Rust seems to be the future. Any new projects which would require C++ or C will most
            probably be written in Rust now, and if there are currently implemented projects in
            other languages, most may be experimented with using a Rust rewrite aided by AI. All of
            this looks very exciting.
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
