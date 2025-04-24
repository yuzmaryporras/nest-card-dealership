# 🚗 Car Dealership API - Learning NestJS

This project is an API built with [NestJS](https://nestjs.com/) for the purpose of learning the framework and practicing concepts such as modules, controllers, parameterized routes, and services.

---

## 📚 Objective

To progressively learn NestJS by building an API for a fictional car dealership, using best practices, modularity, and separation of concerns.

---

## 🛠️ Technologies Used

- **Node.js**
- **NestJS**
- **TypeScript**
- **ESLint + Prettier**

---

## 📁 Project Structure

```bash
src/
│
├── app.module.ts         # Root module
├── main.ts               # Entry point
│
├── cars/                  # Cars module
│   ├── cars.module.ts
│   ├── cars.controller.ts
│   └── cars.service.ts
│
└── ...                   # Future modules (auth, user, etc.)
```

---

## 🧪 What I'm Practicing

- Creating and using **modules** with `@Module()`
- Defining **controllers** that respond to routes like `GET /cars/:id`
- Using decorators such as `@Get()`, `@Post()`, `@Param()`, `@Body()`, etc.

---

## ▶️ How to Run the Project

1. Clone this repository:

```bash
git clone https://github.com/yuzmaryporras/nest-card-dealership.git
cd car-dealership
```

2. Install dependencies:

```bash
npm install
```

3. Run the server in development mode:

```bash
npm run start:dev
```

4. Open in browser or use Postman at `http://localhost:3000`

