import React, { useState, useEffect } from 'react';
import {
  FiUser, FiMail, FiPhone, FiMapPin, FiGlobe, FiBriefcase,
  FiLinkedin, FiGithub, FiTwitter, FiSave, FiAward, FiBookOpen,
  FiTool, FiClock, FiDollarSign, FiCheckCircle, FiFileText,
  FiStar, FiDatabase, FiAnchor, FiHeart, FiUsers
} from 'react-icons/fi';
import EmployerUpdateProfileService from '../../services/EmployerService/EmployerUpdateProfileService';

const FreelancerUpdateProfile = ({ initialData }) => {
  const [formData, setFormData] = useState({
    // Basic Information
    full_name: '',
    email: '',
    contact_number: '',
    location: '',
    profile_picture: null,
    banner_image: null,
    eth_address: '',

    // Professional Information
    professional_title: '',
    professional_summary: '',
    core_competencies: '',
    technical_skills: '',
    soft_skills: '',
    industry_specific_skills: '',
    specializations: '',
    experience_level: '',
    hourly_rate_value: '',
    industry: '',
    years_of_experience: '',
    completed_projects: '',
    client_rating: '',

    // Work & Education
    work_experience: '',
    education: '',
    certifications: '',
    portfolio_projects: '',
    awards: '',
    professional_affiliations: '',

    // Services & Availability
    services_offered: '',
    rates_packages: '',
    availability: '',
    client_success_metrics: '',

    // Social & Web
    website: '',
    linkedin_url: '',
    github_url: '',
    twitter_url: '',
    facebook_url: '',

    // Additional Information
    languages: '',
    interests: '',
    references: '',
    resume_file: null
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profilePreview, setProfilePreview] = useState('');
  const [bannerPreview, setBannerPreview] = useState('');

  useEffect(() => {
    if (initialData) {
      const initialFormData = Object.keys(formData).reduce((acc, key) => ({
        ...acc,
        [key]: initialData[key] || (key.endsWith('_file') ? null : '')
      }), {});

      setFormData(initialFormData);
      setProfilePreview(initialData.profile_picture || '');
      setBannerPreview(initialData.banner_image || '');
    }
  }, [initialData]);

  const validateField = (name, value) => {
    const validations = {
      email: v => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && 'Invalid email address',
      contact_number: v => v && !/^[0-9]{10}$/.test(v) && 'Invalid phone number',
      website: v => v && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(v) && 'Invalid URL',
      eth_address: v => v && !/^0x[a-fA-F0-9]{40}$/.test(v) && 'Invalid Ethereum address',
      years_of_experience: v => v && !/^\d+$/.test(v) && 'Must be a whole number',
      client_rating: v => v && (!/^\d(\.\d{1,2})?$/.test(v) || v > 5) && 'Must be between 0-5',
      hourly_rate_value: v => v && !/^\d+(\.\d{1,2})?$/.test(v) && 'Invalid amount',
      full_name: v => !v.trim() && 'Full name is required'
    };

    return validations[name] ? validations[name](value) : '';
  };

  const handleInputChange = async (e) => {
    const { name, value, files, type } = e.target;

    if (type === 'file') {
      const file = files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        if (name === 'profile_picture') setProfilePreview(reader.result);
        if (name === 'banner_image') setBannerPreview(reader.result);
      };
      reader.readAsDataURL(file);

      setFormData(prev => ({ ...prev, [name]: file }));
    } else {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = Object.entries(formData).reduce((acc, [key, value]) => {
      const error = validateField(key, value);
      return error ? { ...acc, [key]: error } : acc;
    }, {});

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setServerMessage({});

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formDataToSend.append(key, value);
        }
      });

      await EmployerUpdateProfileService.EmployerUpdateProfile(formDataToSend);
      setServerMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      setServerMessage({ type: 'error', text: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ label, name, type = 'text', Icon, children, accept }) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
        <Icon className="h-5 w-5 mr-2 text-gray-600" />
        {label}
      </label>
      {type === 'file' ? (
        <div className="flex items-center">
          <input
            type="file"
            name={name}
            accept={accept}
            onChange={handleInputChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
          {name === 'profile_picture' && profilePreview && (
            <img src={profilePreview} alt="Profile Preview" className="h-16 w-16 rounded-full ml-4" />
          )}
          {name === 'banner_image' && bannerPreview && (
            <img src={bannerPreview} alt="Banner Preview" className="h-16 w-32 object-cover ml-4 rounded" />
          )}
        </div>
      ) : type === 'select' ? (
        <select
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black ${errors[name] ? 'border-red-500' : 'border-gray-300'
            }`}
        >
          {children}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black ${errors[name] ? 'border-red-500' : 'border-gray-300'
            }`}
        />
      )}
      {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
    </div>
  );

  const TextAreaField = ({ label, name, Icon, rows = 3, maxLength }) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
        <Icon className="h-5 w-5 mr-2 text-gray-600" />
        {label}
      </label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        rows={rows}
        maxLength={maxLength}
        className={`w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black ${errors[name] ? 'border-red-500' : 'border-gray-300'
          }`}
      />
      {maxLength && (
        <div className="text-sm text-gray-500 text-right mt-1">
          {formData[name]?.length || 0}/{maxLength}
        </div>
      )}
      {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
    </div>
  );

  const renderSection = (title, Icon, fields) => (
    <div className="mb-8 border-b border-gray-200 pb-8">
      <h3 className="text-lg font-semibold text-black mb-6 flex items-center">
        <Icon className="h-5 w-5 mr-2 text-gray-600" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-black">
      <h2 className="text-2xl font-bold text-black mb-8 flex items-center">
        <FiUser className="mr-2" />
        Update Profile
      </h2>

      {serverMessage.text && (
        <div className={`mb-6 p-4 rounded-md border ${serverMessage.type === 'error'
            ? 'bg-red-100 text-red-700 border-red-200'
            : 'bg-green-100 text-green-700 border-green-200'
          }`}>
          {serverMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Profile Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <InputField
            label="Profile Picture"
            name="profile_picture"
            type="file"
            accept="image/*"
            Icon={FiUser}
          />
          <InputField
            label="Banner Image"
            name="banner_image"
            type="file"
            accept="image/*"
            Icon={FiBriefcase}
          />
        </div>

        {renderSection('Basic Information', FiUser, [
          <InputField key="name" label="Full Name *" name="full_name" Icon={FiUser} />,
          <InputField key="email" label="Email *" name="email" type="email" Icon={FiMail} />,
          <InputField key="phone" label="Phone" name="contact_number" Icon={FiPhone} />,
          <InputField key="location" label="Location" name="location" Icon={FiMapPin} />,
          <InputField key="eth" label="Ethereum Address" name="eth_address" Icon={FiDatabase} />
        ])}

        {renderSection('Professional Details', FiBriefcase, [
          <InputField key="title" label="Professional Title" name="professional_title" Icon={FiBriefcase} />,
          <InputField key="industry" label="Industry" name="industry" Icon={FiBriefcase} />,
          <InputField key="rate" label="Hourly Rate" name="hourly_rate_value" type="number" Icon={FiDollarSign} />,
          <InputField key="exp-level" label="Experience Level" name="experience_level" type="select" Icon={FiCheckCircle}>
            <option value="">Select Level</option>
            <option value="entry">Entry Level</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </InputField>,
          <InputField key="years" label="Years of Experience" name="years_of_experience" type="number" Icon={FiClock} />,
          <InputField key="completed" label="Completed Projects" name="completed_projects" type="number" Icon={FiCheckCircle} />,
          <InputField key="rating" label="Client Rating (0-5)" name="client_rating" type="number" step="0.01" Icon={FiStar} />
        ])}

        {renderSection('Skills & Expertise', FiTool, [
          <TextAreaField key="core" label="Core Competencies" name="core_competencies" Icon={FiTool} maxLength={500} />,
          <TextAreaField key="tech" label="Technical Skills" name="technical_skills" Icon={FiTool} maxLength={500} />,
          <TextAreaField key="soft" label="Soft Skills" name="soft_skills" Icon={FiUser} maxLength={500} />,
          <TextAreaField key="industry" label="Industry Skills" name="industry_specific_skills" Icon={FiBriefcase} maxLength={500} />,
          <TextAreaField key="special" label="Specializations" name="specializations" Icon={FiAnchor} maxLength={500} />
        ])}

        {renderSection('Work Experience', FiBriefcase, [
          <TextAreaField key="work" label="Work Experience" name="work_experience" rows={5} Icon={FiBriefcase} maxLength={3000} />,
          <TextAreaField key="portfolio" label="Portfolio Projects" name="portfolio_projects" rows={4} Icon={FiFileText} maxLength={3000} />,
          <TextAreaField key="affiliations" label="Professional Affiliations" name="professional_affiliations" Icon={FiUsers} maxLength={500} />
        ])}

        {renderSection('Education & Certifications', FiBookOpen, [
          <TextAreaField key="edu" label="Education" name="education" Icon={FiBookOpen} maxLength={2000} />,
          <TextAreaField key="certs" label="Certifications" name="certifications" Icon={FiAward} maxLength={1000} />,
          <TextAreaField key="awards" label="Awards" name="awards" Icon={FiAward} maxLength={500} />
        ])}

        {renderSection('Services & Availability', FiClock, [
          <TextAreaField key="services" label="Services Offered" name="services_offered" Icon={FiTool} maxLength={500} />,
          <TextAreaField key="rates" label="Rates & Packages" name="rates_packages" Icon={FiDollarSign} maxLength={250} />,
          <TextAreaField key="availability" label="Availability" name="availability" Icon={FiClock} maxLength={250} />,
          <TextAreaField key="metrics" label="Client Success Metrics" name="client_success_metrics" Icon={FiCheckCircle} maxLength={250} />
        ])}

        {renderSection('Social & Web Presence', FiGlobe, [
          <InputField key="web" label="Website" name="website" type="url" Icon={FiGlobe} />,
          <InputField key="li" label="LinkedIn" name="linkedin_url" type="url" Icon={FiLinkedin} />,
          <InputField key="gh" label="GitHub" name="github_url" type="url" Icon={FiGithub} />,
          <InputField key="tw" label="Twitter" name="twitter_url" type="url" Icon={FiTwitter} />
        ])}

        {renderSection('Additional Information', FiHeart, [
          <TextAreaField key="languages" label="Languages" name="languages" Icon={FiGlobe} maxLength={250} />,
          <TextAreaField key="interests" label="Interests" name="interests" Icon={FiHeart} maxLength={250} />,
          <TextAreaField key="references" label="References" name="references" Icon={FiUsers} maxLength={500} />,
          <InputField key="resume" label="Resume/CV" name="resume_file" type="file" accept=".pdf,.doc,.docx" Icon={FiFileText} />
        ])}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center mt-8"
        >
          <FiSave className="mr-2" />
          {isSubmitting ? 'Updating...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default FreelancerUpdateProfile;