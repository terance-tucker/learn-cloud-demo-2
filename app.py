from flask import Flask, request

app = Flask(__name__)

@app.route('/submit_form', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Here you can add code to handle the form data, like sending an email or storing it in a database

    return 'Form submitted successfully'

if __name__ == '__main__':
    app.run(debug=True)