import express, { Request, Response } from "express";
import Product from "../models/product.model";

const router = express.Router();

// Creacion de un producto
router.post("/", async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      message: "Producto añadido exitosamente",
      product,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todos los productos
router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Obtener un producto por ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un producto por ID
router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un producto por ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).json({
      message: "Se elimino exitosamente el producto",
      product,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
