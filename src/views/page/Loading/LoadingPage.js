import OrbitProg from "../../../components/LoadingOrbit/OrbitProgress";
import EmojiTik from "../../../components/stikersComp/EmojiTik";

export default function LoadingPage() {
    return (
        <>
            <div className="flex mt-4 md:mt-8 ... justify-center items-center gap-4 ">
                <div>
                    
                    <EmojiTik />

                </div>
                <div>
                    <OrbitProg />

                </div>
            </div>
        </>
    )
}