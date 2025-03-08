package com.fashionshopbe.service;

import com.fashionshopbe.model.ProductImage;
import com.fashionshopbe.repository.ProductImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductImageService {
    @Autowired
    private ProductImageRepository productImageRepository;

    public List<ProductImage> getImagesByProductId(long productId) {
        return productImageRepository.findByProductId(productId);
    }
}
