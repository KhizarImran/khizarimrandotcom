"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Article content data
const articleContent: Record<string, {
  title: string;
  date: string;
  category: string;
  content: React.ReactNode;
}> = {
  "neural-nets": {
    title: "Neural Nets from Scratch",
    date: "Nov 2, 2024",
    category: "ML",
    content: (
      <>
        <p>In the world of data science, neural networks have become a go-to approach for tackling complex problems. But while pre-built libraries like TensorFlow or PyTorch make it easy to implement these models, there&apos;s something particularly rewarding — and educational — about building a neural network from scratch. I recently took on this challenge, using a weather dataset from Kaggle to create a neural network with ReLU activation, leveraging only pandas and numpy.</p>

        <h2>Why Build from Scratch?</h2>
        <p>Constructing a neural network manually allows you to understand each moving part: weight initialization, forward propagation, activation functions, loss calculation, and backpropagation. When you implement each of these, you begin to appreciate the inner workings of these algorithms and how they handle data patterns.</p>

        <h2>Getting Started</h2>
        <p>Using just pandas and numpy, I built a basic neural network with:</p>
        <ul>
          <li><strong>Layers</strong>: The network has an input layer, some hidden layers, and an output layer.</li>
          <li><strong>Activation Function</strong>: ReLU (Rectified Linear Unit), chosen for its simplicity and efficiency in reducing vanishing gradient problems.</li>
          <li><strong>Learning Rate (α)</strong>: Set to 0.01, which I found balanced learning speed with convergence.</li>
          <li><strong>Iterations</strong>: 1,000 epochs to iteratively minimize the error and optimize the weights.</li>
        </ul>

        <h2>Key Steps</h2>
        <p>1. <strong>Initialize Weights and Biases</strong>: Random values are assigned to start, which are adjusted over time to minimize error.</p>
        <p>2. <strong>Forward Propagation</strong>: Data flows through each layer, applying weights and biases, and using ReLU for activation.</p>
        <p>3. <strong>Compute Loss</strong>: Using a mean squared error function, I calculated the difference between predicted and actual values.</p>
        <p>4. <strong>Backpropagation</strong>: This phase calculates gradients to adjust weights, ensuring the network learns the patterns in the dataset.</p>

        <ArticleImage src="/images/neural-nets-code.png" alt="Neural Network Code Structure" caption="Structural code for neural network setup" />

        <h2>Results</h2>
        <p>After 1,000 iterations, the network demonstrated a reasonable approximation of the target values in the dataset. Below is a snapshot of the progress — note how the model begins to align with the expected results over time.</p>

        <ArticleImage src="/images/neural-nets-results.png" alt="Neural Network Results" caption="Training progress showing decrease in MSE over epochs" />

        <p>Building this from scratch was both challenging and rewarding, and it provided valuable insights into how neural networks learn and adapt. If you&apos;re looking to deepen your understanding of machine learning, I highly recommend this exercise.</p>
      </>
    ),
  },
  "hmm": {
    title: "Leveraging Hidden Markov Models for Regime-Based Segmentation in Time-Series",
    date: "Nov 16, 2024",
    category: "QUANT",
    content: (
      <>
        <p>A technical exploration of how Hidden Markov Models can reveal underlying patterns in complex time series data</p>

        <h2>The Power of State-Space Models</h2>
        <p>Time series data is everywhere — financial markets, weather patterns, and speech signals. But analyzing it isn&apos;t always straightforward, especially when hidden factors drive the observed data. Hidden Markov Models (HMMs) are a statistical tool that can uncover these hidden states, making them invaluable for tasks like regime detection in financial markets. In this article, we&apos;ll explore what HMMs are, how they work, and how traders can use them to identify market regimes and improve their strategies.</p>

        <h2>Understanding Hidden Markov Models</h2>
        <p>HMMs are models used to describe systems that transition between hidden states over time. Each hidden state produces observable outputs according to specific probabilities. The model consists of three main parts: transition probabilities (how likely it is to move between states), emission probabilities (how likely each state is to produce specific observations), and initial probabilities (the likelihood of starting in a particular state). HMMs are widely used in fields like speech recognition, bioinformatics, and financial market analysis because they can model complex, sequential patterns effectively.</p>

        <p>At its core, an HMM is a state-space model that combines two stochastic processes:</p>
        <ul>
          <li><strong>The Hidden Process:</strong> A Markov chain representing the underlying states</li>
          <li><strong>The Observable Process:</strong> The emission distributions for each state</li>
        </ul>
        <p>The model&apos;s power comes from its ability to capture both the temporal dependencies through the Markov property and state-specific behavior through emission distributions.</p>

        <h2>Regime-Based Segmentation in Trading</h2>
        <p>In trading, regime-based segmentation means dividing the market into distinct phases or conditions, such as bullish, bearish, or sideways trends. Identifying these regimes is crucial because markets behave differently under each condition. For example, a strategy that works in a bullish market might fail in a bearish one. HMMs help traders uncover these hidden regimes, even when they aren&apos;t directly observable.</p>

        <h2>Implementation and Estimation</h2>
        <p>The implementation of HMMs involves several key steps:</p>

        <h3>Feature Engineering</h3>
        <p>Key features for state detection:</p>
        <ul>
          <li>Level shifts</li>
          <li>Local volatility</li>
          <li>Distributional characteristics</li>
        </ul>

        <ArticleImage src="/images/feature-extraction.png" alt="HMM Implementation Code" caption="Sample Python code for implementing HMM" />

        <h3>Model Estimation</h3>
        <ArticleImage src="/images/model-extraction.png" alt="HMM Model" caption="HMM model" />

        <h3>Parameter Learning</h3>
        <p>The model parameters are typically estimated using:</p>
        <ul>
          <li>Maximum Likelihood Estimation</li>
          <li>The Baum-Welch algorithm (a special case of EM)</li>
          <li>Forward-backward procedures for state inference</li>
        </ul>

        <h2>State Identification</h2>
        <p>The analysis of the time series revealed three distinct market regimes. State 0, the stationary regime, is characterized by low temporal dependence, a stable variance structure, and a returns distribution resembling a Gaussian curve. State 1, the transitional regime, shows moderate serial correlation, shifting variance patterns, and a skewed returns distribution, indicating a phase of market adjustment. Finally, State 2, the dynamic regime, is marked by strong temporal dependence, heteroskedastic (changing) variance, and a heavy-tailed returns distribution, often reflecting periods of high volatility and significant market shifts.</p>

        <ArticleImage src="/images/hmm.png" alt="Time series segmentation using HMM state classification" caption="Figure 1: Time series segmentation using HMM state classification" />

        <p>Validation ensures the Hidden Markov Model (HMM) is reliable and effective. Techniques like AIC, BIC, and likelihood ratio tests help determine the optimal number of states, while cross-validation ensures the model generalizes to new data. Residual analysis checks for unmodeled patterns, and state stability testing ensures consistent regime assignments. Goodness-of-fit tests and predictive performance evaluations confirm the model&apos;s accuracy and practicality for tasks like market regime detection.</p>

        <h2>Conclusion</h2>
        <p>HMMs are a powerful tool for uncovering hidden structures in time series data, making them highly useful for tasks like market regime detection. Beyond finance, these models are equally valuable in fields like economics, where they identify growth or recession periods, and in climate science, where they help analyze weather patterns and climate shifts. In biology, they assist in decoding genetic sequences, while in speech recognition, they enable accurate modeling of spoken language. By applying HMMs, traders and professionals across disciplines can better understand complex systems and make informed decisions. If you&apos;re curious, explore Python libraries and try applying HMMs to your data to uncover insights.</p>
      </>
    ),
  },
};

