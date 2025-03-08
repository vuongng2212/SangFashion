ALTER TABLE products CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO products (name, price, old_price, rating, reviews, description, sku, categories, is_new, created_at)
VALUES
    ('Hooded Thermal Anorak', 270, 370, 5, 25, 'Áo khoác có lớp lót bông và mũ trùm điều chỉnh.', 'TS001', 'Outerwear', false, '2024-12-01 10:30:00'),
    ('Casual Cotton Jacket', 150, 200, 4, 18, 'Áo khoác cotton phong cách đơn giản, phù hợp với mọi trang phục.', 'TS002', 'Outerwear', true, '2024-12-05 14:20:00'),
    ('Slim Fit Jean', 50, 70, 4, 30, 'Quần jean slim fit phong cách thời trang.', 'TS003', 'Pants', true, '2024-11-25 08:45:00'),
    ('Vintage Denim Jacket', 180, 250, 5, 12, 'Áo khoác denim phong cách cổ điển.', 'TS004', 'Outerwear', false, '2024-11-30 16:10:00'),
    ('Graphic Print T-shirt', 25, 40, 4, 50, 'Áo thun in hình độc đáo, chất liệu cotton 100%.', 'TS005', 'Tops', true, '2024-12-10 12:00:00'),
    ('Oversized Hoodie', 65, 90, 5, 40, 'Hoodie rộng rãi, phù hợp với thời tiết se lạnh.', 'TS006', 'Tops', true, '2024-12-02 09:30:00'),
    ('Classic Polo Shirt', 30, 45, 4, 35, 'Áo polo cổ điển, phù hợp cho cả công sở và đi chơi.', 'TS007', 'Tops', false, '2024-11-15 11:15:00'),
    ('High Waist Jeans', 60, 85, 4, 28, 'Quần jean cạp cao tôn dáng.', 'TS008', 'Pants', true, '2024-11-20 15:50:00'),
    ('Floral Summer Dress', 80, 120, 5, 18, 'Đầm hoa mùa hè nhẹ nhàng, nữ tính.', 'TS009', 'Dresses', true, '2024-12-07 10:00:00'),
    ('Black Skinny Jeans', 55, 75, 4, 25, 'Quần skinny jean màu đen, ôm dáng.', 'TS010', 'Pants', false, '2024-11-28 18:40:00'),
    ('Warm Puffer Jacket', 200, 280, 5, 20, 'Áo khoác phao giữ ấm tốt cho mùa đông.', 'TS011', 'Outerwear', true, '2024-12-03 13:20:00'),
    ('Cargo Pants', 70, 100, 4, 22, 'Quần cargo túi hộp phong cách đường phố.', 'TS012', 'Pants', true, '2024-11-18 17:30:00'),
    ('Knitted Sweater', 85, 110, 5, 15, 'Áo len dệt kim ấm áp, thoải mái.', 'TS013', 'Tops', true, '2024-11-22 14:10:00'),
    ('Striped Long Sleeve', 40, 55, 4, 32, 'Áo dài tay kẻ sọc trẻ trung.', 'TS014', 'Tops', false, '2024-11-17 09:50:00'),
    ('Mini Skirt', 45, 65, 4, 18, 'Chân váy ngắn trẻ trung, dễ phối đồ.', 'TS015', 'Bottoms', true, '2024-12-09 08:00:00'),
    ('Fleece Joggers', 50, 75, 5, 19, 'Quần jogger lót nỉ ấm áp, thoải mái.', 'TS016', 'Pants', false, '2024-11-30 19:20:00'),
    ('Formal Blazer', 130, 180, 5, 10, 'Áo blazer sang trọng, phù hợp cho công sở.', 'TS017', 'Outerwear', true, '2024-12-04 16:45:00'),
    ('Bohemian Maxi Dress', 95, 130, 4, 14, 'Đầm maxi phong cách bohemian quyến rũ.', 'TS018', 'Dresses', true, '2024-11-21 20:15:00'),
    ('Ripped Boyfriend Jeans', 65, 90, 4, 27, 'Quần jean boyfriend rách gối cá tính.', 'TS019', 'Pants', true, '2024-12-06 07:30:00'),
    ('Satin Slip Dress', 120, 160, 5, 11, 'Đầm lụa satin sang trọng, phù hợp dự tiệc.', 'TS020', 'Dresses', false, '2024-11-25 22:10:00'),
    ('Chunky Knit Cardigan', 95, 125, 5, 16, 'Áo cardigan len dáng rộng, phong cách Hàn Quốc.', 'TS021', 'Outerwear', true, '2024-12-08 15:00:00'),
    ('Cropped Hoodie', 55, 80, 4, 21, 'Hoodie croptop năng động.', 'TS022', 'Tops', true, '2024-11-29 10:45:00'),
    ('Wide Leg Pants', 75, 100, 4, 20, 'Quần ống rộng vải suông, phong cách thanh lịch.', 'TS023', 'Pants', true, '2024-11-26 12:30:00'),
    ('Ruffle Sleeve Blouse', 50, 70, 4, 14, 'Áo blouse tay bèo nữ tính.', 'TS024', 'Tops', false, '2024-12-11 09:10:00'),
    ('Biker Leather Jacket', 250, 320, 5, 12, 'Áo khoác da biker cá tính, chất liệu da thật.', 'TS025', 'Outerwear', true, '2024-12-01 11:40:00'),
    ('Tweed Skirt', 65, 90, 4, 17, 'Chân váy tweed thanh lịch.', 'TS026', 'Bottoms', true, '2024-12-02 14:25:00'),
    ('Faux Fur Coat', 300, 400, 5, 9, 'Áo khoác lông nhân tạo sang trọng.', 'TS027', 'Outerwear', false, '2024-11-27 18:55:00'),
    ('Pleated Midi Skirt', 70, 95, 4, 15, 'Chân váy midi xếp ly dịu dàng.', 'TS028', 'Bottoms', true, '2024-12-03 20:30:00'),
    ('Wrap Dress', 110, 140, 5, 13, 'Đầm wrap tôn dáng, thanh lịch.', 'TS029', 'Dresses', false, '2024-11-23 21:00:00'),
    ('Fitted Turtleneck', 45, 60, 4, 18, 'Áo cổ lọ ôm sát, giữ ấm tốt.', 'TS030', 'Tops', true, '2024-12-05 13:00:00');


