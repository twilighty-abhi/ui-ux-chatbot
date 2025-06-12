import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import traceback
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure the Gemini API key from environment variable
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
if not GEMINI_API_KEY:
    # This print statement is for debugging purposes on the server
    print("Error: GEMINI_API_KEY environment variable not set.")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

# Build the absolute path to the prompt.txt file
script_dir = os.path.dirname(os.path.abspath(__file__))
prompt_path = os.path.join(script_dir, 'prompt.txt')

# Load the prompt from the file
with open(prompt_path, 'r') as f:
    prompt_text = f.read()

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/analyze', methods=['POST'])
def analyze_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # Check if API key is configured on the server
    if not GEMINI_API_KEY:
        return jsonify({'error': 'Gemini API key is not configured on the server.'}), 500
    
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        img = Image.open(file.stream)
        
        response = model.generate_content([prompt_text, img])
        
        return jsonify({'analysis': response.text})
    except Exception as e:
        print("An error occurred during analysis:")
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True) 