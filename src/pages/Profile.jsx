import React, { useState } from "react";
import { user } from "../sampleStore/sample";
import { Camera, User, Mail, Heart, X } from "lucide-react";

const Profile = () => {
  const [updatedUser, setUpdatedUser] = useState(user);
  const [showOptions, setShowOptions] = useState(false);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
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
    <div className="pt-20 min-h-screen bg-base-100">
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-base-200 rounded-xl shadow-md p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="mt-2 text-sm text-base-content/70">
              Manage your profile information
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={updatedUser.profilePic}
                alt="Profile"
                loading="lazy"
                className="w-32 h-32 rounded-full ring-4 ring-white object-cover shadow-md"
              />
              {showOptions && (
                <label
                  htmlFor="avatar-upload"
                  className={`absolute -bottom-1 -right-1 bg-neutral-focus bg-white hover:scale-105 p-2 rounded-full cursor-pointer transition-all ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }`}
                >
                  <Camera className="w-5 h-5 text-black rounded-full" />
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
              <p className="text-sm text-base-content/70">
                {isUpdatingProfile ? "Uploading..." : "Click to change photo"}
              </p>
            )}
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-sm flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <input
                className="input input-bordered w-full"
                readOnly={!showOptions}
                placeholder={updatedUser.name}
                onChange={(e) =>
                  setUpdateData({ ...updateData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="input input-bordered w-full bg-base-300 cursor-not-allowed">
                {updatedUser?.email}
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-sm flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Interests
              </div>
              <div className="flex flex-wrap items-center gap-2 bg-base-300 p-2 rounded-lg border">
                {updateData.interests.map((item, index) => (
                  <span
                    className="badge badge-primary/10 font-semibold text-primary flex items-center gap-1"
                    key={index}
                  >
                    {item}
                    {showOptions && (
                      <X
                        className="w-4 h-4 cursor-pointer hover:text-error"
                        onClick={() => removeInterest(index)}
                      />
                    )}
                  </span>
                ))}
                {showOptions && (
                  <input
                    className="input input-sm input-ghost w-24"
                    placeholder="Add"
                    maxLength={8}
                    onKeyDown={addInterest}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
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
