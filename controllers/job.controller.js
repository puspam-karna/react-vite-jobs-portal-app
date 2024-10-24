import Job from "../models/job.model.js";

export const postJobs = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(200).json({ message: "job saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
