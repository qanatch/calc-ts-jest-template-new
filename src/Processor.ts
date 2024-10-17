import { User } from './User'

export class Processor {
  givenConcent(user: User): void {
    user.consentGiven = true
  }

  checkConcent(user: User): boolean {
    return user.consentGiven === true
  }
}
