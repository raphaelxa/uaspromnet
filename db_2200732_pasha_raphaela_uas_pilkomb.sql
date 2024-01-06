-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Jan 2024 pada 02.36
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2200732_pasha_raphaela_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `lapkeu_dinamik_18_pasha`
--

CREATE TABLE `lapkeu_dinamik_18_pasha` (
  `Id` int(11) NOT NULL,
  `Date` varchar(100) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Amount` varchar(50) NOT NULL,
  `Status` enum('debit','kredit') DEFAULT NULL,
  `Receiver` varchar(50) NOT NULL,
  `JK` enum('L','P') DEFAULT NULL,
  `No_Telp` varchar(13) NOT NULL,
  `Address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `lapkeu_dinamik_18_pasha`
--

INSERT INTO `lapkeu_dinamik_18_pasha` (`Id`, `Date`, `Description`, `Amount`, `Status`, `Receiver`, `JK`, `No_Telp`, `Address`) VALUES
(1, '2023-03-21', 'konsumsi', '500000', 'debit', 'Agus', 'L', '083466289355', 'Jl. Mawar'),
(2, '2023-04-09', 'dekorasi', '250000', 'debit', 'San', 'L', '085287423336', 'Jl. Melati'),
(3, '2023-01-09', 'sewa lighting', '700000', 'kredit', 'Dodi', 'L', '083468888210', 'Jl. Anggrek'),
(4, '2023-09-22', 'sewa gedung', '1000000', 'debit', 'Lala', 'P', '081216082675', 'Jl. Tulip'),
(5, '2023-11-06', 'dana prodi ilkom', '350000', 'kredit', 'Thea', 'P', '083498330021', 'Jl. Kamboja');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `lapkeu_dinamik_18_pasha`
--
ALTER TABLE `lapkeu_dinamik_18_pasha`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `lapkeu_dinamik_18_pasha`
--
ALTER TABLE `lapkeu_dinamik_18_pasha`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
