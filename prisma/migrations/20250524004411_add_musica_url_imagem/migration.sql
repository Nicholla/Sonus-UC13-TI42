/*
  Warnings:

  - You are about to drop the column `url_imagem` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `albuns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_imagem` to the `musica` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `albuns` ADD COLUMN `descricao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `musica` ADD COLUMN `url_imagem` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `url_imagem`;
