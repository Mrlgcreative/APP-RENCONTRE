import EmojiTik from "../../../components/stikersComp/EmojiTik";

export default function SignUp() {
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
                        <div className="flex gap-2">

                            <button className="w-full flex  rounded-lg border items-center justify-center bg-hidden dark:text-gray-100 py-2  mb-2"> Sign up with Google</button>
                            <button className="w-full flex rounded-lg border items-center justify-center bg-hidden dark:text-gray-100 py-2  mb-2"> Sign up with Apple</button>
                        </div>

                        <div className="text-center text-gray-400 mb-4">or</div>

                        <input type="email" placeholder="Your email" className="w-full p-2 dark:bg-gray-700 rounded text-white mb-2" />

                        <input type="password" placeholder="Password" className="w-full p-2 dark:bg-gray-700 rounded text-white mb-4" />
                        <input type="password" placeholder="Password" className="w-full p-2 dark:bg-gray-700 rounded text-white mb-4" />
                        <input type="password" placeholder="Password" className="w-full p-2 dark:bg-gray-700 rounded text-white mb-4" />

                        <div className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-gray-400 text-sm">By signing up, you agree to our Terms of Use and Privacy Policy.</span>
                        </div>

                        <button className="w-full rounded-lg bg-blue-600 text-white py-2 ">Create an account</button>

                        <p className="text-gray-400 text-sm mt-4 text-center">Already have an account? <a href="/login" className="text-blue-400">Sign in here</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}