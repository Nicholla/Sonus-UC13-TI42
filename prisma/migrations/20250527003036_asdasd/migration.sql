/*
  Warnings:

  - You are about to drop the column `id_artista` on the `musica` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `musica` DROP FOREIGN KEY `musica_id_artista_fkey`;

-- DropIndex
DROP INDEX `musica_id_artista_fkey` ON `musica`;

-- AlterTable
ALTER TABLE `musica` DROP COLUMN `id_artista`;