-- Thêm hình ảnh sản phẩm vào bảng product_images
INSERT INTO product_images (img_url, is_thumbnail, product_id)
VALUES
    ('https://imgur.com/eekSW19', false, 1),
    ('https://imgur.com/HioLyyA', true, 1),
    ('https://imgur.com/rcw7o36', true, 1),
    ('https://imgur.com/q4vgD1V', true, 1),
    ('https://imgur.com/34yrIMp', true, 1),
    ('https://imgur.com/GRUK6eh', false, 2),
    ('https://imgur.com/B9SbGLE', true, 2),
    ('https://imgur.com/1B8v6bm', false, 3),
    ('https://imgur.com/1B8v6bm', true, 3),
    ('https://imgur.com/undefined',true,3),
    ('https://imgur.com/E9v43qE', false,4),
    ('https://imgur.com/E9v43qE',true,4),
    ('https://imgur.com/Zx7Tu3J', true, 4);

INSERT INTO product_images (img_url, is_thumbnail, product_id)
VALUE
    ('https://imgur.com/undefined', false, 5),
    ('https://imgur.com/undefined', true, 5),
    ('https://imgur.com/1SGMfJQ', true, 6),
    ('https://imgur.com/xtuOHJ1', true, 6),
    ('https://imgur.com/hCxYAA9', false, 7),
    ('https://imgur.com/hCxYAA9', true, 7),
    ('https://imgur.com/vAcZRZn', true, 7),
    ('https://imgur.com/fDTHdUX', true, 7),
    ('https://imgur.com/dHXJxj3', true, 7),
    ('https://imgur.com/EN5ODdX', false, 8),
    ('https://imgur.com/EN5ODdX', true,8),
    ('https://imgur.com/ncOHTqB', true, 8),
    ('https://imgur.com/HG74Xy4', true, 8),
    ('https://imgur.com/AZxgh8b', false, 9),
    ('https://imgur.com/AZxgh8b', true, 9),
    ('https://imgur.com/IwGxCLV', true, 9),
    ('https://imgur.com/nYdY42y', false, 10),
    ('https://imgur.com/nYdY42y', true, 10),
    ('https://imgur.com/DqDRCwR', true, 10);


