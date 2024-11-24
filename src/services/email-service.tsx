// handleSubmit.tsx
import emailjs from 'emailjs-com';

export const handleSubmit = async (
  e: React.FormEvent,
  formData: { name: string; email: string; message: string },
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>
) => {
  e.preventDefault();

  // Set submitting state to true to disable form while sending
  setIsSubmitting(true);
  console.log(import.meta.env.VITE_SERVICE_ID);
  console.log(import.meta.env.VITE_TEMPLATE_ID);
  console.log(import.meta.env.VITE_PUBLIC_KEY);

  // Send email using EmailJS
  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID || '',
      import.meta.env.VITE_TEMPLATE_ID || '', 
      formData, 
      import.meta.env.VITE_PUBLIC_KEY || ''
    )
    .then(
      (result) => {
        console.log(result.text);
        // Clear the form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.log(error.text);
      }
    )
    .finally(() => {
      setIsSubmitting(false); // Reset the submitting state
    });
};
