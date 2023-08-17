import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'telinha4';

  public nomeAtual: string = ''
  public numeroAtual:string=''
  public mesAtual: string =''
  public anoAtual: string =''
  public cvcAtual: string =''
  public onContinue:number = 1;


  // public formatNumber(number: string ):string{
  //   let preformat = number.padEnd(16,'0').split('')
  //   let retorno: string = ''
  //   for (let i = 0; i<preformat.length; i++ ){
  //     retorno += preformat[i]
  //     if([3 , 7, 11].includes(i)){
  //       retorno += '\xa0\xa0\xa0'
  //     }
  //   }
  //   return retorno
  // }

  get cardNumber():string{
    let preformat = this.numeroAtual.padEnd(16,'0').split('')
    let retorno: string = ''
    for (let i = 0; i<preformat.length; i++ ){
      retorno += preformat[i]
      if([3 , 7, 11].includes(i)){
        retorno += '\xa0\xa0\xa0'
      }
    }
    return retorno
  }

  // set fodase(nome: string){
  //   this.numeroAtual = nome
  // }

  public formatName(name: string){
    return name.length ? name :''.padEnd(25,'x')
  }

}
