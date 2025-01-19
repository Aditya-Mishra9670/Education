import React, { useState } from 'react'
import { user } from "../sampleStore/sample"
import { Camera, User, Tag, Mail, Lock, ChevronDown, ChevronUp, Heart } from 'lucide-react'

const Profile = () => {
  const [updatedUser, setUpdatedUser] = useState(user)
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false)
  const [updatedfeilds,setUpdatedFeilds] = useState({
    profilePic:null,
    name:null,
    interests:null
  })
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // const compressedFile = await imageCompression(file, {
    //   maxSizeMB: 2,
    //   maxWidthOrHeight: 1920,
    //   initialQuality: 0.9,
    //   useWebWorker: true,
    // });

    const reader = new FileReader();
    // reader.readAsDataURL(compressedFile);
    reader.readAsDataURL(file);


    reader.onload = async () => {
      const base64Image = reader.result;
      // setUpdatedFeilds(prev=>{{...prev,profilePic:base64Image}})
      
      // await updateProfile({ profilePic: base64Image });
    };
  }

  return (
    <div className="h-auto pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={updatedUser.profilePic}
                alt="Profile"
                loading="lazy"
                className="w-32 h-32 rounded-full object-cover border-4"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                  isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm">
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {updatedUser?.name}
              </p>
            </div>


            <div className="space-y-1.5">
              <div className="text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {updatedUser?.email}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="text-sm flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Interests
              </div>
              <p className="px-4 py-2 flex items-center gap-2 bg-base-200 rounded-lg border">
                {updatedUser?.interest.map((item)=>
                (<div className='badge badge-info font-bold'>
                  {item}
                  
                  </div>))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
