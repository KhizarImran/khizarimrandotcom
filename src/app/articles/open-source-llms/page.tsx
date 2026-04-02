import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../nav";

export const metadata: Metadata = {
  title: "Do Open Source LLMs Make Us A Frontier Lab? | Khizar Imran",
  description:
    "I fine-tuned a 0.8 billion parameter model on 8GB of VRAM. The base model scored 27.4% accuracy. After three epochs it hit 77.9%. That gap is what this is about.",
  openGraph: {
    title: "Do Open Source LLMs Make Us A Frontier Lab?",
    description:
      "I fine-tuned a 0.8 billion parameter model on 8GB of VRAM. The base model scored 27.4% accuracy. After three epochs it hit 77.9%. That gap is what this is about.",
    url: "https://khizarimran.com/articles/open-source-llms",
    siteName: "Khizar Imran",
    type: "article",
    publishedTime: "2026-04-02T00:00:00.000Z",
    authors: ["Khizar Imran"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Open Source LLMs Make Us A Frontier Lab?",
    description:
      "I fine-tuned a 0.8 billion parameter model on 8GB of VRAM. The base model scored 27.4% accuracy. After three epochs it hit 77.9%. That gap is what this is about.",
    creator: "@khzrimrn",
  },
};

export default function OpenSourceLLMs() {
  return (
    <div className="wrap">
      <Nav />

      <main>
        <Link href="/articles" className="article-back">
          ← All articles
        </Link>

        <div className="article-head">
          <h1>Do Open Source LLMs Make Us A Frontier Lab?</h1>
          <div className="article-dateline">
            <span className="cat-pill">ML</span>
            April 2, 2026
          </div>
        </div>

        <div className="article-body">
          <p>
            I fine-tuned a 0.8 billion parameter model on financial sentiment data. The base model
            scored 27.4% accuracy before training. After three epochs it hit 77.9%. That gap is
            what this is about.
          </p>

          <p>
            Language models are trained on enormous amounts of internet text, which makes them good
            at a lot of things. Financial sentiment isn&apos;t one of them. Take this sentence:
            &quot;The company&apos;s revenues declined less than expected.&quot; A model with no
            domain exposure reads &quot;revenues declined&quot; and calls it negative. Anyone who
            follows markets knows that beating expectations is often positive news - the word
            &quot;less&quot; before &quot;expected&quot; flips the whole thing. That&apos;s the kind
            of context a base model doesn&apos;t have.
          </p>

          <p>
            I used Qwen3.5-0.8B deliberately - a small model. The question I wanted to answer was
            how much domain knowledge you can inject into a tiny model through targeted training,
            rather than assuming you need something larger. Fine-tuning it on 8GB of VRAM meant
            using QLoRA: the base model gets quantized to 4-bit, and only small adapter matrices are
            trained on top of the frozen weights. The base model doesn&apos;t change. The adapters
            learn what the base model lacks. At inference you load both and that&apos;s your
            fine-tuned model.
          </p>

          <p>
            Training data was FinGPT&apos;s financial sentiment dataset - tweets, headlines, and
            analyst commentary labelled as positive, negative, or neutral. In-domain data is the
            thing here. It&apos;s not general English, it&apos;s financial news, the same kind of
            text the model would see in production.
          </p>

          <p>
            Before any training I ran the base model on 2,388 evaluation samples. Out of 1,566
            neutral tweets, it correctly identified almost none of them. Neutral recall was
            essentially zero. The model defaulted to positive for most inputs, occasionally catching
            a negative. This isn&apos;t a problem with the model architecture. The base model just
            has no concept of what financial neutrality looks like - it has never been shown it - so
            it never predicts it.
          </p>

          <p>
            Training ran for three epochs, 14,397 steps. Loss went from 0.57 early on down to 0.045
            by the end, decaying cleanly with the cosine schedule. Token accuracy reached 99.3% on
            the training set.
          </p>

          <p>
            The fine-tuned model landed at 77.9% accuracy and a macro F1 of 0.76. Recall on
            positive and negative classes was 92% and 94%. Neutral precision was 0.97, meaning when
            it calls something neutral it&apos;s almost always right. The weak spot is neutral
            recall at 70% - 468 neutral tweets got called positive or negative instead. The boundary
            between neutral and mildly positive or negative is genuinely fuzzy, and I suspect more
            training examples at that edge would move the number, though I haven&apos;t tested it.
          </p>

          <p>
            27.4% to 77.9% from three epochs of domain-specific training. The base model already
            knew English, understood financial vocabulary, and could format a response. What it
            couldn&apos;t do was draw the line between positive, negative, and neutral in a
            financial context. That turns out to be a learnable thing, and it doesn&apos;t take much
            data to learn it.
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
