```css
body {font-family: 'Arial', sans-serif;
  direction: rtl;
  background: #0d1117;
  color: #e6edf3;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 700px;
  margin: auto;
  background: #161b22;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 20px #000;
}

h1, h2 {
  text-align: center;
  color: #58a6ff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input[type="text"],
input[type="file"],
button {
  padding: 10px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
}

input[type="text"],
input[type="file"] {
  background: #0d1117;
  color: #fff;
  border: 1px solid #30363d;
}

button {
  background-color: #238636;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #2ea043;
}

#actions {
  text-align: center;
  margin-top: 15px;
}

.post-preview {
  margin-top: 25px;
  background: #010409;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.post-preview img {
  max-width: 120px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid #30363d;
}

.post-preview .logo {
  max-width: 160px;
  display: block;
  margin: 0 auto 15px auto;
}
