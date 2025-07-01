import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isIntersecting } = useIntersectionObserver();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-bronze/15 via-transparent to-champagne/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,134,88,0.2),transparent_80%)]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-oxford-blue/50 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isIntersecting ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 tracking-tight">Let's Build Your Model</h2>
          <p className="text-xl text-champagne font-body">Ready to get started? Book a free intro call.</p>
        </div>

        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 p-12 shadow-2xl border border-champagne/30 backdrop-blur-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <Label htmlFor="fullName" className="block text-sm font-medium text-white mb-3 uppercase tracking-wide">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                {...form.register("fullName")}
                className="w-full px-4 py-4 border border-white/20 bg-slate-700/50 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-bronze focus:border-bronze text-lg"
                disabled={isSubmitting}
              />
              {form.formState.errors.fullName && (
                <p className="text-red-500 text-sm mt-2">{form.formState.errors.fullName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="company" className="block text-sm font-medium text-white mb-3 uppercase tracking-wide">
                Company
              </Label>
              <Input
                id="company"
                type="text"
                {...form.register("company")}
                className="w-full px-4 py-4 border border-white/20 bg-slate-700/50 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-bronze focus:border-bronze text-lg"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-white mb-3 uppercase tracking-wide">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="w-full px-4 py-4 border border-white/20 bg-slate-700/50 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-bronze focus:border-bronze text-lg"
                disabled={isSubmitting}
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-2">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium text-white mb-3 uppercase tracking-wide">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                className="w-full px-4 py-4 border border-white/20 bg-slate-700/50 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-bronze focus:border-bronze text-lg"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="mb-8">
            <Label htmlFor="message" className="block text-sm font-medium text-white mb-3 uppercase tracking-wide">
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              {...form.register("message")}
              className="w-full px-4 py-4 border border-white/20 bg-slate-700/50 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-bronze focus:border-bronze text-lg"
              placeholder="Describe your financial modeling requirements..."
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-oxford-blue text-white py-6 px-12 text-lg font-medium hover:bg-bronze transition-all duration-500 disabled:opacity-50 uppercase tracking-wide shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
          >
            {isSubmitting ? "Sending..." : "Book a Free Intro Call"}
          </Button>

          <p className="text-sm text-champagne text-center mt-6 font-body">
            Confidential consultation. No marketing communications.
          </p>
        </form>
      </div>
    </section>
  );
}
