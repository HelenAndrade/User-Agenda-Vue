import type { Contacts } from '@/model/contact.model'
import { ContactRest } from '@/service/rest/contact.rest'
import type { AxiosResponse } from 'axios'
import { BehaviorSubject, Observable } from 'rxjs'

export class HomeService {
  constructor(private _contact = new ContactRest()) {}
  private contact$: BehaviorSubject<any> = new BehaviorSubject<any>([])
  contact: Observable<any> = this.contact$.asObservable()
  getAllContact(): void{
    this._contact.getAllContact().pipe().
    subscribe({
      next: (response: any) =>{
        this.contact$.next(response)
      }
    })
  }
}

// constructor(private _address = new AddressRest()) {}
// // getAddressByIdCEP(cep:string){
// //    return this._address.getAddressByIdCEP(cep).then((response:AxiosResponse)=>response.data)
// // }
// private address$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
// address: Observable<any> = this.address$.asObservable();
// getAddressByIdCEP(cep:string):void{
//   this._address.getAddressByIdCEP(cep).pipe(take(1)).subscribe({
//       next: (response: any) => {
//         this.address$.next(response);
//       },
//     });
// }