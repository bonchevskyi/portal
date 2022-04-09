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
-- Table structure for table `university`
--

DROP TABLE IF EXISTS `university`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `university` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `city_id` int unsigned NOT NULL,
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `link` varchar(64) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_university_city1_idx` (`city_id`),
  CONSTRAINT `fk_university_city1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `university`
--

LOCK TABLES `university` WRITE;
/*!40000 ALTER TABLE `university` DISABLE KEYS */;
INSERT INTO `university` VALUES (1,1,'Uniwersytet w Białymstoku','https://uwb.edu.pl/'),(2,1,'Politechnika Białostocka','https://pb.edu.pl/'),(3,1,'Uniwersytet Medyczny w Białymstoku','https://www.umb.edu.pl/'),(4,2,'Akademia Techniczno-Humanistyczna w Bielsku-Białej','https://www.ath.bielsko.pl/'),(5,3,'Uniwersytet Kazimierza Wielkiego w Bydgoszczy','https://www.ukw.edu.pl/'),(6,3,'Politechnika Bydgoska','https://pbs.edu.pl/pl/'),(7,3,'Collegium Medicum w Bydgoszczy','https://www.cm.umk.pl/'),(8,3,'Akademia Muzyczna w Bydgoszczy','http://www.amuz.bydgoszcz.pl/'),(9,4,'Politechnika Częstochowska','https://pcz.pl/'),(10,4,'Uniwersytet Humanistyczno-Przyrodniczy w Częstochowie','https://www.ujd.edu.pl/'),(11,5,'Politechnika Gdańska','https://pg.edu.pl/'),(12,5,'Uniwersytet Gdański','https://ug.edu.pl/'),(13,6,'Uniwersytet Morski w Gdyni','https://umg.edu.pl/'),(14,7,'Akademia im. Jakuba z Paradyża w Gorzowie Wielkopolskim','http://ajp.edu.pl/'),(15,8,'Akademia Kaliska im. Prezydenta Stanisława Wojciechowskiego','https://akademia.kalisz.pl/'),(16,9,'Uniwersytet Śląski w Katowicach','https://us.edu.pl/'),(17,9,'Uniwersytet Ekonomiczny w Katowicach','https://www.ue.katowice.pl/'),(18,9,'Akademia Muzyczna w Katowicach','https://am.katowice.pl/'),(19,9,'Akademia Sztuk Pięknych w Katowicach','https://asp.katowice.pl/'),(20,10,'Uniwersytet Jana Kochanowskiego w Kielcach','https://www.ujk.edu.pl/'),(21,10,'Politechnika Świętokrzyska','https://tu.kielce.pl/'),(22,11,'Politechnika Koszalińska','https://www.tu.koszalin.pl/'),(23,11,'Państwowa Wyższa Szkoła Zawodowa w Koszalinie','https://www.pwsz-koszalin.pl/'),(24,12,'Uniwersytet Jagielloński w Krakowie','https://www.uj.edu.pl/'),(25,12,'Politechnika Krakowska','https://www.pk.edu.pl/'),(26,12,'Uniwersytet Rolniczy w Krakowie','https://urk.edu.pl/'),(27,12,'Uniwersytet Pedagogiczny w Krakowie','https://www.up.krakow.pl/'),(28,12,'Uniwersytet Ekonomiczny w Krakowie','https://uek.krakow.pl/'),(29,12,'Akademia Górniczo-Hutnicza w Krakowie','https://www.agh.edu.pl/'),(30,12,'Akademia Muzyczna w Krakowie','https://www.amuz.krakow.pl/'),(31,12,'Akademia Sztuk Pięknych w Krakowie','https://www.asp.krakow.pl/'),(32,12,'Akademia Sztuk Teatralnych w Krakowie','http://www.ast.krakow.pl/'),(33,12,'Akademia Wychowania Fizycznego w Krakowie','https://www.awf.krakow.pl/'),(34,13,'Państwowa Wyższa Szkoła Zawodowa w Lesznie','https://pwsz.edu.pl/'),(35,14,'Uniwersytet Marii Curie-Skłodowskiej','https://www.umcs.pl/'),(36,14,'Uniwersytet Medyczny w Lublinie','https://www.umlub.pl/'),(37,14,'Politechnika Lubelska','https://pollub.pl/'),(38,14,'Uniwersytet Przyrodniczy w Lublinie','https://up.lublin.pl/uk/'),(39,15,'Uniwersytet Łódzki','https://www.uni.lodz.pl/'),(40,15,'Politechnika Łódzka','https://www.uni.lodz.pl/'),(41,15,'Uniwersytet Medyczny w Łodzi','https://umed.pl/'),(42,15,'Akademia Muzyczna w Łodzi','http://www.amuz.lodz.pl/pl/'),(43,15,'Akademia Sztuk Pięknych w Łodzi','https://www.asp.lodz.pl/'),(44,15,'Państwowa Wyższa Szkoła Filmowa w Łodzi','http://www.filmschool.lodz.pl/'),(45,16,'Uniwersytet Warmińsko-Mazurski w Olsztynie','http://www.uwm.edu.pl/'),(46,17,'Politechnika Opolska','https://po.edu.pl/'),(47,17,'Uniwersytet Opolski','https://www.uni.opole.pl/'),(48,18,'Uniwersytet im. Adama Mickiewicza w Poznaniu','https://amu.edu.pl/'),(49,18,'Uniwersytet Przyrodniczy w Poznaniu','https://puls.edu.pl/'),(50,18,'Politechnika Poznańska','https://www.put.poznan.pl/'),(51,18,'Uniwersytet Ekonomiczny w Poznaniu','https://ue.poznan.pl/'),(52,18,'Uniwersytet Medyczny w Poznaniu','http://www.ump.edu.pl/'),(53,18,'Uniwersytet Artystyczny w Poznaniu','https://uap.edu.pl/'),(54,18,'Akademia Muzyczna w Poznaniu','https://amuz.edu.pl/'),(55,18,'Akademia Wychowania Fizycznego w Poznaniu','https://www.awf.poznan.pl/'),(56,19,'Uniwersytet Technologiczno-Humanistyczny w Radomiu','https://uniwersytetradom.pl/'),(57,21,'Politechnika Rzeszowska','https://w.prz.edu.pl/'),(58,21,'Uniwersytet Rzeszowski','https://www.ur.edu.pl/'),(59,22,'Uniwersytet Przyrodniczo-Humanistyczny w Siedlcach','https://www.uph.edu.pl/'),(60,23,'Akademia Pomorska w Słupsku','https://www.apsl.edu.pl/'),(61,24,'Zachodniopomorski Uniwersytet Technologiczny w Szczecinie','https://www.zut.edu.pl/'),(62,24,'Pomorski Uniwersytet Medyczny w Szczecinie','https://www.pum.edu.pl/'),(63,24,'Akademia Sztuki w Szczecinie','https://www.akademiasztuki.eu/'),(64,24,'Akademia Morska w Szczecinie','https://www.am.szczecin.pl/'),(65,25,'Uniwersytet Mikołaja Kopernika w Toruniu','https://www.umk.pl/'),(66,26,'Uniwersytet Warszawski','https://www.uw.edu.pl/'),(67,26,'Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie','https://uksw.edu.pl/'),(68,26,'Politechnika Warszawska','https://www.pw.edu.pl/'),(69,26,'Warszawski Uniwersytet Medyczny','https://www.wum.edu.pl/'),(70,26,'Uniwersytet Muzyczny Fryderyka Chopina w Warszawie','https://chopin.edu.pl/'),(71,26,'Akademia Pedagogiki Specjalnej ','http://www.aps.edu.pl/'),(72,26,'Akademia Sztuki Wojennej','https://www.wojsko-polskie.pl/aszwoj/'),(73,26,'Chrześcijańska Akademia Teologiczna w Warszawie','https://chat.edu.pl/'),(74,26,'Wojskowa Akademia Techniczna','https://www.wojsko-polskie.pl/wat/'),(75,26,'Akademia Teatralna w Warszawie','http://akademia.at.edu.pl/'),(76,26,'Akademia Sztuk Pięknych w Warszawie','https://asp.waw.pl/'),(77,26,'Akademia Wychowania Fizycznego Józefa Piłsudskiego w Warszawie','https://www.awf.edu.pl/'),(78,26,'Szkoła Główna Gospodarstwa Wiejskiego w Warszawie','https://www.sggw.edu.pl/'),(79,26,'Szkoła Główna Służby Pożarniczej','https://www.sgsp.edu.pl/'),(80,26,'Szkoła Główna Handlowa w Warszawie','https://ssl-www.sgh.waw.pl/'),(81,27,'Uniwersytet Wrocławski','https://uni.wroc.pl/'),(82,27,'Uniwersytet Przyrodniczy we Wrocławiu','https://upwr.edu.pl/'),(83,27,'Uniwersytet Medyczny we Wrocławiu','https://www.umw.edu.pl/'),(84,27,'Uniwersytet Ekonomiczny we Wrocławiu','http://www.ue.wroc.pl/'),(85,27,'Politechnika Wrocławska','https://pwr.edu.pl/'),(86,27,'Akademia Sztuk Pięknych we Wrocławiu','https://www.asp.wroc.pl/'),(87,27,'Akademia Muzyczna we Wrocławiu','https://akademia-muzyczna-wroclaw.business.site/'),(88,27,'Akademia Wychowania Fizycznego we Wrocławiu','https://awf.wroc.pl/'),(89,28,'Uniwersytet Zielonogórski','https://www.uz.zgora.pl/');
/*!40000 ALTER TABLE `university` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-31 14:02:16
