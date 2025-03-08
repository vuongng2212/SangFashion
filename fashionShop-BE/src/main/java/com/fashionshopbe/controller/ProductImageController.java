package com.fashionshopbe.controller;

import com.fashionshopbe.model.ProductImage;
import com.fashionshopbe.service.ProductImageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/productImages")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductImageController {
    private final ProductImageService productImageService;

    public ProductImageController(ProductImageService productImageService) {
        this.productImageService = productImageService;
    }

    @GetMapping("/getImagesByProductId/{productId}")
    public List<ProductImage> getImagesByProductId(@PathVariable("productId") long productId) {
        return productImageService.getImagesByProductId(productId);
    }
}
