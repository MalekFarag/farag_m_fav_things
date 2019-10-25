-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 25, 2019 at 10:27 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fav_things`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_things`
--

DROP TABLE IF EXISTS `tbl_things`;
CREATE TABLE IF NOT EXISTS `tbl_things` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `genre` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `songs` varchar(100) DEFAULT NULL,
  `date` varchar(30) DEFAULT NULL,
  `thing` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_things`
--

INSERT INTO `tbl_things` (`ID`, `name`, `image`, `genre`, `description`, `songs`, `date`, `thing`) VALUES
(1, 'YBN Cordae', 'cordae.png', 'Rap', '', 'Broke as F*ck, RNP, Have Mercy', NULL, 'music'),
(2, 'Yung Gravy', 'gravy.png', 'Alternative Hip-hop', '', 'Whip a Tesla, Mr. Clean, 1 Thot 2 Thot', NULL, 'music'),
(3, 'Trippe Redd', 'trippie.png', 'Hip-hop/R&B', '', '1400 Freestyle, Shake it Up, Taking a Walk', NULL, 'music'),
(4, 'Nav', 'nav.png', 'Melody Hip-hop', '', 'Tap, Myself, Price on My Head', NULL, 'music'),
(5, 'Rainbow 6 Siege', 'siege.png', 'First Person Shooter', '', NULL, NULL, 'game'),
(6, 'Minecraft', 'minecraft.png', 'Survival/Sandbox', '', NULL, NULL, 'game'),
(7, 'Rocket League', 'rl.png', 'Physics-based Car Soccer', '', NULL, NULL, 'game'),
(8, 'Overwatch', 'overwatch.png', 'First Person Shooter', '', NULL, NULL, 'game'),
(9, 'Music Festivals', 'fest.png', 'Social Activity', '', NULL, NULL, 'activity'),
(10, 'Kayak', 'kayak.png', 'Sport', '', NULL, NULL, 'activity'),
(11, 'Adventuring', 'adventure.png', 'Travel?', '', NULL, NULL, 'activity'),
(12, 'Soccer', 'soccer.png', 'Sport', '', NULL, NULL, 'activity');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
