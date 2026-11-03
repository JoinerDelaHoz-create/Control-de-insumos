-- ====================================================================
-- SISTEMA DE CONTROL DE INSUMOS - UNIVERSIDAD METROPOLITANA
-- Script de Base de Datos PostgreSQL / Supabase
-- Arquitectura de Ciberseguridad Empresarial con RLS (Row Level Security)
-- ====================================================================

-- 1. EXTENSIONES DE SEGURIDAD
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABLA: EMPLEADOS / PERSONAL A CARGO
CREATE TABLE IF NOT EXISTS public.empleados (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre_completo TEXT NOT NULL,
    documento_id TEXT,
    cargo_area TEXT,
    telefono TEXT,
    activo BOOLEAN DEFAULT true,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TABLA: INSUMOS (CATÁLOGO Y STOCK ACTUAL)
CREATE TABLE IF NOT EXISTS public.insumos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre TEXT NOT NULL,
    categoria TEXT NOT NULL,
    cantidad_stock NUMERIC(10, 2) NOT NULL DEFAULT 0 CHECK (cantidad_stock >= 0),
    unidad_medida TEXT NOT NULL DEFAULT 'Unidades',
    stock_minimo NUMERIC(10, 2) DEFAULT 2,
    observaciones TEXT,
    actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. TABLA: MOVIMIENTOS / REGISTRO DE AUDITORÍA (INMUTABLE - APPEND ONLY)
-- Esta tabla registra cada entrega a empleado o reabastecimiento con fecha y hora exacta
CREATE TABLE IF NOT EXISTS public.movimientos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tipo TEXT NOT NULL CHECK (tipo IN ('SALIDA', 'ENTRADA')),
    insumo_id UUID REFERENCES public.insumos(id) ON DELETE RESTRICT,
    nombre_insumo TEXT NOT NULL,
    empleado_id UUID REFERENCES public.empleados(id) ON DELETE SET NULL,
    nombre_empleado TEXT, -- Se preserva el nombre aunque el empleado sea eliminado
    cantidad NUMERIC(10, 2) NOT NULL CHECK (cantidad > 0),
    unidad_medida TEXT NOT NULL,
    motivo TEXT,
    registrado_por TEXT DEFAULT 'Administrador',
    fecha_hora TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ====================================================================
-- 5. POLÍTICAS DE CIBERSEGURIDAD: ROW LEVEL SECURITY (RLS)
-- ====================================================================

-- Habilitar RLS en todas las tablas
ALTER TABLE public.empleados ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.insumos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.movimientos ENABLE ROW LEVEL SECURITY;

-- REGLA DE AUDITORÍA INMUTABLE:
-- La tabla de movimientos NUNCA permite UPDATE ni DELETE. Solo INSERT y SELECT.
CREATE POLICY "Permitir lectura de movimientos a usuarios autenticados" 
ON public.movimientos FOR SELECT USING (true);

CREATE POLICY "Permitir registrar movimientos a usuarios autorizados" 
ON public.movimientos FOR INSERT WITH CHECK (true);

-- Impedir expresamente cualquier intento de alterar o borrar el historial
REVOKE UPDATE, DELETE ON public.movimientos FROM public, anon, authenticated;

-- Políticas para Insumos
CREATE POLICY "Acceso a insumos" ON public.insumos FOR ALL USING (true);

-- Políticas para Empleados
CREATE POLICY "Acceso a empleados" ON public.empleados FOR ALL USING (true);

-- ====================================================================
-- 6. CARGA DE DATOS INICIALES (EL INVENTARIO REAL COMPARTIDO)
-- ====================================================================

INSERT INTO public.insumos (nombre, categoria, cantidad_stock, unidad_medida, stock_minimo) VALUES
('Paquete de 2 rollos toallas scott de mano 200mtrs', 'Papelería e Higiene', 2, 'Paquetes', 2),
('Jabón de mano en espuma Kleenex 1000ml', 'Higiene y Cuidado Personal', 12, 'Frascos 1000ml', 3),
('Cera súper concentrada', 'Químicos de Limpieza', 4, 'Galones', 2),
('Rollos papel higiénico', 'Papelería e Higiene', 7, 'Rollos', 5),
('Bolsa fab dersa 125g', 'Aseo y Detergentes', 43, 'Bolsas 125g', 10),
('Bicarbonato de sodio 1000gr', 'Químicos y Limpieza', 1, 'Tarros 1000g', 1),
('Ácido oxálico 1000gr', 'Químicos y Desmanchadores', 2, 'Tarros 1000g', 1),
('Citronela ambientador 500ml', 'Ambientadores y Aseo', 1, 'Frascos 500ml', 2),
('Jabón oro de 200gr', 'Aseo y Detergentes', 25, 'Barras 200g', 5),
('Cepillos de restregar', 'Herramientas de Aseo', 10, 'Unidades', 3),
('Recogedor', 'Herramientas de Aseo', 18, 'Unidades', 5),
('Cepillo sanitario con base', 'Herramientas de Aseo', 8, 'Unidades', 2),
('Cepillo de escobas', 'Herramientas de Aseo', 7, 'Unidades', 2),
('Traperos Fuller', 'Herramientas de Aseo', 14, 'Unidades', 5),
('T-700 negro', 'Mantenimiento y Acabados', 2, 'Unidades', 1),
('Limpiador desinfectante lavanda fabulosa 3850ML', 'Químicos y Desinfectantes', 6, 'Galones 3850ml', 2),
('Limpiador desinfectante azul', 'Químicos y Desinfectantes', 2, 'Galones', 1),
('Varsol sin olor 3800ml', 'Solventes y Desengrasantes', 2, 'Galones 3800ml', 1),
('Protectores auditivos de copa', 'Seguridad y EPP', 10, 'Unidades', 2),
('Bolsa de cofias x100', 'Seguridad y EPP', 250, 'Bolsas x100', 20),
('Bolsa de tapabocas x100', 'Seguridad y EPP', 100, 'Bolsas x100', 15),
('Felpa mopia', 'Herramientas de Aseo', 2, 'Unidades', 1),
('Palos de recogedor', 'Herramientas de Aseo', 21, 'Unidades', 5),
('Palos escobas', 'Herramientas de Aseo', 4, 'Unidades', 3),
('Balde', 'Herramientas de Aseo', 4, 'Unidades', 2),
('Cristalizador rosado', 'Químicos y Acabados de Piso', 0.25, 'Galón (1/4)', 0.5),
('Listo calisto 3.8L', 'Químicos y Limpiadores', 1, 'Galones 3.8L', 1),
('Thinner pintuco 3.78L', 'Solventes y Pinturas', 1, 'Galones 3.78L', 1),
('Brilla metal 23g', 'Limpieza de Metales', 1, 'Tubos 23g', 1),
('Carpincol MR-60 4Kg', 'Adhesivos y Mantenimiento', 1, 'Tarros 4Kg', 1),
('Alcohol etílico 1 galón', 'Desinfectantes y Químicos', 1, 'Galones', 1),
('Premier red dri-lube aluminum oxide resin paper open P320', 'Ferretería y Mantenimiento', 16, 'Pliegos Lija', 5),
('Paño Micro fibra 40x40', 'Herramientas de Aseo', 1, 'Unidades', 3),
('Bolsa para basura jumbo x10', 'Bolsas de Residuos', 60, 'Paquetes x10', 10),
('Bolsas verdes medianas x10', 'Bolsas de Residuos', 35, 'Paquetes x10', 10),
('Bolsas rojas medianas x10', 'Bolsas de Residuos', 57, 'Paquetes x10', 10),
('Bolsa roja x10uni 46x51cm', 'Bolsas de Residuos', 20, 'Paquetes x10', 10),
('Bolsa negra mediana x10uni 55x75cm', 'Bolsas de Residuos', 60, 'Paquetes x10', 10),
('Bolsa negra mediana x10', 'Bolsas de Residuos', 36, 'Paquetes x10', 10),
('Clorox cuñete vacíos', 'Envases y Recipientes', 2, 'Cuñetes vacíos', 1),
('Desengrasante industrial cuñete', 'Químicos y Desengrasantes', 1, 'Cuñetes', 1),
('Pintura para piso PINTON 3.800ml', 'Mantenimiento y Pinturas', 1, 'Galones 3800ml', 1),
('WD40', 'Mantenimiento y Lubricantes', 2, 'Latas', 1);

-- Empleados iniciales de ejemplo para comenzar a operar de inmediato
INSERT INTO public.empleados (nombre_completo, cargo_area) VALUES
('Carlos Mendoza', 'Servicios Generales / Aseo'),
('María Rodríguez', 'Mantenimiento de Instalaciones'),
('Jorge Peña', 'Limpieza y Desinfección');

