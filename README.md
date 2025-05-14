<p align='center'>
    <a href='http://nestjs.com/' target='blank'><img src='https://nestjs.com/img/logo-small.svg' width='200px' alt='Nest Logo'>
</p>

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
│   ├── dto/
│     ├── create-car.dto.ts
│   ├── interfaces/
│     ├── car.interface.ts
│   ├── cars.module.ts
│   ├── cars.controller.ts
│   └── cars.service.ts
├── brands/                  # Brands module
│   ├── dto/
│     ├── create-brands.dto.ts
│     ├── update-brands.dto.ts
│   ├── entities/
│     ├── brands.entity.ts
│   ├── brands.module.ts
│   ├── brands.controller.ts
│   └── brands.service.ts
│
├── seed/                  # Seed module
│   ├── data/
│     ├── brand.seed.ts
│     ├── car.seed.ts
│   ├── seed.module.ts
│   ├── seed.controller.ts
│   └── seed.service.ts
└── ...
```

---

## 🧪 What I'm Practicing

- Creating and using **modules** with `@Module()`
- Defining **controllers** that respond to routes like `GET /cars/:id`
- Using decorators such as `@Get()`, `@Post()`, `@Param()`, `@Body()`, etc.
- Creating and validating **DTOs (Data Transfer Objects)** with `class-validator` to ensure input data is structured and correct
- Defining **interfaces** to describe the shape of data and improve type safety across the application
- Creating entities to define structure of table in BD
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

3. Execute seed:

Populate BD
```bash
 http://localhost:3000/seed
```

3. Run the server in development mode:

```bash
npm run start:dev
```

4. Open in browser or use Postman at `http://localhost:3000`


## 📬 Postman Collection

You can import the included **Postman collection** to test all available API requests easily.

- File: `postman/car-dealership.postman_collection.json`