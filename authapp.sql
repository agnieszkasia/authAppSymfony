-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 22 Sie 2022, 23:55
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `authapp`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `developer`
--

CREATE TABLE `developer` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `mysql` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ide_environment`
--

CREATE TABLE `ide_environment` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `management_methodology`
--

CREATE TABLE `management_methodology` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `programming_language`
--

CREATE TABLE `programming_language` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `project_manager`
--

CREATE TABLE `project_manager` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `scrum` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `report_system`
--

CREATE TABLE `report_system` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tester`
--

CREATE TABLE `tester` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `selenium` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `testing_system`
--

CREATE TABLE `testing_system` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `position` enum('developer','tester','projectManager') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_ide_environment`
--

CREATE TABLE `user_ide_environment` (
  `user_id` int(11) UNSIGNED NOT NULL,
  `ide_environment_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_management_methodology`
--

CREATE TABLE `user_management_methodology` (
  `user_id` int(11) UNSIGNED NOT NULL,
  `management_methodology_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_programming_language`
--

CREATE TABLE `user_programming_language` (
  `user_id` int(11) UNSIGNED NOT NULL,
  `programming_language_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_report_system`
--

CREATE TABLE `user_report_system` (
  `user_id` int(11) UNSIGNED NOT NULL,
  `report_system_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_testing_system`
--

CREATE TABLE `user_testing_system` (
  `user_id` int(11) UNSIGNED NOT NULL,
  `testing_system_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `developer`
--
ALTER TABLE `developer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indeksy dla tabeli `ide_environment`
--
ALTER TABLE `ide_environment`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `management_methodology`
--
ALTER TABLE `management_methodology`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `programming_language`
--
ALTER TABLE `programming_language`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `project_manager`
--
ALTER TABLE `project_manager`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `report_system`
--
ALTER TABLE `report_system`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `tester`
--
ALTER TABLE `tester`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `testing_system`
--
ALTER TABLE `testing_system`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeksy dla tabeli `user_ide_environment`
--
ALTER TABLE `user_ide_environment`
  ADD KEY `IDX_9C395AAD979A21C1` (`user_id`),
  ADD KEY `IDX_9C395AADFE2142BD` (`ide_environment_id`);

--
-- Indeksy dla tabeli `user_management_methodology`
--
ALTER TABLE `user_management_methodology`
  ADD KEY `IDX_9C395AAD979A21C1` (`user_id`),
  ADD KEY `IDX_9C395AADFE2142BD` (`management_methodology_id`);

--
-- Indeksy dla tabeli `user_programming_language`
--
ALTER TABLE `user_programming_language`
  ADD KEY `IDX_9C395AAD979A21C1` (`user_id`),
  ADD KEY `IDX_9C395AADFE2142BD` (`programming_language_id`);

--
-- Indeksy dla tabeli `user_report_system`
--
ALTER TABLE `user_report_system`
  ADD KEY `IDX_9C395AAD979A21C1` (`user_id`),
  ADD KEY `IDX_9C395AADFE2142BD` (`report_system_id`);

--
-- Indeksy dla tabeli `user_testing_system`
--
ALTER TABLE `user_testing_system`
  ADD KEY `IDX_9C395AAD979A21C1` (`user_id`),
  ADD KEY `IDX_9C395AADFE2142BD` (`testing_system_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `developer`
--
ALTER TABLE `developer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT dla tabeli `ide_environment`
--
ALTER TABLE `ide_environment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT dla tabeli `management_methodology`
--
ALTER TABLE `management_methodology`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `programming_language`
--
ALTER TABLE `programming_language`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT dla tabeli `project_manager`
--
ALTER TABLE `project_manager`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `report_system`
--
ALTER TABLE `report_system`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT dla tabeli `tester`
--
ALTER TABLE `tester`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT dla tabeli `testing_system`
--
ALTER TABLE `testing_system`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `developer`
--
ALTER TABLE `developer`
  ADD CONSTRAINT `developer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `project_manager`
--
ALTER TABLE `project_manager`
  ADD CONSTRAINT `project_manager_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `tester`
--
ALTER TABLE `tester`
  ADD CONSTRAINT `tester_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `user_ide_environment`
--
ALTER TABLE `user_ide_environment`
  ADD CONSTRAINT `user_ide_environment_ibfk_1` FOREIGN KEY (`ide_environment_id`) REFERENCES `ide_environment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_ide_environment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `developer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `user_management_methodology`
--
ALTER TABLE `user_management_methodology`
  ADD CONSTRAINT `user_management_methodology_ibfk_1` FOREIGN KEY (`management_methodology_id`) REFERENCES `management_methodology` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_management_methodology_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `project_manager` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `user_programming_language`
--
ALTER TABLE `user_programming_language`
  ADD CONSTRAINT `user_programming_language_ibfk_1` FOREIGN KEY (`programming_language_id`) REFERENCES `programming_language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_programming_language_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `developer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `user_report_system`
--
ALTER TABLE `user_report_system`
  ADD CONSTRAINT `user_report_system_ibfk_3` FOREIGN KEY (`report_system_id`) REFERENCES `report_system` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `user_testing_system`
--
ALTER TABLE `user_testing_system`
  ADD CONSTRAINT `user_testing_system_ibfk_1` FOREIGN KEY (`testing_system_id`) REFERENCES `testing_system` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_testing_system_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `tester` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
