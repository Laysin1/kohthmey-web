import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Send } from "lucide-react";

type RichTextChild = { text: string; bold?: boolean };
type RichTextBlock = { type: string; children: RichTextChild[] };

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  key_responsibilities: RichTextBlock[];
  job_requirements: RichTextBlock[];
  descriptions: RichTextBlock[] | null;
};

const benefits = [
  { title: "NSSF", description: "", icon: "/benefits/benefit-1.png" },
  { title: "Life Insurance", description: "", icon: "/benefits/benefit-2.png" },
  { title: "In-House Health Care", description: "", icon: "/benefits/benefit-3.png" },
  { title: "Internal & Outsource Training", description: "", icon: "/benefits/benefit-4.png" },
  { title: "Monthly Attendance Bonus", description: "", icon: "/benefits/benefit-5.png" },
  { title: "Monthly KPI Bonus", description: "", icon: "/benefits/benefit-6.png" },
];

const Careers = () => {
  const [jobListings, setJobListings] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState("");

  const renderRichText = (richText: RichTextBlock[]) =>
    richText.map((block, i) => (
      <p key={i} className="mb-2">
        {block.children.map((child, j) =>
          child.bold ? <strong key={j}>{child.text}</strong> : <span key={j}>{child.text}</span>
        )}
      </p>
    ));

  useEffect(() => {
    fetch("https://kohthmey-strapi-api.onrender.com/api/job")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          const jobs = data.data.map((job: any) => ({
            id: job.id,
            title: job.title,
            department: job.department,
            location: job.location,
            key_responsibilities: job.key_responsibilities || [],
            job_requirements: job.job_requirements || [],
            descriptions: job.descriptions || null,
          }));
          setJobListings(jobs);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const files = (form.elements.namedItem("resume") as HTMLInputElement).files;

    try {
      let resumeData: { id: number }[] = [];

      // STEP 1: Upload resume file(s)
      if (files && files.length > 0) {
        const uploadFormData = new FormData();
        for (let i = 0; i < files.length; i++) {
          uploadFormData.append("files", files[i]);
        }

        const uploadRes = await fetch(
          "https://kohthmey-strapi-api.onrender.com/api/upload",
          { method: "POST", body: uploadFormData }
        );

        if (!uploadRes.ok) {
          const errText = await uploadRes.text();
          throw new Error("File upload failed: " + errText);
        }

        const uploadedFiles = await uploadRes.json();
        // Strapi returns array of file objects
        resumeData = uploadedFiles.map((file: any) => ({ id: file.id }));
      }

      // STEP 2: Create application entry
      const applicationData = {
        data: {
          name,
          email,
          message,
          resume: resumeData, // attach uploaded file IDs
        },
      };

      const response = await fetch(
        "https://kohthmey-strapi-api.onrender.com/api/applications",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(applicationData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Submission error:", result);
        alert("Error submitting application. Check console for details.");
        return;
      }

      alert("Application submitted successfully!");
      form.reset();
      setSelectedJob("");

    } catch (err: any) {
      console.error("Submission error:", err);
      alert("An unexpected error occurred: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Careers</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            At Koh Thmey Technology, we believe everyone can do great things. Opportunities don’t happen, you create them…!
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes Koh Thmey Technology an exceptional workplace.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <img src={benefit.icon} alt={benefit.title} className="mx-auto mb-4 h-16 w-16 object-contain" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our current job opportunities and apply today.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {loading ? (
            <p className="text-center text-gray-600">Loading jobs...</p>
          ) : jobListings.length > 0 ? (
            jobListings.map((job) => (
              <Card
                key={job.id}
                className="p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between bg-[#E8EBEF]"
              >
                <div>
                  {job.descriptions && renderRichText(job.descriptions)}
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {job.department} | {job.location}
                  </p>
                  {job.job_requirements && renderRichText(job.job_requirements)}
                  {job.key_responsibilities && renderRichText(job.key_responsibilities)}
                </div>
                <Button
                  className="mt-4 bg-[#FACC15] text-black hover:bg-[#EAB308] font-medium"
                  onClick={() => {
                    setSelectedJob(job.title);
                    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Apply
                </Button>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-600">No jobs found.</p>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Apply Now</h2>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-6 bg-white p-8 shadow-md rounded-md"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Resume (PDF) *</Label>
              <Input id="resume" name="resume" type="file" multiple required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-medium flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" /> Submit Application
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
