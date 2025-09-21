const conditions = [
  {
    keywords: ["fever", "cough", "yellow sputum"],
    diagnosis: "Bacterial Respiratory Infection",
    medicine: "Amoxicillin",
    dosage: "500 mg",
    frequency: "Three times daily",
    duration: "7 days",
    warning: "Avoid if allergic to penicillin."
  },
  {
    keywords: ["fever", "sore throat", "white patches"],
    diagnosis: "Streptococcal Pharyngitis",
    medicine: "Amoxicillin",
    dosage: "500 mg",
    frequency: "Every 12 hours",
    duration: "10 days",
    warning: "Confirm no penicillin allergy."
  },
  {
    keywords: ["headache", "sensitivity to light", "stiff neck"],
    diagnosis: "Possible Meningitis",
    medicine: "Seek immediate hospital care",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Emergency condition. Do not self-treat."
  },
  {
    keywords: ["fever", "body aches", "runny nose"],
    diagnosis: "Seasonal Influenza",
    medicine: "Oseltamivir",
    dosage: "75 mg",
    frequency: "Twice daily",
    duration: "5 days",
    warning: "Start within 48 hours of symptom onset."
  },
  {
    keywords: ["frequent urination", "excessive thirst", "weight loss"],
    diagnosis: "Possible Diabetes Mellitus (Type 2)",
    medicine: "Metformin",
    dosage: "500 mg",
    frequency: "Twice daily",
    duration: "Ongoing (long-term)",
    warning: "Monitor blood glucose regularly. Contraindicated in severe kidney disease."
  },
  {
    keywords: ["chest pain", "shortness of breath", "sweating"],
    diagnosis: "Possible Angina / Heart Attack",
    medicine: "Seek emergency care immediately",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Life-threatening. Call emergency services now."
  }
];

function analyze() {
  const input = document.getElementById("symptoms").value.toLowerCase();
  let result = "<p>No exact match found. Please consult a doctor.</p>";

  for (let cond of conditions) {
    if (cond.keywords.every(k => input.includes(k))) {
      result = `
        <div class="result">
          <h3>Diagnosis: ${cond.diagnosis}</h3>
          <p><strong>Medicine:</strong> ${cond.medicine}</p>
          <p><strong>Dosage:</strong> ${cond.dosage}</p>
          <p><strong>Frequency:</strong> ${cond.frequency}</p>
          <p><strong>Duration:</strong> ${cond.duration}</p>
          <p class="warning">⚠️ ${cond.warning}</p>
        </div>
      `;
      break;
    }
  }

  document.getElementById("output").innerHTML = result;
}
