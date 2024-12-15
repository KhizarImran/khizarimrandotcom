from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def portfolio():
    return render_template('index.html')

@app.route('/article/neural-nets-from-scratch')
def neural_nets_article():
    return render_template('neural-nets-article.html')

@app.route('/article/hidden-markov-models')
def hmm_article():
    return render_template('hmm-ts.html')

if __name__ == '__main__':
    app.run(debug=True)