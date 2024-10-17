export class User {
  name: string
  surname: string
  phone: string
  adress: string
  consentGiven: undefined | boolean

  constructor(name: string, surname: string, phone: string, adress: string) {
    this.name = name
    this.surname = surname
    this.phone = phone
    this.adress = adress
  }
}
