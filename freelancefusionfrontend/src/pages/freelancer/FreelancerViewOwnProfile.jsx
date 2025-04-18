import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiMail, FiPhone, FiMapPin, FiGlobe, FiUser, FiCalendar,
  FiCheckCircle, FiBriefcase, FiBookOpen, FiAward, FiTool,
  FiClipboard, FiLink, FiDollarSign, FiClock
} from "react-icons/fi";
import EmployerViewOwnProfileService from "../../services/EmployerService/EmployerViewOwnProfileService";

const DEFAULT_BANNER = "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";


const SectionHeader = ({ children }) => (
  <h2 className="text-xl font-semibold text-black mb-4 border-b border-black pb-2">
    {children}
  </h2>
);

const Field = ({ icon: Icon, label, value }) => (
  value && (
    <div className="flex items-start space-x-4 py-3 border-b border-gray-200 last:border-0">
      <Icon className="h-5 w-5 text-black mt-1 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-sm text-gray-600 font-medium">{label}</p>
        <p className="text-black leading-snug">{value}</p>
      </div>
    </div>
  )
);

export default function FreelancerViewOwnProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    EmployerViewOwnProfileService.EmployerViewOwnProfile()
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Error loading profile");
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-pulse text-gray-600">Loading profile...</div>
    </div>
  );

  if (error) return (
    <div className="p-8 text-center text-red-600">
      <p>{error}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto my-8 bg-white rounded-lg border border-black overflow-hidden">
      {/* Banner Section */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={profile.banner_image || DEFAULT_BANNER}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-16 left-8 flex items-end">
          <img
            src={profile.profile_picture}
            alt="Avatar"
            className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <div className="ml-6 mb-2">
            <h1 className="text-3xl font-bold text-black">{profile.full_name}</h1>
            {profile.professional_title && (
              <p className="text-lg text-gray-600">{profile.professional_title}</p>
            )}
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="flex justify-end px-8 py-4 border-b border-black">
        <Link
          to="/freelancer/update-profile"
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center"
        >
          Edit Profile
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-8 py-6 space-y-8">
        {/* Contact Information */}
        <section>
          <SectionHeader>Contact Information</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field icon={FiMail} label="Email" value={profile.email} />
            <Field icon={FiPhone} label="Phone" value={profile.contact_number} />
            <Field icon={FiMapPin} label="Location" value={profile.location} />
            <Field icon={FiGlobe} label="Website" value={
              profile.website && <a href={profile.website} className="text-black underline">{profile.website}</a>
            } />
          </div>
        </section>

        {/* Professional Summary */}
        <section>
          <SectionHeader>Professional Overview</SectionHeader>
          <div className="space-y-4">
            <Field icon={FiBriefcase} label="Summary" value={profile.professional_summary} />
            <Field icon={FiClipboard} label="Key Achievements" value={profile.key_achievements} />
            <Field icon={FiAward} label="Certifications" value={profile.certifications} />
          </div>
        </section>

        {/* Skills & Expertise */}
        <section>
          <SectionHeader>Skills & Expertise</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field icon={FiTool} label="Technical Skills" value={profile.technical_skills} />
            <Field icon={FiUser} label="Soft Skills" value={profile.soft_skills} />
            <Field icon={FiClipboard} label="Industry Expertise" value={profile.industry_specific_skills} />
            <Field icon={FiCheckCircle} label="Specializations" value={profile.specializations} />
          </div>
        </section>

        {/* Career Details */}
        <section>
          <SectionHeader>Career Details</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field icon={FiBriefcase} label="Work Experience" value={profile.work_experience} />
            <Field icon={FiBookOpen} label="Education" value={profile.education} />
            <Field icon={FiClock} label="Availability" value={profile.availability} />
            <Field icon={FiDollarSign} label="Hourly Rate" value={`$${profile.hourly_rate_value}`} />
          </div>
        </section>

        {/* Social Links */}
        <section>
          <SectionHeader>Social Connections</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field icon={FiLink} label="LinkedIn" value={
              profile.linkedin_url && <a href={profile.linkedin_url} className="text-black underline">{profile.linkedin_url}</a>
            } />
            <Field icon={FiLink} label="GitHub" value={
              profile.github_url && <a href={profile.github_url} className="text-black underline">{profile.github_url}</a>
            } />
          </div>
        </section>
      </div>
    </div>
  );
}