import React, { useState } from "react";
import { user } from "../sampleStore/sample";
import { Camera, User, Mail, Heart, X } from "lucide-react";

const Profile = () => {
  const [updatedUser, setUpdatedUser] = useState(user);
  const [showOptions, setShowOptions] = useState(false);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  //limits for interests
  const [updateData, setUpdateData] = useState({
    profilePic: updatedUser.profilePic,
    name: updatedUser.name,
    interests: updatedUser.interest,
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64Image = reader.result;
      setUpdatedUser({ ...updatedUser, profilePic: base64Image });
      setUpdateData({ ...updateData, profilePic: base64Image });
    };
  };

  const addInterest = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const interest = e.target.value.trim();
      if (interest.length <= 8 && !updateData.interests.includes(interest)) {
        const updatedInterests = [...updateData.interests, interest];
        setUpdateData({ ...updateData, interests: updatedInterests });
        setUpdatedUser({ ...updatedUser, interest: updatedInterests });
        e.target.value = "";
      }
    }
  };

  const removeInterest = (index) => {
    const updatedInterests = updateData.interests.filter((_, i) => i !== index);
    setUpdateData({ ...updateData, interests: updatedInterests });
    setUpdatedUser({ ...updatedUser, interest: updatedInterests });
  };

  const saveData = async () => {
    setIsUpdatingProfile(true);
    // Backend logic here
    console.log(updateData)
    setTimeout(() => {
      setIsUpdatingProfile(false);
    }, 2000);
    setShowOptions(false);
  };

  const hasChanges =
    updateData.profilePic !== user.profilePic ||
    updateData.name !== user.name ||
    JSON.stringify(updateData.interests) !== JSON.stringify(user.interest);

  return (
    <div className="h-auto pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8 shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Profile</h1>
            <p className="mt-2 text-sm text-gray-500">Your profile information</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={updatedUser.profilePic}
                alt="Profile"
                loading="lazy"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md"
              />
              {showOptions && (
                <label
                  htmlFor="avatar-upload"
                  className={`absolute bottom-2 right-2 bg-gray-800 hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }`}
                >
                  <Camera className="w-5 h-5 text-white" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              )}
            </div>
            {showOptions && (
              <p className="text-sm text-gray-500">
                {isUpdatingProfile
                  ? "Uploading..."
                  : "Click the camera icon to update your photo"}
              </p>
            )}
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm flex items-center gap-2 text-gray-600">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <input
                className="px-4 py-2.5 w-full bg-base-200 rounded-lg border text-gray-700 focus:outline-none focus:ring focus:ring-primary"
                readOnly={!showOptions}
                placeholder={updatedUser.name}
                onChange={(e) =>
                  setUpdateData({ ...updateData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-1.5">
              <div className="text-sm flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border text-gray-700">
                {updatedUser?.email}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm flex items-center gap-2 text-gray-600">
                <Heart className="w-4 h-4" />
                Interests
              </div>
              <div className="px-4 py-2 flex flex-wrap items-center gap-2 bg-base-200 rounded-lg border">
                {updateData.interests.map((item, index) => (
                  <div
                    className="badge badge-info font-bold flex items-center gap-1"
                    key={index}
                  >
                    {item}
                    {showOptions && (
                      <X
                        className="w-4 h-4 cursor-pointer hover:text-red-500"
                        onClick={() => removeInterest(index)}
                      />
                    )}
                  </div>
                ))}
                {showOptions && (
                  <input
                    className="focus:outline-none bg-transparent text-gray-700 w-20"
                    placeholder="Add"
                    maxLength={8}
                    onKeyDown={addInterest}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          {showOptions ? (
            <>
              <button
                className="btn btn-secondary"
                onClick={() => setShowOptions(false)}
              >
                Cancel
              </button>
              <button
                className={`btn btn-primary ${isUpdatingProfile ? "loading" : ""}`}
                onClick={saveData}
                disabled={!hasChanges || isUpdatingProfile}
              >
                Save
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary w-full"
              onClick={() => setShowOptions(true)}
            >
              Update Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
