# AIPortfolio: AI-Powered Portfolio Management
Welcome to AIPortfolio, an AI-powered portfolio management tool that helps you effortlessly manage and optimize your stock portfolios. With seamless Google OAuth integration, you can securely connect your brokerage accounts and get personalized investment insights.

Features
Secure Authentication: Easy and secure login with Google OAuth.
Real-Time Data Fetching: Automatically fetches stock data from connected brokerage accounts.
AI-Driven Insights: Provides personalized buy, hold, and sell recommendations using advanced AI algorithms.
Comprehensive Dashboard: View your portfolio's performance and trends at a glance.
Customizable Alerts: Set up alerts for significant market changes and investment opportunities.
Getting Started
Follow these instructions to set up the project locally.

Prerequisites
Node.js
npm
MongoDB (optional, if you plan to store user data)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/dhawalc/AIPortfolio.git
cd AIPortfolio
Set up the backend:

Navigate to the backend directory:
bash
Copy code
cd backend
Install the required dependencies:
bash
Copy code
npm install
Create a config/keys.js file with your Google OAuth credentials:
javascript
Copy code
module.exports = {
  googleClientID: 'YOUR_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET'
};
Start the backend server:
bash
Copy code
node server.js
Set up the frontend:

Navigate to the my-app directory:
bash
Copy code
cd ../my-app
Install the required dependencies:
bash
Copy code
npm install
Start the React development server:
bash
Copy code
npm start
Access the application:

Open your browser and navigate to http://localhost:3000
Usage
Login with Google:

Click on the "Login with Google" button to securely log in with your Google account.
View Dashboard:

After logging in, you will be redirected to your personalized dashboard, where you can view your portfolio's performance and AI-driven investment insights.
Logout:

Click the "Logout" link to securely log out of the application.
Contributing
We welcome contributions from the community! To contribute, follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature-branch-name
Make your changes and commit them: git commit -m 'Add new feature'
Push to the branch: git push origin feature-branch-name
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or feedback, please reach out to us at dhawal.chheda@gmail.com .

Acknowledgements
Thanks to the open-source community for their invaluable contributions.
