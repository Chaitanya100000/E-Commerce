import { Router } from "express";
import { createStreamChannel, createVideoInvite, getOrder, ListOrder } from "../controllers/orderController";

const router = Router();

router.get("/", ListOrder)
router.get("/:id", getOrder)
router.post("/:id/stream-channel", createStreamChannel)
router.post("/:id/video-invite", createVideoInvite)

export default router;