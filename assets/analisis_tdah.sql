-- ============================================================
-- PROYECTO: Análisis SQL - TDAH Laboral LATAM
-- AUTORA: Alejandra González Madrid
-- MOTOR: PostgreSQL
-- ============================================================
--
-- Descripción:
-- Análisis exploratorio de una encuesta sobre TDAH y situación
-- laboral con participantes de México, Argentina y Guatemala.
-- La muestra está compuesta principalmente por participantes
-- de México, por lo que los resultados no buscan ser
-- representativos de toda la población latinoamericana.
--
-- Los datos fueron obtenidos mediante Microsoft Forms,
-- procesados y anonimizados con Python y pandas, y posteriormente
-- cargados en PostgreSQL mediante un modelo relacional.
--
-- Tablas:
--   1. participantes
--   2. diagnostico_tdah
--   3. situacion_laboral
--
-- ============================================================
-- ESTRUCTURA DE LA BASE DE DATOS
-- ============================================================

-- Tabla con información general de los participantes
CREATE TABLE IF NOT EXISTS participantes (
    id_participante INTEGER PRIMARY KEY,
    pais VARCHAR(100),
    edad INTEGER,
    escolaridad VARCHAR(150)
);

-- Tabla con información relacionada con el diagnóstico de TDAH
CREATE TABLE IF NOT EXISTS diagnostico_tdah (
    id_diagnostico SERIAL PRIMARY KEY,
    id_participante INTEGER NOT NULL,
    diagnostico_formal VARCHAR(50),
    edad_diagnostico INTEGER,
    tipo_tdah VARCHAR(150),

    CONSTRAINT fk_diagnostico_participante
        FOREIGN KEY (id_participante)
        REFERENCES participantes(id_participante)
);

-- Tabla con información sobre la situación laboral
CREATE TABLE IF NOT EXISTS situacion_laboral (
    id_laboral SERIAL PRIMARY KEY,
    id_participante INTEGER NOT NULL,
    trabaja_actualmente VARCHAR(50),
    tipo_trabajo VARCHAR(150),
    dificultades_laborales TEXT,
    apoyos_laborales TEXT,

    CONSTRAINT fk_laboral_participante
        FOREIGN KEY (id_participante)
        REFERENCES participantes(id_participante)
);

-- ============================================================
-- CARGA DE DATOS
-- ============================================================

-- Los datos utilizados en este proyecto fueron previamente
-- limpiados, transformados y anonimizados con Python y pandas.
--
-- Posteriormente, los archivos CSV resultantes fueron importados
-- a PostgreSQL mediante la herramienta Import/Export Data de pgAdmin 4.
--
-- Archivos utilizados:
--   participantes.csv
--   diagnostico_tdah.csv
--   situacion_laboral.csv
--
-- Cada archivo contiene 64 registros.
--
-- ============================================================
-- ANÁLISIS EXPLORATORIO CON SQL
-- ============================================================
--
-- CONSULTA 1
-- ¿Cuántas personas participaron en la encuesta?

SELECT COUNT(*) AS total_participantes
FROM participantes;

-- CONSULTA 2
-- ¿Cómo se distribuyen los participantes por país?

SELECT
    pais,
    COUNT(*) AS total_participantes
FROM participantes
GROUP BY pais
ORDER BY total_participantes DESC;

-- CONSULTA 3
-- ¿Cuál es la edad promedio de los participantes?

SELECT
    ROUND(AVG(edad), 2) AS edad_promedio
FROM participantes;

-- CONSULTA 4
-- ¿Cómo se distribuyen los participantes según su diagnóstico de TDAH?

SELECT
    diagnostico_formal,
    COUNT(*) AS total_participantes
FROM diagnostico_tdah
GROUP BY diagnostico_formal
ORDER BY total_participantes DESC;

-- CONSULTA 5
-- ¿Qué participantes con diagnóstico formal de TDAH
-- tienen una edad de diagnóstico registrada?

SELECT
    id_participante,
    diagnostico_formal,
    edad_diagnostico,
    tipo_tdah
FROM diagnostico_tdah
WHERE diagnostico_formal = 'Sí'
    AND edad_diagnostico IS NOT NULL
ORDER BY edad_diagnostico;

-- CONSULTA 6
-- ¿Cuál es la edad actual y la edad de diagnóstico
-- de los participantes con diagnóstico formal de TDAH?

SELECT
    p.id_participante,
    p.pais,
    p.edad AS edad_actual,
    d.edad_diagnostico,
    d.tipo_tdah
FROM participantes AS p
INNER JOIN diagnostico_tdah AS d
    ON p.id_participante = d.id_participante
WHERE d.diagnostico_formal = 'Sí'
    AND d.edad_diagnostico IS NOT NULL
ORDER BY d.edad_diagnostico;

-- CONSULTA 7
-- ¿Cuál es la situación laboral de los participantes
-- según su diagnóstico formal de TDAH?

SELECT
    d.diagnostico_formal,
    s.trabaja_actualmente,
    COUNT(*) AS total_participantes
FROM diagnostico_tdah AS d
INNER JOIN situacion_laboral AS s
    ON d.id_participante = s.id_participante
GROUP BY
    d.diagnostico_formal,
    s.trabaja_actualmente
ORDER BY
    d.diagnostico_formal,
    total_participantes DESC;

-- CONSULTA 8
-- ¿Cuál es la edad promedio de los participantes
-- según su tipo de TDAH y situación laboral?

SELECT
    d.tipo_tdah,
    s.trabaja_actualmente,
    COUNT(*) AS total_participantes,
    ROUND(AVG(p.edad), 2) AS edad_promedio
FROM participantes AS p
INNER JOIN diagnostico_tdah AS d
    ON p.id_participante = d.id_participante
INNER JOIN situacion_laboral AS s
    ON p.id_participante = s.id_participante
WHERE d.diagnostico_formal = 'Sí'
GROUP BY
    d.tipo_tdah,
    s.trabaja_actualmente
ORDER BY
    d.tipo_tdah,
    total_participantes DESC;

-- CONSULTA 9
-- ¿Cuál es la edad promedio de diagnóstico
-- según el tipo de TDAH?

SELECT
    tipo_tdah,
    COUNT(edad_diagnostico) AS participantes_con_edad_registrada,
    ROUND(AVG(edad_diagnostico), 2) AS edad_promedio_diagnostico
FROM diagnostico_tdah
WHERE diagnostico_formal = 'Sí'
    AND edad_diagnostico IS NOT NULL
GROUP BY tipo_tdah
ORDER BY edad_promedio_diagnostico;

-- CONSULTA 10
-- ¿Qué participantes fueron diagnosticados
-- a una edad superior al promedio de la muestra?

SELECT
    p.id_participante,
    p.pais,
    p.edad AS edad_actual,
    d.edad_diagnostico,
    d.tipo_tdah
FROM participantes AS p
INNER JOIN diagnostico_tdah AS d
    ON p.id_participante = d.id_participante
WHERE d.diagnostico_formal = 'Sí'
    AND d.edad_diagnostico > (
        SELECT AVG(edad_diagnostico)
        FROM diagnostico_tdah
        WHERE diagnostico_formal = 'Sí'
            AND edad_diagnostico IS NOT NULL
    )
ORDER BY d.edad_diagnostico DESC;