-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 17 Agu 2025 pada 14.29
-- Versi server: 10.11.11-MariaDB-log
-- Versi PHP: 8.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `redesign_15`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `username` varchar(191) NOT NULL,
  `password` longtext NOT NULL,
  `token` longtext DEFAULT NULL,
  `token_exp` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `created_at`, `updated_at`, `deleted_at`, `username`, `password`, `token`, `token_exp`) VALUES
(1, '2025-08-16 23:47:26.697', '2025-08-17 01:34:59.991', NULL, 'admin1', '$2a$10$GbN3NnFYY14F.uvcGobJ5uO5Rb2pOmI7pupppDVizc1HYn4Jr51Bu', '6a147eba6132ec5ea661eae84bf8d72aa7b7d6ef4d61911bcb275d044eeb325c', '2025-08-17 02:34:59.990');

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita_barus`
--

CREATE TABLE `berita_barus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `cover` longtext NOT NULL,
  `tema` longtext NOT NULL,
  `judul` longtext NOT NULL,
  `posted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `berita_barus`
--

INSERT INTO `berita_barus` (`id`, `created_at`, `updated_at`, `deleted_at`, `cover`, `tema`, `judul`, `posted_at`) VALUES
(1, '2025-08-15 23:21:40.084', '2025-08-16 21:08:32.895', '2025-08-16 21:09:47.302', 'http://localhost:8080/assets/covers/1755353312892781700.jpeg', 'Kemahasiswaan & Kerjasama', 'Kunjungan Fakultas Ilmu Komputer Universitas Sriwijaya ke IPB University: Studi Banding SPMI dan Pengembangan Unit Usaha di PTNBH', '2025-08-08 12:00:00.000'),
(2, '2025-08-16 18:26:22.134', '2025-08-16 18:26:22.134', NULL, 'http://localhost:8080/assets/covers/1755343582130913200.jpeg', 'Informasi Berita', 'Dies Natalis ke-19 Fasilkom Unsri di Highland Resort, Bogor, Jawa Barat tanggal 28 Juli 2025 hingga 1 Agustus 2025', '2025-08-07 12:00:00.000'),
(3, '2025-08-16 18:37:12.751', '2025-08-16 18:37:12.751', NULL, 'http://localhost:8080/assets/covers/1755344232749138600.jpeg', 'Informasi Berita', 'Pengumuman Pelaksanaan Wisuda Ke-179 Universitas Sriwijaya', '0000-00-00 00:00:00.000'),
(4, '2025-08-16 18:48:14.717', '2025-08-16 18:48:14.717', NULL, 'http://localhost:8080/assets/covers/1755344894713670100.jpeg', 'Kemahasiswaan & Kerjasama', '[BUKA PENDAFTARAN] Pelatihan & Sertifikasi Internasional Python', '2006-01-03 05:04:05.000');

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita_mahasiswas`
--

CREATE TABLE `berita_mahasiswas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `cover` longtext NOT NULL,
  `tema` longtext NOT NULL,
  `judul` longtext NOT NULL,
  `posted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `berita_mahasiswas`
--

INSERT INTO `berita_mahasiswas` (`id`, `created_at`, `updated_at`, `deleted_at`, `cover`, `tema`, `judul`, `posted_at`) VALUES
(1, '2025-08-17 00:21:37.917', '2025-08-17 00:25:02.724', '2025-08-17 00:25:41.455', 'http://localhost:8080/assets/covers/1755364897914564900.jpg', 'Universitas Sriwijaya', 'Kampus Indralaya Universitas Sriwijaya: Kampus Terluas di Indonesia dengan Luas 712 Hektar', '2006-01-03 05:04:05.000');

-- --------------------------------------------------------

--
-- Struktur dari tabel `files`
--

CREATE TABLE `files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `nama_file` longtext NOT NULL,
  `file_path` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `files`
--

INSERT INTO `files` (`id`, `created_at`, `updated_at`, `deleted_at`, `nama_file`, `file_path`) VALUES
(1, '2025-08-17 01:39:20.799', '2025-08-17 01:46:14.774', NULL, '', 'http://localhost:8080/assets/files/1755369974773247100.pdf'),
(2, '2025-08-17 01:42:26.621', '2025-08-17 01:42:26.621', NULL, 'Mata Kuliah', 'http://localhost:8080/assets/files/1755369746617138300.pdf');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uni_admins_username` (`username`),
  ADD KEY `idx_admins_deleted_at` (`deleted_at`);

--
-- Indeks untuk tabel `berita_barus`
--
ALTER TABLE `berita_barus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_berita_barus_deleted_at` (`deleted_at`);

--
-- Indeks untuk tabel `berita_mahasiswas`
--
ALTER TABLE `berita_mahasiswas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_berita_mahasiswas_deleted_at` (`deleted_at`);

--
-- Indeks untuk tabel `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_files_deleted_at` (`deleted_at`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `berita_barus`
--
ALTER TABLE `berita_barus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `berita_mahasiswas`
--
ALTER TABLE `berita_mahasiswas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `files`
--
ALTER TABLE `files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
