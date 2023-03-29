-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 29, 2023 at 01:50 AM
-- Server version: 8.0.32
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `park-here`
--
CREATE DATABASE IF NOT EXISTS `park-here` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `park-here`;

-- --------------------------------------------------------

--
-- Table structure for table `attendants`
--

DROP TABLE IF EXISTS `attendants`;
CREATE TABLE IF NOT EXISTS `attendants` (
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` bigint NOT NULL,
  `password` varchar(500) NOT NULL,
  `parkingLotID` varchar(20) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `attendants`
--

INSERT INTO `attendants` (`firstName`, `lastName`, `email`, `phone`, `password`, `parkingLotID`, `timeStamp`) VALUES
('Attendant', '1', 'attendant1@gmail.com', 1234567890, '$2a$10$7Cw9OAurmDwRrAKQvhZkuOL8aBr.JTOnx6eyxARcZDr66xS..M9DO', '115428311', '2023-03-23 05:56:51'),
('Attendant', '2', 'attendant2@gmail.com', 1234567890, '$2a$10$EpL.PH7dpWJjvT0HdwnxA.Cun6DAcGjQt4am.9phYDwT1zqM7zJMG', '678384187', '2023-03-27 17:10:49');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
CREATE TABLE IF NOT EXISTS `bookings` (
  `booking_id` bigint NOT NULL,
  `email` varchar(50) NOT NULL,
  `transaction_id` bigint NOT NULL,
  `parkinglot_id` int NOT NULL,
  `timestamp` bigint NOT NULL,
  `time_stamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int DEFAULT '0',
  `price` int NOT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`booking_id`, `email`, `transaction_id`, `parkinglot_id`, `timestamp`, `time_stamp`, `status`, `price`) VALUES
