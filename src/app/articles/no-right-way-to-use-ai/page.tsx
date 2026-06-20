import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../nav";

export const metadata: Metadata = {
  title: "There Is No Right Way to Use AI | Khizar Imran",
  description:
    "Everyone is using AI tools differently. After years of experimenting, I've come to think that's exactly how it should be.",
  openGraph: {
    title: "There Is No Right Way to Use AI",
    description:
      "Everyone is using AI tools differently. After years of experimenting, I've come to think that's exactly how it should be.",
    url: "https://khizarimran.com/articles/no-right-way-to-use-ai",
    siteName: "Khizar Imran",
    type: "article",
    publishedTime: "2026-06-03T00:00:00.000Z",
    authors: ["Khizar Imran"],
  },
  twitter: {
    card: "summary_large_image",
    title: "There Is No Right Way to Use AI",
    description:
      "Everyone is using AI tools differently. After years of experimenting, I've come to think that's exactly how it should be.",
    creator: "@khzrimrn",
  },
};

export default function NoRightWayToUseAI() {
  return (
    <div className="wrap">
      <Nav />

      <main>
        <Link href="/articles" className="article-back">
          ← All articles
        </Link>

        <div className="article-head">
          <h1>There is no right way to use AI</h1>
          <div className="article-dateline">
            <span className="cat-pill">AI</span>
            June 3, 2026
          </div>
        </div>

        <div className="article-body">
          <p>
            For the past couple of years i have been using LLM chat bots in various different scenarios.
            most commonly its to write code and speed up development. In the beginning tools like claude
            code weren&apos;t that common, there were some developers who loved it but alot of them felt
            like it couldn&apos;t write code the way it should be &apos;properly&apos; written and it was
            simply not good enough. Things may have changed recently.
          </p>

          <p>
            Now we see that tools like these are widely adopted and there is alot more material online
            going through tutorials and examples on how to use it. over time i have started to see that
            the way i use these tools may not be the &apos;right&apos; way or atleast i have not come
            across someone else using it the way i do. i tend to prefer setting out a project by
            handwriting a CLAUDE.md file or a instructions.md file which would tell the agent on what i
            am working, what i need it to help me with and how it should help me. this includes things
            like:
          </p>

          <blockquote>
            <p><code>&quot;use tmux for running any background tasks or applications...&quot;</code></p>
            <p><code>&quot;create a change log file which is append only with simple lines of what logic changes you did and why...&quot;</code></p>
          </blockquote>

          <p>
            all of this has lead me to think that there is no right way to use these tools, and the way
            to actually get the most out of them is to just experiment and find what works for you. these
            tools did not exist a few years ago. everyone is equally guessing; and they will continue
            to do so.
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
