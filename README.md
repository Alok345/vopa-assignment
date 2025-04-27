

```markdown
# 📝 VOPA Frontend Developer Assignment

This project is a submission for the **Frontend Developer Assignment** for **Vowels of the People Association (VOPA)**.

The task involved fetching tender data from a public API, presenting it in a clean and visually appealing way using React.js, and allowing users to view detailed tender information.

---

## 📚 Project Overview

- **Project Name**: Tender Data Visualization
- **Purpose**: Fetch real-time tender data from a public API and present it in a readable, interactive, and engaging table.
- **Challenge**: The API does not allow direct browser requests (CORS policy), so a CORS proxy was used for fetching data.

---

## 🚀 Features

- Fetch tender data using REST API (`https://tenders.guru/api/es/tenders`).
- Display tenders in a responsive table format.
- Show a maximum of 5 key fields for each tender:
  - Title
  - Category
  - Buyer Name
  - Deadline Date
  - Supplier Name
- On clicking a row, display detailed tender information.
- Graceful error handling and loading state management.
- Simple, clean, and user-friendly UI (expandable).

---

## 🛠 Tech Stack Used

- **Frontend**: React.js (using `.jsx` file format)
- **CSS**: Basic styling (can be extended using TailwindCSS or Material-UI)
- **API**: [Tenders Guru API](https://tenders.guru/api/es/tenders)
- **CORS Proxy**: [AllOrigins API](https://api.allorigins.win/) used to bypass CORS issue.

---

## 📸 Screenshots

### Home Page - Tender Table

![Tender Table Screenshot](./screenshots/tender-table.png)

### Tender Details View

![Tender Details Screenshot](./screenshots/tender-details.png)

> 📌 **Note**: Please create a `screenshots` folder and add your actual project screenshots before pushing.

---

## ⚙️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vopa-assignment.git
   cd vopa-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open in browser:
   ```
   http://localhost:3000
   ```

---

## 🌐 Live Demo (Optional)

You can view the deployed project here:

[🔗 View Live Demo on Vercel](https://vopa-assignment.vercel.app/)

---

## ⚡ Key Notes

- **CORS Policy Handling**:  
  The original API (`https://tenders.guru/api/es/tenders`) does not allow direct requests from browsers due to CORS restrictions.  
  To overcome this issue during development, I used a free proxy service:  
  ```
  https://api.allorigins.win/raw?url=
  ```
  This wraps the API call and enables cross-origin requests without server-side changes.

- **Error Handling**:  
  In cases where API data is incomplete (missing supplier name, purchaser info), the app safely handles it using optional chaining (`?.`).

---

## 🎯 Future Improvements (Optional Ideas)

- Add sorting and filtering features on table columns.
- Add pagination to handle large data sets.
- Display tender details in a modal popup instead of expanding below.
- Add loader/spinner while data is being fetched.
- Use a design library like Material UI or TailwindCSS for more professional UI.

---

## 🙋‍♂️ Author

- **Name**: Alok Kumar Panday
- **Email**: akumar.panday31@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/alok31/

---

> Built with ❤️ for the VOPA Hiring Team to showcase technical skills, creativity, and attention to detail.
```
