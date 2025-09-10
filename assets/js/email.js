// ===== EmailJS IDs (yours) =====
const EMAILJS_PUBLIC_KEY     = "ytWsQJdyOvJyNqUqq";
const EMAILJS_SERVICE_ID     = "service_p807od6";
const TEMPLATE_SCHEDULE_ID   = "template_oe7f4tk";   // dedicated schedule template
const TEMPLATE_UNIVERSAL_ID  = "template_oswliqt";   // used for Contact + Intake

// ===== Boot =====
window.addEventListener('DOMContentLoaded', () => {
  if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
  bindSchedule('scheduleForm');              // Sends with TEMPLATE_SCHEDULE_ID
  bindUniversal('contactForm', 'Contact');   // Sends with TEMPLATE_UNIVERSAL_ID
  bindUniversal('intakeForm',  'Intake');    // Sends with TEMPLATE_UNIVERSAL_ID
});

// ===== Schedule: dedicated template =====
function bindSchedule(id){
  const f = document.getElementById(id);
  if(!f) return;

  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = collect(f); // builds { name, email, phone, appointment_date, ... }
    // Extra fields for template convenience:
    data.to_email  = data.email || "";
    data.reply_to  = data.email || "";
    data.from_name = "Senior Spark Adventures";
    data.sent_from = window.location.href;

    try{
      if (window.emailjs && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_SCHEDULE_ID, data);
      }
    } catch(err){
      console.warn('EmailJS error (schedule)', err);
    }
    window.location.href = 'schedule-success.html';
  });
}

// ===== Universal: used for Contact + Intake on free tier =====
function bindUniversal(id, typeLabel){
  const f = document.getElementById(id);
  if(!f) return;

  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const obj = collect(f);

    // Build subject/greeting and a neat summary block per form type
    const { subject, greeting, summary } = buildUniversalPayload(id, typeLabel, obj);

    const payload = {
      ...obj, // includes all form fields: name, email, phone, etc.
      subject,
      greeting,
      summary,
      to_email:  obj.email || "", // so the visitor gets a copy
      reply_to:  obj.email || "",
      from_name: "Senior Spark Adventures",
      sent_from: window.location.href
    };

    try{
      if (window.emailjs && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_UNIVERSAL_ID, payload);
      }
    } catch(err){
      console.warn('EmailJS error (universal)', err);
    }
    window.location.href = (id === 'intakeForm') ? 'intake-success.html' : 'contact-success.html';
  });
}

// ===== Helpers =====
function collect(form){
  const fd = new FormData(form);
  const obj = {};
  fd.forEach((v,k) => {
    if (k === 'services') (obj.services ||= []).push(v);
    else obj[k] = v;
  });
  if (Array.isArray(obj.services)) obj.services = obj.services.join(', ');
  return obj;
}

function buildUniversalPayload(formId, typeLabel, obj){
  const labels = {
    appointment_date: 'Date',
    appointment_time: 'Time',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    services: 'Services',
    message: 'Message',
    transport: 'Preferred transport',
    hobbies: 'Hobbies / interests',
    mobility: 'Mobility',
    health: 'Health notes',
    contact_method: 'Preferred contact',
    additional: 'Additional'
  };

  let fieldsOrder;
  if (formId === 'intakeForm') {
    fieldsOrder = ['name','email','services','transport','hobbies','mobility','health','contact_method','additional'];
  } else { // contactForm
    fieldsOrder = ['name','email','phone','message'];
  }

  const lines = fieldsOrder
    .filter(k => obj[k])
    .map(k => `${labels[k]}: ${obj[k]}`);

  const summary  = lines.join('\\n');
  const subject  = (formId === 'intakeForm')
      ? `Intake received from ${obj.name || ''}`
      : `New message from ${obj.name || ''}`;
  const greeting = (formId === 'intakeForm')
      ? `Thank you, ${obj.name || 'there'} — your intake has been received.`
      : `Thanks for reaching out, ${obj.name || 'there'}.`;

  return { subject, greeting, summary };
}