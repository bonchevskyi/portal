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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `title` varchar(158) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `university_id` int unsigned NOT NULL,
  `department_id` int unsigned NOT NULL,
  `major_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_posts_user1_idx` (`user_id`),
  KEY `fk_posts_university1_idx` (`university_id`),
  KEY `fk_posts_department1_idx` (`department_id`),
  KEY `fk_posts_major1_idx` (`major_id`),
  CONSTRAINT `fk_posts_department1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
  CONSTRAINT `fk_posts_major1` FOREIGN KEY (`major_id`) REFERENCES `major` (`id`),
  CONSTRAINT `fk_posts_university1` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`),
  CONSTRAINT `fk_posts_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (6,32,'PIEWSZY POST ĘĘĘĄĄĄ','Kajmany (Caimaninae) – podrodzina gadów z rodziny aligatorów, obejmująca gatunki z rodzajów Caiman, Melanosuchus i Paleosuchus.\n\nKajmany mają duże płytki kostne wzmacniające rogowe tarczki brzuszne. Długość dorosłych kajmanów od 1,5 – kajman Schneidera (Paleosuchus trigonatus) – do 4,5 m – kajman czarny (Melanosuchus niger) (choć prehistoryczne kajmany, takie jak Purussaurus, osiągały nawet 11 m długości[1]). Występują w Ameryce Środkowej i Południowej.\n\nRodzaje i gatunki\nRodzaj Caiman\nkajman okularowy (Caiman crocodillus)\nkajman szerokopyski (Caiman latirostris)\nkajman żakare (Caiman yacare)\nRodzaj Melanosuchus\nkajman czarny (Melanosuchus niger)\nRodzaj Paleosuchus\nkajman karłowaty (Paleosuchus palpebrosus)\nkajman Schneidera (Paleosuchus trigonatus)','2022-03-29 13:40:04','2022-03-29 13:40:04',57,428,NULL),(7,32,'DRUGI POST ĘĘĘĄĄĄ','Kajmany (Caimaninae) – podrodzina gadów z rodziny aligatorów, obejmująca gatunki z rodzajów Caiman, Melanosuchus i Paleosuchus.\n\nKajmany mają duże płytki kostne wzmacniające rogowe tarczki brzuszne. Długość dorosłych kajmanów od 1,5 – kajman Schneidera (Paleosuchus trigonatus) – do 4,5 m – kajman czarny (Melanosuchus niger) (choć prehistoryczne kajmany, takie jak Purussaurus, osiągały nawet 11 m długości[1]). Występują w Ameryce Środkowej i Południowej.\n\nRodzaje i gatunki\nRodzaj Caiman\nkajman okularowy (Caiman crocodillus)\nkajman szerokopyski (Caiman latirostris)\nkajman żakare (Caiman yacare)\nRodzaj Melanosuchus\nkajman czarny (Melanosuchus niger)\nRodzaj Paleosuchus\nkajman karłowaty (Paleosuchus palpebrosus)\nkajman Schneidera (Paleosuchus trigonatus)','2022-03-29 13:50:22','2022-03-29 13:50:22',1,1,NULL),(8,32,'Trzeci POST ĘĘĘĄĄĄ','kajman okularowy (Caiman crocodillus)\nkajman szerokopyski (Caiman latirostris)\nkajman żakare (Caiman yacare)\nRodzaj Melanosuchus\nkajman czarny (Melanosuchus niger)\nRodzaj Paleosuchus\nkajman karłowaty (Paleosuchus palpebrosus)\nkajman Schneidera (Paleosuchus trigonatus)','2022-03-29 13:51:00','2022-03-29 13:51:00',1,1,NULL),(9,32,'afawf a fa w','fafa\n\nf aw\nfaw\nf\n\n\nf\n aw \nf\n \n\nf \n\na\nwf\na\nfa','2022-03-29 14:09:09','2022-03-29 14:09:09',1,1,NULL),(12,32,'fsefesfs','efsfsefesf','2022-03-29 14:47:32','2022-03-29 14:47:32',4,26,NULL),(13,32,'dada','daaaaaaaaaaaaaaaaaaaaaaaaaa','2022-03-29 14:50:57','2022-03-29 14:50:57',6,51,NULL),(14,32,'aaaaaaaaaaaaa','aaaaaaaaaaaaaa','2022-03-29 15:01:18','2022-03-29 15:01:18',60,447,NULL),(15,32,'dafw',' faw faw f','2022-03-29 15:02:14','2022-03-29 15:02:14',10,69,NULL),(16,32,'navigate(`/profile/${username}`);','navigate(`/profile/${username}`);navigate(`/profile/${username}`);\nnavigate(`/profile/${username}`);\n\n\n\nnavigate(`/profile/${username}`);\n\n\nnavigate(`/profile/${username}`);\n\n\nnavigate(`/profile/${username}`);\nnavigate(`/profile/${username}`);','2022-03-29 15:03:43','2022-03-29 15:03:43',13,96,NULL),(17,32,'fwa ff  f fff  f','FFFFFFFFFFFFFF','2022-03-30 08:08:49','2022-03-30 08:08:49',7,58,NULL),(18,43,'dawda','adwadawddawda','2022-03-31 11:32:32','2022-03-31 11:32:32',1,3,NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
