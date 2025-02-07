import React, { useState } from "react";
import { TextCursor, Image, Book, Plus } from "lucide-react";

const AddVideo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, thumbnail: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Video Data Submitted:", formData);
    setFormData({
      title: "",
      description: "",
      thumbnail: null,
    });
  };

  return (
    <div className="container pt-[69px] mx-auto px-4 py-12">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-8 text-center flex items-center justify-center gap-3">
        Add New Video
      </h1>

      <div className="max-w-3xl mx-auto bg-base-200 p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <TextCursor className="w-5 h-5" />
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter video title"
              className="input input-bordered w-full focus:ring-2 focus:ring-primary"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <Book className="w-5 h-5" />
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter video description"
              className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <Image className="w-5 h-5" />
              Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full focus:ring-2 focus:ring-primary"
              onChange={handleFileChange}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary px-8 py-3 text-lg hover:btn-outline flex items-center gap-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              Add Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
