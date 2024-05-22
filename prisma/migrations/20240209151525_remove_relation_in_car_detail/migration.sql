/*
  Warnings:

  - You are about to drop the column `carId` on the `Record` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Record` DROP FOREIGN KEY `Record_carId_fkey`;

-- AlterTable
ALTER TABLE `Record` DROP COLUMN `carId`;
