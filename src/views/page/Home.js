import ThemeToggle from "../Theme/ThemeToggle";

export default function Home (){
    return(
        <>
        <ThemeToggle/>
           <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
      Cliquez-moi
    </button>
        </>
    )
}