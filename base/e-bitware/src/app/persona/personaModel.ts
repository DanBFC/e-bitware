export class PersonaModel {
  private nombre: string;
  private edad: number;
  private nss: string;
  private sexo: string;
  private peso: number;
  private altura: number;

  //static readonly hombre = "H"
  static hombre: string = "H";

  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.nss = this.generaNSS();
    this.sexo = "H";
    this.peso = peso;
    this.altura = altura;
  }

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(nombre: string) {
    this.nombre = nombre;
  }

  get getEdad(): number {
    return this.edad;
  }

  set setEdad(edad: number) {
    this.edad = edad;
  }
  get getNSS(): string {
    return this.nss;
  }

  set setNSS(nss: string) {
    this.nss = nss;
  }
  get getSexo(): string {
    return this.sexo;
  }

  set setSexo(sexo: string) {
    this.sexo = sexo;
  }
  get getPeso(): number {
    return this.peso;
  }

  set setPeso(peso: number) {
    this.peso = peso;
  }
  get getAltura(): number {
    return this.altura;
  }

  set setAltura(altura: number) {
    this.altura = altura;
  }

  calcularIMC(){
    if(this.altura == 0){
      return -1;
    }
    if(this.sexo == "H"){
      let imc = this.peso / (this.altura * this.altura);
      if(imc < 20){
        return -1;
      }else if (imc >= 20 || imc < 25){
        return 0;
      }else{
        return 1;
      }
    }else{
      let imc = this.peso / (this.altura * this.altura);
      if(imc < 19){
        return -1;
      }else if (imc >= 19 || imc < 24){
        return 0;
      }else{
        return 1;
      }
    }

  }

  esMayorDeEdad(){
    if(this.edad >= 18){
      return true;
    }else{
      return false;
    }
  }

  imprimeMayorEdad() {
    if(this.esMayorDeEdad()){
      return "Mayor de edad";
    }
    return "Menor de edad";
  }

  imprimeIMC(){
    let imc = this.calcularIMC();
    if(imc == -1){
      return "Por debajo de peso ideal"
    } else if(imc == 0){
      return "Peso ideal"
    } else{
      return "Con sobrepeso"
    }
  }

  toString(){
    return "Nombre: " + this.nombre + " Edad: " + this.edad + " NSS: " + this.nss + " Sexo: " + this.sexo + " Peso: " + this.peso + " Altura: " + this.altura;
  }

  generaNSS(){
    return Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
  }
}
