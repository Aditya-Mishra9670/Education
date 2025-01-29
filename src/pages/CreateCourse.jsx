import React, { useState } from "react";
import {
  Book,
  TextCursor,
  Globe,
  BarChart,
  Folder,
  List,
  Image,
  Plus,
  Tag,
} from "lucide-react";

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    language: "",
    level: "",
    category: "",
    syllabus: "",
    thumbnail: null,
    tags: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, thumbnail: e.target.files[0] });
  };

  const handleTagInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const tag = e.target.value.trim();
      if (formData.tags.length <= 8 && !formData.tags.includes(tag)) {
        setFormData({ ...formData, tags: [...formData.tags, tag] });
        e.target.value = "";
      }
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      title: "",
      description: "",
      language: "",
      level: "",
      category: "",
      syllabus: "",
      thumbnail: null,
      tags: [],
    });
  };

  return (
    <div className="container pt-[69px] mx-auto px-4 py-12">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-8 text-center flex items-center justify-center gap-3">
        Create New Course
      </h1>

      <div
        
        className="max-w-3xl mx-auto bg-base-200 p-8 rounded-lg shadow-lg"
      >
        <div className="space-y-6">
          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <TextCursor className="w-5 h-5" />
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter course title"
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
              placeholder="Enter course description"
              className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Language
            </label>
            <select
              name="language"
              className="select select-bordered w-full focus:ring-2 focus:ring-primary"
              value={formData.language}
              onChange={handleInputChange}
            >
              <option disabled value="">
                Select language
              </option>
              <option>Hindi</option>
              <option>English</option>
              <option>Hinglish</option>
            </select>
          </div>

          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Level
            </label>
            <select
              name="level"
              className="select select-bordered w-full focus:ring-2 focus:ring-primary"
              value={formData.level}
              onChange={handleInputChange}
            >
              <option disabled value="">
                Select level
              </option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <Folder className="w-5 h-5" />
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter course category"
              className="input input-bordered w-full focus:ring-2 focus:ring-primary"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <List className="w-5 h-5" />
              Syllabus
            </label>
            <textarea
              name="syllabus"
              placeholder="Enter course syllabus"
              className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary"
              rows={6}
              value={formData.syllabus}
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

          <div>
            <label className="text-lg font-semibold text-base-content mb-2 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Tags
            </label>
            <input
              type="text"
              placeholder="Add tags (press Enter)"
              className="input input-bordered w-full focus:ring-2 focus:ring-primary"
              onKeyDown={handleTagInput}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-primary badge-lg flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="btn btn-xs btn-circle btn-ghost"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary px-8 py-3 text-lg hover:btn-outline flex items-center gap-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              Create Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
