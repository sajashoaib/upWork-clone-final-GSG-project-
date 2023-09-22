import React, { useState, useEffect } from "react";
import Typography from "@/components/atoms/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
const SkillsDialog = ({ initialSkills, onSave }) => {
  const [skills, setSkills] = useState(initialSkills || "");
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    if (initialSkills) {
      setSkills(initialSkills);
    }
  }, [initialSkills]);

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills((prevSkills) => {
        const updatedSkills = prevSkills
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill !== newSkill)
          .concat(newSkill)
          .join(", ");

        return updatedSkills;
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setSkills((prevSkills) => {
      const updatedSkills = prevSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter((_, index) => index !== indexToRemove)
        .join(", ");

      return updatedSkills;
    });
  };

  const handleSaveSkills = () => {
    onSave(skills);
  };

  return (
    <div>
      <Typography>Skills</Typography>
      <div>
        <input
          type="text"
          placeholder="Add Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <Button onClick={handleAddSkill}>Add</Button>
      </div>
      <div>
        {skills.split(",").map((skill, index) => (
          <span key={index}>
            <Chip
              label={skill.trim()}
              onDelete={() => handleRemoveSkill(index)}
              color="primary"
              style={{ margin: "5px" }}
            />
          </span>
        ))}
      </div>
      <Button onClick={handleSaveSkills}>Save</Button>
    </div>
  );
};

export default SkillsDialog;
