import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import cors from 'cors';

import category_suppliesRoutes from './routes/suppliescategory.routes.js';
import category_productsRoutes from './routes/productcategory.routes.js'
import suppliesRoutes from '../src/routes/supplies.routes.js';
import roleRoutes from './routes/role.routes.js';
import userRoutes from './routes/user.routes.js';
import waiterRoutes from './routes/waiter.routes.js';
import loginRoutes from './routes/login.routes.js';
import supplierRoutes from './routes/supplier.routes.js'
import shoppingRoutes from './routes/shopping.routes.js'
import shoppingdetailRoute from './routes/shopping.routes.js'
import productRoutes from './routes/product.routes.js';
import RoutesSale from './routes/sale.routes.js';
import RoutesSaleDetail from './routes/saledetail.routes.js'
import dashboardRoutes from './routes/dashboard.routes.js';
import lossesRoutes from './routes/losses.routes.js';
import moduleRoutes from './routes/module.routes.js';

const app = express();

app.use(cors({
    origin: process.env?.FRONT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(supplierRoutes)
app.use(moduleRoutes)
app.use(shoppingRoutes)
app.use(shoppingdetailRoute)
app.use(category_suppliesRoutes);
app.use(category_productsRoutes);
app.use(suppliesRoutes);
app.use(roleRoutes);
app.use(userRoutes);
app.use(loginRoutes);
app.use(waiterRoutes);
app.use(RoutesSale);
app.use(RoutesSaleDetail);
app.use(productRoutes);
app.use(dashboardRoutes);
app.use(lossesRoutes);

export default app;
