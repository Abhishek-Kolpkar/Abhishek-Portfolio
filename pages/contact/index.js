import { contactDetails } from "@/data";

const Contact = () => {
  const { email, phone } = contactDetails;

  return (
    <main className="container mx-auto max-width pt-8">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl dark:text-light-heading font-semibold md:font-bold text-slate-700">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-5xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`} title={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">
        or
      </span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-5xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`} title={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
};

export default Contact;
