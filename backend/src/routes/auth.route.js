import express from "express";
import passport from "passport";
import { generateToken } from "../utils/generateToken.js";

const router = express.Router();

// 🔹 Step 1 – Redirect to Google
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// 🔹 Step 2 – Callback
router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
        const token = generateToken(req.user._id);

        res.redirect(
            `${process.env.CLIENT_URL}/oauth-success?token=${token}`
        );
    }
);

export default router;
