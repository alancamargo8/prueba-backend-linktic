import express, { Request, Response } from "express";
import Order from "../models/order.model";

const router = express.Router();

// Crear un pedido
router.post("/", async (req: Request, res: Response) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todos los pedidos
router.get("/", async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).send({ orders });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Obtener un pedido por ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send({ order });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un pedido por ID
router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un pedido por ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
