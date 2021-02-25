import { Mensagem } from '../services/Mensagem';
import { Remedio } from '../entities/Remedio';
import { StatusDaCesta } from '../entities/StatusDaCesta';
import { RemedioRepository } from '../repositories/RemedioRepository';
import { CestaDeRemedios } from '../entities/CestaDeRemedios';

const cestaDeRemedios = new CestaDeRemedios();
const mensagem = new Mensagem();
const remedioRepository = new RemedioRepository();

const statusDaCesta = new StatusDaCesta(
  cestaDeRemedios,
  mensagem,
  remedioRepository,
);

const remedio01 = new Remedio('Sorine', 10.0);
const remedio02 = new Remedio('Selozok', 23.0);
const remedio03 = new Remedio('Xantinom', 20.0);

cestaDeRemedios.adicionar(remedio01);
cestaDeRemedios.adicionar(remedio02);
cestaDeRemedios.adicionar(remedio03);

console.log(cestaDeRemedios.remedios);
console.log(cestaDeRemedios.valorTotal(15));
console.log(statusDaCesta.status);
statusDaCesta.verificarCesta(15);
console.log(statusDaCesta.status);
