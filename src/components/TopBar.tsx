import { Phone, Mail, MapPin } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6">
        <a href="tel:+351912345678" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">+351 912 345 678</span>
        </a>
        <a href="mailto:general@preciouscontrol-services.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">general@preciouscontrol-services.com</span>
        </a>
      </div>
    </div>
  );
};
