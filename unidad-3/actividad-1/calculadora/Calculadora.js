	class CustomCalculator extends HTMLElement
	{
		constructor()
		{
			super();

			this.container = document.createElement('div');
			this.container.classList.add('calculator-container');


			this.display = document.createElement('input');
			this.btn1 = document.createElement('button');
			this.btn2 = document.createElement('button');
			this.btn3 = document.createElement('button');
			this.btn4 = document.createElement('button');
			this.btn5 = document.createElement('button');
			this.btn6 = document.createElement('button');
			this.btn7 = document.createElement('button');
			this.btn8 = document.createElement('button');
			this.btn9 = document.createElement('button');
			this.btn0 = document.createElement('button');
			this.btnPlus = document.createElement('button');
			this.btnMinus = document.createElement('button');
			this.btnMultiply = document.createElement('button');
			this.btnDivide = document.createElement('button');
			this.btnDot = document.createElement('button');
			this.btnClear = document.createElement('button');
			this.btnCalculate = document.createElement('button');

			this.display.type = 'text'; //<input type="text">
			this.btn1.innerText = '1'; //<button>1</button>
			this.btn2.innerText = '2';
			this.btn3.innerText = '3';
			this.btn4.innerText = '4';
			this.btn5.innerText = '5';
			this.btn6.innerText = '6';
			this.btn7.innerText = '7';
			this.btn8.innerText = '8';
			this.btn9.innerText = '9';
			this.btn0.innerText = '0';
			this.btnPlus.innerText = '+'; //<button>+</button>
			this.btnMinus.innerText = '-';
			this.btnMultiply.innerText = '*';
			this.btnDivide.innerText = '/';
			this.btnDot.innerText = '.';
			this.btnClear.innerText = 'C';
			this.btnCalculate.innerText = '='; //<button>=</button>
		}

		onButtonCalculateClick(event)
		{
			this.display.value = eval(this.display.value);
		}

		onButton1Click(event)
		{
			this.display.value += '1';
		}

		onButton2Click(event)
		{
			this.display.value += '2';
		}

		onButton3Click(event)
		{
			this.display.value += '3';
		}

		onButton4Click(event)
		{
			this.display.value += '4';
		}

		onButton5Click(event)
		{
			this.display.value += '5';
		}

		onButton6Click(event)
		{
			this.display.value += '6';
		}

		onButton7Click(event)
		{
			this.display.value += '7';
		}

		onButton8Click(event)
		{
			this.display.value += '8';
		}

		onButton9Click(event)
		{
			this.display.value += '9';
		}

		onButton0Click(event)
		{
			this.display.value += '0';
		}

		onButtonPlusClick(event)
		{
			this.display.value += '+';
		}

		onButtonMinusClick(event)
		{
			this.display.value += '-';
		}
		
		onButtonMultiplyClick(event)
		{
			this.display.value += '*';
		}

		onButtonDivideClick(event)
		{
			this.display.value += '/';
		}

		onButtonDotClick(event)
		{
			this.display.value += '.';
		}

		onButtonClearClick(event)
		{
			this.display.value = '';
		}

		connectedCallback()
		{
			//Se va a ejecutar siempre cuando el elemento es insertado en el DOM
			//DOM = Arbol de elementos HTML ya como instancias (objetos) de JS.

			this.appendChild(this.display);
			this.appendChild(this.btn1);
			this.appendChild(this.btn2);
			this.appendChild(this.btn3);
			this.appendChild(this.btn4);
			this.appendChild(this.btn5);
			this.appendChild(this.btn6);
			this.appendChild(this.btn7);
			this.appendChild(this.btn8);
			this.appendChild(this.btn9);
			this.appendChild(this.btn0);
			this.appendChild(this.btnPlus);
			this.appendChild(this.btnMinus);
			this.appendChild(this.btnMultiply);
			this.appendChild(this.btnDivide);
			this.appendChild(this.btnDot);
			this.appendChild(this.btnClear);
			this.appendChild(this.btnCalculate);

			this.btn1.onclick = this.onButton1Click.bind(this);
			this.btn2.onclick = this.onButton2Click.bind(this);
			this.btn3.onclick = this.onButton3Click.bind(this);
			this.btn4.onclick = this.onButton4Click.bind(this);
			this.btn5.onclick = this.onButton5Click.bind(this);
			this.btn6.onclick = this.onButton6Click.bind(this);
			this.btn7.onclick = this.onButton7Click.bind(this);
			this.btn8.onclick = this.onButton8Click.bind(this);
			this.btn9.onclick = this.onButton9Click.bind(this);
			this.btn0.onclick = this.onButton0Click.bind(this);
			this.btnPlus.onclick = this.onButtonPlusClick.bind(this);
			this.btnMinus.onclick = this.onButtonMinusClick.bind(this);
			this.btnMultiply.onclick = this.onButtonMultiplyClick.bind(this);
			this.btnDivide.onclick = this.onButtonDivideClick.bind(this);
			this.btnDot.onclick = this.onButtonDotClick.bind(this);
			this.btnClear.onclick = this.onButtonClearClick.bind(this);
			this.btnCalculate.onclick = this.onButtonCalculateClick.bind(this);
		}

		disconnectedCallback(){
		//Se va a ejecutar siempre que se quite el elemento del documento
		this.btn1.onclick = null;
		this.btn2.onclick = null;
		this.btn3.onclick = null;
		this.btn4.onclick = null;
		this.btn5.onclick = null;
		this.btn6.onclick = null;
		this.btn7.onclick = null;
		this.btn8.onclick = null;
		this.btn9.onclick = null;
		this.btn0.onclick = null;

		this.btnPlus.onclick = null;
		this.btnMinus.onclick = null;
		this.btnMultiply.onclick = null;
		this.btnDivide.onclick = null;
		this.btnDot.onclick = null;
		this.btnClear.onclick = null;
		this.btnCalculate.onclick = null;
		}

		adoptedCallback()
		{
			//Se va a ejecutar siempre que el elemento se cambie de documento.
		}

		connectedMoveCallback()
		{
			//Se ejecuta cuando se mueve el elemento dentro del DOM
		}

		static get observableAttributes()
		{
			//Solo para publicar cuáles son los atributos que tendría disponible el webcomponent
			//Si es utilizado a través de código HTML
			//Ejemplo: <mi-elemento sabor="acido"> </mi-elemento>

			return ['sabor']
		}

		attributeChangedCallback(attr, newvalue, oldvalue )
		{
			//Manejador de cambios de los valores de los atributos personalizados
		}
	}

	customElements.define('x-calculator', CustomCalculator);
    export { CustomCalculator };
