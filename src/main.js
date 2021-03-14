class Clientes {
    constructor(nombre, impuesto = {}) {
      this.nombre = nombre;
      this.impuesto = {}
    }
    get getNombre() {
      return this.nombre;
    }
    set setNombre(val) {
      this.nombre = val;
    }
    get getImpuesto() {
      return this.impuesto.impuesto;
    }
    // ((monto_bruto_anual − deducciones) * 21%)
    calcularImpuesto(montoBrutoAnual, deducciones) {
      const impuesto = (montoBrutoAnual - deducciones) * 0.21;
      if (!impuesto) return;
      this.impuesto = {
        impuesto,
      };
    }
  }
  
  class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
      this.monto_bruto_anual = montoBrutoAnual;
      this.deducciones = deducciones;
    }
    get getMontoBrutoAnual() {
      return this.monto_bruto_anual;
    }
    set setMontoBrutoAnual(val) {
      this.monto_bruto_anual = val;
    }
    get getDeducciones() {
      return this.deducciones;
    }
    set setDeducciones(val) {
      this.deducciones = val;
    }
  }
  
  const inputNombre = document.getElementById("inputNombre");
  const inputMontoBrutoAnual = document.getElementById("inputMontoBrutoAnual");
  const inputDeducciones = document.getElementById("inputDeducciones");
  const boton = document.getElementById("boton");
  const calculo = document.getElementById("calculo");
  
  boton.addEventListener("click", () => {
    // Normalizaciones
    const inputMontoBrutoAnualNormalizado = Number(inputMontoBrutoAnual.value);
    const inputDeduccionesNormalizado = Number(inputDeducciones.value);
    const inputNombreNormalizado = inputNombre.value;
  
    if (
      !inputNombreNormalizado ||
      !inputMontoBrutoAnualNormalizado ||
      !inputDeduccionesNormalizado
    ) {
      alert("Escribe todos los datos");
      return;
    }
      const Cliente1 = new Clientes(inputNombreNormalizado);
    const Impuesto1 = new Impuestos(
      inputMontoBrutoAnualNormalizado,
      inputDeduccionesNormalizado
    );
  
    Cliente1.calcularImpuesto(
      Impuesto1.getMontoBrutoAnual,
      Impuesto1.getDeducciones
    );
  
    calculo.innerHTML = `<h1>El impuesto calculado para ${Cliente1.getNombre} es: ${Cliente1.getImpuesto}</h1>`;
  });