import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../models';

@Injectable()
export class PeopleService {
  private people = new BehaviorSubject<Person[]>(null);

  people$ = this.people.asObservable();

  getPeople = () => this.people.next([
    {
      id: 1,
      pic: '/assets/profiles/matthew.png',
      last: 'Hartley',
      first: 'Steve',
      middle: 'Duncan',
      height: `6'1`,
      weight: '175lbs',
      gender: 'Male',
      bloodType: 'O-',
      eyeColor: 'Green',
      hairColor: 'Brown',
      address: '1 Apple Park Way',
      city: 'Cupertino',
      state: 'CA',
      zip: '95014',
      phone: '555.555.0123',
      email: 'steven.hartley@icloud.com',
      birthplace: 'Dallas, TX',
      ssn: '123-45-6789',
      dob: '24 May 1985',
      basd: '21 November 2005',
      pcs: '13 May 2022',
      ets: '13 May 2022',
      dor: '20 April 2020',
      org: 'Apple',
      section: 'iOS',
      attachedOrg: 'Microsoft',
      attachedSection: 'Cross-Platform',
      branch: 'Army',
      grade: 'E8',
      rank: '1SG'
    } as Person,
    {
      id: 2,
      pic: '/assets/profiles/lena.png',
      last: 'Davis',
      first: 'Lena',
      middle: 'Anne',
      height: `5'6`,
      weight: '125lbs',
      gender: 'Female',
      bloodType: 'AB+',
      eyeColor: 'Blue',
      hairColor: 'Blonde',
      address: '112 Something Dr.',
      city: 'Cedar Hill',
      state: 'TX',
      zip: '75104',
      phone: '555.555.4567',
      email: 'lena.davis@microsoft.com',
      birthplace: 'Fayetteville, NC',
      ssn: '234-56-7890',
      dob: '17 Nov 1987',
      basd: '08 May 2006',
      pcs: '30 June 2024',
      ets: '12 June 2025',
      dor: '14 June 2020',
      org: 'Microsoft',
      section: 'Azure Platform',
      attachedOrg: 'Microsoft',
      attachedSection: 'Cross-Platform',
      branch: 'Air Force',
      grade: 'O4',
      rank: 'Maj'
    } as Person
  ])
}
