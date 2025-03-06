'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { CiLogout } from 'react-icons/ci'

const Profile = () => {
    const { data } = useSession()

    return (
        <>
            <title>BlogVerse | profile</title>
            <meta name="description" content="Profile page of registered users in the BlogVerse app" />
            <link rel="canonical" href="https://blog-verse-a.vercel.app/profile" />
            <div className="w-full h-[82vh] flex items-center justify-center">
                <div className="md:w-3/6 max-w-[800px] w-80 md:h-80 h-96 bg-gray-700/80 relative rounded-xl overflow-hidden">
                    <div className="w-full md:h-2/5 h-1/3 profile-header-bg"></div>
                    <div className="absolute md:left-0 left-1/2 -translate-x-1/2 md:-translate-x-0 px-4 md:top-[70%] top-[60%] -translate-y-[70%]  text-black md:block flex flex-col items-center text-center md:text-left">
                        <Image
                            className="object-cover"
                            src={data?.user.image || '/images/defaultuser.jpg'}
                            alt={data?.user.firstName || 'user profile'}
                            width={150}
                            height={150}
                        />
                        <div>
                            <p className="text-xl text-gray-100 font-bold pt-3">{data?.user.firstName}</p>
                            <p className="text-sm text-gray-100 mt-2">{data?.user.username}</p>
                            <p className="text-sm text-gray-100 mt-2">{data?.user.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: `/` })}
                        className="md:bottom-6 bottom-3 md:right-5 right-1/2 translate-x-1/2 md:translate-x-0 absolute w-28 h-11 bg-gray-800 flex items-center justify-center rounded-md"
                    >
                        logout
                        <CiLogout />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Profile
