# pingi.host API Client

A simple and extensible Axios-based API client for interacting with pingi.host task endpoints.  
This wrapper provides convenient methods for user management and server creation tasks.

---

## 📦 Installation

```bash
npm install axios
```

Then copy the `api.js` file into your project directory.

---

## 🚀 Usage

```js
import Api from "./api.js";

const api = new Api("https://pingi.msaebi.ir/api");

async function main() {
  const user = await api.getUser(123456);
  console.log(user);
}
```

---

## 📚 API Methods

### `constructor(baseURL)`

Creates an instance of the API client.

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| baseURL   | String | The base URL of your backend. |

---

### `getUser(id)`

Fetches user data by Telegram ID.

| Parameter | Type   | Description      |
| --------- | ------ | ---------------- |
| id        | Int | Telegram user ID |

**Returns:** Response containing user data.

---

### `updateUser(id, data)`

Updates user information.

| Parameter | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| id        | Int | Telegram user ID                     |
| data      | Object | Fields to update (e.g. `{name: ""}`) |

**Returns:** Success or error message from the server.

---

### `createServer({ telegram_id, vps_uuid, vps_id, vps_id_uniq })`

Creates a new server for a specific user.

| Field       | Type   | Description                        |
| ----------- | ------ | ---------------------------------- |
| telegram_id | Int | Telegram user ID                   |
| vps_uuid    | Uuid | VPS UUID (must be in valid format) |
| vps_id      | Int | VPS ID                             |
| vps_id_uniq | Int | Unique VPS ID                      |

**Returns:** Result of the server creation process.

---

## 📁 Folder Structure Example

```
project/
│
├── api.js          # Axios-based API wrapper
├── index.js        # Sample usage
└── README.md       # You're here!
```

---

## 🛠️ Adding More Endpoints

You can extend the `Api` class with new methods for additional backend query values — just follow the existing method structure.

---

## 📄 License

MIT – Free for personal and commercial use.

---

## 🌐 Author

Made with ❤️ for pingi.host task automation.
