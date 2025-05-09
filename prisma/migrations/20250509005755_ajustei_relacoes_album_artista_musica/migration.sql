-- AddForeignKey
ALTER TABLE `albuns` ADD CONSTRAINT `albuns_id_artista_fkey` FOREIGN KEY (`id_artista`) REFERENCES `artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `musica` ADD CONSTRAINT `musica_id_album_fkey` FOREIGN KEY (`id_album`) REFERENCES `albuns`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
