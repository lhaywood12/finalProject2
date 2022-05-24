DROP DATABASE IF EXISTS `keychainDB`;
CREATE DATABASE `keychainDB`;
USE `keychainDB`;
/*-SHOWING THE ALL TABLES-
    SHOW TABLES
    ;
*/

/* ENTERING MYSQL
    mysql -u root -p
*/

/*SHOWING COLUMNS
    desc keychain;
*/


CREATE TABLE image_id (
    image_id INT UNSIGNED AUTO_INCREMENT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_image PRIMARY KEY (image_id)
);

CREATE TABLE type (
    type_id INT UNSIGNED AUTO_INCREMENT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_type PRIMARY KEY (type_id)
);

CREATE TABLE qty (
    qty_id INT UNSIGNED AUTO_INCREMENT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_qty PRIMARY KEY (qty_id)
);

CREATE TABLE available (
    available INT UNSIGNED AUTO_INCREMENT
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_availble PRIMARY KEY (available)
);


CREATE TABLE image (
    image INT UNSIGNED AUTO_INCREMENT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_image PRIMARY KEY (image)
);

CREATE TABLE keychain (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    price INT,
    keychain_type ENUM('valentine','halloween','easter','birthday','st.patrick','christmas','animal','mardi gras') DEFAULT 'valentine',
    qty INT,
    url VARCHAR(200),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_id PRIMARY KEY (id)
);
CREATE TABLE name_id (
    name_id INT UNSIGNED AUTO_INCREMENT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_name PRIMARY KEY (name_id)
);

ALTER TABLE keychain
ADD COLUMN url VARCHAR(50);
DROP table keychain
SELECT * from keychain

-- ALTER TABLE name 
-- DROP COLUMN name;

INSERT INTO keychain
    (title, price, keychain_type, qty, url)
    VALUES ('Pink Valentine', '5.99','1','15','https://i.pinimg.com/736x/dc/4c/d2/dc4cd2208c3725656636be1a5efd1c27.jpg'), 
    ('Red Valentine','4.99','1','20','https://i.pinimg.com/736x/8e/35/bd/8e35bd93b6f5a169a9166164c9c55ca3.jpg'), 
    ('Sweet Heart','4.99','1','10','https://cdn.shopify.com/s/files/1/1237/3170/products/charm-valentine_1200x.jpg?v=1610305175'), 
    ('Easter Egg','5.99','3','15','https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/striped-plastic-easter-egg-keychains-12-pc-~13936526'), 
    ('Easter Rabbit','3.99','3','25','https://i.pinimg.com/736x/74/73/5c/74735c7288a1355acda091d4a9bd3bc2--keychains-happy-easter.jpg'), 
    ('Easter Basket','8.99','3','10','https://img.joomcdn.net/59e8870996656e50c84c8ff6e044913dda8d2fc5_1024_1024.jpeg'), 
    ('Trick or Treat','8.99','2','7','https://img.joomcdn.net/9efe8d717bc2a93c07a1f7b918b9c7536621cc2e_1024_1024.jpeg'), 
    ('Laughing Pumpkin','5.99','2','11','https://img.ltwebstatic.com/images3_pi/2020/08/03/1596420618dff98c560fc9e805ce469b44e22dbdb7.webp'), 
    ('Spooky Ghost','6.99','2','18','https://img.joomcdn.net/150c8f5ee9775a3e5eef5d144193905b1bf08f36_1024_1024.jpeg'), 
    ('Snow & Cookies','7.99','6','11','https://i5.walmartimages.com/asr/b5c007ab-d4fe-49d6-b15a-bbcbe6109b16.90da3bce3e1a5cb7bcecfb6e916492fb.jpeg'), 
    ('Happy Santa','9.99','6','5','https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/http%3A%2F%2Fwww.welenespicshop.com%2Ftupian9%2FLZU201027008_1006511366211112293.jpg'), 
    ('Jiggle Bells','9.99','6','14','https://img.gkbcdn.com/s3/p/2018-11-19/christmas-keychain-bag-pendant-chic-car-key-chain-ring-1571990379863.jpg'), 
    ('Hamster Plushy','10.99','7','12','https://i5.walmartimages.com/asr/0eb03ace-3c33-4599-a750-45f302c76b9b_1.896a686701e80f704a94a1ed0d4ed8d8.jpeg'), 
    ('Panda Plushy','10.99','7','13','https://image.made-in-china.com/202f0j00QznUJyVlZIge/Mini-Stuffed-Animal-Key-Chain-Soft-Toy-Custom-Plush-Panda-Keychain.jpg'), 
    ('Colorful Turtle', '9.99','7','27','https://m.media-amazon.com/images/I/61hciWN6M8L._UX569_.jpg'), 
    ('It is Your Day','5.99','4','30','https://i.pinimg.com/736x/07/d3/36/07d33685a50d523b1384bfa49393d331--gifts-for-birthday-happy-birthday-cakes.jpg'), 
    ('Happy 30th B-Day','4.99','4','10','https://i5.walmartimages.com/asr/a38117a8-d466-49f4-81e0-2a04ae29eeef.a32ce560a43492a194476155dd6a9321.jpeg'), 
    ('Happy Birthday to You','3.99','4','12','https://static-01.daraz.pk/original/9d097747c3a68ad91ec28ab1f53ae23b.jpg'), 
    ('Mardi Gras Mask','5.99','8','11','https://cdn.andersons.com/-/media/products/hs/favors/keychains/acrylic-and-plastic-key-chains/kcmask-blinged-out-mask-key-chain-000.ashx?bc=FFFFFF&w=540&h=540'), 
    ('Mardi Gras Jester','4.99','8','9','https://www.divaslimited.com/assets/images/kc380x041-aa.jpg'), 
    ('Mardi New Orleans','5.99','8','16','https://cdn.shopify.com/s/files/1/2084/4785/products/IMG_0326.jpg?v=1646251743'), 
    ('Four Leaf Clover','2.99','5','10','https://i5.walmartimages.com/asr/32e6aa97-9f96-4480-850f-f003f1688b49_1.a17300f4d99e62f2f8e209798d573b4b.jpeg'), 
    ('St.Patrick Clover','4.99','5','15','https://rlv.zcache.com/gold_shamrock_on_celtic_knots_key_chain-r33f00b0c1a024914b2adaef214e6f152_x7j3z_8byvr_307.jpg'),
    ('Good Luck Clover','3.99','5','10','https://i.pinimg.com/474x/ab/3a/0f/ab3a0fbe70eec9036602a0545ba34814.jpg')
    ;

ALTER TABLE keychain
    DELETE COLUMN

INSERT INTO xx_BLOB(ID,IMAGE) VALUES(1,LOAD_FILE('E:/Images/jack.jpg'));
