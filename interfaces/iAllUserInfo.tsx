export interface iGeo {
  lat: string;
  lng: string;
}

export interface iAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: iGeo;
}

export interface iCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface iAllUserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: iAddress;
  phone: string;
  website: string;
  company: iCompany;
}
