import React, { useState, useEffect } from "react";
import EmployerAddProjectService from "../../services/EmployerService/EmployerAddProjectService";
import EmployerGetAllProjectCategoryService from "../../services/EmployerService/EmployerGetAllProjectCategoryService";
import { FiUpload, FiX, FiCheck, FiAlertCircle } from "react-icons/fi";

const AddProject = () => {
  // State management
  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [errorCats, setErrorCats] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const skills = [
    "React", "Node.js", "Python", "Java", "JavaScript",
    "DevOps", "UI/UX", "AWS", "Docker", "Kubernetes"
  ];

  const experienceLevels = [
    { value: "beginner", label: "Beginner (0-2 years)" },
    { value: "intermediate", label: "Intermediate (2-5 years)" },
    { value: "expert", label: "Expert (5+ years)" }
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

    // Clear any existing errors for this field
    setFormErrors(prev => ({ ...prev, [name]: null }));

    if (type === "file") {
      const file = files[0];
      setFormData(f => ({ ...f, [name]: file }));

      // Create preview for images
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => setFilePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
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

  const validateForm = () => {
    const errors = {};
    const today = new Date().toISOString().split('T')[0];

    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.description.trim()) errors.description = "Description is required";
    if (!formData.budget) errors.budget = "Budget is required";
    if (formData.budget && formData.budget <= 0) errors.budget = "Budget must be positive";
    if (!formData.deadline) errors.deadline = "Deadline is required";
    if (formData.deadline < today) errors.deadline = "Deadline must be in the future";
    if (!formData.terms_conditions.trim()) errors.terms_conditions = "Terms are required";
    if (!formData.project_category) errors.project_category = "Category is required";
    if (formData.skills_required.length === 0) errors.skills_required = "At least one skill is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

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
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
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
      setFilePreview(null);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeAttachment = () => {
    setFormData(f => ({ ...f, attachments: null }));
    setFilePreview(null);
  };

  if (loadingCats) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (errorCats) return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex items-center justify-center text-red-500 space-x-2">
        <FiAlertCircle className="w-6 h-6" />
        <p>Error loading categories: {errorCats}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6">
          <h2 className="text-2xl font-bold text-white">Add New Project</h2>
          <p className="text-blue-100 mt-1">Fill out the form to post your project and find the perfect freelancer</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Success Message */}
          {submitSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 text-green-700">
                <FiCheck className="w-5 h-5" />
                <p className="font-medium">Project added successfully!</p>
              </div>
            </div>
          )}

          {/* Basic Information Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Basic Information</h3>
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title*</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.title ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="e.g. Build a React e-commerce website"
                />
                {formErrors.title && <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Description*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg h-40 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.description ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="Describe your project in detail..."
                />
                {formErrors.description && <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>}
              </div>
            </div>
          </section>

          {/* Project Details Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Project Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget (USD)*</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                  <input
                    type="number"
                    name="budget"
                    step="0.01"
                    min="0"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.budget ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="0.00"
                  />
                </div>
                {formErrors.budget && <p className="mt-1 text-sm text-red-600">{formErrors.budget}</p>}
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Deadline*</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.deadline ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {formErrors.deadline && <p className="mt-1 text-sm text-red-600">{formErrors.deadline}</p>}
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                <select
                  name="project_category"
                  value={formData.project_category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.project_category ? "border-red-500" : "border-gray-300"
                    }`}
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                {formErrors.project_category && <p className="mt-1 text-sm text-red-600">{formErrors.project_category}</p>}
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <select
                  name="preferred_experience_level"
                  value={formData.preferred_experience_level}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {experienceLevels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Required Skills*</h3>
            <div className={`p-4 border rounded-lg ${formErrors.skills_required ? "border-red-500" : "border-gray-300"
              }`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {skills.map(skill => (
                  <label key={skill} className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="skills_required"
                      value={skill}
                      checked={formData.skills_required.includes(skill)}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
              {formErrors.skills_required && <p className="mt-2 text-sm text-red-600">{formErrors.skills_required}</p>}
            </div>
          </section>

          {/* Additional Information Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Additional Information</h3>
            <div className="space-y-6">
              {/* Terms & Conditions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Terms & Conditions*</label>
                <textarea
                  name="terms_conditions"
                  value={formData.terms_conditions}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.terms_conditions ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="Specify any special terms or conditions..."
                />
                {formErrors.terms_conditions && <p className="mt-1 text-sm text-red-600">{formErrors.terms_conditions}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location Preference */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location Preference</label>
                  <input
                    type="text"
                    name="location_preference"
                    value={formData.location_preference}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Remote, US Only, etc."
                  />
                </div>

                {/* Estimated Hours */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Hours</label>
                  <input
                    type="number"
                    name="estimated_hours"
                    min="1"
                    value={formData.estimated_hours}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Payment Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Type</label>
                  <select
                    name="payment_type"
                    value={formData.payment_type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="fixed">Fixed Price</option>
                    <option value="hourly">Hourly Rate</option>
                  </select>
                </div>

                {/* Proposal Deadline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Proposal Deadline</label>
                  <input
                    type="date"
                    name="proposal_deadline"
                    value={formData.proposal_deadline}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Visibility */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Visibility</label>
                  <select
                    name="project_visibility"
                    value={formData.project_visibility}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="public">Public (Visible to all)</option>
                    <option value="private">Private (Invite only)</option>
                  </select>
                </div>

                {/* Max Freelancers */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Freelancers</label>
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
            </div>
          </section>

          {/* Attachment Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Attachments</h3>
            <div className="space-y-4">
              {filePreview ? (
                <div className="border border-gray-300 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <img src={filePreview} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">{formData.attachments.name}</p>
                        <p className="text-sm text-gray-500">
                          {(formData.attachments.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeAttachment}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <FiUpload className="w-8 h-8 text-gray-400" />
                    <p className="text-sm text-gray-500">Drag and drop files here, or click to select</p>
                    <label className="inline-flex items-center px-4 py-2 bg-blue-50 border border-transparent rounded-md font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                      <input
                        type="file"
                        name="attachments"
                        onChange={handleChange}
                        className="hidden"
                      />
                      Select Files
                    </label>
                    <p className="text-xs text-gray-400">Supports: PDF, DOCX, JPG, PNG (Max 10MB)</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Form Submission */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Post Project"
              )}
            </button>
            <p className="mt-2 text-center text-sm text-gray-500">
              By posting this project, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;