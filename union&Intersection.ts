type Identity = {
  id: number | string;
  name: string;
}

type Contact = {
  name: string;
  email: string;
  phone: string;
}

type IdentityOrContact = Identity | Contact;
type Employee = Identity & Contact;

// 특정 프로퍼티 없어도 가능
const contact: IdentityOrContact = {
  name: 'LHS',
  email: 'gg@gg.com',
  phone: '000-000-0000',
};

// 모든 프로퍼티가 무조건 있어야 함
const lhs: Employee = {
  id: 111,
  name: 'LHS',
  email: 'gg@gg.com',
  phone: '000-000-0000',
};