"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../nav";

/* ─── Article content ───────────────────────────────────── */
const articleContent: Record<string, {
  title: string;
  date: string;
  category: string;
  content: React.ReactNode;
}> = {
  "neural-nets": {
    title: "Neural Networks From Scratch",
    date: "November 2, 2024",
    category: "ML",
    content: (
      <div className="article-body">
        <p>In the world of data science, neural networks have become a go-to approach for tackling complex problems. But while pre-built libraries like TensorFlow or PyTorch make it easy to implement these models, there&apos;s something particularly rewarding — and educational — about building one from scratch. I recently took on this challenge using a weather dataset from Kaggle, leveraging only pandas and numpy.</p>

        <h2>Why build from scratch?</h2>
        <p>Constructing a neural network manually forces you to understand each moving part: weight initialization, forward propagation, activation functions, loss calculation, and backpropagation. When you implement each of these, you begin to appreciate the inner workings of these algorithms.</p>

        <h2>Setup</h2>
        <p>Using just pandas and numpy, I built a basic neural network with:</p>
        <ul>
          <li><strong>Layers</strong> — input, hidden, and output</li>
          <li><strong>Activation</strong> — ReLU, chosen for its simplicity and resistance to vanishing gradients</li>
          <li><strong>Learning rate</strong> — 0.01, which balanced learning speed with convergence</li>
          <li><strong>Iterations</strong> — 1,000 epochs</li>
        </ul>

        <h2>Key steps</h2>
        <p><strong>Initialize weights and biases.</strong> Random values are assigned to start, adjusted over time to minimize error.</p>
        <p><strong>Forward propagation.</strong> Data flows through each layer, applying weights, biases, and ReLU activation.</p>
        <p><strong>Compute loss.</strong> Using mean squared error, I calculated the difference between predicted and actual values.</p>
        <p><strong>Backpropagation.</strong> Gradients are calculated to adjust weights so the network learns the patterns in the dataset.</p>

        <ArticleImage src="/images/neural-nets-code.png" alt="Neural network code" caption="Structural code for neural network setup" />

        <h2>Results</h2>
        <p>After 1,000 iterations, the network demonstrated a reasonable approximation of the target values. Below is a snapshot of training progress — note how the model aligns with expected results over time.</p>

        <ArticleImage src="/images/neural-nets-results.png" alt="Training results" caption="Training progress showing decrease in MSE over epochs" />

        <p>Building this from scratch was both challenging and rewarding. If you want to deepen your understanding of machine learning, I highly recommend this exercise.</p>
      </div>
    ),
  },
  "hmm": {
    title: "Hidden Markov Models for Regime-Based Segmentation",
    date: "November 16, 2024",
    category: "Quant",
    content: (
      <div className="article-body">
        <p>A technical exploration of how Hidden Markov Models can reveal underlying patterns in complex time series data — and how traders can use them to identify market regimes.</p>

        <h2>State-space models</h2>
        <p>Time series data is everywhere — financial markets, weather patterns, speech signals. Hidden Markov Models (HMMs) are a statistical tool that can uncover hidden states driving the observed data. The model has three components: transition probabilities, emission probabilities, and initial probabilities.</p>

        <p>At its core, an HMM combines two stochastic processes:</p>
        <ul>
          <li><strong>The hidden process</strong> — a Markov chain representing underlying states</li>
          <li><strong>The observable process</strong> — emission distributions for each state</li>
        </ul>

        <h2>Regime segmentation in trading</h2>
        <p>Regime-based segmentation means dividing the market into distinct phases — bullish, bearish, or sideways. Identifying these regimes matters because markets behave differently under each condition. HMMs help uncover these hidden regimes even when they aren&apos;t directly observable.</p>

        <h2>Implementation</h2>

        <h3>Feature engineering</h3>
        <p>Key features for state detection: level shifts, local volatility, and distributional characteristics.</p>

        <ArticleImage src="/images/feature-extraction.png" alt="Feature extraction code" caption="Python code for feature extraction" />

        <h3>Model estimation</h3>
        <ArticleImage src="/images/model-extraction.png" alt="HMM model output" caption="HMM model output" />

        <h3>Parameter learning</h3>
        <p>Parameters are estimated using Maximum Likelihood Estimation, the Baum-Welch algorithm (a special case of EM), and forward-backward procedures for state inference.</p>

        <h2>Three market regimes</h2>
        <p><strong>State 0 — stationary.</strong> Low temporal dependence, stable variance, returns resembling a Gaussian curve.</p>
        <p><strong>State 1 — transitional.</strong> Moderate serial correlation, shifting variance, skewed returns — a phase of market adjustment.</p>
        <p><strong>State 2 — dynamic.</strong> Strong temporal dependence, heteroskedastic variance, heavy-tailed returns — high volatility and significant market shifts.</p>

        <ArticleImage src="/images/hmm.png" alt="Time series segmentation" caption="Time series segmentation using HMM state classification" />

        <h2>Conclusion</h2>
        <p>HMMs are a powerful tool for uncovering hidden structures in time series data. Beyond finance, they are valuable in economics, climate science, biology, and speech recognition.</p>
      </div>
    ),
  },
};

