const express = require("express");
require("dotenv").config();

const trainerRouter = require("../trainers/trainerHandler");
const weeklyClassesRouter = require("../weeklyClass/weeklyClassHandler");

const router = express.Router();
const defaultRoutes = [
    {
        path: "/trainers",
        route: trainerRouter.trainerRouter,
    },
    {
        path: "/weekly-classes",
        route: weeklyClassesRouter.weeklyClassesRouter,
    },
    {
        path: "/users",
        route: trainerRouter.trainerRouter,
    },
];

defaultRoutes.forEach((route) => {
    const apis = route.route.stack.map((path) => {
        return { path: path.route.path, methods: path.route.methods };
    });

    apis.map((api) => {
        console.log("asa", api.methods);
        console.log([
            api.methods,
            { route: `${process.env.API_ROUTE}${route.path}${api.path}` },
        ]);
    });
    router.use(route.path, route.route);
});

module.exports = router;
