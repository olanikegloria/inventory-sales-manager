# 📦 Inventory Sales Manager 🎟️🛒

Welcome to the **Inventory Sales Manager** project! 🎉 This is a backend system designed to manage inventory and sales for a small shop. It features a comprehensive API for handling items, sales transactions, and inventory updates. 

## 🚀 Getting Started

To get started with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/olanikegloria/inventory-sales-manager.git
cd inventory-sales-manager
```

### 2. Install Dependencies

Install the required npm packages:

```bash
npm install
```

### 3. Set Up the Database

Make sure you have MongoDB installed and running on your machine. Create a database named `inventory-sales` to match the connection string in the `src/config/database.ts` file.

### 4. Run the Application

Compile TypeScript files:

```bash
npx tsc
```

Start the server:

```bash
node dist/server.js
```

Or, for development with live reload:

```bash
npx ts-node src/server.ts
```

## 🛠️ API Endpoints

### 🧩 Items

- **Add New Item**
  - `POST /api/items`
  - Body: `{ "name": "Item Name", "price": 10.99, "quantity": 100 }`

- **Get All Items**
  - `GET /api/items`

### 🧾 Bills

- **Create Bill**
  - `POST /api/bills`
  - Body: 
    ```json
    {
      "items": [
        { "itemId": "ITEM_ID_1", "quantity": 2 },
        { "itemId": "ITEM_ID_2", "quantity": 1 }
      ]
    }
    ```

- **Get All Bills**
  - `GET /api/bills`

- **Get Bill Details**
  - `GET /api/bills/:id`

## ✨ Features

- **Add and Manage Inventory Items** 📦
- **Create and Manage Sales Bills** 🧾
- **Automatic Inventory Updates on Sales** 🔄
- **Comprehensive Error Handling** 🚫

## 🎯 Favorite Feature

My favorite part of the project is **adding input validation with Joi**. It ensures that all incoming data is correctly validated, making the application more reliable and robust. Joi's schema validation helped maintain data integrity and improved overall data quality. 🌟

## 📹 Video Demo

Check out the video demo of me testing the api routes in postman [Watch Demo](https://www.loom.com/share/8a761e94ce7e4552bbc5775bc1d4a76f?sid=aee4cd8a-194d-41be-845e-2f52f9382548) 🎥

## 📝 Documentation

For detailed documentation, refer to the code comments and the `README` file provided here.

## 💬 Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. 

## 🖤 Thanks for Visiting!

Thank you for checking out the Inventory Sales Manager! If you have any questions or feedback, please reach out. Happy coding! 💻🚀
