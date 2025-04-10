import React, { useState, useEffect } from "react";
import EmployerAddProjectService from "../../services/EmployerService/EmployerAddProjectService";
import EmployerGetAllProjectCategoryService from "../../services/EmployerService/EmployerGetAllProjectCategoryService";

const AddProject = () => {
  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [errorCats, setErrorCats] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skills = [
    "React", "Node.js", "Python", "Java", "JavaScript",
    "DevOps", "UI/UX", "AWS", "Docker", "Kubernetes"
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
    terms_conditions: "",
    project_category: "",
    skills_required: [],
    location_preference: "",
    estimated_hours: "",
    payment_type: "fixed",
    proposal_deadline: "",
    project_visibility: "public",
    max_freelancers: 1,
    preferred_experience_level: "beginner",
    attachments: null,
  });

  useEffect(() => {
    EmployerGetAllProjectCategoryService.EmployerGetAllProjectCategory()
      .then(data => {
        setCategories(data);
        setLoadingCats(false);
      })
      .catch(err => {
        setErrorCats(err.message);
        setLoadingCats(false);
      });
  }, []);

  const handleChange = e => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setFormData(f => ({ ...f, [name]: files[0] }));
    } else if (type === "checkbox" && name === "skills_required") {
      setFormData(f => {
        const skills = checked
          ? [...f.skills_required, value]
          : f.skills_required.filter(s => s !== value);
        return { ...f, skills_required: skills };
      });
    } else {
      setFormData(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = new FormData();
    Object.entries(formData).forEach(([k, v]) => {
      if (v != null) {
        Array.isArray(v)
          ? v.forEach(val => payload.append(k, val))
          : payload.append(k, v);
      }
    });

    try {
      await EmployerAddProjectService.EmployerAddProject(payload);
      alert("Project added successfully!");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loadingCats) return <p className="text-center py-4">Loading categories…</p>;
  if (errorCats) return <p className="text-center py-4 text-red-600">Error: {errorCats}</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Add New Project</h2>

      {/* Title */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Budget */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Budget</label>
          <input
            type="number"
            name="budget"
            step="0.01"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Terms & Conditions</label>
        <textarea
          name="terms_conditions"
          value={formData.terms_conditions}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          name="project_category"
          value={formData.project_category}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Skills */}
      <fieldset className="border border-gray-300 rounded-lg p-4">
        <legend className="text-gray-700 font-medium px-2">Skills Required</legend>
        <div className="flex flex-wrap gap-4 mt-2">
          {skills.map(skill => (
            <label key={skill} className="inline-flex items-center">
              <input
                type="checkbox"
                name="skills_required"
                value={skill}
                checked={formData.skills_required.includes(skill)}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">{skill}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Location Preference */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Location Preference</label>
          <input
            type="text"
            name="location_preference"
            value={formData.location_preference}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Estimated Hours */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Estimated Hours</label>
          <input
            type="number"
            name="estimated_hours"
            value={formData.estimated_hours}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Payment Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Payment Type</label>
          <select
            name="payment_type"
            value={formData.payment_type}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="fixed">Fixed Price</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>

        {/* Proposal Deadline */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Proposal Deadline</label>
          <input
            type="date"
            name="proposal_deadline"
            value={formData.proposal_deadline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Visibility */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Visibility</label>
          <select
            name="project_visibility"
            value={formData.project_visibility}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        {/* Max Freelancers */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Max Freelancers</label>
          <input
            type="number"
            name="max_freelancers"
            min="1"
            value={formData.max_freelancers}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Experience Level</label>
        <select
          name="preferred_experience_level"
          value={formData.preferred_experience_level}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      {/* Attachment */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Attachment</label>
        <input
          type="file"
          name="attachments"
          onChange={handleChange}
          className="w-full text-gray-700"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {isSubmitting ? "Submitting…" : "Add Project"}
      </button>
    </form>
  );
};

export default AddProject;
