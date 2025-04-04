

import CommentBox from "../commentSection/commentBox";
import HomeHeader from "../homeHeader/HomeHeader";
import { Flowebit } from "../test/Flowebit";
import SectionAllUsers from "../viewUsers/SectionUsers";

export default function Main() {
  return (
    <>

      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">


        {/* <Test/> */}
        <HomeHeader/>
        {/* <Flowebit/> */}
        
        <SectionAllUsers />
        <br/>
        <CommentBox/>
        
        
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
          <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
          <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
          <div className="border-2  rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
        </div> */}
        
        
      </div>

    </>
  )
}
