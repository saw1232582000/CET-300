/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Amount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Barcode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Record` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Admin`;

-- DropTable
DROP TABLE `Amount`;

-- DropTable
DROP TABLE `Barcode`;

-- DropTable
DROP TABLE `Record`;

-- CreateTable
CREATE TABLE `record` (
    `Id` VARCHAR(191) NOT NULL,
    `license` VARCHAR(191) NOT NULL,
    `class` VARCHAR(191) NULL,
    `gateid` VARCHAR(191) NULL,
    `dirFrom` VARCHAR(191) NULL,
    `dirTo` VARCHAR(191) NULL,
    `charge` VARCHAR(191) NULL,
    `timedate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `laneid` VARCHAR(191) NULL,
    `imagepath` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `amount` (
    `id` VARCHAR(191) NOT NULL,
    `class` VARCHAR(191) NULL,
    `dirFrom` VARCHAR(191) NULL,
    `dirTo` VARCHAR(191) NULL,
    `charge` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barcode` (
    `barcode_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`barcode_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `Id` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
