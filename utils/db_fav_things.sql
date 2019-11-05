-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 05, 2019 at 02:45 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_fav_things`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_things`
--

CREATE TABLE `tbl_things` (
  `ID` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `image` varchar(30) NOT NULL,
  `genre` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `songs` varchar(100) DEFAULT NULL,
  `date` varchar(30) DEFAULT NULL,
  `thing` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_things`
--

INSERT INTO `tbl_things` (`ID`, `name`, `image`, `genre`, `description`, `songs`, `date`, `thing`) VALUES
(1, 'YBN Cordae', 'cordae.png', 'Rap', 'Cordae Amari Dunston, known professionally as YBN Cordae, is an American rapper, singer, and songwriter from Suitland, Maryland. Dunston began rapping at a young age under the stage name Entendre.', 'Broke as F*ck, RNP, Have Mercy', NULL, 'music'),
(2, 'Yung Gravy', 'gravy.png', 'Alternative Hip-hop', 'Matthew Hauri, better known as Yung Gravy, is an American rapper, singer and songwriter from Rochester, Minnesota. He is known for his 2016 single \"Mr. Clean\". Other popular songs include, \"1 Thot 2 Thot Red Thot Blue Thot\" and his 2018 single \"Alley Oop\" featuring Lil Baby.', 'Whip a Tesla, Mr. Clean, 1 Thot 2 Thot', NULL, 'music'),
(3, 'Trippie Redd', 'trippie.png', 'Hip-hop/R&B', 'Michael Lamar White IV, known professionally as Trippie Redd, is an American rapper, singer and songwriter. White is best known for his songs \"Dark Knight Dummo\" and \"Topanga\" with the former peaking at number 72 on the Billboard Hot 100 and the latter peaking at number 52.', '1400 Freestyle, Shake it Up, Taking a Walk', NULL, 'music'),
(5, 'Rainbow 6 Siege', 'siege.png', 'First Person Shooter', 'The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, and taking control of a capture point.', NULL, 'December 1, 2015', 'game'),
(6, 'Minecraft', 'minecraft.png', 'Survival/Sandbox', 'Minecraft is a sandbox video game created by Swedish game developer Markus Persson and released by Mojang in 2011. The game allows players to build with a variety of different blocks in a 3D procedurally generated world, requiring creativity from players. ', NULL, '18 November 2011', 'game'),
(7, 'Rocket League', 'rl.png', 'Physics-based Car Soccer', 'Described as \"soccer, but with rocket-powered cars\", Rocket League has up to four players assigned to each of the two teams, using rocket-powered vehicles to hit a ball into their opponent\s goal and score points over the course of a match.', NULL, 'July 7, 2015', 'game'),
(9, 'Music Festivals', 'fest.png', 'Social Activity', 'Overall a great experience and definitely coming next year, great artists, good arrangements, good time management, etc. Especially loved the courage shown in stopping the show right on time on Day one.', NULL, NULL, 'activity'),
(10, 'Kayak', 'kayak.png', 'Sport', 'Kayaking is the use of a kayak for moving across water. It is distinguished from canoeing by the sitting position of the paddler and the number of blades on the paddle. A kayak is a low-to-the-water, canoe-like boat in which the paddler sits facing forward, legs in front, using a double-bladed paddle to pull front-to-back on one side and then the other in rotation.', NULL, NULL, 'activity'),
(12, 'Soccer', 'soccer.png', 'Sport', 'Association football, more commonly known as football or soccer,[a] is a team sport played with a spherical ball between two teams of eleven players. It is played by 250 million players in over 200 countries and dependencies, making it the world\'s most popular sport.', NULL, NULL, 'activity');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_things`
--
ALTER TABLE `tbl_things`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_things`
--
ALTER TABLE `tbl_things`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
