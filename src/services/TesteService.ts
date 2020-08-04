import { Teste } from '../models/Teste';

export class TesteService {
  doSomething(teste: Teste): void {
    const newTeste = new Teste('ltell');
    if (teste === newTeste) {
      // alface
      return;
    }
    return;
  }
}
