import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
from dotenv import load_dotenv
import traceback

load_dotenv()

# Build the absolute path to the prompt.txt file
script_dir = os.path.dirname(os.path.abspath(__file__))
prompt_path = os.path.join(script_dir, 'prompt.txt')

# Configure the generative AI model
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

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
    
    try:
        img = Image.open(file.stream)
        
        response = model.generate_content([prompt_text, img])
        
        return jsonify({'analysis': response.text})
    except Exception as e:
        print("An error occurred during analysis:")
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True) 