// Data
const skills = [
  { name: "React/React Native", level: 95, trend: "up" },
  { name: "TypeScript", level: 94, trend: "up" },
  { name: "Python", level: 92, trend: "up" },
  { name: "FastAPI/Flask", level: 90, trend: "up" },
  { name: "AWS (Full Stack)", level: 92, trend: "up" },
  { name: "SQL/Redshift", level: 88, trend: "up" },
  { name: "Linux/Bash", level: 85, trend: "stable" },
  { name: "AI/ML (Bedrock)", level: 88, trend: "up" },
];

const articles = [
  {
    id: "neural-nets",
    title: "Neural Networks From Scratch",
    date: "11/02/24",
    category: "ML",
    description: "Building neural networks using only pandas and numpy",
    external: false,
  },
  {
    id: "hmm",
    title: "Hidden Markov Models in Trading",
    date: "11/16/24",
    category: "QUANT",
    description: "HMM applications in time-series and trading strategies",
    external: false,
  },
  {
    id: "cot-pipeline",
    title: "Automating COT Report Data Pipeline Using Python",
    date: "03/09/24",
    category: "DATA",
    description: "Building automated data pipelines for COT report analysis",
    external: true,
    url: "https://medium.com/@khizarimran/automating-cot-report-data-pipeline-using-python-a1006e4fca23",
  },
  {
    id: "algo-backtest",
    title: "Algo-Trading Backtest using Python",
    date: "08/16/23",
    category: "QUANT",
    description: "Building and testing algorithmic trading strategies",
    external: true,
    url: "https://www.linkedin.com/pulse/algo-trading-backtest-using-python-khizar-imran/",
  },
];

