import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor

beforeEach(() => {
  user = new User('Nikita', 'Ott', '456789', 'adress')
  processor = new Processor()
})

test('verify new user undefunded', () => {
  //const user = new User('Alex','Shmit', '123456789', 'adress')
  expect(user.consentGiven).toBeUndefined()
})

test('check Processor approve', () => {
  //const processor = new Processor()
  //const user = new User('Nik', 'Van', '258741', 'Est')
  processor.givenConcent(user)
  expect(user.consentGiven).toBe(true)
})

test('check Processor verify', () => {
  processor.givenConcent(user)
  expect(processor.checkConcent(user)).toBeTruthy()
})

test('negative check', () => {
  expect(processor.checkConcent(user)).toBeFalsy()
})
