import { ContactRest } from '@/service/rest/contact.rest'
import type { AxiosResponse } from 'axios'
import { Contacts } from '@/model/contact.model'
import { BehaviorSubject, Observable } from 'rxjs'
export class FormsService {
  constructor(private _contact = new ContactRest()) {}
  private contact$: BehaviorSubject<any> = new BehaviorSubject<any>([])
  contact: Observable<any> = this.contact$.asObservable()
  postContact(newContact: Contacts): void{
    this._contact.postContact(newContact).pipe().subscribe({
      next: (response: any) =>{
        this.contact$.next(response)
      }
    })
  }
}
