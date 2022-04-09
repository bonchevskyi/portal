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
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Białystok'),(2,'Bielsko-Biała'),(3,'Bydgoszcz'),(4,'Częstochowa'),(5,'Gdańsk'),(6,'Gdynia'),(7,'Gorzów Wielkopolski'),(8,'Kalisz'),(9,'Katowice'),(10,'Kielce'),(11,'Koszalin'),(12,'Kraków'),(13,'Leszno'),(14,'Lublin'),(15,'Łódź'),(16,'Olsztyn'),(17,'Opole'),(18,'Poznań'),(19,'Radom'),(21,'Rzeszów'),(22,'Siedlce'),(23,'Słupsk'),(24,'Szczecin'),(25,'Toruń'),(26,'Warszawa'),(27,'Wrocław'),(28,'Zielona Góra');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `university_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_department_university1_idx` (`university_id`),
  CONSTRAINT `fk_department_university1` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=683 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'Instytut Filozofii UWB',1),(2,'Instytut Informatyki UWB',1),(3,'Instytut Socjologii UWB',1),(4,'Instytut Studiów Kulturowych UWB',1),(5,'Instytut Zarządzania UWB',1),(6,'Wydział Biologii UWB',1),(7,'Wydział Chemii UWB',1),(8,'Wydział Ekonomii i Finansów UWB',1),(9,'Wydział Filologiczny UWB',1),(10,'Wydział Fizyki UWB',1),(11,'Wydział Historii i Stosunków Międzynarodowych UWB',1),(12,'Wydział Matematyki UWB',1),(13,'Wydział Nauk o Edukacji UWB',1),(14,'Wydział Prawa UWB',1),(15,'Instytut Nauk Leśnych w Hajnówce PB',2),(16,'Wydział Architektury PB',2),(17,'Wydział Budownictwa i Nauk o Środowisku PB',2),(18,'Wydział Elektryczny PB',2),(19,'Wydział Informatyki PB',2),(20,'Wydział Inżynierii Zarządzania PB',2),(21,'Wydział Mechaniczny PB',2),(22,'Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej',3),(23,'Wydział Lekarski z Oddziałem Stomatologii i Oddziałem Nauczania w Języku Angielskim',3),(24,'Wydział Nauk o Zdrowiu',3),(25,'Wydział Budowy Maszyn i Informatyki ATH',4),(26,'Wydział Humanistyczno-Społeczny ATH',4),(27,'Wydział Inżynerii Materiałów, Budownictwa i Środowiska ATH',4),(28,'Wydział Nauk o Zdrowiu ATH',4),(29,'Wydział Zarządzania i Transportu ATH',4),(30,'Wydział Edukacji Muzycznej',5),(31,'Wydział Historyczny',5),(32,'Wydział Mechatroniki',5),(33,'Wydział Językoznawstwa',5),(34,'Wydział Literaturoznawstwa',5),(35,'Wydział Nauk Biologicznych',5),(36,'Wydział Nauk o Polityce i Administracji',5),(37,'Wydział Pedagogiki',5),(38,'Wydział Psychologii',5),(39,'Instytut Filozofii',5),(40,'Instytut Fizyki',5),(41,'Instytut Geografii',5),(42,'Instytut Informatyki',5),(43,'Instytut Inżynierii Materiałowej',5),(44,'Instytut Komunikacji Społecznej i Mediów',5),(45,'Instytut Kultury Fizycznej',5),(46,'Instytut Matematyki',5),(47,'Instytut Nauk o Kulturze',5),(48,'Instytut Prawa i Ekonomii',5),(49,'Wydział Budownictwa, Architektury i Inżynierii Środowiska',6),(50,'Wydział Hodowli i Biologii Zwierząt',6),(51,'Wydział Inżynierii Mechanicznej',6),(52,'Wydział Rolnictwa i Biotechnologii',6),(53,'Wydział Technologii i Inżynierii Chemicznej',6),(54,'Wydział Telekomunikacji, Informatyki i Elektrotechniki',6),(55,'Wydział Zarządzania',6),(56,'Wydział Farmaceutyczny',7),(57,'Wydział Lekarski',7),(58,'Wydział Nauk o Zdrowiu',7),(59,'Wydział I: Kompozycji, Teorii Muzyki i Reżyserii Dźwięku',8),(60,'Wydział II: Instrumentalny',8),(61,'Wydział III: Wokalno-Aktorski',8),(62,'Wydział IV: Dyrygentury, Jazzu i Edukacji Muzycznej',8),(63,'Wydział Budownictwa',9),(64,'Wydział Elektryczny',9),(65,'Wydział Infrastruktury i Środowiska',9),(66,'Wydział Inżynierii Mechanicznej i Informatyki',9),(67,'Wydział Inżynierii Produkcji i Technologii Materiałów',9),(68,'Wydział Zarządzania',9),(69,'Wydział Humanistyczny',10),(70,'Wydział Nauk o Zdrowiu',10),(71,'Wydział Nauk Ścisłych, Przyrodniczych i Technicznych',10),(72,'Wydział Nauk Społecznych',10),(73,'Wydział Prawa i Ekonomii',10),(74,'Wydział Sztuki',10),(75,'Wydział Chemiczny',11),(76,'Wydział Fizyki Technicznej i Matematyki Stosowanej',11),(77,'Wydział Inżynierii Mechanicznej i Okrętownictwa',11),(78,'Wydział Architektury',11),(79,'Wydział Elektroniki, Telekomunikacji i Informatyki',11),(80,'Wydział Elektrotechniki i Automatyki',11),(81,'Wydział Inżynierii Lądowej i Środowiska',11),(82,'Wydział Zarządzania i Ekonomii',11),(83,'Wydział Oceanografii i Geografii UG',12),(84,'Wydział Biologii UG',12),(85,'Wydział Matematyki, Fizyki i Informatyki UG',12),(86,'Wydział Ekonomiczny UG',12),(87,'Wydział Nauk Społecznych UG',12),(88,'Wydział Zarządzania UG',12),(89,'Międzyuczelniany Wydział Biotechnologii UG i GUMed',12),(90,'Wydział Chemii UG',12),(91,'Wydział Filologiczny UG',12),(92,'Wydział Historyczny UG',12),(93,'Wydział Prawa i Administracji UG',12),(94,'Wydział Zarządzania i Nauk o Jakości UMG',13),(95,'Wydział Elektryczny UMG',13),(96,'Wydział Mechaniczny UMG',13),(97,'Wydział Nawigacyjny UMG',13),(98,'Wydział Administracji i Bezpieczeństwa Narodowego',14),(99,'Wydział Ekonomiczny',14),(100,'Wydział Humanistyczny',14),(101,'Wydział Techniczny',14),(102,'Wydział Turystyki i Nauk o Zdrowiu',14),(103,'Wydział Medyczny PWSZ w Kaliszu',15),(104,'Wydział Politechniczny PWSZ w Kaliszu',15),(105,'Wydział Rehabilitacji i Sportu PWSZ w Kaliszu',15),(106,'Wydział Zarządzania PWSZ w Kaliszu',15),(107,'Wydział Prawa i Administracji UŚ',16),(108,'Indywidualne studia międzyobszarowe UŚ',16),(109,'Międzynarodowa Środowiskowa Szkoła Doktorska przy Centrum Studiów Polarnych UŚ',16),(110,'Szkoła doktorska UŚ',16),(111,'Szkoła Filmowa im. Krzysztofa Kieślowskiego UŚ',16),(112,'Wydział Nauk Przyrodniczych UŚ',16),(113,'Wydział Nauk Ścisłych i Technicznych UŚ',16),(114,'Wydział Nauk Społecznych UŚ',16),(115,'Wydział Sztuki i Nauk o Edukacji UŚ',16),(116,'Wydział Humanistyczny UŚ',16),(117,'Wydział Teologiczny UŚ',16),(118,'Wydział Ekonomii',17),(119,'Wydział Finansów',17),(120,'Wydział Informatyki i Komunikacji',17),(121,'Wydział Zarządzania',17),(122,'Wydział Instrumentalny',18),(123,'Wydział Jazzu i Muzyki Rozrywkowej',18),(124,'Wydział Kompozycji, Dyrygentury, Teorii i Edukacji Muzycznej',18),(125,'Wydział Wokalno-Aktorski',18),(126,'Wydział Artystyczny',19),(127,'Wydział Projektowy',19),(128,'Collegium Medicum UJK',20),(129,'Wydział Sztuki UJK',20),(130,'Wydział Prawa i Nauk Społecznych UJK',20),(131,'Wydział Humanistyczny UJK',20),(132,'Wydział Nauk Ścisłych i Przyrodniczych UJK',20),(133,'Wydział Pedagogiki i Psychologii',20),(134,'Wydział Budownictwa i Architektury',21),(135,'Wydział Elektrotechniki, Automatyki i Informatyki',21),(136,'Wydział Inżynierii Środowiska, Geomatyki i Energetyki',21),(137,'Wydział Mechatroniki i Budowy Maszyn',21),(138,'Wydział Zarządzania i Modelowania Komputerowego',21),(139,'Wydział Architektury i Wzornictwa',22),(140,'Wydział Elektroniki i Informatyki',22),(141,'Wydział Humanistyczny',22),(142,'Wydział Inżynierii Lądowej, Środowiska i Geodezji',22),(143,'Wydział Mechaniczny',22),(144,'Wydział Nauk Ekonomicznych',22),(145,'Instytut Kultury Fizycznej i Zdrowia PWSZ w Koszalinie',23),(146,'Instytut Nauk Humanistycznych PWSZ w Koszalinie',23),(147,'Wydział Biochemii, Biofizyki i Biotechnologii UJ',24),(148,'Wydział Geografii i Geologii UJ',24),(149,'Wydział Historyczny UJ',24),(150,'Wydział Lekarski UJ',24),(151,'Wydział Nauk o Zdrowiu UJ',24),(152,'Wydział Polonistyki UJ',24),(153,'Wydział Biologii UJ',24),(154,'Wydział Chemii UJ',24),(155,'Wydział Farmaceutyczny UJ',24),(156,'Wydział Filologiczny UJ',24),(157,'Wydział Filozoficzny UJ',24),(158,'Wydział Fizyki, Astronomii i Informatyki Stosowanej UJ',24),(159,'Wydział Matematyki i Informatyki UJ',24),(160,'Wydział Prawa i Administracji UJ',24),(161,'Wydział Studiów Międzynarodowych i Politycznych UJ',24),(162,'Wydział Zarządzania i Komunikacji Społecznej UJ',24),(163,'Wydział Inżynierii Elektrycznej i Komputerowej',25),(164,'Wydział Inżynierii Lądowej',25),(165,'Wydział Inżynierii Materiałowej i Fizyki',25),(166,'Wydział Inżynierii Środowiska i Energetyki',25),(167,'Wydział Mechaniczny',25),(168,'Wydział Architektury',25),(169,'Wydział Informatyki i Telekomunikacji',25),(170,'Wydział Inżynierii i Technologii Chemicznej',25),(171,'Wydział Inżynierii Produkcji i Energetyki UR w Krakowie',26),(172,'Wydział Inżynierii Środowiska i Geodezji UR w Krakowie',26),(173,'Wydział Technologii Żywności UR w Krakowie',26),(174,'Uniwersyteckie Centrum Medycyny Weterynaryjnej UJ – UR',26),(175,'Wydział Biotechnologii i Ogrodnictwa UR w Krakowie',26),(176,'Wydział Hodowli i Biologii Zwierząt UR w Krakowie',26),(177,'Wydział Leśny UR w Krakowie',26),(178,'Wydział Rolniczo-Ekonomiczny UR w Krakowie',26),(179,'Instytut Biologii',27),(180,'Instytut Dziennikarstwa i Stosunków Międzynarodowych',27),(181,'Instytut Filologii Angielskiej',27),(182,'Instytut Filologii Polskiej',27),(183,'Instytut Filozofii i Socjologii',27),(184,'Instytut Geografii',27),(185,'Instytut Grafiki i Wzornictwa',27),(186,'Instytut Historii i Archiwistyki',27),(187,'Instytut Informatyki',27),(188,'Instytut Malarstwa i Edukacji Artystycznej',27),(189,'Instytut Matematyki',27),(190,'Instytut Nauk o Bezpieczeństwie',27),(191,'Instytut Nauk o Informacji',27),(192,'Instytut Nauk o Wychowaniu',27),(193,'Instytut Nauk Technicznych',27),(194,'Instytut Neofilologii',27),(195,'Instytut Pedagogiki Przedszkolnej i Szkolnej',27),(196,'Instytut Pedagogiki Specjalnej',27),(197,'Instytut Prawa i Ekonomii',27),(198,'Instytut Psychologii',27),(199,'Instytut Spraw Społecznych',27),(200,'Instytut Sztuki Mediów',27),(201,'Kolegium Ekonomii, Finansów i Prawa UE w Krakowie',28),(202,'Kolegium Gospodarki i Administracji Publicznej UE w Krakowie',28),(203,'Kolegium Nauk o Zarządzaniu i Jakości UE w Krakowie',28),(204,'Wydział Inżynierii Metali i Informatyki Przemysłowej AGH',29),(205,'Wydział Metali Nieżelaznych AGH',29),(206,'Wydział Odlewnictwa AGH',29),(207,'Wydział Wiertnictwa, Nafty i Gazu AGH',29),(208,'Wydział Elektrotechniki, Automatyki, Informatyki i Inżynierii Biomedycznej AGH',29),(209,'Wydział Energetyki i Paliw AGH',29),(210,'Wydział Fizyki i Informatyki Stosowanej AGH',29),(211,'Wydział Geodezji Górniczej i Inżynierii Środowiska AGH',29),(212,'Wydział Geologii, Geofizyki i Ochrony Środowiska AGH',29),(213,'Wydział Humanistyczny AGH',29),(214,'Wydział Informatyki, Elektroniki i Telekomunikacji AGH',29),(215,'Wydział Inżynierii Lądowej i Gospodarki Zasobami AGH',29),(216,'Wydział Inżynierii Materiałowej i Ceramiki AGH',29),(217,'Wydział Inżynierii Mechanicznej i Robotyki AGH',29),(218,'Wydział Matematyki Stosowanej AGH',29),(219,'Wydział Zarządzania AGH',29),(220,'Wydział I Twórczości, Interpretacji i Edukacji Muzycznej',30),(221,'Wydział II Instrumentalny',30),(222,'Wydział III Wokalno-Aktorski',30),(223,'Wydział Architektury Wnętrz',31),(224,'Wydział Form Przemysłowych',31),(225,'Wydział Grafiki',31),(226,'Wydział Intermediów',31),(227,'Wydział Konserwacji i Restauracji Dzieł Sztuki',31),(228,'Wydział Malarstwa',31),(229,'Wydział Rzeźby',31),(230,'Wydział Aktorski',32),(231,'Wydział Reżyserii Dramatu',32),(232,'Wydział Rehabilitacji Ruchowej AWF w Krakowie',33),(233,'Wydział Turystyki i Rekreacji AWF w Krakowie',33),(234,'Wydział Wychowania Fizycznego i Sportu AWF w Krakowie',33),(235,'Instytut Gospodarki i Zarządzania Przestrzenią PWSZ w Lesznie',34),(236,'Instytut Lingwistyki Stosowanej PWSZ w Lesznie',34),(237,'Instytut Pedagogiczny PWSZ w Lesznie',34),(238,'Instytut Politechniczny PWSZ w Lesznie',34),(239,'Instytut Zdrowia i Kultury Fizycznej PWSZ w Lesznie',34),(240,'Wydział Artystyczny UMCS',35),(241,'Wydział Biologii i Biotechnologii UMCS',35),(242,'Wydział Chemii UMCS',35),(243,'Wydział Ekonomiczny UMCS',35),(244,'Wydział Filozofii i Socjologii UMCS',35),(245,'Wydział Humanistyczny UMCS',35),(246,'Wydział Matematyki, Fizyki i Informatyki UMCS',35),(247,'Wydział Nauk o Ziemi i Gospodarki Przestrzennej UMCS',35),(248,'Wydział Pedagogiki i Psychologii UMCS',35),(249,'Wydział Politologii i Dziennikarstwa UMCS',35),(250,'Wydział Prawa i Administracji UMCS',35),(251,'Wydział Zamiejscowy UMCS w Puławach',35),(252,'Wydział Farmaceutyczny UMLUB',36),(253,'Wydział Lekarski UMLUB',36),(254,'Wydział Lekarsko - Dentystyczny UMLUB',36),(255,'Wydział Nauk o Zdrowiu UMLUB',36),(256,'Wydział Budownictwa i Architektury POLLUB',37),(257,'Wydział Elektrotechniki i Informatyki POLLUB',37),(258,'Wydział Inżynierii Środowiska POLLUB',37),(259,'Wydział Mechaniczny POLLUB',37),(260,'Wydział Podstaw Techniki POLLUB',37),(261,'Wydział Zarządzania POLLUB',37),(262,'Wydział Agrobioinżynierii UP w Lublinie',38),(263,'Wydział Biologii Środowiskowej UP w Lublinie',38),(264,'Wydział Inżynierii Produkcji UP w Lublinie',38),(265,'Wydział Medycyny Weterynaryjnej UP w Lublinie',38),(266,'Wydział Nauk o Zwierzętach i Biogospodarki UP w Lublinie',38),(267,'Wydział Nauk o Żywności i Biotechnologii UP w Lublinie',38),(268,'Wydział Ogrodnictwa i Architektury Krajobrazu UP w Lublinie',38),(269,'Wydział Biologii i Ochrony Środowiska UŁ',39),(270,'Wydział Chemii UŁ',39),(271,'Wydział Ekonomiczno-Socjologiczny UŁ',39),(272,'Wydział Filologiczny UŁ',39),(273,'Wydział Filozoficzno-Historyczny UŁ',39),(274,'Wydział Fizyki i Informatyki Stosowanej UŁ',39),(275,'Wydział Matematyki i Informatyki UŁ',39),(276,'Wydział Nauk Geograficznych UŁ',39),(277,'Wydział Nauk o Wychowaniu UŁ',39),(278,'Wydział Prawa i Administracji UŁ',39),(279,'Wydział Studiów Międzynarodowych i Politologicznych UŁ',39),(280,'Wydział Zarządzania UŁ',39),(281,'Centrum Kształcenia Międzynarodowego (IFE) PŁ',40),(282,'Wydział Chemiczny PŁ',40),(283,'Wydział Mechaniczny PŁ',40),(284,'Wydział Budownictwa, Architektury i Inżynierii Środowiska PŁ',40),(285,'Wydział Elektrotechniki, Elektroniki, Informatyki i Automatyki PŁ',40),(286,'Wydział Inżynierii Procesowej i Ochrony Środowiska PŁ',40),(287,'Wydział Technologii Materiałowych i Wzornictwa Tekstyliów PŁ',40),(288,'Wydział Zarządzania i Inżynierii Produkcji PŁ',40),(289,'Wydział Biotechnologii i Nauk o Żywności PŁ',40),(290,'Wydział Fizyki Technicznej, Informatyki i Matematyki Stosowanej PŁ',40),(291,'Wydział Farmaceutyczny',41),(292,'Wydział Lekarski',41),(293,'Wydział Nauk o Zdrowiu',41),(294,'Wydział Jazzu i Muzyki Estradowej',42),(295,'Wydział Sztuk Scenicznych',42),(296,'Wydział Twórczości, Interpretacji, Edukacji i Produkcji Muzycznej',42),(297,'Wydział Wykonawstwa Instrumentalnego',42),(298,'Wydział Sztuk Pięknych',43),(299,'Wydział Sztuk Projektowych',43),(300,'Wydział Aktorski',44),(301,'Wydział Operatorski i Realizacji Telewizyjnej',44),(302,'Wydział Organizacji Sztuki Filmowej',44),(303,'Wydział Reżyserii Filmowej i Telewizyjnej',44),(304,'Szkoła Zdrowia Publicznego UWM',45),(305,'Wydział Bioinżynierii Zwierząt UWM',45),(306,'Wydział Biologii i Biotechnologii UWM',45),(307,'Wydział Geoinżynierii UWM',45),(308,'Wydział Humanistyczny UWM',45),(309,'Wydział Matematyki i Informatyki UWM',45),(310,'Wydział Medycyny Weterynaryjnej UWM',45),(311,'Wydział Nauk Ekonomicznych UWM',45),(312,'Wydział Nauk Społecznych UWM',45),(313,'Wydział Nauk Technicznych UWM',45),(314,'Wydział Nauki o Żywności UWM',45),(315,'Wydział Prawa i Administracji UWM',45),(316,'Wydział Rolnictwa i Leśnictwa UWM',45),(317,'Wydział Sztuki UWM',45),(318,'Wydział Teologii UWM',45),(319,'Wydział Lekarski UWM',45),(320,'Wydział Budownictwa i Architektury PO',46),(321,'Wydział Ekonomii i Zarządzania PO',46),(322,'Wydział Elektrotechniki, Automatyki i Informatyki PO',46),(323,'Wydział Inżynierii Produkcji i Logistyki PO',46),(324,'Wydział Mechaniczny PO',46),(325,'Wydział Wychowania Fizycznego i Fizjoterapii PO',46),(326,'Wydział Chemii',47),(327,'Wydział Matematyki, Fizyki i Informatyki',47),(328,'Wydział Ekonomiczny',47),(329,'Wydział Filologiczny',47),(330,'Wydział Lekarski',47),(331,'Wydział Nauk o Polityce i Komunikacji Społecznej',47),(332,'Wydział Nauk Społecznych',47),(333,'Wydział Prawa i Administracji',47),(334,'Wydział Przyrodniczo-Techniczny',47),(335,'Wydział Sztuki',47),(336,'Wydział Teologiczny',47),(337,'Wydział Nauk o Zdrowiu',47),(338,'Collegium Polonicum w Słubicach UAM',48),(339,'Wydział Biologii UAM',48),(340,'Wydział Filologii Polskiej i Klasycznej UAM',48),(341,'Wydział Matematyki i Informatyki UAM',48),(342,'Wydział Neofilologii UAM',48),(343,'Wydział Prawa i Administracji UAM',48),(344,'Wydział Anglistyki UAM',48),(345,'Wydział Antropologii i Kulturoznawstwa UAM',48),(346,'Wydział Archeologii UAM',48),(347,'Wydział Chemii UAM',48),(348,'Wydział Filozoficzny UAM',48),(349,'Wydział Fizyki UAM',48),(350,'Wydział Geografii Społeczno-Ekonomicznej i Gospodarki Przestrzennej UAM',48),(351,'Wydział Historii UAM',48),(352,'Wydział Nauk Geograficznych i Geologicznych UAM',48),(353,'Wydział Nauk o Sztuce UAM',48),(354,'Wydział Nauk Politycznych i Dziennikarstwa UAM',48),(355,'Wydział Pedagogiczno-Artystyczny w Kaliszu UAM',48),(356,'Wydział Psychologii i Kognitywistyki UAM',48),(357,'Wydział Socjologii UAM',48),(358,'Wydział Studiów Edukacyjnych UAM',48),(359,'Wydział Teologiczny UAM',48),(360,'Instytut Kultury Europejskiej w Gnieźnie UAM',48),(361,'Nadnotecki Instytut UAM w Pile',48),(362,'Wydział Ekonomiczny UP w Poznaniu',49),(363,'Wydział Inżynierii Środowiska i Inżynierii Mechanicznej UP w Poznaniu',49),(364,'Wydział Leśny i Technologii Drewna UP w Poznaniu',49),(365,'Wydział Medycyny Weterynaryjnej i Nauk o Zwierzętach UP w Poznaniu',49),(366,'Wydział Nauk o Żywności i Żywieniu UP w Poznaniu',49),(367,'Wydział Rolnictwa, Ogrodnictwa i Bioinżynierii UP w Poznaniu',49),(368,'Wydział Inżynierii Materiałowej i Fizyki Technicznej PP',50),(369,'Wydział Inżynierii Mechanicznej PP',50),(370,'Wydział Technologii Chemicznej PP',50),(371,'Wydział Automatyki, Robotyki i Elektrotechniki PP',50),(372,'Wydział Informatyki i Telekomunikacji PP',50),(373,'Wydział Architektury PP',50),(374,'Wydział Inżynierii Lądowej i Transportu PP',50),(375,'Wydział Inżynierii Środowiska i Energetyki PP',50),(376,'Wydział Inżynierii Zarządzania PP',50),(377,'Aplikacje internetu rzeczy',51),(378,'Applied economic and social analysis',51),(379,'Bachelor in business administration',51),(380,'Ekonomia',51),(381,'Finance',51),(382,'Finanse, audyt, inwestycje',51),(383,'Gospodarka turystyczna',51),(384,'Informatyka i ekonometria',51),(385,'Innovation management',51),(386,'Jakość i rozwój produktu',51),(387,'Kierunek prawno-ekonomiczny',51),(388,'Logistyka',51),(389,'Międzynarodowe stosunki gospodarcze',51),(390,'Nadzór i kontrola',51),(391,'Polityka społeczna',51),(392,'Product and process management',51),(393,'Quantitative finance',51),(394,'Rachunkowość i finanse biznesu',51),(395,'Studia podyplomowe',51),(396,'Transition, Innovation and Sustainability Environments',51),(397,'Zarządzanie',51),(398,'Zarządzanie i inżynieria produkcji',51),(399,'Zarządzanie ryzykiem finansowym',51),(400,'Wydział Farmaceutyczny',52),(401,'Wydział Lekarski',52),(402,'Wydział Medyczny',52),(403,'Wydział Nauk o Zdrowiu',52),(404,'Wydział Animacji',53),(405,'Wydział Architektury i Wzornictwa',53),(406,'Wydział Architektury Wnętrz i Scenografii',53),(407,'Wydział Edukacji Artystycznej i Kuratorstwa',53),(408,'Wydział Fotografii',53),(409,'Wydział Grafiki i Komunikacji Wizualnej',53),(410,'Wydział Malarstwa i Rysunku',53),(411,'Wydział Rzeźby',53),(412,'Wydział Sztuki Mediów',53),(413,'Wydział Instrumentalistyki, Jazzu i Muzyki Estradowej',54),(414,'Wydział Kompozycji, Dyrygentury, Wokalistyki, Teorii Muzyki i Edukacji Artystycznej',54),(415,'Wydział Nauk o Kulturze Fizycznej AWF w Poznaniu',55),(416,'Wydział Nauk o Zdrowiu AWF w Poznaniu',55),(417,'Wydział Ekonomii i Finansów',56),(418,'Wydział Filologiczno-Pedagogiczny',56),(419,'Wydział Inżynierii Chemicznej i Towaroznawstwa',56),(420,'Wydział Mechaniczny',56),(421,'Wydział Nauk Medycznych i Nauk o Zdrowiu',56),(422,'Wydział Prawa i Administracji',56),(423,'Wydział Sztuki',56),(424,'Wydział Transportu, Elektrotechniki i Informatyki',56),(425,'Wydział Budownictwa, Inżynierii Środowiska i Architektury',57),(426,'Wydział Budowy Maszyn i Lotnictwa',57),(427,'Wydział Chemiczny',57),(428,'Wydział Elektrotechniki i Informatyki',57),(429,'Wydział Matematyki i Fizyki Stosowanej',57),(430,'Wydział Mechaniczno-Technologiczny w Stalowej Woli',57),(431,'Wydział Zarządzania',57),(432,'Kolegium Nauk Humanistycznych UR',58),(433,'Kolegium Nauk Medycznych UR',58),(434,'Kolegium Nauk Przyrodniczych UR',58),(435,'Kolegium Nauk Społecznych UR',58),(436,'Wydział Agrobioinżynierii i Nauk o Zwierzętach',59),(437,'Wydział Nauk Humanistycznych',59),(438,'Wydział Nauk Medycznych i Nauk o Zdrowiu',59),(439,'Wydział Nauk Ścisłych i Przyrodniczych',59),(440,'Wydział Nauk Społecznych',59),(441,'Instytut Bezpieczeństwa i Zarządzania',60),(442,'Instytut Biologii i Nauk o Ziemi',60),(443,'Instytut Filologii',60),(444,'Instytut Geografii Społeczno-Ekonomicznej i Turystyki',60),(445,'Instytut Historii',60),(446,'Instytut Nauk o Zdrowiu',60),(447,'Instytut Nauk Ścisłych i Technicznych',60),(448,'Instytut Pedagogiki',60),(449,'Instytut Prawa i Administracji',60),(450,'Katedra Sztuki Muzycznej',60),(451,'Wydział Biotechnologii i Hodowli Zwierząt',61),(452,'Wydział Budownictwa i Inżynierii Środowiska',61),(453,'Wydział Ekonomiczny',61),(454,'Wydział Elektryczny',61),(455,'Wydział Informatyki',61),(456,'Wydział Inżynierii Mechanicznej i Mechatroniki',61),(457,'Wydział Kształtowania Środowiska i Rolnictwa',61),(458,'Wydział Nauk o Żywności i Rybactwa',61),(459,'Wydział Techniki Morskiej i Transportu',61),(460,'Wydział Technologii i Inżynierii Chemicznej',61),(461,'Wydział Architektury',61),(462,'Wydział Farmacji, Biotechnologii Medycznej i Medycyny Laboratoryjnej',62),(463,'Wydział Medycyny i Stomatologii',62),(464,'Wydział Nauk o Zdrowiu',62),(465,'Wydział Architektury Wnętrz',63),(466,'Wydział Edukacji Muzycznej',63),(467,'Wydział Grafiki',63),(468,'Wydział Instrumentalny',63),(469,'Wydział Malarstwa',63),(470,'Wydział Sztuki Mediów',63),(471,'Wydział Wokalny',63),(472,'Wydział Wzornictwa',63),(473,'Wydział Informatyki i Telekomunikacji',64),(474,'Wydział Inżynieryjno - Ekonomiczny Transportu',64),(475,'Wydział Mechaniczny',64),(476,'Wydział Mechatroniki i Elektrotechniki',64),(477,'Wydział Nawigacyjny',64),(478,'Wydział Chemii',65),(479,'Wydział Farmaceutyczny w Bydgoszczy',65),(480,'Wydział Fizyki, Astronomii i Informatyki Stosowanej',65),(481,'Wydział Humanistyczny',65),(482,'Wydział Lekarski w Bydgoszczy',65),(483,'Wydział Matematyki i Informatyki',65),(484,'Wydział Nauk Historycznych',65),(485,'Wydział Nauk o Polityce i Bezpieczeństwie',65),(486,'Wydział Nauk o Zdrowiu w Bydgoszczy',65),(487,'Wydział Nauk o Ziemi i Gospodarki Przestrzennej',65),(488,'Wydział Sztuk Pięknych UMK',65),(489,'Wydział Nauk Biologicznych i Weterynaryjnych',65),(490,'Wydział Nauk Ekonomicznych i Zarządzania UMK',65),(491,'Wydział Prawa i Administracji',65),(492,'Wydział Teologiczny',65),(493,'Wydział Filozofii i Nauk Społecznych',65),(494,'Wydział Biologii UW',66),(495,'Wydział Fizyki UW',66),(496,'Wydział Geologii UW',66),(497,'Wydział Nauk Ekonomicznych UW',66),(498,'Wydział Nauk Politycznych i Studiów Międzynarodowych UW',66),(499,'Wydział Polonistyki UW',66),(500,'Wydział Prawa i Administracji UW',66),(501,'Wydział Chemii UW',66),(502,'Wydział Dziennikarstwa, Informacji i Bibliologii UW',66),(503,'Wydział Neofilologii UW',66),(504,'Wydział Orientalistyczny UW',66),(505,'Wydział Stosowanych Nauk Społecznych i Resocjalizacji UW',66),(506,'Wydział Zarządzania UW',66),(507,'Wydział „Artes Liberales” UW',66),(508,'Wydział Filozofii UW',66),(509,'Wydział Geografii i Studiów Regionalnych UW',66),(510,'Wydział Archeologii UW',66),(511,'Wydział Historii UW',66),(512,'Wydział Lingwistyki Stosowanej UW',66),(513,'Wydział Matematyki, Informatyki i Mechaniki UW',66),(514,'Wydział Nauk o Kulturze i Sztuce UW',66),(515,'Wydział Pedagogiczny UW',66),(516,'Wydział Psychologii UW',66),(517,'Wydział Socjologii UW',66),(518,'Wydział Biologii i Nauk o Środowisku',67),(519,'Wydział Filozofii Chrześcijańskiej',67),(520,'Wydział Matematyczno-Przyrodniczy',67),(521,'Wydział Nauk Historycznych',67),(522,'Wydział Nauk Humanistycznych',67),(523,'Wydział Nauk Pedagogicznych',67),(524,'Wydział Prawa i Administracji',67),(525,'Wydział Prawa Kanonicznego',67),(526,'Wydział Studiów nad Rodziną',67),(527,'Wydział Teologiczny',67),(528,'Wydział Medyczny',67),(529,'Wydział Społeczno-Ekonomiczny',67),(530,'Wydział Elektroniki i Technik Informacyjnych PW',68),(531,'Wydział Instalacji Budowlanych, Hydrotechniki i Inżynierii Środowiska PW',68),(532,'Wydział Inżynierii Lądowej PW',68),(533,'Wydział Transportu PW',68),(534,'Kolegium Nauk Ekonomicznych i Społecznych - Oddział w Płocku',68),(535,'Wydział Budownictwa, Mechaniki i Petrochemii - Oddział w Płocku',68),(536,'Wydział Mechatroniki PW',68),(537,'Wydział Inżynierii Materiałowej PW',68),(538,'Wydział Administracji i Nauk Społecznych PW',68),(539,'Wydział Architektury PW',68),(540,'Wydział Chemiczny PW',68),(541,'Wydział Elektryczny PW',68),(542,'Wydział Fizyki PW',68),(543,'Wydział Geodezji i Kartografii PW',68),(544,'Wydział Inżynierii Chemicznej i Procesowej PW',68),(545,'Wydział Matematyki i Nauk Informacyjnych PW',68),(546,'Wydział Mechaniczny Energetyki i Lotnictwa PW',68),(547,'Wydział Mechaniczny Technologiczny PW',68),(548,'Wydział Samochodów i Maszyn Roboczych PW',68),(549,'Wydział Zarządzania PW',68),(550,'Wydział Lekarski',69),(551,'Wydział Farmaceutyczny',69),(552,'Wydział Lekarsko-Stomatologiczny',69),(553,'Wydział Nauk o Zdrowiu',69),(554,'Wydział Medyczny',69),(555,'Wydział Dyrygentury i Wokalistyki Chóralnej, Edukacji Muzycznej i Rytmiki',70),(556,'Wydział Dyrygentury Symfoniczno-Operowej',70),(557,'Wydział Instrumentalno-Pedagogiczny, Edukacji Muzycznej i Wokalistyki w Białymstoku',70),(558,'Wydział Instrumentalny',70),(559,'Wydział Jazzu i Muzyki Estradowej',70),(560,'Wydział Kompozycji i Teorii Muzyki',70),(561,'Wydział Muzyki Kościelnej',70),(562,'Wydział Reżyserii Dźwięku',70),(563,'Wydział Tańca',70),(564,'Wydział Wokalno-Aktorski',70),(565,'Instytut Pedagogiki',71),(566,'Instytut Pedagogiki Specjalnej',71),(567,'Instytut Wspomagania Rozwoju Człowieka i Edukacji',71),(568,'Instytut Filozofii i Socjologii',71),(569,'Instytut Psychologii',71),(570,'Instytut Edukacji Artystycznej',71),(571,'Katedra Profilaktyki Społecznej i Pracy Socjalnej',71),(572,'Wydział Bezpieczeństwa Narodowego',72),(573,'Wydział Zarządzania i Dowodzenia',72),(574,'Wydział Wojskowy',72),(575,'Instytut Prawa',72),(576,'Instytut Historii Wojskowej',72),(577,'Wydział Nauk Społecznych',73),(578,'Wydział Teologiczny',73),(579,'Instytut Optoelektroniki',74),(580,'Wydział Bezpieczeństwa, Logistyki i Zarządzania',74),(581,'Wydział Cybernetyki',74),(582,'Wydział Elektroniki',74),(583,'Wydział Inżynierii Lądowej i Geodezji',74),(584,'Wydział Inżynierii Mechanicznej',74),(585,'Wydział Mechatroniki, Uzbrojenia i Lotnictwa',74),(586,'Wydział Nowych Technologii i Chemii',74),(587,'Wydział Aktorski',75),(588,'Wydział Reżyserii',75),(589,'Wydział Sztuki Lalkarskiej - Oddział w Białymstoku',75),(590,'Wydział Wiedzy o Teatrze',75),(591,'Wydział Architektury Wnętrz',76),(592,'Wydział Grafiki',76),(593,'Wydział Konserwacji i Restauracja Dzieł Sztuki',76),(594,'Wydział Malarstwa',76),(595,'Wydział Rzeźby',76),(596,'Wydział Scenografii',76),(597,'Wydział Sztuki Mediów',76),(598,'Wydział Wzornictwa',76),(599,'Wydział Zarządzania Kulturą Wizualną',76),(600,'Wydział Rehabilitacji',77),(601,'Wydział Wychowania Fizycznego',77),(602,'Wydział Inżynierii Produkcji SGGW',78),(603,'Wydział Budownictwa i Inżynierii Środowiska SGGW',78),(604,'Wydział Ekonomiczny SGGW',78),(605,'Wydział Hodowli, Bioinżynierii i Inżynierii Środowiska SGGW',78),(606,'Wydział Leśny SGGW',78),(607,'Wydział Medycyny Weterynaryjnej SGGW',78),(608,'Wydział Ogrodniczy SGGW',78),(609,'Wydział Rolnictwa i Ekologii SGGW',78),(610,'Wydział Socjologii i Pedagogiki SGGW',78),(611,'Wydział Technologii Drewna SGGW',78),(612,'Wydział Technologii Żywności SGGW',78),(613,'Wydział Zastosowań Informatyki i Matematyki SGGW',78),(614,'Wydział Żywienia Człowieka SGGW',78),(615,'Wydział Biologii i Biotechnologii SGGW',78),(616,'Bezpieczeństwo wewnętrzne',79),(617,'Inżynieria bezpieczeństwa',79),(618,'Kolegium Analiz Ekonomicznych SGH',80),(619,'Kolegium Ekonomiczno-Społeczne SGH',80),(620,'Kolegium Gospodarki Światowej SGH',80),(621,'Kolegium Nauk o Przedsiębiorstwie SGH',80),(622,'Kolegium Zarządzania i Finansów SGH',80),(623,'Wydział Biotechnologii UWr',81),(624,'Wydział Chemii UWr',81),(625,'Wydział Filologiczny UWr',81),(626,'Wydział Fizyki i Astronomii UWr',81),(627,'Wydział Matematyki i Informatyki UWr',81),(628,'Wydział Nauk Biologicznych UWr',81),(629,'Wydział Nauk Historycznych i Pedagogicznych UWr',81),(630,'Wydział Nauk o Ziemi i Kształtowania Środowiska UWr',81),(631,'Wydział Nauk Społecznych UWr',81),(632,'Wydział Prawa, Administracji i Ekonomii UWr',81),(633,'Wydział Biologii i Hodowli Zwierząt',82),(634,'Wydział Biotechnologii i Nauk o Żywności',82),(635,'Wydział Inżynierii Kształtowania Środowiska i Geodezji',82),(636,'Wydział Medycyny Weterynaryjnej',82),(637,'Wydział Przyrodniczo-Technologiczny',82),(638,'Wydział Nauk o Zdrowiu',83),(639,'Wydział Farmaceutyczny',83),(640,'Wydział Lekarski',83),(641,'Wydział Lekarsko-Stomatologiczny',83),(642,'Filia UE w Jeleniej Górze',84),(643,'Wydział Ekonomii i Finansów UE Wrocław',84),(644,'Wydział Inżynierii Produkcji UE Wrocław',84),(645,'Wydział Zarządzania UE Wrocław',84),(646,'Wydział Elektroniki, Fotoniki i Mikrosystemów',85),(647,'Wydział Geoinżynierii, Górnictwa i Geologii',85),(648,'Wydział Zarządzania',85),(649,'Wydział Budownictwa Lądowego i Wodnego',85),(650,'Wydział Chemiczny',85),(651,'Wydział Matematyki',85),(652,'Wydział Podstawowych Problemów Techniki',85),(653,'Wydział Architektury',85),(654,'Wydział Inżynierii Środowiska',85),(655,'Wydział Mechaniczny',85),(656,'Wydział Elektryczny',85),(657,'Wydział Informatyki i Telekomunikacji',85),(658,'Wydział Mechaniczno-Energetyczny',85),(659,'Wydział Architektury Wnętrz, Wzornictwa i Scenografii',86),(660,'Wydział Ceramiki i Szkła',86),(661,'Wydział Grafiki i Sztuki Mediów',86),(662,'Wydział Malarstwa',86),(663,'Wydział Rzeźby i Mediacji Sztuki',86),(664,'Wydział Edukacji Muzycznej, Chóralistyki i Muzyki Kościelnej',87),(665,'Wydział Instrumentalny',87),(666,'Wydział Kompozycji, Dyrygentury, Teorii Muzyki i Muzykoterapii',87),(667,'Wydział Wokalny',87),(668,'Wydział Fizjoterapii',88),(669,'Wydział Wychowania Fizycznego i Sportu',88),(670,'Wydział Artystyczny UZ',89),(671,'Wydział Budownictwa, Architektury i Inżynierii Środowiska UZ',89),(672,'Wydział Ekonomii i Zarządzania UZ',89),(673,'Wydział Fizyki i Astronomii UZ',89),(674,'Wydział Humanistyczny UZ',89),(675,'Wydział Informatyki, Elektrotechniki i Automatyki UZ',89),(676,'Wydział Lekarski i Nauk o Zdrowiu UZ',89),(677,'Wydział Matematyki, Informatyki i Ekonometrii UZ',89),(678,'Wydział Mechaniczny UZ',89),(679,'Wydział Nauk Biologicznych UZ',89),(680,'Wydział Nauk Społecznych UZ',89),(681,'Wydział Prawa i Administracji UZ',89),(682,'Filia UZ w Sulechowie',89);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major`
--

DROP TABLE IF EXISTS `major`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `major` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `department_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_major_department1_idx` (`department_id`),
  CONSTRAINT `fk_major_department1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major`
--

LOCK TABLES `major` WRITE;
/*!40000 ALTER TABLE `major` DISABLE KEYS */;
/*!40000 ALTER TABLE `major` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `replies`
--

DROP TABLE IF EXISTS `replies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `replies` (
  `posts_id` int unsigned NOT NULL,
  `text` varchar(1024) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`posts_id`),
  UNIQUE KEY `posts_id_UNIQUE` (`posts_id`),
  KEY `fk_replies_posts1_idx` (`posts_id`),
  CONSTRAINT `fk_replies_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replies`
--

LOCK TABLES `replies` WRITE;
/*!40000 ALTER TABLE `replies` DISABLE KEYS */;
/*!40000 ALTER TABLE `replies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(16) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name_UNIQUE` (`role_name`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ADMIN'),(4,'GUEST'),(2,'MODERATOR'),(3,'USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `user_image`
--

DROP TABLE IF EXISTS `user_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_image` (
  `user_id` int unsigned NOT NULL,
  `path` varchar(128) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  KEY `fk_user_image_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_image_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_image`
--

LOCK TABLES `user_image` WRITE;
/*!40000 ALTER TABLE `user_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-31 14:02:04
