const express = require("express");
const productsRoutes = express.Router();

productsData = require("../data.json");

productsRoutes.get("/allproducts", (req, res) => {
  try {
    res.json(productsData);
  } catch (error) {
    console.error("Erro ao buscar todos os produtos:", error);
    res.status(500).json({
      message: "Erro interno do servidor ao buscar produtos",
      error: error.message,
    });
  }
});

productsRoutes.get("/products/name/:name", (req, res) => {
  try {
    const product = productsData.find(
      (p) => p.name.toLowerCase() === req.params.name.toLowerCase()
    );

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    res.json(product);
  } catch (error) {
    console.error(
      `Erro ao buscar produto por nome '${req.params.name}':`,
      error
    );
    res.status(500).json({
      message: "Erro interno do servidor ao buscar produto por nome",
      error: error.message,
    });
  }
});

productsRoutes.get("/products/type/:type", (req, res) => {
  try {
    const filteredProducts = productsData.filter(
      (p) => p.type.toLowerCase() === req.params.type.toLowerCase()
    );

    if (filteredProducts.length === 0) {
      return res
        .status(404)
        .json({ message: "Nenhum produto deste tipo encontrado" });
    }

    res.json(filteredProducts);
  } catch (error) {
    console.error(
      `Erro ao buscar produtos do tipo '${req.params.type}':`,
      error
    );
    res.status(500).json({
      message: "Erro interno do servidor ao buscar produtos por tipo",
      error: error.message,
    });
  }
});

module.exports = productsRoutes;
