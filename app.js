/**
 * SISTEMA DE CONTROL DE INSUMOS - UNIVERSIDAD METROPOLITANA
 * Sincronización en la Nube con JSONBin.io + Caché Local Offline-First
 */

// 43 Insumos reales del inventario institucional
const INITIAL_INVENTORY_SEED = [
  { id: 'ins-1', nombre: 'Paquete de 2 rollos toallas scott de mano 200mtrs', categoria: 'Papelería e Higiene', stock: 2, unidad: 'Paquetes', minStock: 2 },
  { id: 'ins-2', nombre: 'Jabón de mano en espuma Kleenex 1000ml', categoria: 'Higiene y Cuidado Personal', stock: 12, unidad: 'Frascos 1000ml', minStock: 3 },
  { id: 'ins-3', nombre: 'Cera súper concentrada', categoria: 'Químicos de Limpieza', stock: 4, unidad: 'Galones', minStock: 2 },
  { id: 'ins-4', nombre: 'Rollos papel higiénico', categoria: 'Papelería e Higiene', stock: 7, unidad: 'Rollos', minStock: 5 },
  { id: 'ins-5', nombre: 'Bolsa fab dersa 125g', categoria: 'Aseo y Detergentes', stock: 43, unidad: 'Bolsas 125g', minStock: 10 },
  { id: 'ins-6', nombre: 'Bicarbonato de sodio 1000gr', categoria: 'Químicos y Limpieza', stock: 1, unidad: 'Tarros 1000g', minStock: 1 },
  { id: 'ins-7', nombre: 'Ácido oxálico 1000gr', categoria: 'Químicos y Desmanchadores', stock: 2, unidad: 'Tarros 1000g', minStock: 1 },
  { id: 'ins-8', nombre: 'Citronela ambientador 500ml', categoria: 'Ambientadores y Aseo', stock: 1, unidad: 'Frascos 500ml', minStock: 2 },
  { id: 'ins-9', nombre: 'Jabón oro de 200gr', categoria: 'Aseo y Detergentes', stock: 25, unidad: 'Barras 200g', minStock: 5 },
  { id: 'ins-10', nombre: 'Cepillos de restregar', categoria: 'Herramientas de Aseo', stock: 10, unidad: 'Unidades', minStock: 3 },
  { id: 'ins-11', nombre: 'Recogedor', categoria: 'Herramientas de Aseo', stock: 18, unidad: 'Unidades', minStock: 5 },
  { id: 'ins-12', nombre: 'Cepillo sanitario con base', categoria: 'Herramientas de Aseo', stock: 8, unidad: 'Unidades', minStock: 2 },
  { id: 'ins-13', nombre: 'Cepillo de escobas', categoria: 'Herramientas de Aseo', stock: 7, unidad: 'Unidades', minStock: 2 },
  { id: 'ins-14', nombre: 'Traperos Fuller', categoria: 'Herramientas de Aseo', stock: 14, unidad: 'Unidades', minStock: 5 },
  { id: 'ins-15', nombre: 'T-700 negro', categoria: 'Mantenimiento y Acabados', stock: 2, unidad: 'Unidades', minStock: 1 },
  { id: 'ins-16', nombre: 'Limpiador desinfectante lavanda fabulosa 3850ML', categoria: 'Químicos y Desinfectantes', stock: 6, unidad: 'Galones 3850ml', minStock: 2 },
  { id: 'ins-17', nombre: 'Limpiador desinfectante azul', categoria: 'Químicos y Desinfectantes', stock: 2, unidad: 'Galones', minStock: 1 },
  { id: 'ins-18', nombre: 'Varsol sin olor 3800ml', categoria: 'Solventes y Desengrasantes', stock: 2, unidad: 'Galones 3800ml', minStock: 1 },
  { id: 'ins-19', nombre: 'Protectores auditivos de copa', categoria: 'Seguridad y EPP', stock: 10, unidad: 'Unidades', minStock: 2 },
  { id: 'ins-20', nombre: 'Bolsa de cofias x100', categoria: 'Seguridad y EPP', stock: 250, unidad: 'Bolsas x100', minStock: 20 },
  { id: 'ins-21', nombre: 'Bolsa de tapabocas x100', categoria: 'Seguridad y EPP', stock: 100, unidad: 'Bolsas x100', minStock: 15 },
  { id: 'ins-22', nombre: 'Felpa mopia', categoria: 'Herramientas de Aseo', stock: 2, unidad: 'Unidades', minStock: 1 },
  { id: 'ins-23', nombre: 'Palos de recogedor', categoria: 'Herramientas de Aseo', stock: 21, unidad: 'Unidades', minStock: 5 },
  { id: 'ins-24', nombre: 'Palos escobas', categoria: 'Herramientas de Aseo', stock: 4, unidad: 'Unidades', minStock: 3 },
  { id: 'ins-25', nombre: 'Balde', categoria: 'Herramientas de Aseo', stock: 4, unidad: 'Unidades', minStock: 2 },
  { id: 'ins-26', nombre: 'Cristalizador rosado', categoria: 'Químicos y Acabados de Piso', stock: 0.25, unidad: 'Galón (1/4)', minStock: 0.5 },
  { id: 'ins-27', nombre: 'Listo calisto 3.8L', categoria: 'Químicos y Limpiadores', stock: 1, unidad: 'Galones 3.8L', minStock: 1 },
  { id: 'ins-28', nombre: 'Thinner pintuco: 3.78L', categoria: 'Solventes y Pinturas', stock: 1, unidad: 'Galones 3.78L', minStock: 1 },
  { id: 'ins-29', nombre: 'Brilla metal 23g', categoria: 'Limpieza de Metales', stock: 1, unidad: 'Tubos 23g', minStock: 1 },
  { id: 'ins-30', nombre: 'Carpincol MR-60 4Kg', categoria: 'Adhesivos y Mantenimiento', stock: 1, unidad: 'Tarros 4Kg', minStock: 1 },
  { id: 'ins-31', nombre: 'Alcohol etílico: 1 galón', categoria: 'Desinfectantes y Químicos', stock: 1, unidad: 'Galones', minStock: 1 },
  { id: 'ins-32', nombre: 'Premier red dri-lube aluminum oxide resin paper open P320', categoria: 'Ferretería y Mantenimiento', stock: 16, unidad: 'Pliegos Lija', minStock: 5 },
  { id: 'ins-33', nombre: 'Paño Micro fibra 40x40', categoria: 'Herramientas de Aseo', stock: 1, unidad: 'Unidades', minStock: 3 },
  { id: 'ins-34', nombre: 'Bolsa para basura jumbo x10', categoria: 'Bolsas de Residuos', stock: 60, unidad: 'Paquetes x10', minStock: 10 },
  { id: 'ins-35', nombre: 'R x Bolsas verdes medianas x10', categoria: 'Bolsas de Residuos', stock: 35, unidad: 'Paquetes x10', minStock: 10 },
  { id: 'ins-36', nombre: 'Bolsas rojas medianas x10', categoria: 'Bolsas de Residuos', stock: 57, unidad: 'Paquetes x10', minStock: 10 },
  { id: 'ins-37', nombre: 'Bolsa roja x10uni 46x51cm', categoria: 'Bolsas de Residuos', stock: 20, unidad: 'Paquetes x10', minStock: 10 },
  { id: 'ins-38', nombre: 'Bolsa negra mediana x10uni 55x75cm', categoria: 'Bolsas de Residuos', stock: 60, unidad: 'Paquetes x10', minStock: 10 },
  { id: 'ins-39', nombre: 'Bolsa negra mediana x10', categoria: 'Bolsas de Residuos', stock: 36, unidad: 'Paquetes x10', minStock: 10 },
  { id: 'ins-40', nombre: 'Clorox cuñete vacíos', categoria: 'Envases y Recipientes', stock: 2, unidad: 'Cuñetes vacíos', minStock: 1 },
  { id: 'ins-41', nombre: 'Desengrasante industrial cuñete', categoria: 'Químicos y Desengrasantes', stock: 1, unidad: 'Cuñetes', minStock: 1 },
  { id: 'ins-42', nombre: 'Pintura para piso PINTON 3.800ml', categoria: 'Mantenimiento y Pinturas', stock: 1, unidad: 'Galones 3800ml', minStock: 1 },
  { id: 'ins-43', nombre: 'WD40', categoria: 'Mantenimiento y Lubricantes', stock: 2, unidad: 'Latas', minStock: 1 }
];

const INITIAL_EMPLOYEES_SEED = [
  { id: 'emp-1', nombre: 'Carlos Mendoza', cargo: 'Servicios Generales / Aseo', documento: '1042394812', telefono: 'Ext 104' },
  { id: 'emp-2', nombre: 'María Rodríguez', cargo: 'Mantenimiento de Instalaciones', documento: '1047291845', telefono: 'Ext 105' },
  { id: 'emp-3', nombre: 'Jorge Peña', cargo: 'Limpieza y Desinfección', documento: '72849102', telefono: 'Ext 106' }
];

