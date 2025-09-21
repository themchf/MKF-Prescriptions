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
   },
   {
      keywords: ["fever", "cough", "sputum", "yellow"],
      condition: "Bacterial Chest Infection",
      medicine: "Amoxicillin 500 mg",
      dosage: "Take 1 capsule three times daily for 7 days.",
      warning: "Avoid if allergic to penicillin. Seek help if worsening."
    },
    {
      keywords: ["runny nose", "sneezing", "sore throat", "cold"],
      condition: "Common Cold",
      medicine: "Paracetamol 500 mg",
      dosage: "Take 1–2 tablets every 6–8 hours as needed.",
      warning: "Do not exceed 4g per day."
    },
    {
      keywords: ["headache", "sensitivity to light", "migraine"],
      condition: "Migraine",
      medicine: "Ibuprofen 400 mg",
      dosage: "Take 1 tablet every 8 hours with food.",
      warning: "Avoid if you have stomach ulcers or kidney issues."
    },
    {
      keywords: ["stomach pain", "diarrhea", "vomiting", "food"],
      condition: "Food Poisoning",
      medicine: "ORS (Oral Rehydration Solution)",
      dosage: "Sip frequently until hydrated.",
      warning: "Seek help if severe dehydration or blood in stool."
    },
    {
      keywords: ["burning urine", "painful urination", "urinary"],
      condition: "Urinary Tract Infection (UTI)",
      medicine: "Nitrofurantoin 100 mg",
      dosage: "Take 1 capsule twice daily for 5 days.",
      warning: "Consult doctor if symptoms persist >3 days."
    },
    {
      keywords: ["allergy", "rash", "itching", "sneezing"],
      condition: "Allergic Reaction",
      medicine: "Cetirizine 10 mg",
      dosage: "Take 1 tablet once daily.",
      warning: "Seek help if swelling of lips or difficulty breathing."
    },
    {
      keywords: ["heartburn", "acid", "reflux", "indigestion"],
      condition: "Acid Reflux (GERD)",
      medicine: "Omeprazole 20 mg",
      dosage: "Take 1 capsule once daily before food.",
      warning: "Avoid long-term use without doctor’s advice."
    }
  ];
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

