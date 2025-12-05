import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.error"),
        description: t("contact.required"),
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);
    
    toast({
      title: t("contact.success"),
      description: t("contact.successDesc"),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t("contact.name")} *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t("contact.namePlaceholder")}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t("contact.email")} *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t("contact.emailPlaceholder")}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{t("contact.phone")}</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t("contact.phonePlaceholder")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{t("contact.message")} *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t("contact.messagePlaceholder")}
            rows={5}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          {t("contact.send")}
        </Button>
      </form>
    </div>
  );
};
