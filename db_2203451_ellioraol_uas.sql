-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2024 at 09:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2203451_ellioraol_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventory_elliora`
--

CREATE TABLE `inventory_elliora` (
  `id` int(11) NOT NULL,
  `nama_barang` varchar(200) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `harga_satuan` int(11) NOT NULL,
  `lokasi` varchar(200) NOT NULL,
  `deskripsi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory_elliora`
--

INSERT INTO `inventory_elliora` (`id`, `nama_barang`, `jumlah`, `harga_satuan`, `lokasi`, `deskripsi`) VALUES
(2, 'Mouse dan Keyboard', 25, 2000000, 'jakarta', 'Kebutuhan Praktikum'),
(3, 'Buku', 100, 2000000, 'Bandung', 'Referensi Pembelajaran'),
(4, 'Proyektor', 10, 2000000, 'Manokwari', 'Keperluan Presentasi dan pengajaran'),
(5, 'Papan Tulis', 100, 2000000, 'Denpasar', 'Keperluan Pengajaran'),
(6, 'Komputer', 25, 8000000, 'jakarta', 'Kebutuhan Praktikum'),
(9, 'Meja', 14, 110000, 'Manokwari', 'Keperluan Belajar');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory_elliora`
--
ALTER TABLE `inventory_elliora`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory_elliora`
--
ALTER TABLE `inventory_elliora`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
