import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, User, Mail, Heart, X } from "lucide-react";

const Profile = () => {
  const user = useAuthStore((state) => state.user);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [showOptions, setShowOptions] = useState(false);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [updateData, setUpdateData] = useState({
    profilePic: updatedUser.profilePic,
    name: updatedUser.name,
    interests: updatedUser.interests || [],
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64Image = reader.result;
      setUpdateData({ ...updateData, profilePic: base64Image });
    };
  };

  const addInterest = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const interest = e.target.value.trim();
      if (interest.length <= 8 && !updateData.interests.includes(interest)) {
        const updatedInterests = [...updateData.interests, interest];
        setUpdateData({ ...updateData, interests: updatedInterests });
        e.target.value = "";
      }
    }
  };

  const removeInterest = (index) => {
    const updatedInterests = updateData.interests.filter((_, i) => i !== index);
    setUpdateData({ ...updateData, interests: updatedInterests });
  };

  const saveData = async () => {
    setIsUpdatingProfile(true);
    setTimeout(() => {
      setIsUpdatingProfile(false);
      setUpdatedUser({ ...updatedUser, ...updateData });
      setShowOptions(false);
    }, 2000);
  };

  const resetChanges = () => {
    setUpdateData({
      profilePic: updatedUser.profilePic,
      name: updatedUser.name,
      interests: updatedUser.interests,
    });
    setShowOptions(false);
  };

  const hasChanges =
    updateData.profilePic !== updatedUser.profilePic ||
    updateData.name !== updatedUser.name ||
    JSON.stringify(updateData.interests) !== JSON.stringify(updatedUser.interests);

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      <div className="mx-auto max-w-2xl p-4">
        <div className="bg-base-200 rounded-box shadow-lg p-6 space-y-6">
          <header className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-primary">Profile Settings</h1>
            <p className="text-sm opacity-75">Manage your personal information and preferences</p>
          </header>

          <div className="flex flex-col items-center gap-4">
            <div className="avatar relative">
              <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={updateData.profilePic}
                  alt="Profile"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {showOptions && (
                <label
                  htmlFor="avatar-upload"
                  className={`absolute bottom-0 right-0 btn btn-circle btn-sm btn-primary ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }`}
                >
                  <Camera className="w-4 h-4" />
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
              <p className="text-sm opacity-75">
                {isUpdatingProfile ? "Updating..." : "Max 2MB • PNG/JPG"}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </span>
              </label>
              <input
                className="input input-bordered"
                readOnly={!showOptions}
                value={updateData.name}
                placeholder="Your name"
                onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </span>
              </label>
              <input
                type="email"
                className="input input-bordered bg-base-300"
                value={updatedUser?.email}
                disabled
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Interests
                </span>
              </label>
              <div className="border-base-300 bg-base-100 rounded-box border p-3">
                <div className="flex flex-wrap gap-2">
                  {updateData.interests.map((item, index) => (
                    <div key={index} className="badge badge-lg badge-accent gap-1">
                      <span>{item}</span>
                      {showOptions && (
                        <X
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => removeInterest(index)}
                        />
                      )}
                    </div>
                  ))}
                  {showOptions && (
                    <input
                      className="input input-sm input-ghost w-24 focus:outline-none"
                      placeholder="Add interest..."
                      maxLength={8}
                      onKeyDown={addInterest}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            {showOptions ? (
              <>
                <button
                  onClick={resetChanges}
                  className="btn btn-ghost order-1 sm:order-none"
                >
                  Cancel
                </button>
                <button
                  onClick={saveData}
                  className={`btn btn-primary ${isUpdatingProfile ? "loading" : ""}`}
                  disabled={!hasChanges || isUpdatingProfile}
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowOptions(true)}
                className="btn btn-primary w-full sm:w-auto"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;