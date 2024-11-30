import { ContactOption } from "@/props";

// icons
import { HiOutlineMail } from "react-icons/hi";
import { PiPhoneCallBold } from "react-icons/pi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Social = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-5">
      <ContactOption
        Icon={HiOutlineMail}
        title="Email"
        detail="bouhraraad@cy-tech.fr"
        link="mailto:bouhraraad@cy-tech.fr"
      />

      <ContactOption
        Icon={PiPhoneCallBold}
        title="Phone"
        detail="+33 62807****"
        link="tel:+3362807****"
      />

      {/* <ContactOption
        Icon={AiOutlineWhatsApp}
        title="WhatsApp"
        detail="+91 9918191369"
        link="https://wa.me/+919918191369"
      /> */}
    </section>
  );
};

export default Social;
