const express = require("express");
require("dotenv").config();

const trainerRouter = require("../trainers/trainerHandler");
const weeklyClassesRouter = require("../weeklyClass/weeklyClassHandler");
const classesDetailsRouter = require("../classesDetails/classesDetailsHandler");
const gymPackagesRouter = require("../models/gymPackages/gymPackageHandler");
const usersBookingPackagesRouter = require("../models/packageBooking/usersBookingPackagesHandler");
const paymentIntentRouter = require("../models/paymentIntent/paymentIntentHandler");
const userInfoRouter = require("../models/userInfo/userInfoHandler");
const galleryRouter = require("../models/gallery/galleryHandler");
const postRouter = require("../models/post/postHandler");
const newsletterRouter = require("../models/newsletter/newsletterHandler");
const signTokenRouter = require("../models/signToken/signTokenHandler");

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
        path: "/classes-details",
        route: classesDetailsRouter.classesDetailsRouter,
    },
    {
        path: "/gym-packages",
        route: gymPackagesRouter.gymPackagesRouter,
    },
    {
        path: "/user-booking-packages",
        route: usersBookingPackagesRouter.usersBookingPackagesRouter,
    },
    {
        path: "/create-payment-intent",
        route: paymentIntentRouter.paymentIntentRouter,
    },
    {
        path: "/gallery",
        route: galleryRouter.galleryRouter,
    },
    {
        path: "/posts",
        route: postRouter.postRouter,
    },
    {
        path: "/newsletters",
        route: newsletterRouter.newsletterRouter,
    },
    {
        path: "/users",
        route: userInfoRouter.userInfoRouter,
    },
    {
        path: "/sign-token",
        route: signTokenRouter.signTokenRouter,
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
