import Image from "next/image"

export default function TopLeftImg () {
    return(
        <div className="absolute top-0 left-0 z-10 w-[200p] xl:w-[400px] opacity-50">
            <Image src={'/top-left-img.png'} alt="topleft" height={400} width={400} />
        </div>
    )
}