from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure Gemini API
genai.configure(api_key="gemini key")
model = genai.GenerativeModel('gemini-pro')

# In-memory storage for user data (no database)
users = {}

# Endpoint to get personalized recommendations
@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    user_id = request.json.get('user_id')
    user_data = users.get(user_id, {})
    goal = user_data.get('goal', 'weight loss')
    preference = user_data.get('preference', 'home workouts')
    feedback = user_data.get('feedback', '')



    prompt = f"""
    Generate a personalized {goal} workout and nutrition plan for someone who prefers {preference}.
    The user provided the following feedback: {feedback}.
    Make the recommendations human-friendly, well-structured, and easy to follow.
    """
    response = model.generate_content(prompt)
    print(f"Recommendations generated: {response.text}")
    return jsonify({"recommendations": response.text})

# Endpoint to log user data
@app.route('/log', methods=['POST'])
def log_data():
    user_id = request.json.get('user_id')
    log_type = request.json.get('type')  # e.g., workout, meal, progress
    data = request.json.get('data')

    if user_id not in users:
        users[user_id] = {}
    users[user_id][log_type] = data
    return jsonify({"status": "success"})

# Endpoint to provide feedback
@app.route('/feedback', methods=['POST'])
def provide_feedback():
    user_id = request.json.get('user_id')
    feedback = request.json.get('feedback')

    if user_id not in users:
        users[user_id] = {}
    users[user_id]['feedback'] = feedback
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)