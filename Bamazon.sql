CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE `Products`(
	`position` INT NOT NULL,
    `ItemID` DECIMAL(30) NULL,
    `ProductName` VARCHAR(30) NULL,
    `DepartmentName` VARCHAR(30) NULL,
    `Price` DECIMAL(30) NULL,
    `StockQuantity` DECIMAL(30) NULL,
    PRIMARY KEY (position)
);

select * from `Products`;