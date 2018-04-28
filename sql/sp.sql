#DROP DATABASE IF EXISTS sp;
#CREATE DATABASE sp CHARSET=utf8;

USE sp;
SET NAMES UTF8;
DROP TABLE IF EXISTS sp_user;
CREATE TABLE sp_user(
    uid INT(11) PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32) NOT NULL ,
    upwd VARCHAR(32) NOT NULL,
    email VARCHAR(64) DEFAULT NULL,
    phone BIGINT(16) DEFAULT NULL,
    user_name VARCHAR(32) DEFAULT NULL,
    gender INT(11) DEFAULT NULL
);

INSERT INTO sp_user VALUES(NULL,'dingding',md5(123456),'dingding@qq.com','13812341234','丁小喵','0');
-- ----------------------------------
-- Table Structure for sp_product
-- ----------------------------------
DROP TABLE IF EXISTS sp_product;
CREATE TABLE sp_product(
	pid INT(11) PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128) DEFAULT NULL,
	subtitle VARCHAR(128) DEFAULT NULL,
	price DECIMAL(10,2) DEFAULT NULL,
	category VARCHAR(32) DEFAULT NULL,
	storage INT(11) DEFAULT NULL
	
);
INSERT INTO sp_product VALUES('1','芭淇（BOQITS） 化妆刷套装 专业化妆套刷全套粉底刷眼影刷腮红刷美妆彩妆化妆工具刷子 12只白色化妆刷-桶装','支持货到付款 有刷桶和刷包可以选择','98.00','化妆刷','999');

-- ------------------------------------
-- Table structure for sp_product_spec
-- ------------------------------------
DROP TABLE IF EXISTS sp_product_spec;
CREATE TABLE sp_product_spec(
	spec_id INT(11) PRIMARY KEY AUTO_INCREMENT,
	pid INT(11) REFERENCES sp_product(pid),
	spec VARCHAR(64) DEFAULT NULL
);
INSERT INTO sp_product_spec VALUES ('1','1','8只哑金化妆刷套装-包装');
INSERT INTO sp_product_spec VALUES ('2','1','12只白色化妆刷套装-桶装');
INSERT INTO sp_product_spec VALUES ('3','1','12支白色化妆刷套装-包装');
-- ----------------------------------
-- Table structure for sp_product_pic
-- ----------------------------------
DROP TABLE IF EXISTS sp_product_pic;
CREATE TABLE sp_product_pic(
	ppid INT(11) PRIMARY KEY AUTO_INCREMENT,
	pid INT(11) REFERENCES sp_product(pid),
	sm VARCHAR(128) DEFAULT NULL,
	lg VARCHAR(128) DEFAULT NULL
);

INSERT INTO sp_product_pic VALUES ('1','1','images/products/show/sm/01/001.jpg','images/products/show/lg/01/001.jpg');
INSERT INTO sp_product_pic VALUES ('2','1','images/products/show/sm/01/002.jpg','images/products/show/lg/01/002.jpg');
INSERT INTO sp_product_pic VALUES ('3','1','images/products/show/sm/01/003.jpg','images/products/show/lg/01/003.jpg');
INSERT INTO sp_product_pic VALUES ('4','1','images/products/show/sm/01/004.jpg','images/products/show/lg/01/004.jpg');
INSERT INTO sp_product_pic VALUES ('5','1','images/products/show/sm/01/005.jpg','images/products/show/lg/01/005.jpg');
INSERT INTO sp_product_pic VALUES ('6','1','images/products/show/sm/01/006.jpg','images/products/show/lg/01/006.jpg');

-- -------------------------------------------
-- Table structure for sp_product_more_detail
-- -------------------------------------------
DROP TABLE IF EXISTS sp_product_more_detail;
CREATE TABLE sp_product_more_detail(
	did INT(11) PRIMARY KEY AUTO_INCREMENT,
	pid INT(11) REFERENCES sp_product(pid),
	img VARCHAR(128) DEFAULT NULL
);
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/001.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/002.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/003.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/004.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/005.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/006.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/007.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/008.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/009.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/010.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/011.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/012.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/013.jpg');
INSERT INTO sp_product_more_detail VALUES (NULL,'1','images/products/detail/01/014.jpg');