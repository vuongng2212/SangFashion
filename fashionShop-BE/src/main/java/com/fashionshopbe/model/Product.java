package com.fashionshopbe.model;

import com.fashionshopbe.enums.Sizes;
import com.fashionshopbe.enums.Tags;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private double price;
    private double oldPrice;
    private int rating;
    private int reviews;
    private String description;
    private String sku;
    private String categories;

    @Enumerated(EnumType.STRING)
    @ElementCollection
    @CollectionTable(name = "product_sizes", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "size")
    private Set<Sizes> sizes = new HashSet<>();

    @Enumerated(EnumType.STRING)
    @ElementCollection
    @CollectionTable(name = "product_tags", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "tag")
    private Set<Tags> tags = new HashSet<>();

    private boolean isNew;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @ToString.Exclude
    @JsonIgnore
    private List<ProductImage> images = new ArrayList<>();

    @CreationTimestamp
    private LocalDateTime createdAt;

    public Product(String name, double price, double oldPrice, int rating, int reviews, String description, String sku, String categories, LocalDateTime createdAt, boolean isNew) {
        this.name = name;
        this.price = price;
        this.oldPrice = oldPrice;
        this.rating = rating;
        this.reviews = reviews;
        this.description = description;
        this.sku = sku;
        this.categories = categories;
        this.createdAt = createdAt;
        this.isNew = isNew;
    }
}
