Express App 

This is a simple Node.js Express application created for learning and demonstration purposes.
It includes multiple routes that respond with different messages and showcase basic Express functionality.

Project Structure
/04_express_33828328
├── index.js              # Main server file - sets up and runs the Express app
├── routes/
│   └── main.js           # Contains all route handlers (about, contact, date, welcome, chain)
├── package.json          # Project dependencies and metadata
└── README.md             # Project documentation

Features
	•	Home Route (/) – Displays a “Hello World!” message.
	•	About Route (/about) – Shows a short “About” message.
	•	Contact Route (/contact) – Displays a “Get in Touch” heading.
	•	Date Route (/date) – Shows today’s date dynamically.
	•	Welcome Route (/welcome/:name) – Greets the user by name passed in the URL.
	•	Chain Route (/chain) – Demonstrates Express route chaining with two handlers.

How It Works
	1.	index.js loads Express and imports the route handlers from routes/main.js.
	2.	It listens for HTTP requests on port 8000.
	3.	The app responds to different routes defined in main.js.

Running the App
	1.	Open your terminal and navigate to the project folder:
  cd 04_express_33828328

  2. Install dependencies:
  npm install express

  3. Start the server:
  node index.js

  4. Open your broswer and visit: http://localhost:8000

Example Routes
	•	http://localhost:8000/about
	•	http://localhost:8000/contact
	•	http://localhost:8000/date
	•	http://localhost:8000/welcome/Mercedes
	•	http://localhost:8000/chain
  
