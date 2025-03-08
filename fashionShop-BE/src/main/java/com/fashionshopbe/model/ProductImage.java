package com.fashionshopbe.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "product_images")
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String imgUrl;
    private boolean isThumbnail;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    public ProductImage(String imgUrl, boolean isThumbnail, Product product) {
        this.imgUrl = imgUrl;
        this.isThumbnail = isThumbnail;
        this.product = product;
    }
}
