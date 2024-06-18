import type { Contacts } from '@/model/contact.model'
import api from '../rxjs'

export class ContactRest {
  getContactById(id: String) {
    return api.get(`/${id}`)
  }
  getAllContact() {
    return api.get('/contacts')
  }
  deleteContactById(id: String) {
    return api.delete(`/contacts/${id}`)
  }
  postContact(contact: Contacts) {
    return api.post(`/contacts`, contact)
  }

  editContact(contact: Contacts) {
    return api.put(`/contacts/${contact.id}`, contact)
  }
}
