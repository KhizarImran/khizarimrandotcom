import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../nav";

export const metadata: Metadata = {
  title: "Why Is Fine-Tuning Underrated? | Khizar Imran",
  description:
    "I built a computer vision system to detect electrical components in field photographs. Same domain, same objects — two completely different bets on how to solve it. What I found was almost the opposite of what I expected.",
  openGraph: {
    title: "Why Is Fine-Tuning Underrated?",
    description:
      "I built a computer vision system to detect electrical components in field photographs. Same domain, same objects — two completely different bets on how to solve it.",
    url: "https://khizarimran.com/articles/fine-tuning",
    siteName: "Khizar Imran",
    type: "article",
    publishedTime: "2026-03-28T00:00:00.000Z",
    authors: ["Khizar Imran"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Is Fine-Tuning Underrated?",
    description:
      "I built a computer vision system to detect electrical components in field photographs. Same domain, same objects — two completely different bets on how to solve it.",
    creator: "@khzrimrn",
  },
};

export default function FineTuning() {
  return (
    <div className="wrap">
      <Nav />

      <main>
        <Link href="/articles" className="article-back">
          ← All articles
        </Link>

        <div className="article-head">
          <h1>Why Is Fine-Tuning Underrated?</h1>
          <div className="article-dateline">
            <span className="cat-pill">ML</span>
            March 28, 2026
          </div>
        </div>

        <div className="article-body">
          <p>
            I didn&apos;t set out to compare fine-tuning and zero-shot. It just kind of happened.
          </p>

          <p>
            I was building a computer vision system to detect electrical components in field photographs
            — meters, fuse boxes, wiring — the kind of images engineers take on-site at UK properties.
            Early on I wanted to quickly validate whether the problem was even solvable with a model,
            so I grabbed 5 images, labelled them by hand, and trained a YOLOv8 model. Later, when the
            scope grew and I needed to process hundreds of images across multiple object classes without
            spending weeks annotating, I spun up a SAM3 server and used text prompts instead.
          </p>

          <p>Same domain. Roughly the same objects. Two completely different bets on how to solve it.</p>

          <p>
            SAM3 is Meta&apos;s Segment Anything Model — you tell it what to look for in plain English
            and it finds it. No training data, no labels. I ran three prompts across 300 images:{" "}
            <code>&quot;electric meters&quot;</code>, <code>&quot;fuse&quot;</code>, and{" "}
            <code>&quot;wires&quot;</code>.
          </p>

          <p>Wires: found in 71.3% of images. Meters: 57.3%. Fuses: 6.7%.</p>

          <p>
            The wire and meter numbers felt reasonable. Wires are visually prominent, and &quot;electric
            meters&quot; is a specific enough phrase that SAM3 probably had plenty of reference during
            pretraining. But 6.7% on fuses genuinely surprised me.
          </p>

          <p>
            The problem is that &quot;fuse&quot; means different things. A ceramic fuse, a fuse carrier,
            a cut-out — they all look different, and SAM3 has no idea which one I&apos;m after.
            It&apos;s guessing based on whatever &quot;fuse&quot; looked like in its training data,
            which is not always UK domestic electrical installations. You&apos;re at the mercy of what
            the model thinks your word means.
          </p>

          <p>Still — three object classes, no annotation, a working system in a couple of days.</p>

          <p>
            So I tried something. I fine-tuned SAM3 on a small set of fuse cutout images — not hundreds,
            just enough to show the model what I actually meant by &quot;fuse&quot; in this context.
            The detection rate jumped significantly. Same model, same architecture, just a handful of
            domain-specific examples and it suddenly understood what it was looking for.
          </p>

          <p>
            That&apos;s the part that stuck with me — it didn&apos;t need much. It needed context. The
            base model already knew how to segment objects, it just had no idea that a UK fuse cutout
            was the thing I cared about. A few labelled examples closed that gap almost immediately.
          </p>

          <p>
            Put that next to the earlier SAM zero-shot 6.7% fuse detection rate and it&apos;s a stark
            difference. A model trained on 5–10 images found more fuse boxes than a 0.9B parameter
            zero-shot model prompted with the word &quot;fuse&quot;. The precision issues go away with
            more data. Getting recall from 6.7% to something useful is a harder problem.
          </p>

          <p>
            There&apos;s a tendency right now to treat large foundation models as a ceiling — like the
            question is just &quot;which one do I call?&quot; and fine-tuning is some legacy approach
            for when you don&apos;t have access to something better. But what I found was almost the
            opposite.
          </p>

          <p>
            These billion-parameter models are sitting on an enormous amount of general visual
            understanding. What they don&apos;t have is your domain.
          </p>

          <p>
            Although these experiments take time to set up, the results feel almost too easy once they
            work. It doesn&apos;t feel like you did much. But that&apos;s the point.
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
