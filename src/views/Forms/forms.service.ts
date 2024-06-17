import { ContactRest } from '@/service/rest/contact.rest'
import { AxiosResponse } from 'axios'
import { Contacts } from '@/model/contact.model'
export class FormsService {
  constructor(private _contact = new ContactRest()) {}
  async postContact(contact: Contacts) {
    return this._contact.postContact(contact).then((response: AxiosResponse) => response.data)
  }
}