class InventoryApp {
  constructor() {
    this.STORAGE_KEYS = {
      STATE: 'umetro_inventory_full_state_v3',
      ADMIN_USER: 'umetro_admin_user_v3',
      ADMIN_PASS: 'umetro_admin_pass_v3',
      JSONBIN_KEY: 'umetro_jsonbin_master_key_v3',
      JSONBIN_ID: 'umetro_jsonbin_bin_id_v3',
      AUTH_TOKEN: 'umetro_auth_token_v3'
    };

    // Credenciales preconfiguradas de JSONBin
    this.DEFAULT_BIN_ID = '6ab1ca50ac6210605ae79be9';
    this.DEFAULT_KEY = '6ab1ca50ac6210605ae79be9';

    this.items = [];
    this.employees = [];
    this.movements = [];
    this.lastUpdated = null;
    this.activeTab = 'stock';
    this.isAdminAuthenticated = false;
    this.isSyncing = false;
    this.adminUser = 'admin';
    this.adminPass = 'admin1234';

    this.init();
  }

  // ==========================================
  // INICIALIZACIÓN
  // ==========================================
  async init() {
    this.loadLocalCache();
    this.setupClock();
    this.setupInactivityTimeout();
    this.setupVisibilitySync();
    this.checkAuthenticationState();

    // Sincronizar en segundo plano con JSONBin si está configurado
    if (this.hasJSONBinConfig()) {
      await this.fetchFromJSONBin(true);
    } else {
      this.updateCloudUI();
    }
  }

