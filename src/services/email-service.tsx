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

  // Send email using EmailJS
  emailjs
    .send(
      'service_9z3alvc',
      'template_6o572ka', 
      formData, 
      '_-05B-TRz3DXvPM-K' 
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
