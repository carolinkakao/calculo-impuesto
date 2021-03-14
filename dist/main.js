"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Clientes = /*#__PURE__*/function () {
  function Clientes(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Clientes);

    this.nombre = nombre;
    this.impuesto = {};
  }

  _createClass(Clientes, [{
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(val) {
      this.nombre = val;
    }
  }, {
    key: "getImpuesto",
    get: function get() {
      return this.impuesto.impuesto;
    } // ((monto_bruto_anual − deducciones) * 21%)

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(montoBrutoAnual, deducciones) {
      var impuesto = (montoBrutoAnual - deducciones) * 0.21;
      if (!impuesto) return;
      this.impuesto = {
        impuesto: impuesto
      };
    }
  }]);

  return Clientes;
}();

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);

    this.monto_bruto_anual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMontoBrutoAnual",
    get: function get() {
      return this.monto_bruto_anual;
    }
  }, {
    key: "setMontoBrutoAnual",
    set: function (val) {
      this.monto_bruto_anual = val;
    }
  }, {
    key: "getDeducciones",
    get: function () {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function (val) {
      this.deducciones = val;
    }
  }]);

  return Impuestos;
}();

var inputNombre = document.getElementById("inputNombre");
var inputMontoBrutoAnual = document.getElementById("inputMontoBrutoAnual");
var inputDeducciones = document.getElementById("inputDeducciones");
var boton = document.getElementById("boton");
var calculo = document.getElementById("calculo");
boton.addEventListener("click", () => {
  // Normalizaciones
  var inputMontoBrutoAnualNormalizado = Number(inputMontoBrutoAnual.value);
  var inputDeduccionesNormalizado = Number(inputDeducciones.value);
  var inputNombreNormalizado = inputNombre.value;

  if (!inputNombreNormalizado || !inputMontoBrutoAnualNormalizado || !inputDeduccionesNormalizado) {
    alert("Escribe todos los datos");
    return;
  }

  var Cliente1 = new Clientes(inputNombreNormalizado);
  var Impuesto1 = new Impuestos(inputMontoBrutoAnualNormalizado, inputDeduccionesNormalizado);
  Cliente1.calcularImpuesto(Impuesto1.getMontoBrutoAnual, Impuesto1.getDeducciones);
  calculo.innerHTML = `<h1> ${Cliente1.getNombre} su impuesto calculado es: ${Cliente1.getImpuesto}</h1>`;
});