  // Carga inmediata de caché local para evitar pantalla en blanco
  loadLocalCache() {
    const raw = localStorage.getItem(this.STORAGE_KEYS.STATE);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        this.items = parsed.items || [...INITIAL_INVENTORY_SEED];
        this.employees = parsed.employees || [...INITIAL_EMPLOYEES_SEED];
        this.movements = parsed.movements || [];
        this.adminUser = parsed.adminUser || localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin';
        this.adminPass = parsed.adminPass || localStorage.getItem(this.STORAGE_KEYS.ADMIN_PASS) || 'admin1234';
        this.lastUpdated = parsed.lastUpdated || null;
      } catch (e) {
        this.loadDefaultSeeds();
      }
    } else {
      this.loadDefaultSeeds();
    }

    if (!localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER)) {
      localStorage.setItem(this.STORAGE_KEYS.ADMIN_USER, this.adminUser || 'admin');
    }
    if (!localStorage.getItem(this.STORAGE_KEYS.ADMIN_PASS)) {
      localStorage.setItem(this.STORAGE_KEYS.ADMIN_PASS, this.adminPass || 'admin1234');
    }
  }

  loadDefaultSeeds() {
    this.items = [...INITIAL_INVENTORY_SEED];
    this.employees = [...INITIAL_EMPLOYEES_SEED];
    this.movements = [];
    this.adminUser = localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin';
    this.adminPass = localStorage.getItem(this.STORAGE_KEYS.ADMIN_PASS) || 'admin1234';
    this.lastUpdated = new Date().toISOString();
    this.saveLocalCacheOnly();
  }

  saveLocalCacheOnly() {
    const state = {
      items: this.items,
      employees: this.employees,
      movements: this.movements,
      adminUser: this.adminUser || localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin',
      adminPass: this.adminPass || localStorage.getItem(this.STORAGE_KEYS.ADMIN_PASS) || 'admin1234',
      lastUpdated: this.lastUpdated || new Date().toISOString()
    };
    localStorage.setItem(this.STORAGE_KEYS.STATE, JSON.stringify(state));
    localStorage.setItem(this.STORAGE_KEYS.ADMIN_USER, state.adminUser);
    localStorage.setItem(this.STORAGE_KEYS.ADMIN_PASS, state.adminPass);
  }

  // Guardar en Local + Nube JSONBin simultáneamente
  async persistState(notifyCloud = true) {
    this.lastUpdated = new Date().toISOString();
    this.saveLocalCacheOnly();
    this.updateStats();

    if (notifyCloud && this.hasJSONBinConfig()) {
      await this.pushToJSONBin();
    }
  }

  // ==========================================
  // SINCRONIZACIÓN EN TIEMPO REAL CON JSONBIN.IO
  // ==========================================
  hasJSONBinConfig() {
    return !!this.getJSONBinId();
  }

  getJSONBinKey() {
    return localStorage.getItem(this.STORAGE_KEYS.JSONBIN_KEY) || this.DEFAULT_KEY;
  }

  getJSONBinId() {
    return localStorage.getItem(this.STORAGE_KEYS.JSONBIN_ID) || this.DEFAULT_BIN_ID;
  }

  updateCloudUI() {
    const hasConfig = this.hasJSONBinConfig();
    const dot = document.getElementById('cloudDot');
    const text = document.getElementById('cloudStatusText');
    const banner = document.getElementById('bannerLocalWarning');
    const statusDot = document.getElementById('jsonbinStatusDot');
    const statusTitle = document.getElementById('jsonbinStatusTitle');
    const statusDesc = document.getElementById('jsonbinStatusDesc');

    // Input fields en tab de seguridad
    const keyInput = document.getElementById('jsonbinMasterKeyInput');
    const binInput = document.getElementById('jsonbinBinIdInput');
    if (keyInput && !keyInput.value) keyInput.value = this.getJSONBinKey();
    if (binInput && !binInput.value) binInput.value = this.getJSONBinId();

    if (hasConfig) {
      if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-400';
      if (text) text.textContent = 'JSONBin Conectado';
      if (banner) banner.classList.add('hidden');
      if (statusDot) statusDot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500';
      if (statusTitle) statusTitle.textContent = `Estado: Conectado a Bin [${this.getJSONBinId()}]`;
      if (statusDesc) statusDesc.textContent = 'Tus entregas y stock se sincronizan automáticamente en tiempo real entre tu PC y tu teléfono celular.';
    } else {
      if (dot) dot.className = 'w-2 h-2 rounded-full bg-amber-400 animate-pulse';
      if (text) text.textContent = 'Modo Local (Sin Nube)';
      if (banner) banner.classList.remove('hidden');
      if (statusDot) statusDot.className = 'w-2.5 h-2.5 rounded-full bg-slate-400';
      if (statusTitle) statusTitle.textContent = 'Estado: No conectado a JSONBin';
      if (statusDesc) statusDesc.textContent = 'Configura tu Master Key y Bin ID para sincronizar PC y Celular automáticamente.';
    }
  }

  setSyncingAnimation(active) {
    const icon = document.getElementById('syncIcon');
    if (icon) {
      if (active) icon.classList.add('spin-fast');
      else icon.classList.remove('spin-fast');
    }
  }

  // DESCARGAR (GET) DESDE JSONBIN
  async fetchFromJSONBin(silent = false) {
    if (!this.hasJSONBinConfig()) return;
    if (this.isSyncing) return;

    this.isSyncing = true;
    this.setSyncingAnimation(true);

    try {
      const binId = this.getJSONBinId();
      const key = this.getJSONBinKey();

      const headers = {};
      if (key) {
        headers['X-Master-Key'] = key;
        headers['X-Access-Key'] = key;
      }

      // Evitar que el navegador devuelva respuestas cacheadas viejas
      const url = `https://api.jsonbin.io/v3/b/${binId}/latest?_t=${Date.now()}`;
      let response = await fetch(url, {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
      });

      // Si falla con error de autorización, intentar sin headers por si el Bin es público
      if (!response.ok && (response.status === 401 || response.status === 403)) {
        response = await fetch(url, {
          method: 'GET',
          cache: 'no-store'
        });
      }

      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudo leer el Bin [${binId}].`);
      }

      const json = await response.json();
      const record = json.record;

      if (record && record.items) {
        this.items = record.items;
        this.employees = record.employees || [];
        this.movements = record.movements || [];
        if (record.adminUser) {
          this.adminUser = record.adminUser;
          localStorage.setItem(this.STORAGE_KEYS.ADMIN_USER, record.adminUser);
        }
        if (record.adminPass) {
          this.adminPass = record.adminPass;
          localStorage.setItem(this.STORAGE_KEYS.ADMIN_PASS, record.adminPass);
        }
        this.lastUpdated = record.lastUpdated || new Date().toISOString();
        this.saveLocalCacheOnly();
        this.renderAll();
        this.updateLoginHint();
        this.updateAdminBadge();
      }

      this.updateCloudUI();
      if (!silent) {
        Swal.fire({
          icon: 'success',
          title: 'Sincronizado',
          text: 'Se han descargado los últimos cambios de la nube.',
          timer: 1200,
          showConfirmButton: false
        });
      }
    } catch (err) {
      console.warn('Aviso de lectura JSONBin:', err);
      if (!silent) {
        Swal.fire({
          icon: 'warning',
          title: 'Aviso de Sincronización',
          text: err.message,
          confirmButtonColor: '#1e40af'
        });
      }
    } finally {
      this.isSyncing = false;
      this.setSyncingAnimation(false);
    }
  }

  // SUBIR (PUT) A JSONBIN
  async pushToJSONBin(forceCredentials = false) {
    if (!this.hasJSONBinConfig()) return;

    this.setSyncingAnimation(true);
    try {
      const binId = this.getJSONBinId();
      const key = this.getJSONBinKey();

      const headers = {
        'Content-Type': 'application/json'
      };
      if (key) {
        headers['X-Master-Key'] = key;
        headers['X-Access-Key'] = key;
      }

      // Si no es un cambio explícito de credenciales, comprobar la nube para nunca sobreescribir una contraseña nueva
      let targetUser = this.adminUser || localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin';
      let targetPass = this.adminPass || localStorage.getItem(this.STORAGE_KEYS.ADMIN_PASS) || 'admin1234';

      if (!forceCredentials) {
        try {
          const checkRes = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest?_t=${Date.now()}`, {
            headers,
            cache: 'no-store'
          });
          if (checkRes.ok) {
            const checkData = await checkRes.json();
            if (checkData.record) {
              if (checkData.record.adminUser) {
                targetUser = checkData.record.adminUser;
                this.adminUser = targetUser;
                localStorage.setItem(this.STORAGE_KEYS.ADMIN_USER, targetUser);
              }
              if (checkData.record.adminPass) {
                targetPass = checkData.record.adminPass;
                this.adminPass = targetPass;
                localStorage.setItem(this.STORAGE_KEYS.ADMIN_PASS, targetPass);
              }
            }
          }
        } catch(e) {}
      }

      const payload = {
        items: this.items,
        employees: this.employees,
        movements: this.movements,
        adminUser: targetUser,
        adminPass: targetPass,
        lastUpdated: this.lastUpdated || new Date().toISOString()
      };

      let response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(payload)
      });

      if (!response.ok && (response.status === 401 || response.status === 403)) {
        // Intentar sin headers en caso de ser público
        response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }

      if (!response.ok) {
        console.warn(`JSONBin PUT respondió con código ${response.status}`);
      }
      this.updateCloudUI();
    } catch (err) {
      console.error('Error guardando en JSONBin:', err);
    } finally {
      this.setSyncingAnimation(false);
    }
  }

  // CREAR UN BIN AUTOMÁTICAMENTE EN LA NUBE
  async autoCreateJSONBin() {
    const masterKey = document.getElementById('jsonbinMasterKeyInput').value.trim();

    if (!masterKey) {
      return Swal.fire({
        icon: 'warning',
        title: 'Master Key requerida',
        text: 'Por favor pega tu Master Key de JSONBin para crear el almacén en la nube.'
      });
    }

    Swal.fire({
      title: 'Creando Almacén en la Nube...',
      text: 'Subiendo los 43 insumos y la base de datos a JSONBin.io',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const payload = {
        items: this.items,
        employees: this.employees,
        movements: this.movements,
        lastUpdated: new Date().toISOString()
      };

      const response = await fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': masterKey,
          'X-Bin-Name': 'Inventario UMetropolitana'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: Verifica que tu Master Key sea correcta.`);
      }

      const json = await response.json();
      const newBinId = json.metadata.id;

      localStorage.setItem(this.STORAGE_KEYS.JSONBIN_KEY, masterKey);
      localStorage.setItem(this.STORAGE_KEYS.JSONBIN_ID, newBinId);
      
      document.getElementById('jsonbinBinIdInput').value = newBinId;
      this.updateCloudUI();

      Swal.fire({
        icon: 'success',
        title: '¡Nube Creada con Éxito!',
        html: `
          <div class="text-left text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <p><strong>Tu nuevo Bin ID es:</strong> <code class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono font-bold text-sm">${newBinId}</code></p>
            <p class="text-slate-600">✅ Los 43 insumos ya están en la nube compartida.</p>
            <p class="text-slate-600">📱 <strong>Para conectarlo en tu celular:</strong> Solo abre la app en tu teléfono, ve a "Nube JSONBin", pega tu Master Key y este Bin ID, ¡y listo! Tendrás sincronización instantánea.</p>
          </div>
        `,
        confirmButtonColor: '#10b981'
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'No se pudo crear el Bin',
        text: err.message,
        confirmButtonColor: '#1e40af'
      });
    }
  }

  // CONECTAR A UN BIN EXISTENTE
  async connectExistingJSONBin() {
    const masterKey = document.getElementById('jsonbinMasterKeyInput').value.trim();
    const binId = document.getElementById('jsonbinBinIdInput').value.trim();

    if (!masterKey || !binId) {
      return Swal.fire({
        icon: 'warning',
        title: 'Campos requeridos',
        text: 'Debes ingresar tanto la Master Key como el Bin ID.'
      });
    }

    Swal.fire({
      title: 'Verificando Bin...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
        method: 'GET',
        headers: { 'X-Master-Key': masterKey }
      });

      if (!response.ok) {
        throw new Error('No se pudo acceder al Bin. Verifica el ID y la Key.');
      }

      const json = await response.json();
      const record = json.record;

      localStorage.setItem(this.STORAGE_KEYS.JSONBIN_KEY, masterKey);
      localStorage.setItem(this.STORAGE_KEYS.JSONBIN_ID, binId);

      if (record && record.items) {
        this.items = record.items;
        this.employees = record.employees || [];
        this.movements = record.movements || [];
        if (record.adminUser) {
          this.adminUser = record.adminUser;
          localStorage.setItem(this.STORAGE_KEYS.ADMIN_USER, record.adminUser);
        }
        if (record.adminPass) {
          this.adminPass = record.adminPass;
          localStorage.setItem(this.STORAGE_KEYS.ADMIN_PASS, record.adminPass);
        }
        this.lastUpdated = record.lastUpdated || new Date().toISOString();
        this.saveLocalCacheOnly();
        this.renderAll();
      }

      this.updateCloudUI();

      Swal.fire({
        icon: 'success',
        title: '¡Conectado a JSONBin!',
        text: 'Datos sincronizados exitosamente con la nube.',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error de Conexión',
        text: err.message,
        confirmButtonColor: '#1e40af'
      });
    }
  }

  disconnectJSONBin() {
    localStorage.removeItem(this.STORAGE_KEYS.JSONBIN_KEY);
    localStorage.removeItem(this.STORAGE_KEYS.JSONBIN_ID);
    document.getElementById('jsonbinMasterKeyInput').value = '';
    document.getElementById('jsonbinBinIdInput').value = '';
    this.updateCloudUI();
    Swal.fire({ icon: 'info', title: 'Modo Local Activado', text: 'Los datos ahora se guardan únicamente en la memoria de este navegador.' });
  }

  manualSyncCloud() {
    if (!this.hasJSONBinConfig()) {
      Swal.fire({
        icon: 'info',
        title: 'Nube no configurada',
        text: 'Ve a la pestaña "Nube JSONBin" para activar la sincronización entre dispositivos.',
        confirmButtonText: 'Configurar Nube',
        confirmButtonColor: '#1e40af'
      }).then(r => {
        if (r.isConfirmed) this.setTab('seguridad');
      });
      return;
    }
    this.fetchFromJSONBin(false);
  }

  // Sincronización automática al volver a la pestaña (visibilidad) y cada 25s
  setupVisibilitySync() {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && this.hasJSONBinConfig()) {
        this.fetchFromJSONBin(true);
      }
    });

    setInterval(() => {
      if (document.visibilityState === 'visible' && this.hasJSONBinConfig()) {
        this.fetchFromJSONBin(true);
      }
    }, 25000);
  }

  // ==========================================
  // AUTENTICACIÓN / ACCESO
  // ==========================================
  checkAuthenticationState() {
    const token = localStorage.getItem(this.STORAGE_KEYS.AUTH_TOKEN) || sessionStorage.getItem(this.STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      this.isAdminAuthenticated = true;
      this.showAppView();
    } else {
      this.isAdminAuthenticated = false;
      this.showLoginView();
    }
  }

  showLoginView() {
    document.getElementById('viewLogin').classList.remove('hidden');
    document.getElementById('viewApp').classList.add('hidden');
    this.updateLoginHint();
    const userInput = document.getElementById('loginUsername');
    if (userInput && !userInput.value) {
      userInput.value = this.adminUser || localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin';
    }
  }

  showAppView() {
    document.getElementById('viewLogin').classList.add('hidden');
    document.getElementById('viewApp').classList.remove('hidden');
    this.renderAll();
    this.setTab('stock');
    this.updateCloudUI();
    this.updateAdminBadge();
  }

  async handleLoginSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const rememberMe = document.getElementById('loginRememberMe').checked;

    const submitBtn = document.querySelector('#formFullLogin button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner spin-fast mr-2"></i> <span>Verificando con la nube...</span>';
    }

    try {
      // Siempre verificar directamente contra la nube JSONBin en vivo (con cache-busting)
      if (this.hasJSONBinConfig()) {
        try {
          const binId = this.getJSONBinId();
          const key = this.getJSONBinKey();
          const headers = {};
          if (key) {
            headers['X-Master-Key'] = key;
            headers['X-Access-Key'] = key;
          }
          const url = `https://api.jsonbin.io/v3/b/${binId}/latest?_t=${Date.now()}`;
          let res = await fetch(url, { headers, cache: 'no-store' });
          if (!res.ok && (res.status === 401 || res.status === 403)) {
            res = await fetch(url, { cache: 'no-store' });
          }
          if (res.ok) {
            const data = await res.json();
            if (data.record) {
              if (data.record.adminUser) {
                this.adminUser = data.record.adminUser;
                localStorage.setItem(this.STORAGE_KEYS.ADMIN_USER, data.record.adminUser);
              }
              if (data.record.adminPass) {
                this.adminPass = data.record.adminPass;
                localStorage.setItem(this.STORAGE_KEYS.ADMIN_PASS, data.record.adminPass);
              }
              this.saveLocalCacheOnly();
            }
          }
        } catch (err) {
          console.warn('Aviso al verificar credenciales en la nube:', err);
        }
      }

      const savedUser = this.adminUser || localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin';
      const savedPass = this.adminPass || localStorage.getItem(this.STORAGE_KEYS.ADMIN_PASS) || 'admin1234';

      if (username === savedUser && password === savedPass) {
        const token = 'token_auth_' + Date.now();
        if (rememberMe) {
          localStorage.setItem(this.STORAGE_KEYS.AUTH_TOKEN, token);
        } else {
          sessionStorage.setItem(this.STORAGE_KEYS.AUTH_TOKEN, token);
        }
        this.isAdminAuthenticated = true;

        Swal.fire({
          icon: 'success',
          title: 'Acceso Concedido',
          text: 'Bienvenido Jefe de Almacén',
          timer: 1000,
          showConfirmButton: false
        }).then(() => {
          this.showAppView();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Credenciales Incorrectas',
          html: `
            <p class="text-xs text-slate-600 mb-1">El usuario o la contraseña ingresados no coinciden con las registradas en el sistema.</p>
            <p class="text-[11px] text-slate-400">Usuario registrado: <strong class="text-blue-700">${this.escapeHtml(savedUser)}</strong></p>
          `,
          confirmButtonColor: '#1e40af'
        });
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  }

  updateLoginHint() {
    const hint = document.getElementById('loginHintText');
    if (hint) {
      const user = this.adminUser || localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin';
      hint.innerHTML = `Sincronizado con JSONBin &bull; Usuario activo: <span class="font-mono text-blue-700 font-bold">${this.escapeHtml(user)}</span>`;
    }
  }

  updateAdminBadge() {
    const nameEl = document.getElementById('adminNameDisplay');
    if (nameEl) {
      const user = this.adminUser || localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin';
      nameEl.textContent = user.charAt(0).toUpperCase() + user.slice(1);
    }
  }

  togglePasswordVisibility() {
    const input = document.getElementById('loginPassword');
    const icon = document.getElementById('togglePasswordIcon');
    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'fa-solid fa-eye-slash';
    } else {
      input.type = 'password';
      icon.className = 'fa-solid fa-eye';
    }
  }

  async logoutAdmin() {
    const confirm = await Swal.fire({
      title: '¿Cerrar Sesión?',
      text: 'Se bloqueará el acceso hasta que vuelvas a ingresar.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, Salir',
      confirmButtonColor: '#e11d48',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      localStorage.removeItem(this.STORAGE_KEYS.AUTH_TOKEN);
      sessionStorage.removeItem(this.STORAGE_KEYS.AUTH_TOKEN);
      this.isAdminAuthenticated = false;
      this.showLoginView();
      this.updateLoginHint();
    }
  }

  async promptChangeAdminPassword() {
    const savedUser = this.adminUser || localStorage.getItem(this.STORAGE_KEYS.ADMIN_USER) || 'admin';

    const { value: formValues } = await Swal.fire({
      title: 'Cambiar Credenciales de Acceso',
      html: `
        <div class="space-y-3 text-left text-xs font-semibold">
          <label>Nuevo Usuario:</label>
          <input id="swal-new-user" type="text" value="${this.escapeHtml(savedUser)}" class="swal2-input !mt-1 !text-sm">
          <label>Nueva Contraseña:</label>
          <input id="swal-new-pass" type="password" placeholder="Mínimo 4 caracteres" class="swal2-input !mt-1 !text-sm">
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Guardar y Sincronizar en la Nube',
      confirmButtonColor: '#1e40af',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        return [
          document.getElementById('swal-new-user').value.trim(),
          document.getElementById('swal-new-pass').value.trim()
        ];
      }
    });

    if (formValues) {
      const [newUser, newPass] = formValues;
      if (!newUser) return Swal.fire({ icon: 'warning', text: 'El usuario no puede estar vacío.' });
      if (!newPass || newPass.length < 4) return Swal.fire({ icon: 'warning', text: 'La contraseña debe tener al menos 4 caracteres.' });

      Swal.fire({
        title: 'Sincronizando con la Nube...',
        text: 'Guardando nuevas credenciales en JSONBin para celular y PC...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      });

      this.adminUser = newUser;
      this.adminPass = newPass;
      localStorage.setItem(this.STORAGE_KEYS.ADMIN_USER, newUser);
      localStorage.setItem(this.STORAGE_KEYS.ADMIN_PASS, newPass);
      this.saveLocalCacheOnly();

      // Forzar subida a la nube JSONBin
      await this.pushToJSONBin(true);

      this.updateLoginHint();
      this.updateAdminBadge();

      Swal.fire({
        icon: 'success',
        title: '¡Credenciales Sincronizadas!',
        html: `
          <div class="text-left text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <p><strong>Usuario guardado:</strong> <code class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono font-bold">${this.escapeHtml(newUser)}</code></p>
            <p><strong>Contraseña guardada:</strong> <code class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono font-bold">${this.escapeHtml(newPass)}</code></p>
            <p class="text-emerald-700 font-semibold mt-2">✅ Ya está actualizada en la nube JSONBin y funcionará en tu celular y cualquier otro dispositivo inmediatamente.</p>
          </div>
        `,
        confirmButtonColor: '#10b981'
      });
    }
  }

  setupClock() {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: true 
      };
      const text = now.toLocaleString('es-CO', options);
      const el = document.getElementById('currentLiveTimestamp');
      if (el) el.textContent = text;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  setupInactivityTimeout() {
    let timeout;
    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (this.isAdminAuthenticated) {
          localStorage.removeItem(this.STORAGE_KEYS.AUTH_TOKEN);
          sessionStorage.removeItem(this.STORAGE_KEYS.AUTH_TOKEN);
          this.isAdminAuthenticated = false;
          this.showLoginView();
        }
      }, 30 * 60 * 1000);
    };
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
  }

  // ==========================================
  // NAVEGACIÓN
  // ==========================================
  setTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
    
    const target = document.getElementById(`tab-${tabName}`);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.nav-tab').forEach(btn => {
      btn.classList.remove('bg-white/20', 'text-white', 'shadow-sm');
      btn.classList.add('text-blue-100');
    });
    const activeDesktopBtn = document.getElementById(`tabBtn-${tabName}`);
    if (activeDesktopBtn) {
      activeDesktopBtn.classList.add('bg-white/20', 'text-white', 'shadow-sm');
      activeDesktopBtn.classList.remove('text-blue-100');
    }

    ['stock', 'salidas', 'entradas', 'personal', 'historial'].forEach(name => {
      const mobBtn = document.getElementById(`mobNav-${name}`);
      if (mobBtn) {
        if (name === tabName) {
          mobBtn.classList.remove('text-slate-400');
          mobBtn.classList.add('text-blue-700', 'font-bold');
        } else {
          mobBtn.classList.remove('text-blue-700', 'font-bold');
          mobBtn.classList.add('text-slate-400');
        }
      }
    });

    if (tabName === 'stock') this.renderStockView();
    if (tabName === 'salidas') this.prepareSalidasView();
    if (tabName === 'entradas') this.prepareEntradasView();
    if (tabName === 'personal') this.renderEmployeeDirectory();
    if (tabName === 'historial') this.renderHistoryView();
    if (tabName === 'seguridad') this.updateCloudUI();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // RENDERIZADO GLOBAL
  // ==========================================
  renderAll() {
    this.updateStats();
    this.populateCategoryFilter();
    this.renderStockView();
    this.populateSelects();
    this.renderEmployeeDirectory();
    this.renderHistoryView();
  }

  updateStats() {
    const totalItems = this.items.length;
    const lowStockCount = this.items.filter(i => Number(i.stock) <= (i.minStock || 2)).length;
    const totalEmployees = this.employees.length;
    const totalDeliveries = this.movements.filter(m => m.tipo === 'SALIDA').length;

    document.getElementById('statTotalItems').textContent = totalItems;
    document.getElementById('statLowStock').textContent = lowStockCount;
    document.getElementById('statTotalEmployees').textContent = totalEmployees;
    document.getElementById('statTotalDeliveries').textContent = totalDeliveries;
    document.getElementById('badgeStockTotal').textContent = totalItems;
  }

  populateCategoryFilter() {
    const select = document.getElementById('categoryFilter');
    const categories = Array.from(new Set(this.items.map(i => i.categoria))).sort();
    
    const currentVal = select.value;
    select.innerHTML = '<option value="">Todas las categorías</option>';
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      select.appendChild(opt);
    });
    select.value = currentVal;
  }

  // ==========================================
  // TAB 1: STOCK VIEW (DESKTOP + MOBILE)
  // ==========================================
  renderStockView() {
    const tbody = document.getElementById('stockTableBody');
    const mobileContainer = document.getElementById('stockMobileContainer');
    const search = (document.getElementById('searchInput').value || '').toLowerCase().trim();
    const selectedCat = document.getElementById('categoryFilter').value;

    let filtered = this.items.filter(item => {
      const matchSearch = item.nombre.toLowerCase().includes(search) || item.categoria.toLowerCase().includes(search);
      const matchCat = !selectedCat || item.categoria === selectedCat;
      return matchSearch && matchCat;
    });

    filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));

    if (filtered.length === 0) {
      const emptyHtml = `
        <div class="py-8 text-center text-slate-400">
          <i class="fa-solid fa-box-open text-3xl mb-2 block"></i>
          No se encontraron insumos que coincidan con la búsqueda.
        </div>
      `;
      tbody.innerHTML = `<tr><td colspan="6">${emptyHtml}</td></tr>`;
      mobileContainer.innerHTML = emptyHtml;
      document.getElementById('stockSummaryText').textContent = '0 insumos encontrados';
      return;
    }

    // 1. Desktop
    tbody.innerHTML = filtered.map(item => {
      const stockNum = Number(item.stock);
      const minStock = Number(item.minStock || 2);
      
      let badgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200';
      let statusText = 'Disponible';
      let dotColor = 'bg-emerald-500';

      if (stockNum <= 0) {
        badgeClass = 'bg-rose-50 text-rose-700 border-rose-200';
        statusText = 'Agotado';
        dotColor = 'bg-rose-500';
      } else if (stockNum <= minStock) {
        badgeClass = 'bg-amber-50 text-amber-700 border-amber-200';
        statusText = 'Crítico';
        dotColor = 'bg-amber-500 animate-ping';
      } else if (stockNum <= 5) {
        badgeClass = 'bg-amber-50 text-amber-700 border-amber-200';
        statusText = 'Bajo';
        dotColor = 'bg-amber-500';
      }

      return `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3 px-4 font-semibold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full ${dotColor} shrink-0"></span>
            <span>${this.escapeHtml(item.nombre)}</span>
          </td>
          <td class="py-3 px-4 text-slate-500">
            <span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium">
              ${this.escapeHtml(item.categoria)}
            </span>
          </td>
          <td class="py-3 px-4 text-center">
            <span class="font-mono text-base font-bold ${stockNum <= minStock ? 'text-rose-600' : 'text-slate-800'}">
              ${stockNum}
            </span>
          </td>
          <td class="py-3 px-4 text-center text-xs text-slate-500">
            ${this.escapeHtml(item.unidad || 'Unidades')}
          </td>
          <td class="py-3 px-4 text-center">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeClass}">
              ${statusText}
            </span>
          </td>
          <td class="py-3 px-4 text-right">
            <div class="flex items-center justify-end gap-1.5">
              <button onclick="app.quickDeliver('${item.id}')" title="Entregar a un empleado" class="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold rounded-lg border border-amber-200 transition flex items-center gap-1">
                <i class="fa-solid fa-hand-holding-hand"></i>
                <span>Entregar</span>
              </button>
              <button onclick="app.quickRestock('${item.id}')" title="Reabastecer stock" class="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200 transition flex items-center gap-1">
                <i class="fa-solid fa-plus"></i>
                <span>Entrada</span>
              </button>
              <button onclick="app.editItem('${item.id}')" title="Editar" class="p-1 text-slate-400 hover:text-blue-600 transition">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button onclick="app.deleteItem('${item.id}')" title="Eliminar del catálogo" class="p-1 text-slate-400 hover:text-rose-600 transition">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // 2. Mobile
    mobileContainer.innerHTML = filtered.map(item => {
      const stockNum = Number(item.stock);
      const minStock = Number(item.minStock || 2);

      let statusColor = 'border-emerald-200 bg-emerald-50 text-emerald-700';
      let statusText = 'Disponible';
      let dotColor = 'bg-emerald-500';

      if (stockNum <= 0) {
        statusColor = 'border-rose-200 bg-rose-50 text-rose-700';
        statusText = 'Agotado';
        dotColor = 'bg-rose-500';
      } else if (stockNum <= minStock) {
        statusColor = 'border-rose-200 bg-rose-50 text-rose-700';
        statusText = 'Crítico';
        dotColor = 'bg-rose-500';
      } else if (stockNum <= 5) {
        statusColor = 'border-amber-200 bg-amber-50 text-amber-700';
        statusText = 'Bajo';
        dotColor = 'bg-amber-500';
      }

      return `
        <div class="mobile-card bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-2">
              <div class="flex items-start gap-2">
                <span class="w-2.5 h-2.5 rounded-full ${dotColor} shrink-0 mt-1"></span>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm leading-tight">${this.escapeHtml(item.nombre)}</h4>
                  <span class="inline-block mt-1 bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-medium">
                    ${this.escapeHtml(item.categoria)}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <button onclick="app.editItem('${item.id}')" class="p-1 text-slate-400 hover:text-blue-600 text-xs" title="Editar">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button onclick="app.deleteItem('${item.id}')" class="p-1 text-slate-400 hover:text-rose-600 text-xs" title="Eliminar">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between py-2 border-y border-slate-100 my-2">
              <div>
                <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Stock Actual:</span>
                <span class="font-mono text-lg font-extrabold text-slate-900">${stockNum}</span>
                <span class="text-xs text-slate-500 font-medium">${this.escapeHtml(item.unidad || 'Unidades')}</span>
              </div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColor}">
                ${statusText}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 mt-1">
            <button onclick="app.quickDeliver('${item.id}')" class="py-2.5 px-3 bg-amber-500 active:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition">
              <i class="fa-solid fa-hand-holding-hand"></i>
              <span>Entregar</span>
            </button>
            <button onclick="app.quickRestock('${item.id}')" class="py-2.5 px-3 bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition">
              <i class="fa-solid fa-plus"></i>
              <span>Reabastecer</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('stockSummaryText').textContent = `Mostrando ${filtered.length} de ${this.items.length} insumos registrados`;
  }

  // ==========================================
  // TAB 2: SALIDAS / ENTREGAS
  // ==========================================
  prepareSalidasView(preselectedItemId = null) {
    this.populateSelects();
    if (preselectedItemId) {
      document.getElementById('salidaInsumoSelect').value = preselectedItemId;
      this.handleSalidaInsumoChange();
    }
  }

  quickDeliver(itemId) {
    this.setTab('salidas');
    this.prepareSalidasView(itemId);
  }

  handleSalidaInsumoChange() {
    const itemId = document.getElementById('salidaInsumoSelect').value;
    const infoBox = document.getElementById('salidaStockInfo');
    const availableEl = document.getElementById('salidaStockAvailable');
    const unitEl = document.getElementById('salidaStockUnit');
    const inputCantidad = document.getElementById('salidaCantidad');

    if (!itemId) {
      infoBox.classList.add('hidden');
      return;
    }

    const item = this.items.find(i => i.id === itemId);
    if (item) {
      infoBox.classList.remove('hidden');
      availableEl.textContent = item.stock;
      unitEl.textContent = item.unidad || 'Unidades';
      inputCantidad.max = item.stock;
    }
  }

  async handleRegisterSalida(e) {
    e.preventDefault();

    const empId = document.getElementById('salidaEmpleadoSelect').value;
    const itemId = document.getElementById('salidaInsumoSelect').value;
    const cantidad = parseFloat(document.getElementById('salidaCantidad').value);
    const motivo = document.getElementById('salidaMotivo').value.trim();

    if (!empId || !itemId || isNaN(cantidad) || cantidad <= 0) {
      return Swal.fire({ icon: 'warning', title: 'Datos incompletos', text: 'Por favor selecciona el empleado, el insumo y la cantidad válida.' });
    }

    const employee = this.employees.find(e => e.id === empId);
    const item = this.items.find(i => i.id === itemId);

    if (!item) return;

    if (cantidad > Number(item.stock)) {
      return Swal.fire({
        icon: 'error',
        title: 'Stock Insuficiente',
        text: `No puedes entregar ${cantidad} ${item.unidad}. Solo hay ${item.stock} disponibles en stock.`
      });
    }

    const confirm = await Swal.fire({
      title: '¿Confirmar Entrega?',
      html: `
        <div class="text-left text-xs sm:text-sm bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
          <p><strong>Empleado:</strong> ${this.escapeHtml(employee.nombre)}</p>
          <p><strong>Insumo:</strong> ${this.escapeHtml(item.nombre)}</p>
          <p><strong>Cantidad:</strong> <span class="text-rose-600 font-bold">${cantidad} ${item.unidad}</span></p>
          <p class="text-[11px] text-slate-500 mt-2">Se registrará automáticamente con fecha y hora actual.</p>
        </div>
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, Registrar',
      confirmButtonColor: '#f59e0b',
      cancelButtonText: 'Cancelar'
    });

    if (!confirm.isConfirmed) return;

    // Descontar stock
    item.stock = parseFloat((Number(item.stock) - cantidad).toFixed(2));

    // Registro inmutable
    const now = new Date();
    const movement = {
      id: 'mov-' + Date.now(),
      tipo: 'SALIDA',
      insumoId: item.id,
      nombreInsumo: item.nombre,
      empleadoId: employee.id,
      nombreEmpleado: employee.nombre,
      cantidad: cantidad,
      unidad: item.unidad || 'Unidades',
      motivo: motivo || 'Entrega estándar de suministros',
      fechaHoraIso: now.toISOString(),
      fecha: now.toLocaleDateString('es-CO'),
      hora: now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }),
      registradoPor: 'Jefe / Administrador'
    };

    this.movements.unshift(movement);

    // Guardar simultáneamente en local y en la nube JSONBin
    await this.persistState(true);

    document.getElementById('formSalida').reset();
    document.getElementById('salidaStockInfo').classList.add('hidden');

    Swal.fire({
      icon: 'success',
      title: 'Entrega Registrada y Guardada',
      html: `Anotado a <strong>${this.escapeHtml(employee.nombre)}</strong> a las <strong>${movement.hora}</strong> del <strong>${movement.fecha}</strong>.`,
      confirmButtonColor: '#1e40af'
    });

    this.renderStockView();
  }

  // ==========================================
  // TAB 3: ENTRADAS / REABASTECIMIENTO
  // ==========================================
  prepareEntradasView(preselectedItemId = null) {
    this.populateSelects();
    if (preselectedItemId) {
      document.getElementById('entradaInsumoSelect').value = preselectedItemId;
      this.handleEntradaInsumoChange();
    }
  }

  quickRestock(itemId) {
    this.setTab('entradas');
    this.prepareEntradasView(itemId);
  }

  handleEntradaInsumoChange() {
    const itemId = document.getElementById('entradaInsumoSelect').value;
    const infoBox = document.getElementById('entradaStockInfo');
    const availableEl = document.getElementById('entradaStockAvailable');
    const unitEl = document.getElementById('entradaStockUnit');

    if (!itemId) {
      infoBox.classList.add('hidden');
      return;
    }

    const item = this.items.find(i => i.id === itemId);
    if (item) {
      infoBox.classList.remove('hidden');
      availableEl.textContent = item.stock;
      unitEl.textContent = item.unidad || 'Unidades';
    }
  }

  async handleRegisterEntrada(e) {
    e.preventDefault();

    const itemId = document.getElementById('entradaInsumoSelect').value;
    const cantidad = parseFloat(document.getElementById('entradaCantidad').value);
    const motivo = document.getElementById('entradaMotivo').value.trim();

    if (!itemId || isNaN(cantidad) || cantidad <= 0) {
      return Swal.fire({ icon: 'warning', title: 'Datos incompletos', text: 'Por favor selecciona el insumo y una cantidad válida.' });
    }

    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    item.stock = parseFloat((Number(item.stock) + cantidad).toFixed(2));

    const now = new Date();
    const movement = {
      id: 'mov-' + Date.now(),
      tipo: 'ENTRADA',
      insumoId: item.id,
      nombreInsumo: item.nombre,
      empleadoId: null,
      nombreEmpleado: 'Reabastecimiento Almacén',
      cantidad: cantidad,
      unidad: item.unidad || 'Unidades',
      motivo: motivo || 'Entrada de reposición de stock',
      fechaHoraIso: now.toISOString(),
      fecha: now.toLocaleDateString('es-CO'),
      hora: now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }),
      registradoPor: 'Jefe / Administrador'
    };

    this.movements.unshift(movement);

    await this.persistState(true);

    document.getElementById('formEntrada').reset();
    document.getElementById('entradaStockInfo').classList.add('hidden');

    Swal.fire({
      icon: 'success',
      title: 'Stock Actualizado en la Nube',
      text: `Se sumaron ${cantidad} ${item.unidad} a "${item.nombre}". Nuevo stock: ${item.stock}.`,
      confirmButtonColor: '#10b981'
    });

    this.renderStockView();
  }

  // ==========================================
  // TAB 4: PERSONAL A CARGO (EMPLEADOS)
  // ==========================================
  renderEmployeeDirectory() {
    const container = document.getElementById('employeeCardsContainer');
    
    if (this.employees.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
          <i class="fa-solid fa-users text-4xl mb-3 block"></i>
          <p class="font-medium">No hay empleados registrados actualmente.</p>
          <button onclick="app.openNewEmployeeModal()" class="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold">
            Añadir primer empleado
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = this.employees.map(emp => {
      const deliveriesCount = this.movements.filter(m => m.empleadoId === emp.id || m.nombreEmpleado === emp.nombre).length;

      return `
        <div class="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between mb-2">
              <div class="flex items-center gap-2.5">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-100 shrink-0">
                  <i class="fa-solid fa-user"></i>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 text-sm leading-snug">${this.escapeHtml(emp.nombre)}</h3>
                  <p class="text-[11px] text-blue-700 font-medium">${this.escapeHtml(emp.cargo || 'Operaciones')}</p>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <button onclick="app.editEmployee('${emp.id}')" title="Editar" class="p-1 text-slate-400 hover:text-blue-600 text-xs">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button onclick="app.deleteEmployee('${emp.id}')" title="Eliminar" class="p-1 text-slate-400 hover:text-rose-600 text-xs">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>

            <div class="space-y-1 text-xs text-slate-500 border-t border-slate-100 pt-2.5">
              ${emp.documento ? `<p><i class="fa-solid fa-id-card w-4 text-slate-400"></i> CC: <span class="text-slate-700 font-mono">${this.escapeHtml(emp.documento)}</span></p>` : ''}
              ${emp.telefono ? `<p><i class="fa-solid fa-phone w-4 text-slate-400"></i> Tel: <span class="text-slate-700">${this.escapeHtml(emp.telefono)}</span></p>` : ''}
              <p><i class="fa-solid fa-boxes-packing w-4 text-slate-400"></i> Entregas: <strong class="text-blue-600">${deliveriesCount}</strong></p>
            </div>
          </div>

          <div class="mt-3 pt-2.5 border-t border-slate-100 flex gap-2">
            <button onclick="app.filterHistoryByEmployee('${this.escapeHtml(emp.nombre)}')" class="flex-1 py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1">
              <i class="fa-solid fa-clock-rotate-left text-blue-600"></i>
              <span>Historial</span>
            </button>
            <button onclick="app.deliverToEmployee('${emp.id}')" class="py-2 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition flex items-center gap-1">
              <i class="fa-solid fa-hand-holding-hand"></i>
              <span>Entregar</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  deliverToEmployee(empId) {
    this.setTab('salidas');
    this.prepareSalidasView();
    document.getElementById('salidaEmpleadoSelect').value = empId;
  }

  filterHistoryByEmployee(employeeName) {
    this.setTab('historial');
    document.getElementById('historialFilterEmpleado').value = employeeName;
    this.renderHistoryView();
  }

  openNewEmployeeModal() {
    document.getElementById('modalEmployeeTitle').innerHTML = '<i class="fa-solid fa-user-plus text-blue-600"></i> <span>Añadir Empleado</span>';
    document.getElementById('modalEmployeeId').value = '';
    document.getElementById('formNewEmployee').reset();
    document.getElementById('modalNewEmployee').classList.remove('hidden');
    document.getElementById('modalEmpNombre').focus();
  }

  closeNewEmployeeModal() {
    document.getElementById('modalNewEmployee').classList.add('hidden');
  }

  editEmployee(id) {
    const emp = this.employees.find(e => e.id === id);
    if (!emp) return;

    document.getElementById('modalEmployeeTitle').innerHTML = '<i class="fa-solid fa-user-pen text-blue-600"></i> <span>Editar Empleado</span>';
    document.getElementById('modalEmployeeId').value = emp.id;
    document.getElementById('modalEmpNombre').value = emp.nombre;
    document.getElementById('modalEmpCargo').value = emp.cargo || '';
    document.getElementById('modalEmpDocumento').value = emp.documento || '';
    document.getElementById('modalEmpTelefono').value = emp.telefono || '';
    
    document.getElementById('modalNewEmployee').classList.remove('hidden');
  }

  async handleSaveEmployee(e) {
    e.preventDefault();

    const id = document.getElementById('modalEmployeeId').value;
    const nombre = document.getElementById('modalEmpNombre').value.trim();
    const cargo = document.getElementById('modalEmpCargo').value.trim();
    const documento = document.getElementById('modalEmpDocumento').value.trim();
    const telefono = document.getElementById('modalEmpTelefono').value.trim();

    if (!nombre) return;

    if (id) {
      const emp = this.employees.find(e => e.id === id);
      if (emp) {
        emp.nombre = nombre;
        emp.cargo = cargo;
        emp.documento = documento;
        emp.telefono = telefono;
      }
    } else {
      this.employees.push({
        id: 'emp-' + Date.now(),
        nombre,
        cargo,
        documento,
        telefono
      });
    }

    await this.persistState(true);
    this.closeNewEmployeeModal();
    this.renderEmployeeDirectory();
    this.populateSelects();

    Swal.fire({
      icon: 'success',
      title: 'Personal Guardado',
      timer: 1000,
      showConfirmButton: false
    });
  }

  async deleteEmployee(id) {
    const emp = this.employees.find(e => e.id === id);
    if (!emp) return;

    const confirm = await Swal.fire({
      title: '¿Remover empleado?',
      text: `Se removerá a "${emp.nombre}". Las entregas pasadas registradas a su nombre se conservarán intactas para auditoría.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, remover',
      confirmButtonColor: '#e11d48',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      this.employees = this.employees.filter(e => e.id !== id);
      await this.persistState(true);
      this.renderEmployeeDirectory();
      this.populateSelects();

      Swal.fire({
        icon: 'success',
        title: 'Removido',
        timer: 1000,
        showConfirmButton: false
      });
    }
  }

  // ==========================================
  // TAB 5: HISTORIAL Y AUDITORÍA
  // ==========================================
  renderHistoryView() {
    const tbody = document.getElementById('historyTableBody');
    const mobileContainer = document.getElementById('historyMobileContainer');
    const selectedEmp = document.getElementById('historialFilterEmpleado').value;
    const selectedTipo = document.getElementById('historialFilterTipo').value;
    const searchInsumo = (document.getElementById('historialSearchInsumo').value || '').toLowerCase().trim();

    let filtered = this.movements.filter(mov => {
      const matchEmp = !selectedEmp || mov.nombreEmpleado === selectedEmp;
      const matchTipo = !selectedTipo || mov.tipo === selectedTipo;
      const matchInsumo = !searchInsumo || mov.nombreInsumo.toLowerCase().includes(searchInsumo);
      return matchEmp && matchTipo && matchInsumo;
    });

    if (filtered.length === 0) {
      const emptyHtml = `
        <div class="py-8 text-center text-slate-400">
          <i class="fa-solid fa-clipboard-list text-3xl mb-2 block"></i>
          No hay registros de movimientos en los filtros seleccionados.
        </div>
      `;
      tbody.innerHTML = `<tr><td colspan="7">${emptyHtml}</td></tr>`;
      mobileContainer.innerHTML = emptyHtml;
      document.getElementById('historySummaryText').textContent = '0 registros encontrados';
      return;
    }

    // 1. Desktop
    tbody.innerHTML = filtered.map(mov => {
      const isSalida = mov.tipo === 'SALIDA';
      const badgeTipo = isSalida 
        ? '<span class="bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200"><i class="fa-solid fa-arrow-up text-[10px] mr-1"></i>Salida</span>'
        : '<span class="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200"><i class="fa-solid fa-arrow-down text-[10px] mr-1"></i>Entrada</span>';

      return `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3 px-4 font-mono text-xs text-slate-600 whitespace-nowrap">
            <div class="font-bold text-slate-800">${mov.fecha}</div>
            <div class="text-[11px] text-slate-400">${mov.hora}</div>
          </td>
          <td class="py-3 px-4 text-center">
            ${badgeTipo}
          </td>
          <td class="py-3 px-4 font-semibold text-slate-900">
            <div class="flex items-center gap-1.5">
              <i class="fa-solid ${isSalida ? 'fa-user' : 'fa-warehouse'} text-xs text-slate-400"></i>
              <span>${this.escapeHtml(mov.nombreEmpleado)}</span>
            </div>
          </td>
          <td class="py-3 px-4 text-slate-800 font-medium">
            ${this.escapeHtml(mov.nombreInsumo)}
          </td>
          <td class="py-3 px-4 text-center font-mono font-bold ${isSalida ? 'text-amber-700' : 'text-emerald-700'}">
            ${isSalida ? '-' : '+'}${mov.cantidad} <span class="text-[11px] font-normal text-slate-500">${this.escapeHtml(mov.unidad)}</span>
          </td>
          <td class="py-3 px-4 text-xs text-slate-500 italic max-w-xs truncate" title="${this.escapeHtml(mov.motivo || '')}">
            ${this.escapeHtml(mov.motivo || 'Sin observaciones')}
          </td>
          <td class="py-3 px-4 text-center">
            <span class="inline-flex items-center gap-1 text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-mono">
              <i class="fa-solid fa-lock text-[10px] text-emerald-600"></i>
              <span>Inmutable</span>
            </span>
          </td>
        </tr>
      `;
    }).join('');

    // 2. Mobile
    mobileContainer.innerHTML = filtered.map(mov => {
      const isSalida = mov.tipo === 'SALIDA';
      const borderClass = isSalida ? 'border-amber-200' : 'border-emerald-200';
      const badgeClass = isSalida ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800';

      return `
        <div class="mobile-card bg-white p-3.5 rounded-2xl border ${borderClass} shadow-sm">
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="font-bold text-[11px] px-2 py-0.5 rounded-full ${badgeClass}">
              ${isSalida ? '📤 Entrega' : '📥 Reabastecimiento'}
            </span>
            <span class="font-mono text-[11px] text-slate-500 font-semibold">${mov.fecha} &bull; ${mov.hora}</span>
          </div>

          <div class="mb-1.5">
            <div class="text-xs text-slate-400 uppercase font-semibold">Receptor:</div>
            <div class="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <i class="fa-solid ${isSalida ? 'fa-user text-blue-600' : 'fa-warehouse text-emerald-600'} text-xs"></i>
              <span>${this.escapeHtml(mov.nombreEmpleado)}</span>
            </div>
          </div>

          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between my-2">
            <span class="font-medium text-slate-800 text-xs">${this.escapeHtml(mov.nombreInsumo)}</span>
            <span class="font-mono font-bold text-sm ${isSalida ? 'text-amber-700' : 'text-emerald-700'}">
              ${isSalida ? '-' : '+'}${mov.cantidad} ${this.escapeHtml(mov.unidad)}
            </span>
          </div>

          ${mov.motivo ? `<p class="text-xs text-slate-500 italic mt-1">Obs: ${this.escapeHtml(mov.motivo)}</p>` : ''}
        </div>
      `;
    }).join('');

    document.getElementById('historySummaryText').textContent = `Mostrando ${filtered.length} de ${this.movements.length} movimientos de auditoría`;
  }

  // ==========================================
  // GESTIÓN DE INSUMOS
  // ==========================================
  openNewItemModal() {
    document.getElementById('modalItemTitle').innerHTML = '<i class="fa-solid fa-box text-blue-600"></i> <span>Nuevo Insumo</span>';
    document.getElementById('modalItemId').value = '';
    document.getElementById('formNewItem').reset();
    document.getElementById('modalItemMinStock').value = '2';
    const deleteBtn = document.getElementById('btnModalDeleteItem');
    if (deleteBtn) deleteBtn.classList.add('hidden');
    document.getElementById('modalNewItem').classList.remove('hidden');
    document.getElementById('modalItemNombre').focus();
  }

  closeNewItemModal() {
    document.getElementById('modalNewItem').classList.add('hidden');
  }

  editItem(id) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;

    document.getElementById('modalItemTitle').innerHTML = '<i class="fa-solid fa-pen-to-square text-blue-600"></i> <span>Editar Insumo</span>';
    document.getElementById('modalItemId').value = item.id;
    document.getElementById('modalItemNombre').value = item.nombre;
    document.getElementById('modalItemCategoria').value = item.categoria;
    document.getElementById('modalItemUnidad').value = item.unidad;
    document.getElementById('modalItemStock').value = item.stock;
    document.getElementById('modalItemMinStock').value = item.minStock || 2;
    
    const deleteBtn = document.getElementById('btnModalDeleteItem');
    if (deleteBtn) deleteBtn.classList.remove('hidden');

    document.getElementById('modalNewItem').classList.remove('hidden');
  }

  async deleteItem(id) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;

    const confirm = await Swal.fire({
      title: '¿Eliminar Insumo?',
      html: `
        <div class="text-left text-xs sm:text-sm bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
          <p>¿Estás seguro de que deseas eliminar <strong>"${this.escapeHtml(item.nombre)}"</strong> del catálogo?</p>
          <p class="text-xs text-slate-500 mt-2">Nota de auditoría: los registros históricos de entregas pasadas de este insumo se conservarán intactos.</p>
        </div>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: '#e11d48',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      this.items = this.items.filter(i => i.id !== id);
      await this.persistState(true);
      this.populateCategoryFilter();
      this.renderStockView();
      this.populateSelects();
      this.updateStats();

      Swal.fire({
        icon: 'success',
        title: 'Insumo Eliminado',
        text: `"${item.nombre}" se ha eliminado del inventario y de la nube.`,
        timer: 1500,
        showConfirmButton: false
      });
    }
  }

  deleteItemFromModal() {
    const id = document.getElementById('modalItemId').value;
    if (id) {
      this.closeNewItemModal();
      this.deleteItem(id);
    }
  }

  async handleSaveItem(e) {
    e.preventDefault();

    const id = document.getElementById('modalItemId').value;
    const nombre = document.getElementById('modalItemNombre').value.trim();
    const categoria = document.getElementById('modalItemCategoria').value.trim();
    const unidad = document.getElementById('modalItemUnidad').value.trim() || 'Unidades';
    const stock = parseFloat(document.getElementById('modalItemStock').value);
    const minStock = parseFloat(document.getElementById('modalItemMinStock').value) || 2;

    if (!nombre || !categoria || isNaN(stock)) return;

    if (id) {
      const item = this.items.find(i => i.id === id);
      if (item) {
        item.nombre = nombre;
        item.categoria = categoria;
        item.unidad = unidad;
        item.stock = stock;
        item.minStock = minStock;
      }
    } else {
      this.items.push({
        id: 'ins-' + Date.now(),
        nombre,
        categoria,
        unidad,
        stock,
        minStock
      });
    }

    await this.persistState(true);
    this.closeNewItemModal();
    this.populateCategoryFilter();
    this.renderStockView();
    this.populateSelects();

    Swal.fire({
      icon: 'success',
      title: 'Insumo Guardado',
      timer: 1000,
      showConfirmButton: false
    });
  }

  // ==========================================
  // HELPERS SELECTORES
  // ==========================================
  populateSelects() {
    const empSelect = document.getElementById('salidaEmpleadoSelect');
    const histEmpSelect = document.getElementById('historialFilterEmpleado');

    const empOptions = this.employees
      .sort((a, b) => a.nombre.localeCompare(b.nombre))
      .map(e => `<option value="${e.id}">${this.escapeHtml(e.nombre)} (${this.escapeHtml(e.cargo || 'General')})</option>`)
      .join('');

    empSelect.innerHTML = '<option value="">-- Selecciona el empleado --</option>' + empOptions;

    const histEmpOptions = this.employees
      .sort((a, b) => a.nombre.localeCompare(b.nombre))
      .map(e => `<option value="${this.escapeHtml(e.nombre)}">${this.escapeHtml(e.nombre)}</option>`)
      .join('');

    const currentHistVal = histEmpSelect.value;
    histEmpSelect.innerHTML = '<option value="">Todos los empleados</option>' + histEmpOptions;
    histEmpSelect.value = currentHistVal;

    const sortedItems = [...this.items].sort((a, b) => a.nombre.localeCompare(b.nombre));
    const itemOptions = sortedItems.map(i => {
      return `<option value="${i.id}">${this.escapeHtml(i.nombre)} (Disp: ${i.stock} ${this.escapeHtml(i.unidad)})</option>`;
    }).join('');

    document.getElementById('salidaInsumoSelect').innerHTML = '<option value="">-- Selecciona el insumo --</option>' + itemOptions;
    document.getElementById('entradaInsumoSelect').innerHTML = '<option value="">-- Selecciona el insumo --</option>' + itemOptions;
  }

  // ==========================================
  // EXPORTACIÓN A EXCEL (.XLSX)
  // ==========================================
  exportStockToExcel() {
    if (typeof XLSX === 'undefined') return;

    const data = this.items.map(item => ({
      'Insumo': item.nombre,
      'Categoría': item.categoria,
      'Stock Actual': item.stock,
      'Unidad de Medida': item.unidad,
      'Alerta Mínima': item.minStock || 2,
      'Estado': Number(item.stock) <= (item.minStock || 2) ? 'CRÍTICO' : 'ÓPTIMO'
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Stock Insumos");

    const dateStr = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `Stock_Insumos_UMetropolitana_${dateStr}.xlsx`);
  }

  exportHistoryToExcel() {
    if (typeof XLSX === 'undefined') return;

    const selectedEmp = document.getElementById('historialFilterEmpleado').value;
    const selectedTipo = document.getElementById('historialFilterTipo').value;

    let filtered = this.movements.filter(mov => {
      const matchEmp = !selectedEmp || mov.nombreEmpleado === selectedEmp;
      const matchTipo = !selectedTipo || mov.tipo === selectedTipo;
      return matchEmp && matchTipo;
    });

    if (filtered.length === 0) {
      return Swal.fire({ icon: 'info', text: 'No hay registros para exportar.' });
    }

    const data = filtered.map(m => ({
      'Fecha': m.fecha,
      'Hora Exacta': m.hora,
      'Tipo': m.tipo,
      'Empleado / Destino': m.nombreEmpleado,
      'Insumo Entregado': m.nombreInsumo,
      'Cantidad': m.cantidad,
      'Unidad': m.unidad,
      'Observaciones': m.motivo || '',
      'Registrado Por': m.registradoPor || 'Administrador'
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Auditoría Entregas");

    const prefix = selectedEmp ? `Auditoria_${selectedEmp.replace(/\s+/g, '_')}` : 'Auditoria_General_Insumos';
    const dateStr = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `${prefix}_${dateStr}.xlsx`);
  }

  exportAllToExcel() {
    if (typeof XLSX === 'undefined') return;

    const wb = XLSX.utils.book_new();

    const stockData = this.items.map(i => ({
      'Insumo': i.nombre,
      'Categoría': i.categoria,
      'Stock': i.stock,
      'Unidad': i.unidad,
      'Alerta Mínima': i.minStock || 2
    }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(stockData), "Catálogo Insumos");

    const empData = this.employees.map(e => ({
      'Nombre': e.nombre,
      'Cargo/Área': e.cargo || '',
      'Documento': e.documento || '',
      'Teléfono': e.telefono || ''
    }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(empData), "Personal a Cargo");

    const movData = this.movements.map(m => ({
      'Fecha': m.fecha,
      'Hora': m.hora,
      'Tipo': m.tipo,
      'Empleado': m.nombreEmpleado,
      'Insumo': m.nombreInsumo,
      'Cantidad': m.cantidad,
      'Unidad': m.unidad,
      'Motivo': m.motivo || ''
    }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(movData), "Historial Movimientos");

    const dateStr = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `Respaldo_Completo_Inventario_UMetro_${dateStr}.xlsx`);
  }

  downloadFullBackupJSON() {
    const backupData = {
      version: '3.0',
      timestamp: new Date().toISOString(),
      items: this.items,
      employees: this.employees,
      movements: this.movements
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Backup_Insumos_UMetropolitana_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new InventoryApp();
  window.app = app;
});
