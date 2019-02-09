from flask import Flask, jsonify, request
from sklearn import svm
from sklearn import datasets
from sklearn.externals import joblib
from flask_cors import cross_origin


# declare constants
HOST = '0.0.0.0'
PORT = '8081'

# initialize flask app
app = Flask(__name__)

# map prediction route and train the model
@app.route('/api/train', methods=['POST'])
@cross_origin()
def train():
    # get parameters from request
    parameters = request.get_json()

    # read the dataset
    iris = datasets.load_iris()
    X,y = iris.data,iris.target

    # fit the model
    clf = svm.SVC(C=float(parameters['C']), probability=True, random_state=1)
    clf.fit(X,y)

    # persist the model
    joblib.dump(clf,'model.pkl')

    return jsonify({'accuracy': round(clf.score(X,y) * 100, 2)})

@app.route('/api/predict', methods =['POST'])
@cross_origin()
def predict():

    # get iris object from request
    X = request.get_json()
    X = [[float(X['sepalLength']), float(X['sepalWidth']), float(X['petalLength']), float(X['petalWidth'])]]

    # read model
    clf = joblib.load('model.pkl')
    probabilities = clf.predict_proba(X)
    print(probabilities)

    return jsonify([ {'name':'Iris-Setosa', 'value': round(probabilities[0,0]*100, 2)},
        {'name':'Iris-Versicolour', 'value': round(probabilities[0,1]*100, 2)},
        {'name':'Iris-Virginica', 'value': round(probabilities[0,2]*100, 2)} ])

if __name__== '__main__':
    #run web server
    app.run(host=HOST, debug=True,port=PORT)
    # automatic reloading enable



    
