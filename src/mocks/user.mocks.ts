import { User } from '../models/user.interface';

const userList: User[] = [
  {
    name: 'boopmadoop',
    company: 'CofC',
    location: 'Charleston, SC',
    bio: 'Ionic yay',
    avatar_url: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjc2an-jKbZAhVD61MKHVLIA_kQjRx6BAgAEAY&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfPUEZ36fnzM&psig=AOvVaw0cr8qcKsHnPivzpd3ae4RM&ust=1518721601363359',
    email:'boopie@g.cofc.edu'
  },
  {
    name:'snoopy',
    company:'Peanuts',
    location:'Peanut City',
    bio:'cool dog',
    avatar_url:'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Snoopy_Peanuts.png/200px-Snoopy_Peanuts.png',
    email: 'snoopy@peanuts.edu'
  }
];

export const USER_LIST = userList;