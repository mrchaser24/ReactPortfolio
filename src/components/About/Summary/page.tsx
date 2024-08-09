import Image from 'next/image'
import '@/app/about/about.css'

export default function Summary(){
    function getAge(){
        const currentDate = new Date()
        const birthDate = new Date('1997-05-18')
        let age = currentDate.getFullYear() - birthDate.getFullYear()
        if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age
    }

    return (
        <div>
            <div className="about-container mt-20 flex p-5 h-fit">
                <div className="left-side">
                    <div className="list flex justify-between p-2">
                        <p className="label font-bold">Birthday:</p>
                        <p className="value">May 18, 1997</p>
                    </div>
                    <div className="list flex justify-between p-2">
                        <p className="label font-bold">Age:</p>
                        <p className="value">{getAge()} Yr</p>
                    </div>
                    <div className="list flex justify-between p-2">
                        <p className="label font-bold">Residence:</p>
                        <p className="value">Philippines</p>
                    </div>
                    <div className="list flex justify-between p-2">
                        <p className="label font-bold">Address:</p>
                        <p className="value">Bignay St. Proj.2, Quezon City</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="list flex justify-between p-2">
                        <p className="label font-bold">Email:</p>
                        <p className="value">chase.hermosisima@gmail.com</p>
                    </div>
                    <div className="list flex justify-between p-2">
                        <p className="label font-bold">Github:</p>
                        <p className="value">mrchaser24</p>
                    </div>
                    <div className="list flex justify-between p-2">
                        <p className="label font-bold">Youtube:</p>
                        <p className="value">@spartanpenguin3351</p>
                    </div>
                    <div className="list flex justify-between p-2">
                        <p className="label font-bold">Freelance:</p>
                        <p className="value">Available</p>
                    </div>
                </div>
            </div>
            <div className="learn-more m-5">
                <p className="">Learn More About Me</p>
                <Image
                    src="chevron-double-down.svg"
                    alt="Arrow Down"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    )
}