(4359932542, 'mratunjya@theinnerhour.com', 69627490232305, 306534989, 1679692775042, '2023-03-25 06:54:48', 0, 0),
(11460219993, 'mratunjya@theinnerhour.com', 4239111983153, 115428311, 1679689043693, '2023-03-25 06:54:48', 1, 0),
(14254295658, 'vaniya1@goel.com', 68944580597605, 462907910, 1679727509931, '2023-03-25 06:58:29', 0, 0),
(14311611688, 'mratunjya@theinnerhour.com', 39170030839544, 115428311, 1679689522984, '2023-03-25 06:54:48', 1, 0),
(17002519784, 'vaniya1@goel.com', 91725872450924, 414341162, 1679727361278, '2023-03-25 06:56:01', 0, 0),
(19114703404, 'mratunjya@theinnerhour.com', 17038043276691, 387716031, 1679692919379, '2023-03-25 06:54:48', 0, 0),
(19302710128, 'mratunjya@theinnerhour.com', 78236050272757, 306534989, 1679835614590, '2023-03-26 13:00:14', 0, 60),
(20209180451, 'mratunjya@theinnerhour.com', 9312804845221, 115428311, 1679689417774, '2023-03-25 06:54:48', 1, 0),
(22041678877, 'vaniya1@goel.com', 61366165605299, 387716031, 1679721118573, '2023-03-25 06:54:48', 0, 0),
(24586222902, 'mratunjya@theinnerhour.com', 25364579970266, 306534989, 1679912797992, '2023-03-27 10:26:38', 0, 20),
(25223548690, 'mratunjya@theinnerhour.com', 41553267502132, 115428311, 1679689937990, '2023-03-25 06:54:48', 0, 0),
(29782997204, 'a1@gmail.com', 7479203341755, 115428311, 1679994473557, '2023-03-28 09:07:53', 0, 100),
(30131920404, 'mratunjya@theinnerhour.com', 57085952681602, 115428311, 1679689876914, '2023-03-25 06:54:48', 0, 0),
(36771954539, 'mratunjya@theinnerhour.com', 52644106588636, 115428311, 1679689597639, '2023-03-25 06:54:48', 0, 0),
(39425026145, 'mratunjya@theinnerhour.com', 94842406938646, 115428311, 1679688855612, '2023-03-25 06:54:48', 0, 0),
(40024140955, 'mratunjya@theinnerhour.com', 12719493947669, 306534989, 1679918881752, '2023-03-27 12:08:01', 0, 100),
(52978290330, 'mratunjya@theinnerhour.com', 64838235816595, 115428311, 1679819693419, '2023-03-26 08:34:53', 0, 100),
(53540073842, 'vaniya1@goel.com', 11929099356296, 115428311, 1679727071612, '2023-03-25 06:54:48', 0, 0),
(59404981797, 'mratunjya@theinnerhour.com', 41851914021465, 115428311, 1679689018329, '2023-03-25 06:54:48', 0, 0),
(60258612549, 'vaniya1@goel.com', 73870942293772, 891880525, 1679727728552, '2023-03-25 07:02:08', 0, 0),
(70188671877, 'mratunjya@theinnerhour.com', 31690752888829, 115428311, 1679912677590, '2023-03-27 10:24:37', 0, 100),
(71942885376, 'mratunjya@theinnerhour.com', 18487056944573, 478146100, 1679693438005, '2023-03-25 06:54:48', 1, 0),
(82841160207, 'vaniya1@goel.com', 70189290250966, 115428311, 1679768126397, '2023-03-25 18:15:26', 1, 100),
(87274472486, 'mratunjya@theinnerhour.com', 74419537043454, 891880525, 1679939761058, '2023-03-27 17:56:01', 0, 100),
(96297182812, 'mratunjya@theinnerhour.com', 7868592645809, 115428311, 1679689841248, '2023-03-25 06:54:48', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

DROP TABLE IF EXISTS `organizations`;
CREATE TABLE IF NOT EXISTS `organizations` (
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` bigint NOT NULL,
  `password` varchar(500) NOT NULL,
  `organizationName` varchar(200) NOT NULL,
  `organizationAddress` varchar(500) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`firstName`, `lastName`, `email`, `phone`, `password`, `organizationName`, `organizationAddress`, `timeStamp`) VALUES
('Person', '1', 'organization1@gmail.com', 1234567890, '$2a$10$ZvdSsqJFWaslJB1LwlEteONOIk1cRmQqAfyoV2n8N6Mwk9XQkOczG', 'Organization 1', 'Address 1', '2023-03-23 05:51:36'),
('Person', '2', 'organization2@gmail.com', 1234567890, '$2a$10$Z19RXZKN07fVWYE9wJSSOuC3HCh2ntslBuc41HbgoC1QwlVelWxom', 'Organization 2', 'Address 2', '2023-03-23 14:13:31'),
('Person', '3', 'organization3@gmail.com', 1234567890, '$2a$10$f7CK6.GS9VxIOP4dP0pOgeaSI5vt7TTaUrG0WSfAssN3SktZ9BW62', 'Organization 3', 'Address 3', '2023-03-24 20:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `parking_lots`
--

DROP TABLE IF EXISTS `parking_lots`;
CREATE TABLE IF NOT EXISTS `parking_lots` (
  `id` bigint NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `booked` int NOT NULL DEFAULT '0',
  `total_capacity` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `parking_lots`
--

INSERT INTO `parking_lots` (`id`, `email`, `name`, `address`, `city`, `state`, `booked`, `total_capacity`, `price`) VALUES
(115428311, 'organization2@gmail.com', 'PL 2', 'Marine Drive', 'Raipur', 'Chhattisgarh', 14, 200, 100),
(306534989, 'organization1@gmail.com', 'Yash ka Parking Lot', 'Patna', 'Patna', 'Bihar', 4, 200, 100),
(387716031, 'organization1@gmail.com', 'Parking Lot 2', 'Subhash Nagar', 'Bareilly', 'Uttar Pradesh', 2, 100, 150),
(414341162, 'organization1@gmail.com', 'sadfghj', 'asdfghjk', 'aszdxfcgvbjh', 'tghgfvr', 1, 150, 0),
(432051634, 'organization1@gmail.com', 'aaaa', 'sxc', 'sdfg', 'dfgh', 0, 85, 0),
(462907910, 'organization1@gmail.com', 'kkdfksmn', 'mhfjkeh', 'nsmfhkjfhk', 'mbdjkfgehi', 1, 52, 500),
(465733542, 'organization1@gmail.com', 'New', 'mds', 'knxkdf', 'safkai', 0, 35, 150),
(478146100, 'organization2@gmail.com', 'PL 1', 'Keruganj', 'Shahjahanpur', 'Uttar Pradesh', 1, 180, 250),
(678384187, 'organization1@gmail.com', 'sadfg', 'sdfgh', 'sdfgh', 'jfhtg', 0, 52, 500),
(891880525, 'organization2@gmail.com', 'New', 'dwuguh', 'jgdjfuiehj', 'jdjg', 2, 1, 100);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` bigint NOT NULL,
  `password` varchar(500) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`firstName`, `lastName`, `email`, `phone`, `password`, `timeStamp`) VALUES
('A', 'b', 'a1@gmail.com', 1234567890, '$2a$10$tinA5mTJuFNMaIFOF/Yr.O/qf752/opPrS.kppBa8/2uZDtSN18km', '2023-03-28 08:53:39'),
('Mratunjya', 'Shankhdhar', 'mratunjya@theinnerhour.com', 9997168704, '$2a$10$9dE59Fch3kDn2bactXeC1uK96yT.UYUgmo/dZbAfsVtsCgrrJyPd2', '2023-03-23 05:36:57'),
('Vaniya', 'Goel', 'vaniya1@goel.com', 1234567890, '$2a$10$Migu5/GOwuYt/4veD/49qezBKwrr9EC.VvWGAAVRh2/OiHXcNyS1u', '2023-03-25 05:11:45');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
