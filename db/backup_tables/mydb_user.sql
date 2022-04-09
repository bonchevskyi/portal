-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int unsigned NOT NULL,
  `username` varchar(32) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `password` varchar(128) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `email` varchar(64) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `city_id` int unsigned NOT NULL,
  `firstname` varchar(32) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `lastname` varchar(32) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `about` varchar(45) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_user_role_idx` (`role_id`),
  KEY `fk_user_city1_idx` (`city_id`),
  CONSTRAINT `fk_user_city1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,1,'admin','$2b$10$mVBpq.WP8mm5eurmj0zsouyLmjzGqfGG3doe9qNFO/kWRw5gBl3Pq','test@gmail.com',2,'Roman','Bonchevskyi',NULL,'2022-02-13 22:35:22','2022-03-30 14:46:21'),(18,3,'sussy','$2b$10$6EWyqI3GdBg/Ajpl/FBUTumiHXDreG9XEj0/gUfdz9n5tnqUoNNzC','yota@fdawf.com',14,'GA','AGAW',NULL,'2022-02-15 17:01:41','2022-02-15 17:01:41'),(23,2,'mod','$2b$10$vOKZj.970Bbb2rg8X5KUBubKThX5tRd3AuJ32NoYsWVcHchaCq41W','123qwe@ada.cxo',21,'Mod','mod',NULL,'2022-03-10 14:34:46','2022-03-10 14:35:20'),(32,3,'sus','$2b$10$S3Qzb1OC1b9/UB2xSETREeO47J17zRga4kU0zLKovXol.SFs1LWDe','123@afadadada.co',12,'New','Nazwisko',NULL,'2022-03-26 10:12:59','2022-03-30 08:51:32'),(33,3,'qqq','$2b$10$mOKjwNJvLkC1DzJlgv6ZuOFiIjQ3yu0UGF7L2rUNQDXKDJunXRJPu','123F@fawf.ca',21,'QQQ','Afawf',NULL,'2022-03-26 11:30:58','2022-03-26 11:30:58'),(35,3,'www','$2b$10$kUekZ3Iwavy2xPvpeXW9z.fZbaRAC.UVAYUwWDuFLy0djIeIjO3ou','dad@dar.ta     ',13,'wwww','Wawa','daw','2022-03-30 08:59:40','2022-03-30 14:33:59'),(36,3,'zzz','$2b$10$p2BNCXbX4Rx.9CeHIrLK9emOlYf9tRqeBDpKX9XijSz2wl3aUZoPG','faa@ff.ad',18,'DA','DA',NULL,'2022-03-30 09:04:10','2022-03-30 09:04:10'),(37,3,'ddd','$2b$10$Ty.MznnXGLfXV8k25zS03.4N5ct2fBg/AHblmrxk1RzYjiVVKayC.','aa daw@da.da',5,'dawdada','dawda','Coś tam','2022-03-30 09:04:52','2022-03-30 11:13:50'),(38,3,'qwe','$2b$10$pzCASclNitVPUQPS6MHFJuSJc3u0ZX3PHLLpRiwing0c5EMfbxLrm','dawfa fa',3,'dadwa','fawf aw fa','ada','2022-03-30 14:54:57','2022-03-30 17:34:54'),(39,3,'eee','$2b$10$5UjzNgpeRxCipz9kNosDd.z4/EwwWo1KSSiO1pz/pMThqqchD/37y','eee21@da.da',18,'f','f',NULL,'2022-03-30 17:36:15','2022-03-30 17:36:51'),(40,3,'qqqnyny','$2b$10$PcwTl5mPieHJ/fWjDHTsje9xRT8C37jnE1c.VnIQmQ5rJ1GEbpn6S','123qweFFF@fawf.ca',6,'adwa','DA',NULL,'2022-03-30 17:38:53','2022-03-30 17:38:53'),(41,3,'fafa','$2b$10$SsfgwGVssxkO9jEbxft8j./E7sP9ZvLlc4HEbSWjRPx4kLT9wiUrO','fafa2@fafa.ca',6,'fafa','fa',NULL,'2022-03-30 17:39:58','2022-03-30 17:40:52'),(42,3,'adada','$2b$10$AvaA0EUeldnR9m4lVhIjK.akbSqUMkKO7oAIcORrQ81cdQktpV0Dm','dadada2@Daf.ca',10,'da','da',NULL,'2022-03-30 17:54:00','2022-03-30 17:54:00'),(43,3,'asd','$2b$10$qTWJ/L9OaEfW7wxUI8dAtuXnstT2BcqJqFCMQQ9eRi0eDcb8mbWPm','asd@asd.aSD',6,'asdasd','asdasd',NULL,'2022-03-30 19:23:35','2022-03-30 19:23:35');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-31 14:02:17
