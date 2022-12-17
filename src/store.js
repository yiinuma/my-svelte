import { writable } from "svelte/store"

export const users = writable([
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    name: 'John',
    email: 'John@bitfumes.com',
    active: false,
  },
  {
    id: 2,
    image: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
    name: 'Jenie',
    email: 'Jenie@bitfumes.com',
    active: true,
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/560/560277.png',
    name: 'Keiji',
    email: 'Keiji@bitfumes.com',
    active: false,
  },
])

export const remove = (e) => {
  users.update((_users) => _users.filter((_user) => _user.id !== e.detail))
}

export const add = ({ detail }) => {
  users.update(_users => [
    {
      ...detail,
      id: _users.length + 1,
      image: './images/dummy-user.png',
    },
    ..._users,
   ])
}
