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
    },
    {
    keywords: ["joint pain", "swelling", "morning stiffness"],
    diagnosis: "Rheumatoid Arthritis",
    medicine: "Methotrexate",
    dosage: "7.5–15 mg",
    frequency: "Once weekly",
    duration: "Long-term (monitor regularly)",
    warning: "Avoid in pregnancy, monitor liver function."
  },
  {
    keywords: ["night cough", "wheezing", "shortness of breath"],
    diagnosis: "Asthma",
    medicine: "Salbutamol Inhaler",
    dosage: "100–200 mcg",
    frequency: "As needed for acute symptoms",
    duration: "Ongoing",
    warning: "See doctor if frequent attacks."
  },
  {
    keywords: ["severe thirst", "frequent urination", "blurred vision"],
    diagnosis: "Uncontrolled Diabetes Mellitus",
    medicine: "Insulin (type varies)",
    dosage: "Individualized",
    frequency: "Varies",
    duration: "Ongoing",
    warning: "Requires blood glucose monitoring and physician supervision."
  },
  {
    keywords: ["persistent cough", "blood in sputum", "weight loss"],
    diagnosis: "Tuberculosis",
    medicine: "Rifampicin + Isoniazid + Pyrazinamide + Ethambutol",
    dosage: "Standard 4-drug regimen",
    frequency: "Daily",
    duration: "6 months",
    warning: "Strict adherence required. Physician supervision essential."
  },
  {
    keywords: ["burning chest pain", "worse after meals", "lying down"],
    diagnosis: "Gastroesophageal Reflux Disease (GERD)",
    medicine: "Omeprazole",
    dosage: "20 mg",
    frequency: "Once daily before food",
    duration: "4–8 weeks",
    warning: "Avoid long-term use without doctor’s advice."
  },
  {
    keywords: ["bloody diarrhea", "abdominal pain", "recent travel"],
    diagnosis: "Dysentery (Shigella infection)",
    medicine: "Ciprofloxacin",
    dosage: "500 mg",
    frequency: "Twice daily",
    duration: "3 days",
    warning: "Avoid in children and pregnancy."
  },
  {
    keywords: ["weight loss", "night sweats", "swollen lymph nodes"],
    diagnosis: "Possible Lymphoma",
    medicine: "Requires oncology referral",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Specialist evaluation needed. Do not self-medicate."
  },
  {
    keywords: ["fever", "rash", "joint pain", "mosquito bite"],
    diagnosis: "Dengue Fever",
    medicine: "Paracetamol",
    dosage: "500 mg",
    frequency: "Every 6 hours as needed",
    duration: "Until fever resolves",
    warning: "Avoid aspirin/ibuprofen due to bleeding risk."
  },
  {
    keywords: ["fatigue", "pale skin", "shortness of breath on exertion"],
    diagnosis: "Iron Deficiency Anemia",
    medicine: "Ferrous Sulfate",
    dosage: "325 mg (65 mg elemental iron)",
    frequency: "Once daily",
    duration: "3–6 months",
    warning: "Take with vitamin C for absorption; avoid with tea/coffee."
  },
  {
    keywords: ["severe headache", "nausea", "blurred vision", "high blood pressure"],
    diagnosis: "Hypertensive Crisis",
    medicine: "Seek emergency care",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Life-threatening. Immediate hospital treatment required."
  },
    {
    keywords: ["itchy scalp", "white flakes", "scalp irritation"],
    diagnosis: "Dandruff (Seborrheic Dermatitis)",
    medicine: "Ketoconazole Shampoo 2%",
    dosage: "Apply to scalp",
    frequency: "Twice weekly",
    duration: "4 weeks",
    warning: "Avoid eye contact."
  },
  {
    keywords: ["bloody stool", "anal pain", "constipation"],
    diagnosis: "Hemorrhoids",
    medicine: "Hydrocortisone suppository",
    dosage: "25 mg",
    frequency: "Twice daily",
    duration: "Up to 7 days",
    warning: "Avoid long-term steroid use."
  },
  {
    keywords: ["painful urination", "fever", "back pain"],
    diagnosis: "Pyelonephritis (Kidney Infection)",
    medicine: "Ciprofloxacin",
    dosage: "500 mg",
    frequency: "Twice daily",
    duration: "7–14 days",
    warning: "Seek urgent care if worsening."
  },
  {
    keywords: ["rash", "fever", "red eyes", "cough"],
    diagnosis: "Measles",
    medicine: "Supportive (fluids, paracetamol)",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Highly contagious. Isolate patient."
  },
  {
    keywords: ["leg swelling", "shortness of breath", "chest pain"],
    diagnosis: "Pulmonary Embolism",
    medicine: "Seek emergency hospital care",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Life-threatening. Requires anticoagulants in hospital."
  },
  {
    keywords: ["sudden weakness", "slurred speech", "facial droop"],
    diagnosis: "Stroke",
    medicine: "Emergency thrombolysis (hospital only)",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Immediate hospital care required."
  },
  {
    keywords: ["abdominal pain", "nausea", "back pain", "alcohol use"],
    diagnosis: "Acute Pancreatitis",
    medicine: "Hospital IV fluids + pain control",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Do not self-treat. Emergency admission required."
  },
  {
    keywords: ["yellow skin", "yellow eyes", "dark urine"],
    diagnosis: "Hepatitis",
    medicine: "Supportive care",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Needs liver function monitoring and medical evaluation."
  },
  {
    keywords: ["muscle pain", "dark urine", "extreme exercise"],
    diagnosis: "Rhabdomyolysis",
    medicine: "Hospital IV fluids",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Medical emergency. Can cause kidney failure."
  },
  {
    keywords: ["fever", "headache", "stiff neck", "purple rash"],
    diagnosis: "Meningococcal Septicemia",
    medicine: "Immediate hospital IV antibiotics",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Life-threatening. Urgent hospital care required."
  },
  {
    keywords: ["itchy skin", "sneezing", "red eyes"],
    diagnosis: "Allergic Rhinitis (Hay Fever)",
    medicine: "Loratadine",
    dosage: "10 mg",
    frequency: "Once daily",
    duration: "As needed",
    warning: "Avoid allergens if possible."
  },
  {
    keywords: ["dry cough", "shortness of breath", "smoker"],
    diagnosis: "Chronic Obstructive Pulmonary Disease (COPD)",
    medicine: "Tiotropium Inhaler",
    dosage: "18 mcg",
    frequency: "Once daily",
    duration: "Long-term",
    warning: "Smoking cessation is essential."
  },
  {
    keywords: ["frequent urination", "pelvic pain", "urgency"],
    diagnosis: "Prostatitis",
    medicine: "Levofloxacin",
    dosage: "500 mg",
    frequency: "Once daily",
    duration: "4 weeks",
    warning: "Consult urologist for persistent symptoms."
  },
  {
    keywords: ["sudden chest pain", "rapid heartbeat", "fainting"],
    diagnosis: "Arrhythmia",
    medicine: "Hospital evaluation needed",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Life-threatening if untreated."
  },
  {
    keywords: ["bone pain", "fragile bones", "elderly"],
    diagnosis: "Osteoporosis",
    medicine: "Alendronate",
    dosage: "70 mg",
    frequency: "Once weekly",
    duration: "Long-term",
    warning: "Take with full glass of water, remain upright for 30 mins."
  },
  {
    keywords: ["confusion", "tremor", "alcohol withdrawal"],
    diagnosis: "Delirium Tremens",
    medicine: "Hospital benzodiazepine treatment",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "Life-threatening. Requires inpatient care."
  },
  {
    keywords: ["bloody vomit", "abdominal swelling", "liver disease"],
    diagnosis: "Esophageal Varices",
    medicine: "Hospital urgent treatment",
    dosage: "-",
    frequency: "-",
    duration: "-",
    warning: "High risk of death. Emergency care required."
  },
  {
    keywords: ["leg pain", "swelling", "warmth", "travel history"],
    diagnosis: "Deep Vein Thrombosis (DVT)",
    medicine: "Enoxaparin injection",
    dosage: "1 mg/kg",
    frequency: "Every 12 hours",
    duration: "At least 5 days",
    warning: "Requires follow-up for anticoagulation therapy."
  },
  {
    keywords: ["confusion", "memory loss", "elderly"],
    diagnosis: "Alzheimer’s Disease",
    medicine: "Donepezil",
    dosage: "5 mg",
    frequency: "Once daily",
    duration: "Long-term",
    warning: "Monitor side effects. Supportive care required."
  }
];

function analyze() {
  const input = document.getElementById("symptoms").value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim();

  let result = "<p>No exact match found. Please consult a doctor.</p>";

  for (let cond of conditions) {
    const matches = cond.keywords.filter(k => {
      const pattern = new RegExp(`\\b${k.toLowerCase()}\\b`);
      return pattern.test(input);
    });

    if (matches.length === cond.keywords.length) {  // all keywords matched
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






