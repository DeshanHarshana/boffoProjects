import {createContext, useContext, useEffect, useState} from 'react'
import {onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth, db } from '@/firebaseConfig';
import {doc, getDoc, setDoc} from 'firebase/firestore'
export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({children}:any) =>{
    const [user, setUser] = useState<any>()
    const [isAuthenticated, setIsAuthenticated] = useState<any>(undefined)

    const updateUserData = async (userId:string) =>{
        const docRef = doc(db,'users', userId)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            let data  = docSnap.data()
            setUser({...user, username:data.username, profileUrl:data.profileUrl, userId:data.userId})
        }
        
    }

    useEffect(()=>{
       const unsub = onAuthStateChanged(auth,(user)=>{
        if(user){
            setIsAuthenticated(true)
            setUser(user)
            updateUserData(user.uid)
        }else{
            setIsAuthenticated(false)
            setUser(null)
        }
       });
       return unsub
     },[])

    const login = async (email:string, password:string)=>{
        try{
            const response = await signInWithEmailAndPassword(auth, email,password);
            return {success:true}
        }catch(e:any){
            let msg = e.message;
            return {success:false, msg:msg}
        }
    }

    const logout = async ()=>{
        try{
            await signOut(auth);
            return {success:true}
        }catch(e:any){
            return {success:false}
        }
    }

    const register = async (email:string, password:string, username:string, profileUrl:string)=>{
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db,"users", response?.user?.uid),{
                username, profileUrl, userId : response?.user?.uid
            })
            return {success:true, data:response?.user}
        }catch(e:any){
            return {success:false, msg:e.message}
        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    const value = useContext(AuthContext)
    if(!value){
        throw new Error("useAuth mus be wrapped inside AuthContextProvider")
    }
    return value
}

interface AuthContextValue {
    user: any;
    isAuthenticated: boolean; 
    login: (email: string, password: string) => Promise<any>;
    register: (email: string, password: string, username: string, profileUrl: string) => Promise<any>;
    logout: () => Promise<any>;
  }