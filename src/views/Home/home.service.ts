import { ContactRest } from '@/service/rest/contact.rest'
import type { AxiosResponse } from 'axios'

export class HomeService {
  constructor(private _contact = new ContactRest()) {}
  getAllContact() {
    return this._contact.getAllContact().then((response: AxiosResponse) => response.data)
  }
}
