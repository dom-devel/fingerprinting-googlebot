from flask import Flask, request, jsonify
from flask import render_template
import json

app = Flask(__name__)


@app.route("/endpoint", methods=["POST"])
def add_user():
    # Get saved navigator object
    request_json = request.get_json(force=True)

    data_sources = [
        "navigator",
        "rendered_dom",
        "timestamp",
        "modernizr",
        "fingerprint",
    ]

    output = {
        data: json.dumps(request_json[data], sort_keys=True, indent=4)
        for data in data_sources
    }

    output["headers"] = dict(request.headers)

    output_string = "\n".join(":\n".join((str(k), str(v))) for k, v in output.items())

    file = open("results/{}-render-output.txt".format(request_json["timestamp"]), "w")
    file.write(output_string)
    file.close()
    return "success"


@app.route("/")
def hello():
    return "hello"


@app.route("/content-for-added-realism", methods=["GET"])
def hello1():
    title = "Let your imagination run wild"
    steps = [
        "What could go here?",
        "High quality content?",
        "LOTR gifs?",
        "Anything you want really. Go mad. Well reasonably mad. Stay safe kids.",
    ]
    return render_template("index.html", title="My page 1", h1=title, list=steps)


if __name__ == "__main__":
    app.run(host="0.0.0.0")