const articles = [
  { id: "fine-tuning", title: "Why Is Fine-Tuning Underrated?", date: "Mar 2026", category: "ML", route: "/articles/fine-tuning" },
  { id: "neural-nets", title: "Neural Networks From Scratch", date: "Nov 2024", category: "ML", external: false },
  { id: "hmm", title: "Hidden Markov Models in Trading", date: "Nov 2024", category: "Quant", external: false },
  { id: "cot", title: "Automating COT Report Data Pipeline", date: "Mar 2024", category: "Data", external: true, url: "https://medium.com/@khizarimran/automating-cot-report-data-pipeline-using-python-a1006e4fca23" },
  { id: "backtest", title: "Algo-Trading Backtest using Python", date: "Aug 2023", category: "Quant", external: true, url: "https://www.linkedin.com/pulse/algo-trading-backtest-using-python-khizar-imran/" },
];

/* ─── Sub-components ─────────────────────────────────────── */
function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure className="img-wrap">
        <Image src={src} alt={alt} width={560} height={360} onClick={() => setOpen(true)} />
        <figcaption>{caption}</figcaption>
      </figure>
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)}>
          <Image src={src} alt={alt} width={1200} height={800} style={{ objectFit: "contain" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Articles() {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const current = activeArticle ? articleContent[activeArticle] : null;

  return (
    <div className="wrap">
      <Nav />

      {current ? (
        <main>
          <a className="article-back" onClick={() => setActiveArticle(null)}>← All articles</a>
          <div className="article-head">
            <h1>{current.title}</h1>
            <div className="article-dateline">
              <span className="cat-pill">{current.category}</span>
              {current.date}
            </div>
          </div>
          {current.content}
          <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
            <a className="article-back" onClick={() => setActiveArticle(null)}>← All articles</a>
          </div>
        </main>
      ) : (
        <main>
          <section className="section">
            <p className="section-label">All Writing</p>
            <ul className="article-list">
              {articles.map((a) =>
                "route" in a ? (
                  <li key={a.id}>
                    <Link
                      href={a.route as string}
                      className="article-row"
                      style={{ textDecoration: "none", display: "flex" }}
                    >
                      <div className="article-row-left">
                        <div className="article-row-title">{a.title}</div>
                        <div className="article-row-meta">{a.category}</div>
                      </div>
                      <span className="article-row-right">{a.date}</span>
                    </Link>
                  </li>
                ) : a.external ? (
                  <li key={a.id}>
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-row"
                      style={{ textDecoration: "none", display: "flex" }}
                    >
                      <div className="article-row-left">
                        <div className="article-row-title">
                          {a.title}<span className="ext-arrow">↗</span>
                        </div>
                        <div className="article-row-meta">{a.category}</div>
                      </div>
                      <span className="article-row-right">{a.date}</span>
                    </a>
                  </li>
                ) : (
                  <li key={a.id}>
                    <div className="article-row" onClick={() => setActiveArticle(a.id)}>
                      <div className="article-row-left">
                        <div className="article-row-title">{a.title}</div>
                        <div className="article-row-meta">{a.category}</div>
                      </div>
                      <span className="article-row-right">{a.date}</span>
                    </div>
                  </li>
                )
              )}
            </ul>
          </section>
        </main>
      )}

      <footer className="site-footer">
        <p>© 2026 Khizar Imran</p>
      </footer>
    </div>
  );
}
