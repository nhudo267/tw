const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const User = require('../schemas/UserSchema');
const Chat = require('../schemas/ChatSchema');

router.get("/", (req, res, next) => {
    res.status(200).render("inboxPage", {
        pageTitle: "Inbox",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user)
    });
})
router.get("/new", (req, res, next) => {
    res.status(200).render("newMessage", {
        pageTitle: "New message",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user)
    });
})