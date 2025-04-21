import React, { useState } from 'react';
import axios from 'axios';
import EmojiTik from "../../../components/stikersComp/EmojiTik";



export default function SignUp() {

    const API_URL = "http://localhost:3000/users";

    const [formData, setFormData] = useState({
        noms: '',
        prenom: '',
        pseudo: '',
        email: '',
        dateNaissance: '',
        password: '',
        confirmPassword: ''
      });
    
      const handleChange = (e) => {
        const { placeholder, value } = e.target;
        const key = {
          'Noms': 'noms',
          'Prenom': 'prenom',
          'Pseudo': 'pseudo',
          'E-Mail': 'email',
          'Date de naissance': 'dateNaissance',
          'Password': 'password',
          'Confirmer Password': 'confirmPassword'
        }[placeholder.trim()];
        setFormData({ ...formData, [key]: value });
      };
    
      const isFormValid = () => {
        for (let key in formData) {
          if (formData[key].trim() === '') {
            alert(`Le champ "${key}" est obligatoire.`);
            return false;
          }
        }
    
        if (formData.password !== formData.confirmPassword) {
          alert("Les mots de passe ne correspondent pas.");
          return false;
        }
    
        return true;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!isFormValid()) return;
    
        try {
          await axios.post(API_URL, formData);
          alert('Inscription réussie !');
          // Réinitialiser le formulaire si besoin
          setFormData({
            noms: '',
            prenom: '',
            pseudo: '',
            email: '',
            dateNaissance: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error('Erreur lors de l’envoi :', error);
        }
      };














    return (
        <>
            <div className="flex mt-1 justify-center py-8 h-[36rem] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-green-200
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 p-6 overflow-y-auto  px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6  ">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {/* ////////// */}
                    <div className="text-white space-y-6">
                        <h1 className="text-3xl font-bold flex items-center">
                            <span className="text-green-700 dark:text-green-300 text-4xl mr-2">
                                OlCampus
                            </span>
                        </h1>
                        <p className="text-gray-400  "> Integrate with developer-friendly APIs or choose low-code.</p>
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-green-800 dark:text-green-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                            </svg>
                            <h2 className="font-semibold dark:text-white text-black">  Get started quickly</h2>
                        </div>
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-green-800 dark:text-green-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                            </svg>
                            <h2 className="font-semibold dark:text-white text-black">  Get started quickly</h2>
                        </div>
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-green-800 dark:text-green-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                            </svg>
                            <h2 className="font-semibold dark:text-white text-black">  Get started quickly</h2>
                        </div>
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-green-800 dark:text-green-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                            </svg>
                            <h2 className="font-semibold dark:text-white text-black">  Get started quickly</h2>
                        </div>
                        <div className="flex gap-4">
                            <svg className="w-6 h-6 text-green-800 dark:text-green-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                            </svg>
                            <h2 className="font-semibold dark:text-white text-black">  Get started quickly</h2>
                        </div>

                    </div>

                    {/* /////// */}
                    <div className=" dark:bg-gray-800  rounded-lg p-6 shadow w-full max-w-md">
                        <div className="flex gap-4">
                            <div>

                                <h2 className=" tracking-tight font-bold dark:text-white mb-4">Creer Votre Compt OlCampus Maintenant </h2>
                            </div>
                            <div className="">

                                <EmojiTik />
                            </div>
                        </div>
                        {/* <div className="flex gap-2">

                            <button className="w-full flex  rounded-lg border items-center justify-center bg-hidden dark:text-gray-100 py-2  mb-2"> Sign up with Google</button>
                            <button className="w-full flex rounded-lg border items-center justify-center bg-hidden dark:text-gray-100 py-2  mb-2"> Sign up with Apple</button>
                        </div> */}

                        {/* <div className="text-center text-gray-400 mb-4">or</div> */}

     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input type="text" placeholder="Noms" value={formData.noms} onChange={handleChange} className="w-full p-2 dark:bg-gray-700 rounded  mb-2" />
      <input type="text" placeholder="Prenom" value={formData.prenom} onChange={handleChange} className="w-full p-2 dark:bg-gray-700 rounded  mb-2" />
      <input type="text" placeholder="Pseudo" value={formData.pseudo} onChange={handleChange} className="w-full p-2 dark:bg-gray-700 rounded mb-4" />
      <input type="text" placeholder="E-Mail" value={formData.email} onChange={handleChange} className="w-full p-2 dark:bg-gray-700 rounded mb-4" />
      <input type="text" placeholder="Date de naissance" value={formData.dateNaissance} onChange={handleChange} className="w-full p-2 dark:bg-gray-700 rounded mb-4" />
      <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 dark:bg-gray-700 rounded mb-4" />
      <input type="password" placeholder="Confirmer Password"  value={formData.confirmPassword}  onChange={handleChange} className="w-full p-2 dark:bg-gray-700 rounded mb-4" />
      <button type="submit" className="w-full rounded-lg bg-blue-600 text-white py-2">Créer votre compte</button>
    </form>


                        {/* <div className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-gray-400 text-sm">By signing up, you agree to our Terms of Use and Privacy Policy.</span>
                        </div> */}

                        

                        <p className="text-gray-400 text-sm mt-4 text-center">Vous avez déjà un compte ? <a href="/login" className="text-blue-400"> Connectez-vous ici</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}