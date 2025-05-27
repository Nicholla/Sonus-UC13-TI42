/*
  Warnings:

  - Added the required column `id_artista` to the `musica` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `musica` ADD COLUMN `id_artista` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `musica` ADD CONSTRAINT `musica_id_artista_fkey` FOREIGN KEY (`id_artista`) REFERENCES `artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
