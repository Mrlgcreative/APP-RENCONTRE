
import Test from "../test/Test";
import SectionAllUsers from "../viewUsers/SectionUsers";

export default function Main() {
  return (
    <>
        
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
    
    <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-20 mb-4" />
            {/* <Test/> */}
            <SectionAllUsers/>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
    </div>
    <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="border-2  border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64" />
      <div className="border-2  border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64" />
      
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
    </div>
    </div>
  
    </>
  )
}
