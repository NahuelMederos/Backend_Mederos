import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("Chat");
});

export default router;
