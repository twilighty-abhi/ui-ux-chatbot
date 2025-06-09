import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import traceback

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
    
    # Get API key from the request
    api_key = request.form.get('api_key')
    if not api_key:
        return jsonify({'error': 'Gemini API key is required'}), 400
    
    try:
        # Configure the generative AI model with user's API key
        genai.configure(api_key=api_key)
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