import { Eye, EyeOff, Save, Lock } from "lucide-react";
import React, { useState } from "react";

const ChangePassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setSuccess("Password changed successfully!");
    setError("");
  };

  return (
    <div className="p-6 bg-base-100 rounded-lg shadow-lg w-full mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Lock className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold text-primary">Change Password</h2>
      </div>
      <p className="text-sm">
        Ensure your account remains secure by updating your password regularly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="password"
            placeholder="Old Password"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="relative">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input input-bordered input-primary w-full"
          />
          <button
            type="button"
            aria-label={showNewPassword ? "Hide new password" : "Show new password"}
            className="absolute inset-y-0 right-3 flex items-center hover:text-primary"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input input-bordered input-primary w-full"
          />
          <button
            type="button"
            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            className="absolute inset-y-0 right-3 flex items-center hover:text-primary"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
        <button type="submit" className="btn btn-primary w-full flex items-center justify-center space-x-2">
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;