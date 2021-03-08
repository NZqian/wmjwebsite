from flask import Flask, request, redirect, render_template, url_for
import pandas as pd
import os


def saveInfo(info, df):
    file_path = "./signup.csv"
    df = df.append([info], ignore_index=True)
    df.to_csv(file_path)
    return df

def infoCheck(info):
    if info['name'] == '' or info['no'] == '':
        return False
    print(info['name'])
    print(info['no'])
    name = info['name']
    for ch in name:
        if '\u4e00' >= ch or ch >= '\u9fff':
            return False
    return True

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    print("insubmit")
    if request.method == 'POST':
        data = pd.DataFrame()
        file_path = "./signup.csv"
        if os.path.exists(file_path):
            data = pd.read_csv(file_path, encoding='utf-8', index_col=0)
        print(request.form)
        if infoCheck(request.form):
            data = saveInfo(request.form, data)
            return render_template('success.html')
        else:
            print('error')
            return render_template('error.html')
    return render_template("index.html")

@app.route('/mechanic')
def mechanic():
    return render_template("mechanic.html")

@app.route('/vision')
def vision():
    return render_template("vision.html")
@app.route('/electronic')
def electronic():
    return render_template("electronic.html")

@app.route('/operation')
def operation():
    return render_template("operation.html")
@app.route('/lottery')
def lottery():
    return render_template("lottery.html")
if __name__ == '__main__':
    #app.run(host='0.0.0.0', port = 5000, debug = True, ssl_context=("./wmj.crt", "./wmj.key"))
    app.run(host='0.0.0.0', port = 80, debug = True)
    
