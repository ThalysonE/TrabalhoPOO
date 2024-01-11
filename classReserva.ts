class ExemploHotel{
   public nomeHotel:String;
   public cidade:string;
   public quartosDisponiveis:number[]
   constructor(nomeHotel:string, cidade:string){
      this.nomeHotel = nomeHotel;
      this.cidade = cidade;
      this.quartosDisponiveis = [1,2,3,4,5,6,7,8,9,10]
   }
   reservarQuarto(nmQuarto:number){
      for(let i = 0;i<this.quartosDisponiveis.length;i++){

         if(nmQuarto == this.quartosDisponiveis[i]){
         this.quartosDisponiveis.splice(i,1)
         }  

      }
   }
}
class ExemplosVoo{
   public destino:string;
   public partida:string;
   public horario:string;

   constructor(destino:string, partida:string, horario:string){
      this.partida = partida;
      this.destino = destino;
      this.horario = horario;
   }
}

class Reserva{

public numeroReserva: number;
public dataReserva: Date;

constructor(nmReserva:number, dtReserva: Date){
    this.numeroReserva = nmReserva;
    this.dataReserva = this.dataReserva;
}
public inforReserva():string{
   return `N da Reserva: ${this.numeroReserva}\nData da Reserva: ${this.dataReserva}`;
}
}
class Voo extends Reserva{

 public numeroVoo: string;
 public partida: string;
 public destino: string;
 public dtEmbarque: Date;
 public tipoClasse: string;
 public horaVoo: string;

 constructor(nmReserva: number, dtReserva: Date, nmVoo:string, partida: string, destino: string, dtEmbarque:Date, tipoClasse: string, horaVoo: string){
    super(nmReserva,dtReserva);
    this.numeroVoo = nmVoo;
    this.partida = partida;
    this.destino = destino;
    this.dtEmbarque = dtEmbarque;
    this.tipoClasse = tipoClasse;
    this.horaVoo = horaVoo;
 }
 exibirInforVoo(){
   super.inforReserva();
   return `\nNumero do Voo: ${this.numeroVoo}/ Lugar de Partida: ${this.partida}/ Lugar de Destino: ${this.destino}/ Data do Voo: ${this.dtEmbarque}/ Classe: ${this.tipoClasse}/ Horario do Voo: ${this.horaVoo}`;
 }
}
class Hotel extends Reserva{

   public nomeHotel:string;
   public cidade: string;
   public checkIn: Date;
   public checkOut:Date;
   public numeroQuarto: number;
   public tipoQuarto: string;

   constructor(nmReserva: number, dtReserva: Date, valorT:number, nomeHotel: string, cidade: string,checkIn:Date, checkOut:Date, numeroQuarto:number,tipoQuarto: string){
      super(nmReserva,dtReserva);
      this.nomeHotel = nomeHotel;
      this.cidade = cidade;
      this.checkIn = checkIn;
      this.checkOut = checkOut;
      this.numeroQuarto = numeroQuarto;
      this.tipoQuarto = tipoQuarto;
   } 
   reservar(){
      


   }
 exibirInforHotel(){
   super.inforReserva();
   return `Nome Hotel: ${this.nomeHotel}/ Cidade Localizada: ${this.cidade}/ Check-in: ${this.checkIn}/ Check-out: ${this.checkOut}/ Numero do Quarto: ${this.numeroQuarto}/ Tipo: Quarto: ${this.tipoQuarto}`;
 }
}


//criação de dados sobre os hoteis

const hotel1 = new ExemploHotel('Trivago','Sao Paulo');
const hotel2 = new ExemploHotel('Union','Rio de Janeiro');
const hotel3 = new ExemploHotel('Popular','Parnaiba');

const todosHoteis = [hotel1,hotel2,hotel3];

//criação de dados para voos

const voo1 = new ExemplosVoo('São Paulo','Parnaiba','17:00');
const voo2 = new ExemplosVoo('Rio de Janeiro', 'Sao Paulo', '14:00');
const voo3 = new ExemplosVoo('Parnaiba','Rio de Janeiro','12:00');

const todosVoos = [voo1,voo2,voo3]