const projects = [
  { name: "Klaro-tech", status: "LIVE", change: "SaaS", type: "up", url: "https://klaro-tech.com" },
  { name: "Site Inspection AI", status: "DEPLOYED", change: "£30M", type: "up" },
  { name: "Metering App", status: "ACTIVE", change: "10x", type: "up" },
  { name: "Data Analytics", status: "LIVE", change: "7B+ rows", type: "up" },
];

const experience = [
  { company: "MGroup Energy", role: "Software Engineer", period: "Jun 2024-Present", focus: "AI/Data" },
  { company: "Klaro-tech", role: "Founder", period: "2024-Present", focus: "Algo Trading" },
  { company: "Univ. of Dundee", role: "BSc Biomedical Sci", period: "2020-2023", focus: "2:1 Hons" },
];

const socials = [
  { name: "GitHub", handle: "@KhizarImran", url: "https://github.com/KhizarImran" },
  { name: "Twitter", handle: "@khizarimran_", url: "https://twitter.com/khizarimran_" },
  { name: "LinkedIn", handle: "/in/khizarimran", url: "https://linkedin.com/in/khizarimran" },
  { name: "Medium", handle: "@khizarimran", url: "https://medium.com/@khizarimran" },
];

// Clickable image component with lightbox
function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="my-3">
        <Image
          src={src}
          alt={alt}
          width={280}
          height={160}
          className="border border-[#333] cursor-pointer hover:border-[#ff6600] transition-colors"
          onClick={() => setIsOpen(true)}
        />
        <p className="text-[#666] text-[9px] mt-1 italic">{caption}</p>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-[80vw] max-h-[80vh]">
            <div className="bb-header flex justify-between items-center mb-0">
              <span className="text-[#ffaa00]">{alt}</span>
              <span className="text-[#ff6600]">ESC or CLICK to close</span>
            </div>
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="border border-[#333] max-w-full max-h-[70vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-[#666] text-[10px] mt-2 italic">{caption}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default function Terminal() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
      setDate(now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "2-digit", year: "numeric" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentArticle = activeArticle ? articleContent[activeArticle] : null;

  return (
    <div className="h-screen w-screen flex flex-col bg-black overflow-hidden">
      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-2 py-1 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border-b border-[#333] text-[10px] md:text-[11px]">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="bg-[#ff6600] text-black px-1 md:px-2 py-0.5 font-bold">TERMINAL</span>
          <span className="text-white font-bold hidden sm:inline">KHIZAR.IMRAN</span>
          <span className="text-white font-bold sm:hidden">KI</span>
          <span className="text-[#ffaa00] hidden md:inline">Equity</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-[#00ff00] hidden sm:inline">● Connected</span>
          <span className="text-[#00ff00] sm:hidden">●</span>
          <span className="text-[#ffaa00] hidden md:inline">{date}</span>
          <span className="text-white font-bold">{time}</span>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-2 py-1 bg-black border-b border-[#333] text-[10px]">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-[#ff6600] text-black px-2 py-1 font-bold"
        >
          {mobileMenuOpen ? "✕ CLOSE" : "☰ MENU"}
        </button>
        <span className="text-[#ff6600] font-bold">Khizar Imran</span>
        <a href="mailto:khzrimrn@gmail.com" className="bg-[#3399ff] text-black px-2 py-1 font-bold">
          CONTACT
        </a>
      </div>

      {/* Command Bar - Hidden on mobile */}
      <div className="hidden md:flex items-center px-2 py-1 bg-black border-b border-[#333] text-[11px]">
        <span className="text-[#ffaa00]">&lt;HELP&gt;</span>
        <span className="text-[#999] ml-2">for explanation.</span>
        <span className="text-[#ffaa00] ml-4">&lt;MENU&gt;</span>
        <span className="text-[#999] ml-2">to Return,</span>
        <span className="text-[#ffaa00] ml-2">94&lt;Go&gt;</span>
        <span className="text-[#999] ml-2">to Hide Sidebar</span>
      </div>

      {/* Search Bar - Hidden on mobile */}
      <div className="hidden md:flex items-center px-2 py-1 bg-[#1a1a1a] border-b border-[#333] text-[11px]">
        <span className="text-[#999]">Search</span>
        <span className="bg-[#ff6600] text-black px-2 ml-2 font-bold">KI</span>
        <span className="text-white ml-2">→</span>
        <span className="text-[#3399ff] ml-2">91) Actions</span>
        <span className="text-white ml-2">→</span>
        <span className="text-[#3399ff] ml-2">92) Contact KI</span>
        <span className="text-white ml-2">→</span>
        <span className="text-[#ff6600] ml-auto font-bold">Khizar Imran</span>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bottom-0 bg-black z-40 overflow-auto p-4 text-[11px]">
          <div className="mb-4">
            <div className="text-[#999] mb-2">Navigation</div>
            {["Overview", "Skills", "Projects", "Articles", "Experience", "Contact"].map((item, i) => (
              <div
                key={item}
                className="flex items-center py-2 hover:bg-[#ff6600] hover:text-black cursor-pointer px-2 border-b border-[#222]"
                onClick={() => { setMobileMenuOpen(false); if (item === "Overview") setActiveArticle(null); }}
              >
                <span className="text-[#3399ff] w-6">{i + 1})</span>
                <span className="text-[#ffaa00]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <div className="text-[#999] mb-2">Specializations</div>
            <div className="text-[#00ff00]">▸ Full-Stack Dev</div>
            <div className="text-[#00ff00]">▸ AI/ML Integration</div>
            <div className="text-[#00ff00]">▸ AWS Cloud Infra</div>
            <div className="text-[#00ff00]">▸ Algo Trading</div>
          </div>
          <div className="mb-4">
            <div className="text-[#999] mb-2">Connect</div>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-[#3399ff] hover:bg-[#ff6600] hover:text-black px-2"
              >
                {social.name} - {social.handle}
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="border border-[#333] p-3 text-center">
              <div className="text-[#999] text-[9px]">Contract Won</div>
              <div className="text-[#00ff00] text-xl font-bold">£30M</div>
            </div>
            <div className="border border-[#333] p-3 text-center">
              <div className="text-[#999] text-[9px]">Dataset Rows</div>
              <div className="text-[#00ff00] text-xl font-bold">7B+</div>
            </div>
            <div className="border border-[#333] p-3 text-center">
              <div className="text-[#999] text-[9px]">Deploy Time</div>
              <div className="text-[#ffaa00] text-xl font-bold">-50%</div>
            </div>
            <div className="border border-[#333] p-3 text-center">
              <div className="text-[#999] text-[9px]">Hazard Det.</div>
              <div className="text-[#ff6600] text-xl font-bold">10x</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden">
        {/* Left Sidebar - Hidden on mobile */}
        <aside className="hidden md:flex md:col-span-2 border-r border-[#333] flex-col text-[11px]">
          <div className="bb-header">Developer Profile</div>
          <nav className="flex-1 p-2">
            <div className="text-[#999] mb-2">Navigation</div>
            {["Overview", "Skills", "Projects", "Articles", "Experience", "Contact"].map((item, i) => (
              <div
                key={item}
                className={`flex items-center py-1 hover:bg-[#ff6600] hover:text-black cursor-pointer px-1 ${item === "Overview" && !activeArticle ? "bg-[#ff6600] text-black" : ""}`}
                onClick={() => item === "Overview" ? setActiveArticle(null) : null}
              >
                <span className="text-[#3399ff] w-4">{i + 1})</span>
                <span className="text-[#ffaa00] ml-1">{item}</span>
              </div>
            ))}
            <div className="border-t border-[#333] mt-3 pt-3">
              <div className="text-[#999] mb-2">Specializations</div>
              <div className="text-[#00ff00] text-[10px]">▸ Full-Stack Dev</div>
              <div className="text-[#00ff00] text-[10px]">▸ AI/ML Integration</div>
              <div className="text-[#00ff00] text-[10px]">▸ AWS Cloud Infra</div>
              <div className="text-[#00ff00] text-[10px]">▸ Algo Trading</div>
            </div>
            <div className="border-t border-[#333] mt-3 pt-3">
              <div className="text-[#999] mb-2">Connect</div>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-0.5 hover:bg-[#ff6600] hover:text-black px-1 text-[10px]"
                >
                  <span className="text-[#3399ff]">{social.name}</span>
                </a>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="col-span-1 md:col-span-7 flex flex-col overflow-hidden">
          {/* Show article content OR default view */}
          {currentArticle ? (
            // Article View
            <section className="flex-1 overflow-hidden flex flex-col">
              <div className="bb-header flex justify-between items-center text-[10px] md:text-[11px]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="text-[#3399ff] hover:bg-[#ff6600] hover:text-black px-2"
                  >
                    ← BACK
                  </button>
                  <span className="bg-[#ff6600] text-black px-1 text-[9px] font-bold">{currentArticle.category}</span>
                  <span className="hidden sm:inline">{currentArticle.title}</span>
                </div>
                <span className="text-[#999]">{currentArticle.date}</span>
              </div>
              <div className="flex-1 overflow-auto p-3 md:p-4 text-[11px] md:text-[11px] article-content">
                {currentArticle.content}
              </div>
            </section>
          ) : (
            // Default View
            <>
              {/* Bio Section */}
              <section className="border-b border-[#333]">
                <div className="bb-header flex justify-between text-[10px] md:text-[11px]">
                  <span>Profile Overview</span>
                  <span className="text-[#ffaa00]">KI Equity</span>
                </div>
                <div className="p-2 md:p-3 text-[11px]">
                  <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h1 className="text-[#ff6600] text-base md:text-lg font-bold mb-1">KHIZAR IMRAN</h1>
                      <p className="text-[#ffaa00] text-[10px] md:text-[11px] mb-2">Software Engineer | AI/ML Integration | Founder @ Klaro-tech</p>
                      <p className="text-[#999] text-[9px] md:text-[10px] leading-relaxed">
                        Software Engineer with expertise in full-stack development, AI/ML integration, and cloud infrastructure.
                        Proven track record of delivering high-impact solutions including securing a £30M contract through AI-powered applications.
                        Founder of Klaro-tech, a SaaS platform serving algorithmic traders.
                      </p>
                    </div>
                    <div className="flex sm:flex-col gap-4 sm:gap-0 text-[10px] sm:text-right w-full sm:w-auto">
                      <div>
                        <div className="text-[#999]">Status</div>
                        <div className="text-[#00ff00] font-bold">ACTIVE</div>
                      </div>
                      <div className="sm:mt-2">
                        <div className="text-[#999]">Location</div>
                        <div className="text-white">Newcastle, UK</div>
                      </div>
                      <div className="sm:mt-2 hidden sm:block">
                        <div className="text-[#999]">Email</div>
                        <div className="text-[#ffaa00]">khzrimrn@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Articles/News Feed */}
              <section className="flex-1 overflow-hidden flex flex-col">
                <div className="bb-header flex justify-between">
                  <span>Latest Articles & Research</span>
                  <span className="text-[#999]">Click to Read ▸</span>
                </div>
                <div className="flex-1 overflow-auto p-2 text-[11px]">
                  {articles.map((article, i) => (
                    article.external ? (
                      <a
                        key={article.id}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start py-2 border-b border-[#222] hover:bg-[#111] px-2 cursor-pointer group w-full text-left"
                      >
                        <span className="text-[#3399ff] w-4">{i + 1})</span>
                        <span className="bg-[#3399ff] text-black px-1 mx-2 text-[9px] font-bold">{article.category}</span>
                        <div className="flex-1">
                          <div className="text-[#ffaa00] group-hover:text-[#ff6600]">
                            {article.title} <span className="text-[#666]">↗</span>
                          </div>
                          <div className="text-[#666] text-[10px]">{article.description}</div>
                        </div>
                        <span className="text-[#666] text-[10px]">{article.date}</span>
                      </a>
                    ) : (
                      <button
                        key={article.id}
                        onClick={() => setActiveArticle(article.id)}
                        className="flex items-start py-2 border-b border-[#222] hover:bg-[#111] px-2 cursor-pointer group w-full text-left"
                      >
                        <span className="text-[#3399ff] w-4">{i + 1})</span>
                        <span className="bg-[#ff6600] text-black px-1 mx-2 text-[9px] font-bold">{article.category}</span>
                        <div className="flex-1">
                          <div className="text-[#ffaa00] group-hover:text-[#ff6600]">{article.title}</div>
                          <div className="text-[#666] text-[10px]">{article.description}</div>
                        </div>
                        <span className="text-[#666] text-[10px]">{article.date}</span>
                      </button>
                    )
                  ))}
                  <div className="text-center py-4 text-[#666] text-[10px]">
                    <span className="text-[#ffaa00]">▸ More articles coming soon...</span>
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section className="border-t border-[#333]">
                <div className="bb-header">Work Experience</div>
                <div className="p-2 text-[9px] md:text-[10px]">
                  {experience.map((exp, i) => (
                    <div key={i} className="flex flex-wrap md:flex-nowrap items-center py-1 border-b border-[#222] gap-1">
                      <span className="text-[#3399ff] w-4">{i + 1})</span>
                      <span className="text-white w-auto md:w-28">{exp.company}</span>
                      <span className="text-[#ffaa00] flex-1 hidden md:inline">{exp.role}</span>
                      <span className="text-[#00ff00] w-auto md:w-20">{exp.focus}</span>
                      <span className="text-[#666] hidden sm:inline">{exp.period}</span>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>

        {/* Right Sidebar - Stats - Hidden on mobile */}
        <aside className="hidden md:flex md:col-span-3 border-l border-[#333] flex-col text-[10px] overflow-hidden">
          {/* Skills/Key Indicators */}
          <section>
            <div className="bb-header flex justify-between">
              <span>Key Skills</span>
              <span className="text-[#999]">Proficiency</span>
            </div>
            <div className="p-2">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center py-0.5">
                  <span className="text-[#ffaa00] flex-1">{skill.name}</span>
                  <span className={skill.trend === "up" ? "text-[#00ff00]" : "text-[#999]"}>
                    {skill.level}%
                  </span>
                  <span className={`ml-2 ${skill.trend === "up" ? "text-[#00ff00]" : "text-[#999]"}`}>
                    {skill.trend === "up" ? "▲" : "─"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Watchlist */}
          <section className="border-t border-[#333]">
            <div className="bb-header flex justify-between">
              <span>Project Watchlist</span>
              <span className="text-[#999]">Status</span>
            </div>
            <div className="p-2">
              {projects.map((project) => (
                <div key={project.name} className="flex items-center py-1 border-b border-[#222]">
                  <span className="text-[#ffaa00] flex-1">{project.name}</span>
                  <span className="text-[#3399ff] w-16">{project.status}</span>
                  <span className={`w-12 text-right ${project.type === "up" ? "text-[#00ff00]" : "text-[#999]"}`}>
                    {project.change}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Metrics */}
          <section className="border-t border-[#333] flex-1">
            <div className="bb-header">Metrics</div>
            <div className="p-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-[#333] p-2 text-center">
                  <div className="text-[#999] text-[9px]">Contract Won</div>
                  <div className="text-[#00ff00] text-lg font-bold">£30M</div>
                </div>
                <div className="border border-[#333] p-2 text-center">
                  <div className="text-[#999] text-[9px]">Dataset Rows</div>
                  <div className="text-[#00ff00] text-lg font-bold">7B+</div>
                </div>
                <div className="border border-[#333] p-2 text-center">
                  <div className="text-[#999] text-[9px]">Deploy Time</div>
                  <div className="text-[#ffaa00] text-lg font-bold">-50%</div>
                </div>
                <div className="border border-[#333] p-2 text-center">
                  <div className="text-[#999] text-[9px]">Hazard Det.</div>
                  <div className="text-[#ff6600] text-lg font-bold">10x</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="border-t border-[#333] p-2">
            <a
              href="mailto:khzrimrn@gmail.com"
              className="block w-full bg-[#ff6600] text-black text-center py-2 font-bold hover:bg-[#ffaa00] cursor-pointer text-[11px]"
            >
              92) CONTACT KI &lt;GO&gt;
            </a>
          </section>
        </aside>
      </div>

      {/* Bottom Status Bar */}
      <footer className="flex items-center justify-between px-2 py-1 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-t border-[#333] text-[9px] md:text-[10px]">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-[#999] hidden sm:inline">Terminal v1.0</span>
          <span className="text-[#333] hidden sm:inline">|</span>
          <span className="text-[#999] hidden md:inline">Built with Next.js + Tailwind</span>
          <span className="text-[#666]">© 2025 KI</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-[#ffaa00]">All Systems Operational</span>
          <span className="text-[#00ff00] cursor-blink">█</span>
        </div>
      </footer>
    </div>
  );
}
