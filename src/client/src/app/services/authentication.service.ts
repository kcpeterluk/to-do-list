import { Injectable } from '@angular/core';
import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  // This method is not in use as Firebaseui-angular handles the sign in
  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithRedirect(auth, provider);
  }

  async signOut() {
    const auth = getAuth();
    await signOut(auth);
  }

}
