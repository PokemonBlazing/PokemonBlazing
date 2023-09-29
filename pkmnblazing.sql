-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-06-2023 a las 22:20:12
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pkmnblazing`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clanes`
--

CREATE TABLE `clanes` (
  `id_clan` int(11) NOT NULL,
  `clan_name` varchar(255) NOT NULL,
  `mmr` int(11) NOT NULL,
  `leader` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `id_object` int(11) NOT NULL,
  `obj_name` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

CREATE TABLE `movimientos` (
  `id_move` int(11) NOT NULL,
  `move_name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `power` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `critical_chance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokemons`
--

CREATE TABLE `pokemons` (
  `id_pokemon` int(11) NOT NULL,
  `pkmn_name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `pkmn_lvl` int(11) NOT NULL,
  `max_life` int(11) NOT NULL,
  `actual_life` int(11) NOT NULL,
  `battle_wins` int(11) DEFAULT NULL,
  `speed` int(11) NOT NULL,
  `att` int(11) NOT NULL,
  `sp_att` int(11) NOT NULL,
  `deff` int(11) NOT NULL,
  `sp_deff` int(11) NOT NULL,
  `ability` varchar(255) NOT NULL,
  `id_object` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `relacion_clan`
--

CREATE TABLE `relacion_clan` (
  `id_clan` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `level_account` int(11) NOT NULL,
  `battle_wins` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clanes`
--
ALTER TABLE `clanes`
  ADD PRIMARY KEY (`id_clan`);

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`id_object`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  ADD PRIMARY KEY (`id_move`);

--
-- Indices de la tabla `pokemons`
--
ALTER TABLE `pokemons`
  ADD PRIMARY KEY (`id_pokemon`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_object` (`id_object`);

--
-- Indices de la tabla `relacion_clan`
--
ALTER TABLE `relacion_clan`
  ADD KEY `id_clan` (`id_clan`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clanes`
--
ALTER TABLE `clanes`
  MODIFY `id_clan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `id_object` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  MODIFY `id_move` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pokemons`
--
ALTER TABLE `pokemons`
  MODIFY `id_pokemon` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `inventario_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id_user`);

--
-- Filtros para la tabla `pokemons`
--
ALTER TABLE `pokemons`
  ADD CONSTRAINT `pokemons_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id_user`),
  ADD CONSTRAINT `pokemons_ibfk_2` FOREIGN KEY (`id_object`) REFERENCES `inventario` (`id_object`);

--
-- Filtros para la tabla `relacion_clan`
--
ALTER TABLE `relacion_clan`
  ADD CONSTRAINT `relacion_clan_ibfk_1` FOREIGN KEY (`id_clan`) REFERENCES `clanes` (`id_clan`),
  ADD CONSTRAINT `relacion_clan_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
