import React, { useState } from 'react'
import { user } from "../sampleStore/sample"
import { Camera, User, Tag, Mail, Lock, ChevronDown, ChevronUp } from 'lucide-react'

const Profile = () => {
  const [updatedUser, setUpdatedUser] = useState(user)
  const [isEditing, setIsEditing] = useState(false)
  const [showChangePass, setShowChangePass] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setUpdatedUser((prev) => ({
        ...prev,
        profilePic: reader.result,
      }))
      setIsUpdatingProfile(false)
    }
    if (file) {
      setIsUpdatingProfile(true)
      reader.readAsDataURL(file)
    }
  }

  const togglePrivacy = () => {
    setPrivacy(!privacy)
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
