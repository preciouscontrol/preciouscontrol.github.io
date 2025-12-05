import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, FileText } from "lucide-react";

const QuoteRequestPage = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    companyName: "",
    nif: "",
    contactName: "",
    email: "",
    phone: "",
    preferredContact: "",
    serviceType: "",
    projectLocation: "",
    expectedStartDate: "",
    projectDescription: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone || !formData.serviceType) {
      toast({
        title: t("contact.error"),
        description: t("contact.required"),
        variant: "destructive",
      });
      return;
    }

    if (!formData.acceptTerms) {
      toast({
        title: t("contact.error"),
        description: t("quote.acceptTermsRequired"),
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log("Quote request submitted:", formData);
    
    toast({
      title: t("contact.success"),
      description: t("quote.successDesc"),
    });

    // Reset form
    setFormData({
      companyName: "",
      nif: "",
      contactName: "",
      email: "",
      phone: "",
      preferredContact: "",
      serviceType: "",
      projectLocation: "",
      expectedStartDate: "",
      projectDescription: "",
      acceptTerms: false,
    });
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>{t("quote.title")} | Preciouscontrol</title>
        <meta name="description" content={t("quote.pageDescription")} />
        <meta name="keywords" content="quote request, project estimate, scaffolding pricing, free quote" />
        <meta property="og:title" content={t("quote.title") + " | Preciouscontrol"} />
        <meta property="og:description" content={t("quote.pageDescription")} />
        <link rel="canonical" href="https://preciouscontrol.github.io/quote" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t("quote.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t("quote.subtitle")}
          </p>
        </div>
      </section>

      {/* Breadcrumb
      <div className="bg-muted py-3 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">{t("nav.home")}</a>
            <span>/</span>
            <span className="text-primary">{t("quote.title")}</span>
          </div>
        </div>
      </div>
      */}

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg border border-border p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-secondary" />
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  {t("quote.formTitle")}
                </h2>
                <p className="text-muted-foreground">{t("quote.formSubtitle")}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {t("quote.companyInfo")}
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">{t("quote.companyName")} *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleChange("companyName", e.target.value)}
                      placeholder={t("quote.companyNamePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nif">{t("quote.nif")}</Label>
                    <Input
                      id="nif"
                      value={formData.nif}
                      onChange={(e) => handleChange("nif", e.target.value)}
                      placeholder={t("quote.nifPlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">{t("quote.contactName")} *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleChange("contactName", e.target.value)}
                      placeholder={t("quote.contactNamePlaceholder")}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {t("quote.contactInfo")}
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder={t("contact.emailPlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.phone")} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder={t("contact.phonePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredContact">{t("quote.preferredContact")}</Label>
                    <Select value={formData.preferredContact} onValueChange={(value) => handleChange("preferredContact", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t("quote.selectOption")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">{t("contact.email")}</SelectItem>
                        <SelectItem value="phone">{t("contact.phone")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {t("quote.projectInfo")}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">{t("quote.serviceType")} *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t("quote.selectService")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scaffolding">{t("services.scaffolding.title")}</SelectItem>
                        <SelectItem value="logistics">{t("services.logistics.title")}</SelectItem>
                        <SelectItem value="both">{t("quote.bothServices")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectLocation">{t("quote.projectLocation")}</Label>
                    <Input
                      id="projectLocation"
                      value={formData.projectLocation}
                      onChange={(e) => handleChange("projectLocation", e.target.value)}
                      placeholder={t("quote.projectLocationPlaceholder")}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="expectedStartDate">{t("quote.expectedStartDate")}</Label>
                    <Input
                      id="expectedStartDate"
                      type="date"
                      value={formData.expectedStartDate}
                      onChange={(e) => handleChange("expectedStartDate", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">{t("quote.projectDescription")}</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleChange("projectDescription", e.target.value)}
                    placeholder={t("quote.projectDescriptionPlaceholder")}
                    rows={5}
                  />
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleChange("acceptTerms", checked as boolean)}
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    {t("quote.acceptTerms")}
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  <Send className="mr-2 h-5 w-5" />
                  {t("quote.submit")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteRequestPage;
